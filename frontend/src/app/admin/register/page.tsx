import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sign in",
  robots: { index: false },
};

export default function RegisterPage() {
  redirect("/admin/login");
}
