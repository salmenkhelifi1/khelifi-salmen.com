import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import { siteUrl, socialImage, substackUrl, twitterImage } from "@/data/schema";

const title = "Free Resources | Salmen Khelifi";
const description =
  "Free checklists, prompt packs and writing from Salmen Khelifi for founders and teams shipping apps and websites.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/resources`,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [twitterImage],
  },
};

const resources = [
  {
    icon: FileText,
    name: "12 questions before you hire an app developer",
    detail: "One-page checklist for scoping an app before you talk to a developer.",
    href: "/checklist",
    label: "Get the checklist",
    external: false,
  },
  {
    icon: ShieldCheck,
    name: "The 7-Prompt Security Audit Pack",
    detail: "Seven prompts to audit AI-generated code before it ships to production.",
    href: "/guides/ai-code-security-prompt-pack.md",
    label: "Open the pack",
    external: false,
  },
  {
    icon: Mail,
    name: "Newsletter on Substack",
    detail: "Technical lessons, teardowns and real build mistakes. New subscribers also get the checklist and the audit pack.",
    href: substackUrl,
    label: "Read and subscribe",
    external: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <SectionContainer>
          <div className="mb-12 max-w-3xl">
            <span className="text-caption text-[var(--accent)]">Free resources</span>
            <h1 className="mt-2 text-h1 text-[var(--text-primary)]">Everything free, in one place</h1>
            <p className="mt-4 text-body-large text-[var(--text-secondary)]">
              Checklists, prompt packs and writing I give away. No sales call needed.
            </p>
          </div>

          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => {
              const Icon = item.icon;
              const linkClass =
                "mt-6 inline-flex min-h-11 items-center gap-2 text-[var(--accent)] underline underline-offset-4";
              return (
                <li key={item.name} className="glass-panel flex flex-col p-6">
                  <Icon className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
                  <h2 className="mt-4 text-h3 text-[var(--text-primary)]">{item.name}</h2>
                  <p className="mt-2 flex-1 text-body-regular text-[var(--text-secondary)]">{item.detail}</p>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className={linkClass}>
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </SectionContainer>
      </main>
      <SiteFooter />
    </>
  );
}
