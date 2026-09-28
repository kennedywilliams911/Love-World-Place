"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, MessageSquareText, RefreshCw, Trash2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { apiUrl } from "@/lib/api-client";
import { toast } from "sonner";
import type { ArticleComment } from "@/types/profile";

type RemarksData = {
  pending: ArticleComment[];
  approved: ArticleComment[];
};

async function fetchRemarks(): Promise<RemarksData> {
  const response = await fetch(apiUrl("/api/admin/comments"), {
    credentials: "include",
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.error || "Failed to load reader remarks");
  }

  return {
    pending: Array.isArray(json.pending) ? json.pending : [],
    approved: Array.isArray(json.approved) ? json.approved : [],
  };
}

export default function ReaderRemarkModeration() {
  const [data, setData] = useState<RemarksData>({ pending: [], approved: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const title = "Comments";
  const itemLabel = "comment";

  async function loadRemarks() {
    setLoading(true);
    setError(false);
    try {
      setData(await fetchRemarks());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let active = true;
    void fetchRemarks()
      .then((remarks) => {
        if (active) setData(remarks);
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

  async function updateRemark(remarkId: string, method: "PATCH" | "DELETE") {
    try {
      const response = await fetch(apiUrl(`/api/admin/comments/${remarkId}`), {
        method,
        headers:
          method === "PATCH"
            ? { "Content-Type": "application/json" }
            : undefined,
        credentials: "include",
        ...(method === "PATCH"
          ? { body: JSON.stringify({ approved: true }) }
          : {}),
      });
      if (!response.ok) throw new Error();
      await loadRemarks();
    } catch {
      toast.error(
        `Could not ${method === "PATCH" ? "approve" : "delete"} this ${itemLabel}.`,
      );
    }
  }

  function renderRemark(remark: ArticleComment, pending: boolean) {
    return (
      <div
        key={remark.id}
        className="flex items-start justify-between gap-4 px-4 py-4 sm:px-6"
      >
        <div className="min-w-0 flex-1">
          <p className="font-medium text-ink-900 dark:text-parchment-50">
            {remark.name}
          </p>
          <p className="text-xs text-ink-500 dark:text-parchment-400">
            {remark.email} · {formatDate(remark.createdAt)}
          </p>
          {remark.articleId && (
            <p className="mt-1 text-xs text-ink-500 dark:text-parchment-400">
              Article: {remark.articleTitle || remark.articleId}
              <Link
                href={`/admin/articles/${remark.articleId}/edit`}
                className="ml-2 font-medium text-gold-700 hover:underline dark:text-gold-400"
              >
                View
              </Link>
            </p>
          )}
          <p className="mt-2 whitespace-pre-wrap text-sm text-ink-700 dark:text-parchment-200">
            {remark.content}
          </p>
        </div>

        <div className="flex shrink-0 gap-1">
          {pending && (
            <button
              type="button"
              onClick={() => void updateRemark(remark.id, "PATCH")}
              className="rounded-lg p-2 text-green-700 hover:bg-green-100 dark:text-green-400 dark:hover:bg-green-950/30"
              title={`Approve ${itemLabel}`}
              aria-label={`Approve ${itemLabel} from ${remark.name}`}
            >
              <Check size={18} />
            </button>
          )}
          <button
            type="button"
            onClick={() => void updateRemark(remark.id, "DELETE")}
            className="rounded-lg p-2 text-red-700 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-950/30"
            title={`Delete ${itemLabel}`}
            aria-label={`Delete ${itemLabel} from ${remark.name}`}
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-ink-900 dark:text-parchment-50">
          {title}
        </h1>
        <p className="mt-1 text-ink-600 dark:text-parchment-300">
          Review reader remarks on your articles
        </p>
      </div>

      {loading && (
        <div className="rounded-2xl border border-dashed border-parchment-300 bg-parchment-50 px-6 py-12 text-center dark:border-ink-700 dark:bg-ink-900">
          <p className="text-ink-500 dark:text-parchment-400">
            Loading {title.toLowerCase()}...
          </p>
        </div>
      )}

      {!loading && error && (
        <div className="flex flex-wrap items-center justify-between gap-3 border-y border-red-200 py-4 text-sm text-red-800 dark:border-red-900 dark:text-red-300">
          <p>
            Could not load {title.toLowerCase()}. Check the backend and retry.
          </p>
          <button
            type="button"
            onClick={() => void loadRemarks()}
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
              <MessageSquareText
                size={19}
                className="text-amber-700 dark:text-amber-400"
              />
              <h2 className="font-display text-lg font-semibold text-amber-900 dark:text-amber-300">
                Pending Approval ({data.pending.length})
              </h2>
            </div>
          </div>
          <div className="divide-y divide-parchment-300 dark:divide-ink-800">
            {data.pending.map((remark) => renderRemark(remark, true))}
          </div>
        </section>
      )}

      {!loading && !error && data.approved.length > 0 && (
        <section className="rounded-lg border border-parchment-300 bg-white dark:border-ink-800 dark:bg-ink-900">
          <div className="border-b border-parchment-300 px-4 py-4 dark:border-ink-800 sm:px-6">
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-parchment-50">
              Approved Comments ({data.approved.length})
            </h2>
          </div>
          <div className="divide-y divide-parchment-300 dark:divide-ink-800">
            {data.approved.map((remark) => renderRemark(remark, false))}
          </div>
        </section>
      )}

      {!loading &&
        !error &&
        data.pending.length === 0 &&
        data.approved.length === 0 && (
          <div className="border-y border-dashed border-parchment-300 py-12 text-center dark:border-ink-700">
            <p className="text-ink-500 dark:text-parchment-400">
              No {title.toLowerCase()} yet.
            </p>
          </div>
        )}
    </div>
  );
}
