import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { bookingUrl, projectJsonLd } from "@/data/schema";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectToc, { type TocSection } from "@/components/ProjectToc";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

const tocSections: TocSection[] = [
  { id: "overview", label: "Overview" },
  { id: "business-problem", label: "Business Problem" },
  { id: "product-solution", label: "Product Solution" },
  { id: "contribution", label: "My Contribution" },
  { id: "workflows", label: "Main Workflows" },
  { id: "architecture", label: "AI & Integrations" },
  { id: "gallery", label: "Visual Gallery" },
  { id: "qa-evidence", label: "Verified QA" },
  { id: "lessons", label: "Engineering Lessons" },
  { id: "next", label: "What I Would Improve" },
  { id: "contact", label: "Discuss a Project" },
];

const workflowGroups = [
  {
    title: "CRM and segmentation",
    text: "Create, import, organize, and segment contacts so campaigns, messages, and quotes use the same customer record.",
  },
  {
    title: "Email and WhatsApp campaigns",
    text: "Prepare audiences, content, schedules, and recipient states for both channels from one campaign workflow.",
  },
  {
    title: "Quotes and PDF workflows",
    text: "Build catalog-backed quotes, generate PDFs, track customer actions, and create related follow-ups.",
  },
  {
    title: "Calendar and follow-ups",
    text: "Plan customer meetings and sales activity close to the contact or quote that created the next action.",
  },
  {
    title: "Unified messaging",
    text: "Read conversations with customer context visible, request an AI suggestion, and review a reply before sending.",
  },
  {
    title: "AI assistant and internal chatbot",
    text: "Support sales, content, knowledge, catalog, landing-page, email-template, and suggested-reply tasks inside the workspace.",
  },
  {
    title: "Catalog and public pages",
    text: "Maintain services, packs, and products, then reuse that material in offers and editable public landing pages.",
  },
  {
    title: "Agents and Odoo synchronization",
    text: "Invite team members, control workspace access, and bring back-office contract data into the sales workflow.",
  },
];

const architecture = [
  {
    name: "Vue 3 and Inertia.js",
    detail: "Role-aware pages for managers, agents, operations staff, and public visitors.",
  },
  {
    name: "Laravel 13",
    detail: "Routes, sessions, validation, controllers, domain services, and persistence in PHP 8.3.",
  },
  {
    name: "Services and queued jobs",
    detail: "Provider-specific behavior and longer-running work stay outside UI components and normal page requests.",
  },
  {
    name: "External systems",
    detail: "Boundaries cover AI, Brevo, WAHA, calendar providers, Odoo, and domain services.",
  },
];

const portfolioMedia = [
  {
    title: "SyncLead dashboard overview",
    src: "/images/synclead/portfolio-media/mp4/dashboard-overview.mp4",
    poster: "/images/synclead/portfolio-media/png/dashboard-overview.png",
  },
  {
    title: "SyncLead unified messaging workspace with conversation and customer context",
    src: "/images/synclead/portfolio-media/mp4/unified-messaging.mp4",
    poster: "/images/synclead/portfolio-media/png/unified-messaging.png",
  },
  {
    title: "SyncLead AI assistant workspace for sales and content tasks",
    src: "/images/synclead/portfolio-media/mp4/ai-assistant.mp4",
    poster: "/images/synclead/portfolio-media/png/ai-assistant.png",
  },
  {
    title: "SyncLead email and WhatsApp campaign management screen",
    src: "/images/synclead/portfolio-media/mp4/campaign-management.mp4",
    poster: "/images/synclead/portfolio-media/png/campaign-management.png",
  },
  {
    title: "SyncLead quote detail screen with line items, totals, and status actions",
    src: "/images/synclead/portfolio-media/mp4/quote-detail.mp4",
    poster: "/images/synclead/portfolio-media/png/quote-detail.png",
  },
  {
    title: "SyncLead shared calendar with scheduled sales follow-ups",
    src: "/images/synclead/portfolio-media/mp4/shared-calendar.mp4",
    poster: "/images/synclead/portfolio-media/png/shared-calendar.png",
  },
  {
    title: "Public landing page created and managed through SyncLead",
    src: "/images/synclead/portfolio-media/mp4/public-landing-page.mp4",
    poster: "/images/synclead/portfolio-media/png/public-landing-page.png",
  },
] as const;

const qaCoverage = [
  ["42/42", "requested screens returned HTTP 200"],
  ["42", "4K screenshots at 3840 × 2160"],
  ["42", "4K H.264 MP4 clips at 3840 × 2160"],
  ["42", "optimized 1080p GIFs at 1920 × 1080"],
] as const;

function CaseSection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} className="scroll-mt-32" aria-labelledby={headingId}>
      <p className="mb-3 text-caption text-[var(--accent)]">{eyebrow}</p>
      <h2 id={headingId} className="mb-6 text-h2">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function SyncLeadCaseStudy({ project }: { project: Project }) {
  const jsonLd = projectJsonLd(project);

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader backHref="/work" backLabel="Back to Work" />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 sm:px-6 md:pt-32 lg:px-8">
        <div className="lg:flex lg:gap-12">
          <ProjectToc sections={tocSections} />

          <main id="main-content" className="min-w-0 flex-1 space-y-20">
            <section id="overview" className="scroll-mt-32" aria-labelledby="synclead-title">
              <div className="flex flex-wrap items-center gap-3 text-caption text-[var(--text-secondary)]">
                <span>{project.category}</span>
                <span aria-hidden="true">•</span>
                <span className="text-[var(--accent)]">Team case study</span>
              </div>
              <h1 id="synclead-title" className="mt-5 text-h1">
                SyncLead
              </h1>
              <p className="mt-6 max-w-3xl text-body-large text-[var(--text-secondary)]">
                One workspace for contacts, campaigns, quotes, messaging, calendars, AI assistance, and back-office synchronization.
              </p>

              <dl className="mt-8 grid gap-4 rounded-[var(--radius-xl)] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] sm:grid-cols-2 lg:grid-cols-4 md:p-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Role</dt>
                  <dd className="mt-2 text-sm font-semibold">Full-Stack &amp; AI Engineer · Team Contributor</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Stack</dt>
                  <dd className="mt-2 text-sm">Laravel 13, PHP 8.3, Vue 3, Inertia.js, Tailwind CSS 4, Vite, FullCalendar</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Project type</dt>
                  <dd className="mt-2 text-sm">Sales operations and AI workspace</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Live site</dt>
                  <dd className="mt-2 text-sm">
                    <a
                      href="https://synclead.site/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-1 font-semibold text-[var(--accent)] hover:underline"
                    >
                      synclead.site <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="relative mt-10 aspect-video overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-border-bright)] bg-black shadow-2xl">
                <Image
                  src="/images/synclead/portfolio-media/png/dashboard-overview.png"
                  alt="SyncLead sales dashboard with campaign, quote, contact, and activity summaries"
                  fill
                  priority
                  sizes="(max-width: 1024px) 95vw, 900px"
                  className="object-cover object-top"
                />
              </div>
            </section>

            <CaseSection id="business-problem" eyebrow="The context" title="Business problem">
              <div className="modern-card rounded-[var(--radius-xl)] p-7 md:p-9">
                <p className="text-body-large text-[var(--text-secondary)]">
                  Small sales teams often divide customer work across spreadsheets, inboxes, messaging tools, calendars, quote documents, and an ERP. Each handoff can duplicate data and remove context from the next action. The practical problem is not another isolated tool. It is keeping the customer lifecycle connected from first contact to campaign, conversation, quote, follow-up, and back-office record.
                </p>
              </div>
            </CaseSection>

            <CaseSection id="product-solution" eyebrow="The product" title="Product solution">
              <p className="mb-8 max-w-3xl text-body-large text-[var(--text-secondary)]">
                SyncLead gives managers, agents, and operations staff one role-aware workspace for customer and sales work. Laravel owns routing, validation, domain logic, jobs, integrations, and persistence. Vue pages delivered through Inertia.js keep those workflows in one responsive interface.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <article key={feature.title} className="modern-card rounded-2xl p-6">
                    <h3 className="text-h3">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{feature.description}</p>
                  </article>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="contribution" eyebrow="Team contribution" title="My contribution as a team member">
              <div className="grid gap-6 md:grid-cols-[0.75fr_1.25fr]">
                <div className="glass-panel rounded-[var(--radius-xl)] p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">Role</p>
                  <p className="mt-3 text-lg font-bold">Full-Stack &amp; AI Engineer · Team Contributor</p>
                </div>
                <div className="modern-card rounded-[var(--radius-xl)] p-7">
                  <p className="text-body-regular text-[var(--text-secondary)]">
                    I contributed within the product team across Laravel and Vue application flows, AI-assisted product experiences, integration-aware workflows, demo data, and end-to-end verification. For the portfolio documentation run, I also built a deterministic local demo dataset and verified the application screens without triggering live messages, purchases, OAuth connections, AI provider calls, or external synchronization.
                  </p>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="workflows" eyebrow="Daily operations" title="Main workflows and use cases">
              <div className="grid gap-4 sm:grid-cols-2">
                {workflowGroups.map((workflow, index) => (
                  <article key={workflow.title} className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent-dim)] text-xs font-bold text-[var(--accent)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-bold">{workflow.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">{workflow.text}</p>
                  </article>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="architecture" eyebrow="System boundaries" title="AI and integration architecture">
              <ol className="grid gap-4 md:grid-cols-4">
                {architecture.map((layer, index) => (
                  <li key={layer.name} className="modern-card relative rounded-2xl p-5">
                    <span className="text-xs font-bold text-[var(--accent)]">0{index + 1}</span>
                    <h3 className="mt-3 font-bold">{layer.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{layer.detail}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--accent-dim)] p-5">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  The AI layer supports concrete sales tasks and presents suggestions for review. Background jobs isolate campaign delivery, Odoo synchronization, knowledge-file processing, and WhatsApp activity. Provider connections stayed disabled during the verified demo, so the media proves local application behavior rather than live provider delivery.
                </p>
              </div>
            </CaseSection>

            <CaseSection id="gallery" eyebrow="Selected product views" title="Visual gallery">
              <figure className="modern-card overflow-hidden rounded-[var(--radius-xl)]">
                <Image
                  src="/images/synclead/full-project-walkthrough.gif"
                  alt="Animated SyncLead walkthrough showing the dashboard, messaging, AI assistant, campaigns, quotes, calendar, and public landing page"
                  width={1280}
                  height={720}
                  unoptimized
                  className="aspect-video w-full bg-black object-cover"
                />
                <figcaption className="p-4 text-sm text-[var(--text-secondary)]">
                  Full project walkthrough across seven current product views
                </figcaption>
              </figure>
              <h3 className="mt-10 text-h3">Selected product walkthroughs</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {portfolioMedia.map((media) => (
                  <figure key={media.src} className="modern-card overflow-hidden rounded-[var(--radius-xl)]">
                    <video
                      src={media.src}
                      poster={media.poster}
                      controls
                      preload="metadata"
                      playsInline
                      className="aspect-video w-full bg-black object-cover"
                      aria-label={media.title}
                    />
                    <figcaption className="p-4 text-sm text-[var(--text-secondary)]">
                      {media.title}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="qa-evidence" eyebrow="Demo and QA coverage" title="Verified QA evidence">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {qaCoverage.map(([value, label]) => (
                  <div key={label} className="modern-card rounded-2xl p-6">
                    <p className="text-3xl font-black text-[var(--accent)]">{value}</p>
                    <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  <div className="space-y-2 text-sm leading-7 text-[var(--text-secondary)]">
                    <p>These numbers describe demo and QA coverage. They are not customer adoption, revenue, conversion, or commercial performance metrics.</p>
                    <p>Production was inspected read-only. The public home and login returned HTTP 200, and the protected dashboard redirected unauthenticated traffic to login. No code was deployed and no production data was changed during the documentation run.</p>
                  </div>
                </div>
              </div>
            </CaseSection>

            <CaseSection id="lessons" eyebrow="Engineering perspective" title="Engineering lessons">
              <div className="space-y-4">
                {[
                  "Cross-channel products need provider-specific service boundaries because messaging, AI, calendars, campaigns, and ERP synchronization fail in different ways.",
                  "AI is more useful when it supports a clear task, receives bounded context, and leaves the final action under human review.",
                  "A portfolio demo deserves release discipline: deterministic data, safe provider states, route coverage, validated media, and documented limitations.",
                ].map((lesson) => (
                  <div key={lesson} className="flex gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">{lesson}</p>
                  </div>
                ))}
              </div>
            </CaseSection>

            <CaseSection id="next" eyebrow="Known limitation" title="What I would improve next">
              <div className="modern-card rounded-[var(--radius-xl)] p-7 md:p-9">
                <p className="text-body-regular text-[var(--text-secondary)]">
                  The local public landing page made one chatbot request to a mismatched localhost origin. From the 127.0.0.1 demo origin, that produced one CORS request failure and two related console errors. I would route the request through the application origin or one shared environment-backed base URL, then add a browser check that fails when the public page calls a different origin. The page still rendered, and the QA manifest retains the evidence.
                </p>
              </div>
            </CaseSection>

            <section id="contact" className="scroll-mt-32" aria-labelledby="contact-heading">
              <div className="rounded-[var(--radius-xl)] border border-[var(--glass-border-bright)] bg-[var(--glass-bg-elevated)] p-8 text-center shadow-[var(--glass-shadow)] md:p-12">
                <p className="text-caption text-[var(--accent)]">For recruiters, hiring managers, agencies, and potential clients</p>
                <h2 id="contact-heading" className="mx-auto mt-4 max-w-2xl text-h2">Need full-stack or AI engineering support for a connected product?</h2>
                <p className="mx-auto mt-5 max-w-2xl text-body-regular text-[var(--text-secondary)]">
                  I can contribute across product workflows, integrations, AI-assisted features, and evidence-led QA within an existing team or delivery partnership.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <PrimaryButton href={bookingUrl}>
                    Discuss a similar project <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </PrimaryButton>
                  <SecondaryButton href="https://synclead.site/" target="_blank" rel="noreferrer">
                    View SyncLead <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                  </SecondaryButton>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
