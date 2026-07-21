import React from "react";
import { Code2 } from "lucide-react";

interface TechnicalNoteProps {
  title?: string;
  codeRef?: string;
  children: React.ReactNode;
}

export default function TechnicalNote({
  title = "Technical Detail",
  codeRef,
  children,
}: TechnicalNoteProps) {
  return (
    <div className="my-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-5 shadow-sm">
      <div className="flex items-center justify-between gap-2 mb-3 border-b border-[var(--border-subtle)] pb-2.5">
        <div className="flex items-center gap-2 text-xs font-bold text-[var(--accent)] font-mono uppercase tracking-wider">
          <Code2 className="w-4 h-4" aria-hidden="true" />
          {title}
        </div>
        {codeRef && (
          <span className="text-xs font-mono text-[var(--text-tertiary)]">
            {codeRef}
          </span>
        )}
      </div>
      <div className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
