"use client";

import { useState, FormEvent } from "react";
import { substackUrl } from "@/data/schema";

/**
 * Substack subscribe form, native dark mode UI.
 *
 * Replaces the raw third-party Substack iframe with a native dark-theme form
 * matching the site's design tokens and glassmorphism aesthetic.
 */
export default function SubstackEmbed({
  heading = "One practical guide a week",
  blurb = "Shipping AI-assisted software without shipping bugs. Subscribe and get the 7-prompt security audit pack straight away.",
}: {
  heading?: string;
  blurb?: string;
}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const targetUrl = `${substackUrl}/subscribe?email=${encodeURIComponent(email)}`;
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="w-full rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8"
    >
      <h2
        id="newsletter-heading"
        className="text-xl font-semibold text-[var(--text-primary)]"
      >
        {heading}
      </h2>
      <p className="mt-2 mb-5 max-w-prose text-sm text-[var(--text-secondary)]">
        {blurb}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Type your email..."
          className="flex-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-4 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:border-[var(--accent)] focus:outline-none"
        />
        <button
          type="submit"
          className="cta-button cta-primary shrink-0 min-h-11 px-6 py-2.5 text-sm font-semibold cursor-pointer"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-xs text-[var(--text-tertiary)]">
        Prefer to read first?{" "}
        <a
          href={substackUrl}
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-[var(--accent)] transition-colors"
        >
          Browse the archive
        </a>
        .
      </p>
    </section>
  );
}
