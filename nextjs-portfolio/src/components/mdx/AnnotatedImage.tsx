import React from "react";
import Image from "next/image";
import { BLUR_PLACEHOLDER } from "@/data/homepage";

interface AnnotatedImageProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  width?: number;
  height?: number;
  aspect?: "desktop" | "phone";
  priority?: boolean;
}

export default function AnnotatedImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
  aspect = "desktop",
  priority = false,
}: AnnotatedImageProps) {
  const isPhone = aspect === "phone";

  return (
    <figure className="my-8">
      <div
        className={`relative mx-auto w-full overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--bg-surface)] shadow-[var(--glass-shadow)] ${
          isPhone ? "aspect-[9/19] max-w-xs" : "aspect-video max-w-4xl"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes={
            isPhone
              ? "(max-width: 640px) 90vw, 320px"
              : "(max-width: 1024px) 90vw, 880px"
          }
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-[var(--text-tertiary)] italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
