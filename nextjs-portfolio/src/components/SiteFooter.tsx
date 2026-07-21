import Link from "next/link";
import { bookingUrl } from "@/data/schema";
import { footerSocials, navLinks } from "@/data/homepage";
import SectionContainer from "./SectionContainer";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] py-14">
      <SectionContainer className="grid gap-10 text-sm text-[var(--text-secondary)] md:grid-cols-3">
        <div>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Khelifi<span className="text-[var(--accent)]">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-body-regular text-[var(--text-secondary)]">
            Full-stack, mobile, and automation systems built for revenue-focused launches.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-caption text-[var(--text-tertiary)]">Quick Links</h2>
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
            >
              Book a call
            </a>
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-caption text-[var(--text-tertiary)]">Socials</h2>
          <div className="grid gap-2">
            {footerSocials.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="mt-10 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-8 text-sm text-[var(--text-tertiary)] md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Salmen Khelifi. All rights reserved.</p>
        <a
          href="mailto:contact@khelifi-salmen.com"
          className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
        >
          contact@khelifi-salmen.com
        </a>
      </SectionContainer>
    </footer>
  );
}
