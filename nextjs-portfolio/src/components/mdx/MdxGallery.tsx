import React from "react";
import Image from "next/image";
import { BLUR_PLACEHOLDER } from "@/data/homepage";

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "desktop" | "phone";
};

interface MdxGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3;
}

export default function MdxGallery({
  images,
  columns = 2,
}: MdxGalleryProps) {
  if (!images || images.length === 0) return null;

  const gridClass =
    columns === 3
      ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div className={`my-8 ${gridClass}`}>
      {images.map((shot) => {
        const isPhone = shot.aspect === "phone";
        return (
          <figure key={shot.src} className="space-y-2">
            <div
              className={`relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--bg-surface)] shadow-[var(--glass-shadow)] ${
                isPhone ? "aspect-[9/19] w-full max-w-xs mx-auto" : "aspect-video"
              }`}
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={
                  isPhone
                    ? "(max-width: 640px) 90vw, 300px"
                    : "(max-width: 768px) 90vw, 500px"
                }
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>
            {shot.caption && (
              <figcaption className="text-center text-xs text-[var(--text-tertiary)] italic">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}
