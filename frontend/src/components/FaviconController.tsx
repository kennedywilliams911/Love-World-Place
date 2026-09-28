"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const ICONS: Array<{ path: string; icon: string }> = [
  { path: "/admin/analytics", icon: "/favicon-analytics.svg" },
  { path: "/admin/billing", icon: "/favicon-billing.svg" },
  { path: "/admin/profile", icon: "/favicon-profile.svg" },
  { path: "/admin", icon: "/favicon-dashboard.svg" },
];

function iconForPath(pathname: string) {
  return (
    ICONS.find(
      ({ path }) => pathname === path || pathname.startsWith(`${path}/`),
    )?.icon ?? null
  );
}

export default function FaviconController() {
  const pathname = usePathname();
  const metadataIcon = useRef<string | null>(null);

  useEffect(() => {
    const icon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!icon) return;

    metadataIcon.current ??= icon.href;
    icon.href = iconForPath(pathname) ?? metadataIcon.current;
  }, [pathname]);

  return null;
}
