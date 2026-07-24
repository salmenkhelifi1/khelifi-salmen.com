"use client";

import { useState } from "react";

interface MdxImageProps {
  src?: string;
  alt?: string;
}

export default function MdxImage({ src, alt }: MdxImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src) return null;

  return (
    <figure className="my-8 block overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-2 shadow-md">
      <div className="relative w-full overflow-hidden rounded-xl bg-[var(--bg-surface-elevated)]">
        <img
          src={failed ? "/images/khelifi-salmen.com-og.png" : src}
          alt={alt || "Article illustration"}
          className="w-full h-auto max-h-[420px] object-cover rounded-xl block"
          loading="lazy"
          onError={() => {
            if (!failed) {
              setFailed(true);
            }
          }}
        />
      </div>
      {alt && (
        <figcaption className="mt-2.5 text-center text-xs text-[var(--text-tertiary)] font-medium">
          {alt}
        </figcaption>
      )}
    </figure>
  );
}
