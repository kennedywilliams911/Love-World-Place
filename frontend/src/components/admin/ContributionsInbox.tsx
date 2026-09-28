"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, MessageCircleHeart, RefreshCw, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { formatDate } from "@/lib/utils";
import { apiUrl } from "@/lib/api-client";
import type { ArticleContribution } from "@/types/article";

type ContributionData = {
  pending: ArticleContribution[];
  approved: ArticleContribution[];
};

async function fetchContributions(): Promise<ContributionData> {
  const response = await fetch(apiUrl("/api/admin/contributions"), {
    credentials: "include",
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || "Failed to load contributions");
  }

  const contributions: ArticleContribution[] = Array.isArray(data.contributions)
    ? data.contributions
    : [
        ...(Array.isArray(data.pending) ? data.pending : []),
        ...(Array.isArray(data.approved) ? data.approved : []),
      ];

  return {
    pending: contributions.filter((contribution) => !contribution.approved),
    approved: contributions.filter((contribution) => contribution.approved),
  };
}

export default function ContributionsInbox() {
  const [data, setData] = useState<ContributionData>({
    pending: [],
    approved: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadContributions() {
    setLoading(true);
    setError(false);
    try {
      setData(await fetchContributions());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let active = true;
    void fetchContributions()
      .then((contributions) => {
        if (active) setData(contributions);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  async function updateContribution(
    contributionId: string,
    method: "PATCH" | "DELETE",
  ) {
    try {
      const response = await fetch(
        apiUrl(`/api/admin/contributions/${contributionId}`),
        {
          method,
          headers:
            method === "PATCH"
              ? { "Content-Type": "application/json" }
              : undefined,
          credentials: "include",
          ...(method === "PATCH"
            ? { body: JSON.stringify({ approved: true }) }
            : {}),
        },
      );
      if (!response.ok) throw new Error();
      await loadContributions();
    } catch {
      toast.error(
        `Could not ${method === "PATCH" ? "approve" : "delete"} this contribution.`,
      );
    }
  }

  function renderContribution(
    contribution: ArticleContribution,
    pending: boolean,
  ) {
    return (
      <article
        key={contribution.id}
        className="flex items-start justify-between gap-4 px-4 py-4 sm:px-6"
      >
        <div className="min-w-0 flex-1">
          <dl className="grid gap-x-5 gap-y-2 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-ink-500 dark:text-parchment-400">
                Name
              </dt>
              <dd className="font-medium text-ink-900 dark:text-parchment-50">
                {contribution.name || "Not provided"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-500 dark:text-parchment-400">
                Church
              </dt>
              <dd className="text-sm text-ink-700 dark:text-parchment-200">
                {contribution.church || "Not provided"}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-ink-500 dark:text-parchment-400">
                Position
              </dt>
              <dd className="text-sm text-ink-700 dark:text-parchment-200">
                {contribution.position || "Not provided"}
              </dd>
            </div>
          </dl>
          <p className="mt-2 text-xs text-ink-500 dark:text-parchment-400">
            {formatDate(contribution.createdAt)}
          </p>
          <p className="mt-1 text-xs text-ink-500 dark:text-parchment-400">
            Article: {contribution.articleTitle || contribution.articleId}
            <Link
              href={`/admin/articles/${contribution.articleId}/edit`}
              className="ml-2 font-medium text-gold-700 hover:underline dark:text-gold-400"
            >
              View
            </Link>
          </p>
          <p className="mt-2 whitespace-pre-wrap text-sm text-ink-700 dark:text-parchment-200">
            {contribution.content}
          </p>
        </div>

        <div className="flex shrink-0 gap-1">
          {pending && (
            <button
              type="button"
              onClick={() => void updateContribution(contribution.id, "PATCH")}
              className="rounded-lg p-2 text-green-700 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-950/30"
              title="Approve contribution"
              aria-label={`Approve contribution from ${contribution.name}`}
            >
              <Check size={18} />
            </button>
          )}
          <button
            type="button"
            onClick={() => void updateContribution(contribution.id, "DELETE")}
            className="rounded-lg p-2 text-red-700 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-950/30"
            title="Delete contribution"
            aria-label={`Delete contribution from ${contribution.name}`}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </article>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-parchment-50">
          Contributions
        </h1>
        <p className="mt-1 text-ink-600 dark:text-parchment-300">
          Review reader contributions separately from article comments
        </p>
      </div>

      {loading && (
        <div className="rounded-lg border border-dashed border-parchment-300 bg-parchment-50 px-6 py-12 text-center dark:border-ink-700 dark:bg-ink-900">
          <p className="text-ink-500 dark:text-parchment-400">
            Loading contributions...
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-red-200 py-4 text-sm text-red-800 dark:border-red-900 dark:text-red-300">
          <p>Could not load contributions. Check the backend and retry.</p>
          <button
            type="button"
            onClick={() => void loadContributions()}
            className="inline-flex items-center gap-2 font-semibold hover:underline"
          >
            <RefreshCw size={15} /> Retry
          </button>
        </div>
      )}

      {!loading && !error && data.pending.length > 0 && (
        <section className="rounded-lg border border-parchment-300 bg-white dark:border-ink-800 dark:bg-ink-900">
          <div className="border-b border-parchment-300 bg-amber-50 px-4 py-4 dark:border-ink-800 dark:bg-amber-950/20 sm:px-6">
            <div className="flex items-center gap-2">
              <MessageCircleHeart
                size={19}
                className="text-amber-700 dark:text-amber-400"
              />
              <h2 className="font-display text-lg font-semibold text-amber-900 dark:text-amber-300">
                Pending Approval ({data.pending.length})
              </h2>
            </div>
          </div>
          <div className="divide-y divide-parchment-300 dark:divide-ink-800">
            {data.pending.map((contribution) =>
              renderContribution(contribution, true),
            )}
          </div>
        </section>
      )}

      {!loading && !error && data.approved.length > 0 && (
        <section className="rounded-lg border border-parchment-300 bg-white dark:border-ink-800 dark:bg-ink-900">
          <div className="border-b border-parchment-300 px-4 py-4 dark:border-ink-800 sm:px-6">
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-parchment-50">
              Approved Contributions ({data.approved.length})
            </h2>
          </div>
          <div className="divide-y divide-parchment-300 dark:divide-ink-800">
            {data.approved.map((contribution) =>
              renderContribution(contribution, false),
            )}
          </div>
        </section>
      )}

      {!loading &&
        !error &&
        data.pending.length === 0 &&
        data.approved.length === 0 && (
          <div className="border-y border-dashed border-parchment-300 py-12 text-center dark:border-ink-700">
            <p className="text-ink-500 dark:text-parchment-400">
              No contributions yet.
            </p>
          </div>
        )}
    </div>
  );
}
