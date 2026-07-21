import React from "react";

interface QuoteProps {
  quote?: string;
  name?: string;
  role?: string;
  cite?: string;
  children?: React.ReactNode;
}

export default function Quote({
  quote,
  name,
  role,
  cite,
  children,
}: QuoteProps) {
  const content = quote || children;

  return (
    <blockquote
      cite={cite}
      className="my-6 border-l-4 border-[var(--accent)] bg-[var(--accent-dim)]/20 p-6 rounded-r-2xl italic text-[var(--text-secondary)] glass-panel"
    >
      <div className="text-body-regular text-[var(--text-primary)] not-italic leading-relaxed mb-3">
        &ldquo;{content}&rdquo;
      </div>
      {(name || role) && (
        <footer className="not-italic text-xs font-semibold text-[var(--text-tertiary)] flex items-center gap-2">
          {name && <span className="text-[var(--accent)]">{name}</span>}
          {name && role && <span>•</span>}
          {role && <span>{role}</span>}
        </footer>
      )}
    </blockquote>
  );
}
