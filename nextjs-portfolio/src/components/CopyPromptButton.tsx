"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { trackPromptCopied } from "@/lib/analytics";

export default function CopyPromptButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      trackPromptCopied({ stage: label });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy prompt: ${label}`}
      className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-[var(--radius-md)] border border-[var(--border-subtle)] px-4 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy prompt"}</span>
    </button>
  );
}
