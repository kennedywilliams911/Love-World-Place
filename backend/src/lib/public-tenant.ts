import { prisma } from "./prisma";

/** The single configured super-admin owns the default public publication. */
export async function getDefaultPublisherId(): Promise<string | null> {
  const email = (
    process.env.SUPER_ADMIN_EMAIL ||
    process.env.ADMIN_EMAIL ||
    ""
  ).trim();
  if (!email) return null;

  const profile = await prisma.profile.findFirst({
    where: {
      user: {
        email: { equals: email, mode: "insensitive" },
        status: "ACTIVE",
        role: "SUPER_ADMIN",
      },
    },
    orderBy: { createdAt: "asc" },
    select: { userId: true },
  });

  return profile?.userId ?? null;
}
