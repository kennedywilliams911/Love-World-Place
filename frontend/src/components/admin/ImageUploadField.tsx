"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Cropper, { type Area } from "react-easy-crop";
import { Check, Upload, X, Loader2, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { apiUrl } from "@/lib/api-client";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const MAX_SIZE_BYTES = 8 * 1024 * 1024;
const PROFILE_CROP_SIZE = 512;

async function createCroppedProfileImage(
  source: string,
  area: Area,
): Promise<File> {
  const image = new window.Image();
  await new Promise<void>((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("Could not read this image."));
    image.src = source;
  });

  const canvas = document.createElement("canvas");
  canvas.width = PROFILE_CROP_SIZE;
  canvas.height = PROFILE_CROP_SIZE;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Could not crop this image.");

  context.imageSmoothingQuality = "high";
  context.drawImage(
    image,
    area.x,
    area.y,
    area.width,
    area.height,
    0,
    0,
    PROFILE_CROP_SIZE,
    PROFILE_CROP_SIZE,
  );

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (result) =>
        result
          ? resolve(result)
          : reject(new Error("Could not prepare the cropped image.")),
      "image/jpeg",
      0.92,
    );
  });

  return new File([blob], "profile-picture.jpg", { type: "image/jpeg" });
}

export default function ImageUploadField({
  value,
  onChange,
  folder,
  label = "Featured Image",
  aspect = "aspect-[16/9]",
  allowCrop = false,
}: {
  value: string | null;
  onChange: (url: string | null) => void;
  folder: "profile" | "articles" | "watermark";
  label?: string;
  aspect?: string;
  allowCrop?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [cropSource, setCropSource] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [preparingCrop, setPreparingCrop] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!cropSource) return;
    return () => URL.revokeObjectURL(cropSource);
  }, [cropSource]);

  const validateFile = useCallback((file: File) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("Please upload a JPG, PNG, WebP or AVIF image.");
      return false;
    }
    if (file.size > MAX_SIZE_BYTES) {
      toast.error("That image is too large. Please use a file under 8MB.");
      return false;
    }
    return true;
  }, []);

  const upload = useCallback(
    async (file: File) => {
      if (!validateFile(file)) return;

      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", folder);
        const uploadEndpoint =
          folder === "watermark" ? "/api/upload" : "/api/admin/upload";
        const res = await fetch(apiUrl(uploadEndpoint), {
          method: "POST",
          credentials: "include",
          body: formData,
        });
        const responseText = await res.text();
        let data: { url?: string; error?: string; message?: string } = {};
        try {
          data = responseText ? JSON.parse(responseText) : {};
        } catch {
          data = {};
        }
        if (!res.ok) {
          toast.error(
            data.error ||
              data.message ||
              `Image upload failed (${res.status}). Please try again.`,
          );
          return;
        }
        if (!data.url) {
          toast.error("Upload completed but no image URL was returned.");
          return;
        }
        onChange(data.url);
        toast.success("Image updated successfully.");
      } catch {
        toast.error(
          "Something went wrong while uploading the image. Please try again.",
        );
      } finally {
        setUploading(false);
      }
    },
    [folder, onChange, validateFile],
  );

  const selectFile = useCallback(
    (file: File) => {
      if (!validateFile(file)) return;
      if (!allowCrop) {
        void upload(file);
        return;
      }

      setCropSource(URL.createObjectURL(file));
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedArea(null);
    },
    [allowCrop, upload, validateFile],
  );

  async function confirmCrop() {
    if (!cropSource || !croppedArea) return;
    setPreparingCrop(true);
    try {
      const file = await createCroppedProfileImage(cropSource, croppedArea);
      setCropSource(null);
      await upload(file);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not crop this image.",
      );
    } finally {
      setPreparingCrop(false);
    }
  }

  return (
    <>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-parchment-200">
          {label}
        </label>

        {value ? (
          <div
            className={cn(
              "group relative overflow-hidden rounded-xl border border-parchment-300 dark:border-ink-700",
              aspect,
            )}
          >
            <Image
              src={value}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-ink-950/65 p-3 transition sm:inset-0 sm:bg-ink-950/0 sm:p-0 sm:opacity-0 sm:group-hover:bg-ink-950/40 sm:group-hover:opacity-100">
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-ink-800 shadow"
              >
                Replace
              </button>
              <button
                type="button"
                onClick={() => onChange(null)}
                className="flex items-center gap-1 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-red-700 shadow"
              >
                <X size={13} /> Remove
              </button>
            </div>
            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/50">
                <Loader2 className="animate-spin text-white" size={22} />
              </div>
            )}
          </div>
        ) : (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const file = e.dataTransfer.files?.[0];
              if (file) selectFile(file);
            }}
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-parchment-300 bg-parchment-50 text-center transition dark:border-ink-700 dark:bg-ink-900",
              aspect,
              dragOver && "border-gold-400 bg-gold-100/40",
            )}
          >
            {uploading ? (
              <Loader2 className="animate-spin text-ink-400" size={22} />
            ) : (
              <>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment-200 text-ink-500 dark:bg-ink-800 dark:text-parchment-300">
                  <ImageIcon size={18} />
                </div>
                <p className="text-sm font-medium text-ink-600 dark:text-parchment-300">
                  <span className="inline-flex items-center gap-1 text-gold-700 dark:text-gold-400">
                    <Upload size={14} /> Upload an image
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-ink-400 dark:text-parchment-500">
                  JPG, PNG, WebP up to 8MB
                </p>
              </>
            )}
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={ALLOWED_TYPES.join(",")}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) selectFile(file);
            e.target.value = "";
          }}
        />
      </div>

      {cropSource && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/70 p-4">
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-image-crop-title"
            className="w-full max-w-lg rounded-xl border border-parchment-300 bg-parchment-50 p-4 shadow-2xl dark:border-ink-700 dark:bg-ink-900 sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2
                id="profile-image-crop-title"
                className="font-display text-lg font-semibold text-ink-900 dark:text-parchment-50"
              >
                Crop profile picture
              </h2>
              <button
                type="button"
                onClick={() => setCropSource(null)}
                disabled={preparingCrop || uploading}
                className="rounded-md p-2 text-ink-500 hover:bg-parchment-200 disabled:opacity-50 dark:text-parchment-300 dark:hover:bg-ink-800"
                aria-label="Cancel cropping"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative h-[min(65dvh,400px)] w-full overflow-hidden rounded-lg bg-ink-950">
              <Cropper
                image={cropSource}
                crop={crop}
                zoom={zoom}
                rotation={0}
                aspect={1}
                minZoom={1}
                maxZoom={4}
                cropShape="round"
                objectFit="cover"
                zoomSpeed={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(_area, pixels) => setCroppedArea(pixels)}
                style={{}}
                classes={{}}
                mediaProps={{}}
                cropperProps={{}}
              />
            </div>

            <label className="mt-4 flex items-center gap-3 text-sm text-ink-700 dark:text-parchment-200">
              <span className="shrink-0">Zoom</span>
              <input
                type="range"
                min="1"
                max="4"
                step="0.01"
                value={zoom}
                onChange={(event) => setZoom(Number(event.target.value))}
                disabled={preparingCrop || uploading}
                className="w-full accent-gold-500"
                aria-label="Zoom profile picture"
              />
            </label>

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setCropSource(null)}
                disabled={preparingCrop || uploading}
                className="rounded-md border border-parchment-300 px-4 py-2 text-sm font-medium text-ink-700 hover:bg-parchment-100 disabled:opacity-50 dark:border-ink-700 dark:text-parchment-200 dark:hover:bg-ink-800"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void confirmCrop()}
                disabled={!croppedArea || preparingCrop || uploading}
                className="inline-flex items-center gap-2 rounded-md bg-ink-900 px-4 py-2 text-sm font-semibold text-parchment-50 hover:bg-ink-800 disabled:opacity-50 dark:bg-gold-400 dark:text-ink-950 dark:hover:bg-gold-300"
              >
                {preparingCrop || uploading ? (
                  <Loader2 size={15} className="animate-spin" />
                ) : (
                  <Check size={15} />
                )}
                Apply crop
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
