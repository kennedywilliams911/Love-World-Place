"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { apiUrl } from "@/lib/api-client";

export default function SeriesForm({
  articleId,
  currentSeriesId,
  onEnsureArticleSaved,
  onSeriesChange,
}: {
  articleId: string | null;
  currentSeriesId?: string | null;
  onEnsureArticleSaved?: () => Promise<string | null>;
  onSeriesChange?: (seriesId: string | null) => void;
}) {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [availableSeries, setAvailableSeries] = useState<
    { id: string; title: string }[]
  >([]);
  const [selectedSeriesId, setSelectedSeriesId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    position: "1",
  });

  useEffect(() => {
    let active = true;
    void fetch(apiUrl("/api/admin/series"), { credentials: "include" })
      .then(async (response) => {
        if (!response.ok) return;
        const data = await response.json();
        if (active && Array.isArray(data.series)) {
          setAvailableSeries(data.series);
        }
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const targetArticleId =
        articleId ?? (await onEnsureArticleSaved?.()) ?? null;
      if (!targetArticleId) return;

      const payload = selectedSeriesId
        ? { seriesId: selectedSeriesId, position: Number(formData.position) }
        : {
            ...formData,
            position: Number(formData.position),
          };
      const res = await fetch(
        apiUrl(`/api/admin/articles/${targetArticleId}/series`),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(payload),
        },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update series");

      const seriesId = data.seriesId ?? data.data?.seriesId;
      if (!seriesId) throw new Error("The series could not be saved");
      onSeriesChange?.(seriesId);
      toast.success("Series updated");
      setShowForm(false);
      setSelectedSeriesId("");
      setFormData({ title: "", description: "", position: "1" });
    } catch {
      toast.error("Failed to update series");
    } finally {
      setLoading(false);
    }
  }

  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-semibold text-ink-900 dark:text-parchment-50">
        Article Series
      </legend>

      {currentSeriesId ? (
        <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950/20">
          <p className="text-sm font-medium text-green-900 dark:text-green-300">
            This article is part of a series.
          </p>
          <button
            type="button"
            onClick={() => setShowForm(!showForm)}
            className="mt-2 text-sm font-medium text-green-700 hover:underline dark:text-green-400"
          >
            {showForm ? "Cancel" : "Edit Series Info"}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setShowForm(!showForm)}
          className="block rounded-lg border border-parchment-300 px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-parchment-100 dark:border-ink-700 dark:text-parchment-300 dark:hover:bg-ink-800"
        >
          Add to Series
        </button>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-3 rounded-lg bg-parchment-100 p-4 dark:bg-ink-800"
        >
          {availableSeries.length > 0 && (
            <div>
              <label className="block text-xs font-medium text-ink-700 dark:text-parchment-200">
                Add to an existing series or create a new one
              </label>
              <select
                value={selectedSeriesId}
                onChange={(event) => setSelectedSeriesId(event.target.value)}
                className="mt-1 w-full rounded-lg border border-parchment-300 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-600 dark:bg-ink-700 dark:text-parchment-50"
              >
                <option value="">Create a new series</option>
                {availableSeries.map((series) => (
                  <option key={series.id} value={series.id}>
                    {series.title}
                  </option>
                ))}
              </select>
            </div>
          )}

          {!selectedSeriesId && (
            <div>
              <label className="block text-xs font-medium text-ink-700 dark:text-parchment-200">
                Series Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="e.g., 7-Part Series on Faith"
                className="mt-1 w-full rounded-lg border border-parchment-300 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-600 dark:bg-ink-700 dark:text-parchment-50"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-ink-700 dark:text-parchment-200">
              Position in Series
            </label>
            <input
              type="number"
              value={formData.position}
              onChange={(e) =>
                setFormData({ ...formData, position: e.target.value })
              }
              min="1"
              className="mt-1 w-full rounded-lg border border-parchment-300 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-600 dark:bg-ink-700 dark:text-parchment-50"
              required
            />
          </div>

          {!selectedSeriesId && (
            <div>
              <label className="block text-xs font-medium text-ink-700 dark:text-parchment-200">
                Description (optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Describe this series..."
                rows={2}
                className="mt-1 w-full rounded-lg border border-parchment-300 bg-white px-3 py-2 text-sm text-ink-900 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-100 dark:border-ink-600 dark:bg-ink-700 dark:text-parchment-50"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-3 py-2 text-sm font-semibold text-parchment-50 transition hover:bg-ink-800 disabled:opacity-60 dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
          >
            {loading && <Loader2 size={16} className="animate-spin" />}
            Save Series
          </button>
        </form>
      )}
    </fieldset>
  );
}
