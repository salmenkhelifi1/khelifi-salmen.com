import { substackUrl } from "@/data/schema";

/**
 * Substack subscribe form, embedded.
 *
 * Uses the transparent variant so it inherits the page background in both
 * themes instead of punching a white rectangle into dark mode. The iframe is
 * lazy-loaded because it sits below the fold and is not needed for LCP.
 */
export default function SubstackEmbed({
  heading = "One practical guide a week",
  blurb = "Shipping AI-assisted software without shipping bugs. Subscribe and get the 7-prompt security audit pack straight away.",
}: {
  heading?: string;
  blurb?: string;
}) {
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

      <iframe
        src="https://salmenkhelifi.substack.com/embed?transparent=1&light=1"
        title="Subscribe to the newsletter"
        loading="lazy"
        className="w-full max-w-[480px] h-[320px] overflow-hidden border-0 bg-transparent"
      />

      <p className="mt-3 text-xs text-[var(--text-tertiary)]">
        Prefer to read first?{" "}
        <a
          href={substackUrl}
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-[var(--accent)]"
        >
          Browse the archive
        </a>
        .
      </p>
    </section>
  );
}
