"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { bookingUrl } from "@/data/schema";
import { navLinks } from "@/data/homepage";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:px-6">
      <nav className="relative w-full max-w-5xl nav-pill">
        <div className="flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Khelifi<span className="text-[var(--accent)]">.</span>
          </Link>
          <div className="hidden gap-10 text-sm font-medium text-[var(--text-secondary)] md:flex">
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
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-2.5 text-sm font-bold text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] md:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div
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
      </nav>
    </div>
  );
}
