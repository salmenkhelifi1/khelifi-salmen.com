import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SectionContainer from "@/components/SectionContainer";
import { bookingUrl, siteUrl } from "@/data/schema";
import { testimonials } from "@/data/testimonials";

const title = "n8n Automation Developer for Hire";
const description =
  "Hire Salmen Khelifi for reliable n8n automation, AI workflows, API integrations, and production-ready business systems.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/n8n-automation-developer" },
  openGraph: { title, description, url: `${siteUrl}/n8n-automation-developer`, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const proof = testimonials.filter((item) => item.projectTitle.includes("n8n"));

export default function N8nAutomationDeveloperPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <SiteHeader />
      <main className="pt-32 pb-24">
        <SectionContainer className="max-w-4xl">
          <p className="text-caption uppercase tracking-wider text-[var(--accent)]">Automation & integrations</p>
          <h1 className="mt-3 max-w-3xl text-h1">n8n automation developer for reliable business workflows.</h1>
          <p className="mt-6 max-w-2xl text-body-large text-[var(--text-secondary)]">
            I build and improve n8n automations that connect forms, CRMs, AI tools, messaging, and internal systems—without leaving fragile workflows behind.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href={bookingUrl}>Book a discovery call</PrimaryButton>
            <SecondaryButton href="/work">View relevant work</SecondaryButton>
          </div>

          <section className="mt-24 grid gap-12 border-t border-[var(--border-subtle)] pt-16 md:grid-cols-2">
            <div>
              <h2 className="text-h2">What I build</h2>
              <ul className="mt-6 space-y-4 text-body-regular text-[var(--text-secondary)]">
                <li>Lead capture, qualification, and CRM handoffs.</li>
                <li>AI-assisted workflows with guardrails, retries, and clear ownership.</li>
                <li>API, webhook, email, WhatsApp, and database integrations.</li>
                <li>Self-hosted n8n deployments and production hardening.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-h2">How engagements start</h2>
              <ol className="mt-6 space-y-4 text-body-regular text-[var(--text-secondary)]">
                <li>1. Map the manual process and the business outcome.</li>
                <li>2. Design the integration, data handling, and failure paths.</li>
                <li>3. Build, test, document, and hand over a maintainable workflow.</li>
              </ol>
            </div>
          </section>

          <section className="mt-24 border-t border-[var(--border-subtle)] pt-16">
            <h2 className="text-h2">Relevant work</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link className="modern-card rounded-[var(--radius-xl)] p-6 hover:border-[var(--accent)]" href="/projects/noxivo">
                <h3 className="text-h3">Noxivo</h3>
                <p className="mt-3 text-body-regular text-[var(--text-secondary)]">Multi-tenant WhatsApp operations and automation platform.</p>
              </Link>
              <Link className="modern-card rounded-[var(--radius-xl)] p-6 hover:border-[var(--accent)]" href="/projects/ai-workflow-automation">
                <h3 className="text-h3">AI-powered workflow automation</h3>
                <p className="mt-3 text-body-regular text-[var(--text-secondary)]">Connected business tools, AI, and operational workflows.</p>
              </Link>
            </div>
          </section>

          {proof.length > 0 && (
            <section className="mt-24 border-t border-[var(--border-subtle)] pt-16">
              <h2 className="text-h2">Client feedback</h2>
              {proof.map((item) => (
                <blockquote className="mt-6 max-w-2xl text-body-large text-[var(--text-secondary)]" key={item.projectTitle}>
                  “{item.quote}” <footer className="mt-3 text-sm font-semibold text-[var(--text-primary)]">— {item.author}, {item.projectTitle}</footer>
                </blockquote>
              ))}
            </section>
          )}
        </SectionContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
