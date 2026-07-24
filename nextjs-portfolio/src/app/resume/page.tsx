import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Globe,
  Briefcase,
  Layers,
  Languages as LangIcon,
  MessageSquare,
} from "lucide-react";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import {
  bookingUrl,
  freelancerUrl,
  githubUrl,
  linkedinUrl,
  personId,
  siteUrl,
  upworkUrl,
} from "@/data/schema";
import SiteHeader from "@/components/SiteHeader";

const title = "Resume — Full-Stack Developer & Automation Specialist";
const description =
  "Professional resume of Salmen Khelifi, a Full-Stack Developer & Automation Specialist with 5+ years of experience in React, Next.js, Node.js, Flutter, and AI automation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/resume`,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

const independentSlugs = ["anlingo", "adaptifit"];
const clientSlugs = ["chaktech", "rentiora", "ai-workflow-automation"];

const independentProjects = independentSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => !!p);

const clientProjects = clientSlugs
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => !!p);

const projectRoles: Record<string, string> = {
  chaktech: "Lead Architect & Full-Stack Developer",
  adaptifit: "Full-Stack Developer & AI Specialist",
  rentiora: "Frontend Developer",
  "ai-workflow-automation": "Automation Architect",
  anlingo: "Full-Stack Developer & Automation Specialist",
};

const projectBullets: Record<string, string[]> = {
  chaktech: [
    "Designed a multi-tenant resolver system using Next.js 16, React 19, and PostgreSQL to load custom themes/settings dynamically.",
    "Implemented cash-on-delivery checkout logic with promo codes, timbre fiscal, and atomic database revalidation to ensure order integrity.",
    "Integrated Typesense for instant faceted search and built a secure administrative back-office using Payload CMS.",
  ],
  adaptifit: [
    "Built an interactive mobile experience in Flutter for personalized workout programs and meal tracking.",
    "Integrated OpenAI API and n8n workflow automations to generate adaptive coaching responses and custom training metrics.",
    "Modeled persistent database structures using MongoDB to track user training metrics, body composition, and macronutrients.",
  ],
  rentiora: [
    "Designed a modern, responsive landing page and browse flow showcasing premium luxury vehicles.",
    "Structured clean, semantic HTML layouts to highlight vehicle characteristics, categories, and booking paths.",
  ],
  "ai-workflow-automation": [
    "Built an intelligent n8n automation hub executing Gmail classification, automated AI reply drafting, and CRM logging.",
    "Processed Google Voice SMS and WhatsApp voice messages using OpenAI Whisper for transcription and categorization.",
    "Streamlined business communication by storing classified task data in Google Sheets CRM pipelines.",
  ],
  anlingo: [
    "Built a multi-surface writing suite spanning Next.js web editor, admin portal, and a companion Flutter mobile app.",
    "Created a high-performance Express API utilizing Redis, PostgreSQL, and Gemini API with robust usage limiting and fallbacks.",
    "Integrated payment logic via Stripe, Whop, and MoMo with raw-body webhook verification for automatic subscription updates.",
  ],
};

const coreSkills = [
  {
    title: "Product Engineering",
    skills: "React, Next.js, Flutter, product architecture",
  },
  {
    title: "Backend & Architecture",
    skills: "Node, Express, PostgreSQL, Redis, multi-tenant, Payload CMS",
  },
  {
    title: "Automation & Integrations",
    skills: "n8n, Make.com, APIs, webhooks",
  },
  {
    title: "Mobile & Applied AI",
    skills: "Flutter, OpenAI, Gemini, on-device ML",
  },
];

const knowsAbout = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Flutter",
  "Dart",
  "PostgreSQL",
  "MongoDB",
  "n8n",
  "Make.com",
  "OpenAI API",
  "Gemini API",
  "Vapi AI",
  "Docker",
  "Linux",
  "WordPress",
  "Shopify",
  "Payload CMS",
  "Typesense",
  "Redis",
  "Firebase",
];

const resumeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Salmen Khelifi",
  jobTitle: "Full-Stack Developer & Automation Specialist",
  url: siteUrl,
  mainEntityOfPage: `${siteUrl}/resume`,
  email: "hello@khelifi-salmen.com",
  telephone: "+84961566302",
  address: {
    "@type": "PostalAddress",
    addressCountry: "TN",
  },
  sameAs: [linkedinUrl, githubUrl, upworkUrl, freelancerUrl],
  hasOccupation: {
    "@type": "Occupation",
    name: "Full-Stack Developer & Automation Specialist",
    skills: knowsAbout.join(", "),
  },
  knowsAbout,
};

function renderProjectEntry(project: (typeof projects)[number]) {
  const timeframe = project.snapshot?.timeframe;
  const techBadges = [
    ...(project.techStack.frontend || []),
    ...(project.techStack.backend || []),
    ...(project.techStack.tools || []),
  ].slice(0, 5);

  return (
    <div key={project.slug} className="print-project">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
        <div>
          <h4 className="text-lg font-bold text-[var(--text-primary)] print-text-primary hover:text-[var(--accent)] transition-colors">
            <Link
              href={`/projects/${project.slug}`}
              className="print-link inline-flex min-h-11 items-center gap-1.5"
            >
              {project.title}
              <ExternalLink className="w-3.5 h-3.5 no-print opacity-60" />
            </Link>
          </h4>
          <p className="text-sm text-[var(--accent)] font-medium print-accent">
            {projectRoles[project.slug]}
          </p>
        </div>
        <div className="sm:text-right">
          <span className="text-xs text-[var(--text-tertiary)] print-text-muted block">
            {project.category}
          </span>
          {timeframe && (
            <span className="text-xs text-[var(--text-tertiary)] print-text-muted block">
              {timeframe}
            </span>
          )}
        </div>
      </div>
      <ul className="list-disc pl-5 mb-3 text-sm text-[var(--text-secondary)] space-y-1.5 print-text-secondary">
        {projectBullets[project.slug]?.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 mt-2">
        <span className="text-xs text-[var(--text-tertiary)] mr-1 pt-1 print-text-muted font-semibold">
          Tech stack:
        </span>
        {techBadges.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-0.5 rounded-full border border-[var(--border-muted)] bg-[var(--bg-surface)] text-[var(--text-secondary)] tech-badge print-text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ResumePage() {
  const featuredReview = testimonials.find(
    (t) =>
      t.author === "Austin L." &&
      t.projectTitle === "n8n Automation Workflows Specialist",
  );

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-sans antialiased pb-20 pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeJsonLd),
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          body, html, :root {
            background: #ffffff !important;
            color: #000000 !important;
            background-image: none !important;
          }
          .no-print, nav, header, footer, .bg-blooms {
            display: none !important;
          }
          .print-header {
            border-bottom: 2px solid #000000 !important;
            padding-bottom: 12px !important;
            margin-bottom: 24px !important;
          }
          .print-section {
            page-break-inside: avoid;
            margin-bottom: 20px !important;
          }
          .print-project {
            page-break-inside: avoid;
            margin-bottom: 16px !important;
          }
          .print-text-primary {
            color: #000000 !important;
          }
          .print-text-secondary {
            color: #333333 !important;
          }
          .print-text-muted {
            color: #555555 !important;
          }
          .print-accent {
            color: #000000 !important;
            font-weight: 700 !important;
          }
          .print-border {
            border-color: #cccccc !important;
          }
          .print-grid {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 16px !important;
          }
          .print-skills-grid {
            display: grid !important;
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 12px !important;
          }
          /* Custom spacing for 1-2 pages fit */
          body {
            font-size: 11px !important;
            line-height: 1.4 !important;
          }
          h1 { font-size: 20px !important; margin-bottom: 4px !important; }
          h2 { font-size: 14px !important; margin-bottom: 8px !important; border-bottom: 1px solid #ccc !important; padding-bottom: 2px !important; }
          h3 { font-size: 12px !important; margin-bottom: 2px !important; }
          p, li { font-size: 11px !important; }
          .print-link[href]::after {
            color: #555555;
            content: " (" attr(href) ")";
            font-weight: 400;
          }
          .tech-badge {
            border: none !important;
            background: none !important;
            padding: 0 !important;
            color: #000000 !important;
            font-weight: bold !important;
          }
          .tech-badge::after {
            content: ", ";
          }
          .tech-badge:last-child::after {
            content: "";
          }
        }
      `,
        }}
      />

      <div className="no-print">
        <SiteHeader backHref="/" backLabel="Back to home" />
      </div>

      <main className="mx-auto max-w-4xl px-6 resume-container">
        <header className="border-b border-[var(--border-muted)] pb-8 mb-10 print-header">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-[var(--text-primary)] print-text-primary">
                Salmen Khelifi
              </h1>
              <p className="text-xl font-medium text-[var(--accent)] mb-4 print-accent">
                Full-Stack Developer & Automation Specialist
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[var(--text-secondary)] print-text-secondary">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--text-tertiary)] no-print" />
                  <span>Tunisia · Remote worldwide</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--text-tertiary)] no-print" />
                  <a href="mailto:hello@khelifi-salmen.com" className="inline-flex min-h-11 items-center hover:text-[var(--text-primary)]">
                    hello@khelifi-salmen.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[var(--text-tertiary)] no-print" />
                  <a href="tel:+84961566302" className="inline-flex min-h-11 items-center hover:text-[var(--text-primary)]">
                    +84961566302
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[var(--text-tertiary)] no-print" />
                  <a
                    href={siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="print-link inline-flex min-h-11 items-center gap-1 hover:text-[var(--text-primary)]"
                  >
                    {siteUrl.replace("https://", "")} <ArrowUpRight className="w-3 h-3 no-print" />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-[var(--text-tertiary)] print-text-muted">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="print-link inline-flex min-h-11 items-center underline hover:text-[var(--text-primary)]"
                >
                  LinkedIn
                </a>
                <span className="no-print">·</span>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="print-link inline-flex min-h-11 items-center underline hover:text-[var(--text-primary)]"
                >
                  GitHub
                </a>
                <span className="no-print">·</span>
                <a
                  href={upworkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="print-link inline-flex min-h-11 items-center underline hover:text-[var(--text-primary)]"
                >
                  Upwork
                </a>
                <span className="no-print">·</span>
                <a
                  href={freelancerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="print-link inline-flex min-h-11 items-center underline hover:text-[var(--text-primary)]"
                >
                  Freelancer.com (4.9/5, 8 reviews)
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 no-print shrink-0">
              <a
                href="/salmen-khelifi-cv.pdf"
                download
                className="cta-button cta-primary inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-[var(--text-primary)]"
              >
                <Download className="w-4 h-4" aria-hidden="true" /> Download PDF
              </a>
              <button
                type="button"
                data-cal-namespace="30min"
                data-cal-link="salmen-khelifi/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="cta-button cta-secondary inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold text-[var(--text-primary)] cursor-pointer"
              >
                Book a call <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>

        <section className="mb-10 print-section" aria-labelledby="summary-heading">
          <h2 id="summary-heading" className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 print-text-primary print-border">
            <Briefcase className="w-5 h-5 text-[var(--accent)] no-print" /> Professional Summary
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed print-text-secondary">
            Full-stack product engineer and automation specialist with 5+ years building web, mobile, and SaaS systems. I own delivery across architecture, backend, frontend, integrations, and deployment, with particular experience in multi-tenant platforms and operational automation. I maintain a{" "}
            <a
              href={freelancerUrl}
              target="_blank"
              rel="noreferrer"
              className="print-link inline-flex min-h-11 items-center underline hover:text-[var(--text-primary)]"
            >
              4.9/5 rating across 8 reviews on Freelancer.com
            </a>
            .
          </p>
        </section>

        <section className="mb-10 print-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 print-text-primary print-border">
            <Layers className="w-5 h-5 text-[var(--accent)] no-print" /> Core Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print-skills-grid">
            {coreSkills.map((cat) => (
              <div
                key={cat.title}
                className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
              >
                <h3 className="font-semibold mb-2 text-[var(--text-primary)] print-text-primary">
                  {cat.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] print-text-secondary">
                  {cat.skills}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 print-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 print-text-primary print-border">
            <Briefcase className="w-5 h-5 text-[var(--accent)] no-print" /> Selected Experience & Projects
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-md font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4 print-text-secondary">
                Independent Products
              </h3>
              <div className="space-y-6">
                {independentProjects.map(renderProjectEntry)}
              </div>
            </div>

            <div>
              <h3 className="text-md font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4 print-text-secondary">
                Client & Freelance Projects
              </h3>
              <div className="space-y-6">
                {clientProjects.map(renderProjectEntry)}
              </div>
            </div>
          </div>
        </section>

        {/* Client Feedback */}
        {featuredReview && (
          <section className="mb-10 print-section" aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 print-text-primary print-border">
              <MessageSquare className="w-5 h-5 text-[var(--accent)] no-print" /> Client Feedback
            </h2>
            <blockquote className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] relative print-project">
              <div className="flex gap-1 text-[var(--accent)] mb-3 no-print" aria-label={`${featuredReview.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm italic text-[var(--text-secondary)] mb-4 print-text-secondary">
                &ldquo;{featuredReview.quote}&rdquo;
              </p>
              <footer className="not-italic text-xs block">
                <span className="font-bold text-[var(--text-primary)] print-text-primary block">
                  {featuredReview.author}
                </span>
                <span className="text-[var(--text-tertiary)] print-text-muted">
                  {featuredReview.projectTitle}
                </span>
              </footer>
            </blockquote>
          </section>
        )}

        {/* Languages */}
        <section className="print-section" aria-labelledby="languages-heading">
          <h2 id="languages-heading" className="text-xl font-bold mb-4 flex items-center gap-2 text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 print-text-primary print-border">
            <LangIcon className="w-5 h-5 text-[var(--accent)] no-print" /> Languages
          </h2>
          <div className="flex flex-wrap gap-6 text-sm text-[var(--text-secondary)] print-text-secondary">
            <div>
              <span className="font-semibold text-[var(--text-primary)] print-text-primary">Arabic:</span> Native
            </div>
            <div>
              <span className="font-semibold text-[var(--text-primary)] print-text-primary">French:</span> Basic (understand well, speak a little)
            </div>
            <div>
              <span className="font-semibold text-[var(--text-primary)] print-text-primary">English:</span> Professional
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
