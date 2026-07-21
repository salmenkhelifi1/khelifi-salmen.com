"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, createLucideIcon } from "lucide-react";
import { bookingUrl, githubUrl } from "@/data/schema";
import { navLinks } from "@/data/homepage";

const Github = createLucideIcon("Github", [
  [
    "path",
    {
      key: "github-path",
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
  ],
]);

type SiteHeaderProps = {
  /** When set, renders a back link (e.g. on case-study pages) instead of the section nav. */
  backHref?: string;
  backLabel?: string;
};

export default function SiteHeader({ backHref, backLabel }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6">
      <nav aria-label="Main navigation" className="relative w-full max-w-5xl nav-pill">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Khelifi<span className="text-[var(--accent)]">.</span>
          </Link>

          {backHref ? (
            <Link
              href={backHref}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {backLabel ?? "Back"}
            </Link>
          ) : (
            <>
              <div className="hidden gap-8 text-sm font-medium text-[var(--text-secondary)] md:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-active)] hover:text-[var(--text-primary)]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-2.5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)]"
                >
                  Let&apos;s Talk
                </a>
              </div>
              <button
                type="button"
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen((open) => !open)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </>
          )}
        </div>

        {!backHref && (
          <div
            id="mobile-menu"
            hidden={!isMenuOpen}
            className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] glass-panel px-6 backdrop-blur-xl transition-all duration-[180ms] md:hidden ${
              isMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex min-h-11 items-center border-b border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex min-h-11 items-center border-b border-[var(--border-subtle)] text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                GitHub
              </a>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="cta-button cta-primary mt-3 w-full"
              >
                Book a call
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
