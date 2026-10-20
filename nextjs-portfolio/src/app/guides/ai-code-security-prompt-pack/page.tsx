import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import SubstackEmbed from "@/components/SubstackEmbed";
import CopyPromptButton from "@/components/CopyPromptButton";
import TrackedDownloadLink from "@/components/TrackedDownloadLink";
import { promptStages } from "@/data/security-prompt-pack";
import { siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "The 7-Prompt Security Audit Pack for AI-Generated Code";
const description =
  "Seven prompts that make Claude, ChatGPT or Codex produce evidence instead of reassurance when you audit AI-generated code before production.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/guides/ai-code-security-prompt-pack",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/guides/ai-code-security-prompt-pack`,
    type: "article",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [twitterImage],
  },
};

export default function SecurityPromptPackPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <SectionContainer>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,48rem)_1fr] lg:gap-16">
          <div>
          <header className="max-w-3xl">
            <span className="text-caption text-[var(--accent)]">Free guide</span>
            <h1 className="mt-2 text-h1 text-[var(--text-primary)]">
              The 7-Prompt Security Audit Pack
            </h1>
            <p className="mt-4 text-body-large text-[var(--text-secondary)]">
              For anyone shipping AI-generated code to production. Copy each prompt into Claude, ChatGPT
              or Codex, in order, in the same session as your codebase. Do not skip stage 4. That is the
              one that catches the confident, wrong answer.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <TrackedDownloadLink
                href="/guides/ai-code-security-prompt-pack.md"
                resource="security-prompt-pack"
                format="md"
                placement="guide_page"
                className="inline-flex min-h-11 items-center gap-2 text-[var(--accent)] underline underline-offset-4"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download as Markdown
              </TrackedDownloadLink>
              <a
                href="https://guide.khelifi-salmen.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-[var(--text-secondary)] underline underline-offset-4 hover:text-[var(--text-primary)]"
              >
                Read the full guide
              </a>
            </div>
          </header>

          <section className="mt-12 max-w-3xl" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-h2 text-[var(--text-primary)]">
              Why this exists
            </h2>
            <div className="mt-4 grid gap-4 text-body-regular text-[var(--text-secondary)]">
              <p>A working application is not a secure application, and a confident AI response is not evidence.</p>
              <p>
                The unsafe loop is Idea, then AI agent, then Production. The manual checks in between
                usually test the happy path: does the page load, does login work, does checkout return
                success. None of those answer a security question. Authorization bypasses, replayed
                webhooks, reusable reset tokens and browser-trusted prices all live outside the happy path.
              </p>
              <p>These seven prompts force the model to produce evidence instead of reassurance.</p>
            </div>
          </section>

          <ol className="mt-12 grid max-w-3xl gap-6">
            {promptStages.map((stage) => (
              <li key={stage.number} id={`stage-${stage.number}`} className="glass-panel scroll-mt-28 p-6 md:p-8">
                <span className="text-caption text-[var(--accent)]">Stage {stage.number}</span>
                <h2 className="mt-1 text-h3 text-[var(--text-primary)]">{stage.title}</h2>
                <blockquote className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-4 text-body-regular text-[var(--text-primary)]">
                  {stage.prompt}
                </blockquote>
                <div className="mt-4">
                  <CopyPromptButton text={stage.prompt} label={stage.title} />
                </div>
                <p className="mt-4 text-body-regular text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)]">Why:</strong> {stage.why}
                </p>
              </li>
            ))}
          </ol>

          <section className="mt-12 max-w-3xl" aria-labelledby="rule-heading">
            <h2 id="rule-heading" className="text-h2 text-[var(--text-primary)]">
              The rule underneath all seven
            </h2>
            <p className="mt-4 text-body-regular text-[var(--text-secondary)]">
              <strong className="text-[var(--text-primary)]">Evidence, not assurance.</strong> Every
              stage demands a file, a line, an input, or a diff. Any answer that cannot produce one gets
              discarded. Speed from AI is real. So is the risk. These prompts are the gate between the two.
            </p>
          </section>

          <div className="mt-12 max-w-xl">
            <SubstackEmbed resource="security-prompt-pack" placement="guide_page" />
          </div>

          <p className="mt-8 text-body-regular text-[var(--text-secondary)]">
            More free material:{" "}
            <Link href="/resources" className="text-[var(--accent)] underline underline-offset-4">
              all free resources
            </Link>
            .
          </p>
          </div>
          <aside className="hidden lg:block" aria-label="In this guide">
            <div className="glass-panel sticky top-28 p-6">
              <h2 className="text-caption text-[var(--text-tertiary)]">The 7 stages</h2>
              <ol className="mt-4 grid gap-1">
                {promptStages.map((stage) => (
                  <li key={stage.number}>
                    <a
                      href={`#stage-${stage.number}`}
                      className="inline-flex min-h-11 items-center gap-3 text-body-regular text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                    >
                      <span className="w-4 shrink-0 text-center text-caption text-[var(--accent)]">{stage.number}</span>
                      {stage.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
          </div>
        </SectionContainer>
      </main>
      <SiteFooter showNewsletter={false} />
    </>
  );
}
