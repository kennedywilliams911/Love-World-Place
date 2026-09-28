import "dotenv/config";

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { setupBackgroundJobs } from "./lib/jobs";

import authRoutes from "./routes/auth";
import adminArticlesRoutes from "./routes/admin-articles";
import adminProfileRoutes from "./routes/admin-profile";
import adminSettingsRoutes from "./routes/admin-settings";
import adminUploadRoutes from "./routes/admin-upload";
import adminTranscribeRoutes from "./routes/admin-transcribe";

import publicRoutes from "./routes/public";
import shareRoutes from "./routes/share";
import searchRoutes from "./routes/search";
import analyticsRoutes from "./routes/analytics";
import newsletterRoutes from "./routes/newsletter";
import commentsRoutes from "./routes/comments";

import {
  adminContributionsRouter,
  publicContributionsRouter,
} from "./routes/contributions";

import seriesRoutes from "./routes/series";
import versionsRoutes from "./routes/versions";
import translationsRoutes from "./routes/translations";
import billingRoutes from "./routes/billing";

import {
  requireAuth,
  requireActiveSubscription,
} from "./middleware/requireAuth";

const app = express();

const PORT = Number(process.env.PORT) || 4000;

// -----------------------------------------------------
// CORS
// -----------------------------------------------------

const allowedOrigins = (
  process.env.FRONTEND_ORIGIN ||
  "http://localhost:3000"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------

app.use(cookieParser());

// Paystack requires the exact raw request body for
// webhook signature verification.
app.use(
  "/api/billing/webhook",
  express.raw({
    type: "application/json",
  }),
);

app.use(
  express.json({
    limit: "2mb",
  }),
);

// -----------------------------------------------------
// Request logger
// -----------------------------------------------------

app.use((req, _res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

// -----------------------------------------------------
// Root / API status
// -----------------------------------------------------

app.get("/", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "love-world-place-api",
    message: "Love World Place API is running.",
  });
});

// -----------------------------------------------------
// Health check
// -----------------------------------------------------

app.get("/health", (_req, res) => {
  res.status(200).json({
    ok: true,
    service: "love-world-place-api",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// -----------------------------------------------------
// Authentication
// -----------------------------------------------------

app.use("/api/auth", authRoutes);

app.use("/api/billing", billingRoutes);

// -----------------------------------------------------
// Admin
// -----------------------------------------------------
//
// Everything mounted below /api/admin requires:
// 1. Authentication
// 2. Active subscription
//
// IMPORTANT:
// Specific routes are mounted after the middleware above,
// so they inherit both requirements.
// -----------------------------------------------------

app.use(
  "/api/admin",
  requireAuth,
  requireActiveSubscription,
);

// Articles
app.use(
  "/api/admin/articles",
  adminArticlesRoutes,
);

app.use(
  "/api/admin/articles",
  seriesRoutes,
);

app.use(
  "/api/admin/articles",
  versionsRoutes,
);

// Admin profile
app.use(
  "/api/admin/profile",
  adminProfileRoutes,
);

// Admin settings
app.use(
  "/api/admin/settings",
  adminSettingsRoutes,
);

// Admin uploads
app.use(
  "/api/admin/upload",
  adminUploadRoutes,
);

// Admin transcription
app.use(
  "/api/admin/transcribe",
  adminTranscribeRoutes,
);

// Admin comments
app.use(
  "/api/admin/comments",
  commentsRoutes,
);

// Admin contributions
app.use(
  "/api/admin/contributions",
  adminContributionsRouter,
);

// Admin series
app.use(
  "/api/admin/series",
  seriesRoutes,
);

// Admin newsletter
app.use(
  "/api/admin/newsletter",
  newsletterRoutes,
);

// Admin analytics
app.use(
  "/api/admin",
  analyticsRoutes,
);

// -----------------------------------------------------
// Public API
// -----------------------------------------------------

app.use(
  "/api/public",
  publicRoutes,
);

app.use(
  "/api/share",
  shareRoutes,
);

app.use(
  "/api/public/search",
  searchRoutes,
);

app.use(
  "/api/public/series",
  seriesRoutes,
);

// Public analytics
app.use(
  "/api/public",
  analyticsRoutes,
);

// -----------------------------------------------------
// Public upload endpoint
// -----------------------------------------------------
//
// Keep this only if adminUploadRoutes intentionally
// exposes routes under /api/upload.
//
// If all uploads are supposed to be /api/admin/upload,
// this can be removed.
// -----------------------------------------------------

app.use(
  "/api/upload",
  requireAuth,
  requireActiveSubscription,
  adminUploadRoutes,
);

// -----------------------------------------------------
// Newsletter
// -----------------------------------------------------

app.use(
  "/api/newsletter",
  newsletterRoutes,
);

// -----------------------------------------------------
// Comments / Contributions
// -----------------------------------------------------

app.use(
  "/api/articles",
  commentsRoutes,
);

app.use(
  "/api/articles",
  publicContributionsRouter,
);

// -----------------------------------------------------
// Translation
// -----------------------------------------------------

app.use(
  "/api/translate",
  translationsRoutes,
);

// -----------------------------------------------------
// 404 fallback
// -----------------------------------------------------

app.use((req, res) => {
  console.warn(
    `404 - Route not found: ${req.method} ${req.originalUrl}`,
  );

  res.status(404).json({
    error: "Not found.",
    path: req.originalUrl,
    method: req.method,
  });
});

// -----------------------------------------------------
// Centralized error handler
// -----------------------------------------------------

app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error("Unhandled error:", err);

    if (res.headersSent) {
      return;
    }

    res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  },
);

// -----------------------------------------------------
// Start server
// -----------------------------------------------------

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Pastor Articles API listening on 0.0.0.0:${PORT}`,
  );

  setupBackgroundJobs();

  console.log("✓ Background jobs initialized");
});
