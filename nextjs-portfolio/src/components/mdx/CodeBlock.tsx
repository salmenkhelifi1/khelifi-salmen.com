import React from "react";

interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
  filename?: string;
}

export default function CodeBlock({
  children,
  language,
  filename,
}: CodeBlockProps) {
  return (
    <div className="my-6 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-surface)] overflow-hidden shadow-[var(--glass-shadow)]">
      {(filename || language) && (
        <div className="flex items-center justify-between px-4 py-2 bg-[var(--bg-surface-elevated)] border-b border-[var(--border-subtle)] text-xs font-mono text-[var(--text-tertiary)]">
          <span>{filename || ""}</span>
          {language && <span className="uppercase text-[var(--accent)]">{language}</span>}
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-sm text-[var(--text-primary)] leading-relaxed">
        <code>{children}</code>
      </pre>
    </div>
  );
}
