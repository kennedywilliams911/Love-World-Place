import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PublicHeader from "@/components/public/Header";
import PublicFooter from "@/components/public/Footer";
import { getCurrentSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const session = await getCurrentSession();
  if (session?.userId) redirect("/admin");

  const featureList = [
    "Create and publish articles with rich formatting",
    "Build your own public publishing page",
    "Schedule posts and manage drafts",
    "Upload featured images and audio versions",
    "Send newsletter updates and grow your audience",
    "Moderate comments and track article analytics",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader siteName="Love World Place" showArticles={false} />
      <main className="flex flex-1 flex-col border-b border-parchment-300 bg-linear-to-b from-parchment-100 to-parchment-50 px-4 py-20 dark:border-ink-800 dark:from-ink-900 dark:to-ink-950 sm:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold-700 dark:text-gold-400">
            Your words. Your audience. Your publication.
          </p>
          <h1 className="text-balance font-display text-5xl font-semibold leading-tight text-ink-900 dark:text-parchment-50 sm:text-6xl">
            Publish with Purpose.
          </h1>
          <p className="mt-5 max-w-xl text-balance text-lg text-ink-600 dark:text-parchment-300">
            Create your own publishing space, share your articles with the
            world, and build a public home for your ideas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-parchment-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lg dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
            >
              Admin sign in <ArrowRight size={16} />
            </Link>
            
          </div>
          <p className="mt-6 text-sm text-ink-500 dark:text-parchment-400">
            Only the configured super administrator can manage this publication.
          </p>
        </div>

        <section className="mx-auto mt-16 w-full max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-700 dark:text-gold-400">
              Single administrator
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-parchment-50">
              Tools for the Love World Place publication
            </h2>
          </div>

          <ul className="grid gap-x-10 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 border-t border-parchment-300 py-5 text-sm text-ink-600 dark:border-ink-700 dark:text-parchment-300"
              >
                <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-gold-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <PublicFooter
        siteName="Love World Place"
        churchName="Articles and updates from Love World Place"
        socialLinks={null}
      />
    </div>
  );
}
