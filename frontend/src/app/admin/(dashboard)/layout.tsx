import { getCurrentSession } from "@/lib/auth";
import { apiFetchSafe } from "@/lib/api";
import AdminShell from "@/components/admin/AdminShell";
import type { Profile } from "@/types/profile";

export const metadata = {
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Middleware already guarantees a valid session for everything under /admin,
  // but we fetch it again here to personalize the sidebar without extra client calls.
  const [session, profileData] = await Promise.all([
    getCurrentSession(),
    apiFetchSafe<{ profile: Profile | null }>("/api/admin/profile"),
  ]);

  const pastorName =
    profileData?.profile?.pastorName?.trim() || session?.name || "Publisher";
  const organizationName =
    profileData?.profile?.churchName?.trim() || "Love World Place";
  const profileImage = profileData?.profile?.profileImage;
  const userId = profileData?.profile?.userId || session?.userId;

  return (
    <AdminShell
      pastorName={pastorName}
      organizationName={organizationName}
      profileImage={profileImage}
      userId={userId}
    >
      {children}
    </AdminShell>
  );
}
