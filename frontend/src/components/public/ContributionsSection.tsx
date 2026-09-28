"use client";

import { useEffect, useRef, useState } from "react";
import {
  Loader2,
  MessageCirclePlus,
  MessageCircleHeart,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { apiUrl } from "@/lib/api-client";

export default function ContributionsSection({
  articleId,
  enabled,
}: {
  articleId: string;
  enabled: boolean;
}) {
  const [form, setForm] = useState({
    name: "",
    church: "",
    position: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  if (!enabled) return null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      !form.name.trim() ||
      !form.church.trim() ||
      !form.position.trim() ||
      !form.content.trim()
    ) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        apiUrl(`/api/articles/${articleId}/contributions`),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            name: form.name.trim(),
            church: form.church.trim(),
            position: form.position.trim(),
            content: form.content.trim(),
          }),
        },
      );
      const responseData = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(
          typeof responseData?.error === "string"
            ? responseData.error
            : "Contribution submission failed",
        );
      }

      toast.success("Thank you. Your contribution has been sent for review.");
      setForm({ name: "", church: "", position: "", content: "" });
      setIsOpen(false);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Could not submit your contribution. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-parchment-300 bg-white px-4 py-2.5 text-sm font-semibold text-ink-700 transition-colors hover:border-gold-400 hover:text-gold-700 dark:border-ink-700 dark:bg-ink-900 dark:text-parchment-200 dark:hover:border-gold-500 dark:hover:text-gold-300"
      >
        <MessageCirclePlus size={17} />
        Leave a Contribution
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setIsOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setIsOpen(false);
        }}
        aria-labelledby="reader-contributions-title"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-0 text-left backdrop:bg-ink-950/60"
      >
        <div className="flex min-h-full items-center justify-center p-4">
          <section className="max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-lg border border-parchment-300 bg-parchment-50 p-5 shadow-xl dark:border-ink-800 dark:bg-ink-900 sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <MessageCircleHeart
                  size={23}
                  className="shrink-0 text-gold-700 dark:text-gold-400"
                />
                <h2
                  id="reader-contributions-title"
                  className="font-display text-xl font-semibold text-ink-900 dark:text-parchment-50"
                >
                  Reader Contributions
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="shrink-0 rounded-md p-2 text-ink-500 hover:bg-parchment-200 dark:text-parchment-300 dark:hover:bg-ink-800"
                aria-label="Close contribution form"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-semibold text-ink-900 dark:text-parchment-50">
                Leave a contribution
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  placeholder="Your name"
                  autoComplete="name"
                  className="rounded-lg border border-parchment-300 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-700 dark:bg-ink-800 dark:text-parchment-50"
                  required
                  disabled={loading}
                />
                <input
                  type="text"
                  value={form.church}
                  onChange={(event) =>
                    setForm({ ...form, church: event.target.value })
                  }
                  placeholder="Your church"
                  autoComplete="organization"
                  className="rounded-lg border border-parchment-300 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-700 dark:bg-ink-800 dark:text-parchment-50"
                  required
                  disabled={loading}
                />
              </div>
              <input
                type="text"
                value={form.position}
                onChange={(event) =>
                  setForm({ ...form, position: event.target.value })
                }
                placeholder="Your position"
                autoComplete="organization-title"
                className="w-full rounded-lg border border-parchment-300 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-700 dark:bg-ink-800 dark:text-parchment-50"
                required
                disabled={loading}
              />
              <textarea
                value={form.content}
                onChange={(event) =>
                  setForm({ ...form, content: event.target.value })
                }
                placeholder="Share a thought about this article..."
                rows={4}
                className="w-full rounded-lg border border-parchment-300 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-700 dark:bg-ink-800 dark:text-parchment-50"
                required
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-parchment-50 transition hover:bg-ink-800 disabled:opacity-60 dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                Submit Contribution
              </button>
            </form>
          </section>
        </div>
      </dialog>
    </>
  );
}
