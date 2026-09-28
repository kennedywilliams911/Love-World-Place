import { Router } from "express";
import { createHash, randomBytes } from "node:crypto";
import { prisma } from "../lib/prisma";
import {
  hashPassword,
  isConfiguredSuperAdmin,
  verifyPassword,
  setSessionCookie,
  clearSessionCookie,
} from "../lib/auth";
import {
  loginInputSchema,
  forgotPasswordInputSchema,
  resetPasswordInputSchema,
} from "../lib/validation";
import { requireAuth } from "../middleware/requireAuth";
import { sendPasswordResetEmail } from "../lib/email";

const router = Router();

// Very small in-memory rate limiter to slow down credential stuffing.
// For a multi-instance deployment, replace with a shared store (e.g. Redis).
const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 10;
function hashResetToken(token: string) {
  return createHash("sha256")
    .update(`${process.env.AUTH_SECRET}:${token}`)
    .digest("hex");
}

router.post("/forgot-password", async (req, res) => {
  const parsed = forgotPasswordInputSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.json({
      message: "If an account exists, reset instructions have been sent.",
    });
  }

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email },
  });
  if (!user || !isConfiguredSuperAdmin(user)) {
    return res.json({
      message: "If an account exists, reset instructions have been sent.",
    });
  }

  const token = randomBytes(32).toString("hex");
  await prisma.passwordResetToken.updateMany({
    where: { userId: user.id, usedAt: null },
    data: { usedAt: new Date() },
  });
  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash: hashResetToken(token),
      expiresAt: new Date(Date.now() + 30 * 60 * 1000),
    },
  });

  try {
    await sendPasswordResetEmail(user.email, token);
  } catch (error) {
    console.error("Password reset email failed:", error);
  }

  return res.json({
    message: "If an account exists, reset instructions have been sent.",
  });
});

router.post("/reset-password", async (req, res) => {
  const parsed = resetPasswordInputSchema.safeParse(req.body);
  if (!parsed.success)
    return res
      .status(400)
      .json({ error: "Enter a valid reset token and password." });

  const resetToken = await prisma.passwordResetToken.findUnique({
    where: { tokenHash: hashResetToken(parsed.data.token) },
  });
  if (!resetToken || resetToken.usedAt || resetToken.expiresAt <= new Date()) {
    return res
      .status(400)
      .json({ error: "This password reset link is invalid or expired." });
  }

  await prisma.$transaction([
    prisma.user.update({
      where: { id: resetToken.userId },
      data: { passwordHash: await hashPassword(parsed.data.password) },
    }),
    prisma.passwordResetToken.update({
      where: { id: resetToken.id },
      data: { usedAt: new Date() },
    }),
  ]);

  return res.json({ message: "Password reset successfully." });
});

router.post("/request-otp", (_req, res) =>
  res.status(403).json({ error: "Public account registration is disabled." }),
);

async function sessionForUser(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { subscriptions: { orderBy: { updatedAt: "desc" }, take: 1 } },
  });
  if (!user || !isConfiguredSuperAdmin(user)) return null;
  const subscription = user.subscriptions[0];
  return {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: "SUPER_ADMIN",
    subscriptionStatus: subscription?.status ?? "INACTIVE",
    trialEndsAt: subscription?.trialEndsAt?.toISOString() ?? null,
  } as const;
}

router.post("/register", (_req, res) =>
  res.status(403).json({ error: "Public account registration is disabled." }),
);

function isRateLimited(key: string) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

router.post("/login", async (req, res) => {
  const ip = req.ip ?? "unknown";
  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Too many login attempts. Please try again later." });
  }

  const parsed = loginInputSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Enter a valid email and password." });
  }

  const { email, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email } });

  // Always compare against a hash (even a dummy one) to avoid timing leaks
  // that reveal whether an email address exists.
  const validPassword = user
    ? await verifyPassword(password, user.passwordHash)
    : await verifyPassword(
        password,
        "$2a$12$invalidsaltinvalidsaltinvalidsalthash",
      );

  if (!user || !validPassword || !isConfiguredSuperAdmin(user)) {
    return res.status(401).json({ error: "Incorrect email or password." });
  }

  if (user.status === "SUSPENDED") {
    return res.status(403).json({ error: "Your account is suspended." });
  }

  const session = await sessionForUser(user.id);
  if (!session)
    return res.status(500).json({ error: "Could not create a session." });
  await setSessionCookie(res, session);
  attempts.delete(ip);
  res.json({
    success: true,
    user: { name: user.name, email: user.email, role: user.role },
  });
});

router.post("/logout", (_req, res) => {
  clearSessionCookie(res);
  res.json({ success: true });
});

router.get("/me", requireAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userId },
    select: { id: true, name: true, email: true, role: true, profile: true },
  });
  if (!user) return res.status(404).json({ error: "User not found." });
  res.json({ user });
});

export default router;
