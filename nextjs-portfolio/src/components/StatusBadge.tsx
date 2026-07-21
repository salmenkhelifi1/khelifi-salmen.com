import { HTMLAttributes, ReactNode } from "react";

interface StatusBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export default function StatusBadge({
  children = "AVAILABLE FOR NEW PROJECTS",
  className = "",
  ...props
}: StatusBadgeProps) {
  return (
    <div
      className={`hero-badge reveal mb-8 inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-caption text-[var(--text-secondary)] ${className}`.trim()}
      {...props}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      {children}
    </div>
  );
}
