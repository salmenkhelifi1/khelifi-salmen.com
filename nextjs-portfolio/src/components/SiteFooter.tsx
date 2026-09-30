import Link from "next/link";
import { fiverrUrl } from "@/data/schema";
import { footerSocials, navLinks } from "@/data/homepage";
import SectionContainer from "./SectionContainer";
import { BookCallLink, OutboundLink } from "@/components/TrackedCta";

const SOCIAL_TYPES: Record<string, string> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Substack: "substack",
  YouTube: "youtube",
  Instagram: "instagram",
  Upwork: "upwork",
  Freelancer: "freelancer",
  X: "x",
};

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
        <nav aria-label="Footer quick links">
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
            <Link href="/saas-developer" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              SaaS development
            </Link>
            <Link href="/api-integration-developer" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              API integrations
            </Link>
            <Link href="/n8n-automation-developer" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              n8n automation
            </Link>
            <Link href="/resume" data-ph-capture="footer-resume" className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]">
              Résumé
            </Link>
            <BookCallLink
              placement="footer"
              captureId="footer-book-call"
              className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)] cursor-pointer text-left font-inherit"
            >
              Book a call
            </BookCallLink>
          </div>
        </nav>
        <nav aria-label="Footer social links">
          <h2 className="mb-4 text-caption text-[var(--text-tertiary)]">Socials</h2>
          <div className="grid gap-2">
            {footerSocials.map((link) => (
              <OutboundLink
                key={link.href}
                href={link.href}
                destinationType={SOCIAL_TYPES[link.label] ?? "social"}
                placement="footer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </OutboundLink>
            ))}
            <OutboundLink
              href={fiverrUrl}
              destinationType="fiverr"
              placement="footer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
            >
              Fixed-scope services
            </OutboundLink>
          </div>
        </nav>
      </SectionContainer>
      <SectionContainer className="mt-10 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-8 text-sm text-[var(--text-tertiary)] md:flex-row md:items-center md:justify-between">
        <p>© {currentYear} Salmen Khelifi. All rights reserved.</p>
        <OutboundLink
          href="mailto:hello@khelifi-salmen.com"
          destinationType="email"
          placement="footer"
          className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text-primary)]"
        >
          hello@khelifi-salmen.com
        </OutboundLink>
      </SectionContainer>
    </footer>
  );
}
