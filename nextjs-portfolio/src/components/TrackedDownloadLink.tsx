"use client";

import type { ReactNode } from "react";
import { trackResourceDownload } from "@/lib/analytics";

export default function TrackedDownloadLink({
  href,
  resource,
  format,
  placement,
  className,
  children,
}: {
  href: string;
  resource: string;
  format: string;
  placement: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      download
      className={className}
      onClick={() => trackResourceDownload({ resource, format, placement })}
    >
      {children}
    </a>
  );
}
