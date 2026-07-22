import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  createLucideIcon,
  Database,
  ExternalLink,
  Layers,
  MessageSquare,
  Server,
  ShieldCheck,
  Smartphone,
  Wrench,
  Zap,
} from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { bookingUrl, projectJsonLd, siteUrl } from "@/data/schema";
import { BLUR_PLACEHOLDER } from "@/data/homepage";
import ProjectToc, { type TocSection } from "@/components/ProjectToc";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getCaseStudyNarrative } from "@/lib/content/case-study-narratives";
import { getPublishedPosts } from "@/lib/content/blog";
import type { CaseStudyPlacement } from "@/lib/content/schemas";


type Params = { slug: string };

const GithubIcon = createLucideIcon("Github", [
  [
    "path",
    {
      key: "github-path",
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
  ],
]);

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  const path = `/projects/${project.slug}`;
  const title = `${project.title} - ${project.category}`;
  const heroAlt = project.gallery.find((shot) => shot.src === project.heroImage)?.alt || "";
  const socialImage = {
    url: project.heroImage || "/opengraph-image",
    alt: project.heroImage
      ? heroAlt
      : "Salmen Khelifi - Full-Stack Developer & Automation Specialist",
  };
  return {
    title,
    description: project.tagline,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: project.tagline,
      url: `${siteUrl}${path}`,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.tagline,
      images: [socialImage],
    },
  };
}

function TechBadge({ label }: { label: string }) {
  return <span className="tech-badge">{label}</span>;
}

function ProjectLinks({ project, large }: { project: Project; large?: boolean }) {
  const { github, live } = project.links;
  if (!github && !live) return null;
  const base = large
    ? "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-all focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
    : "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-[var(--accent)]";
  return (
    <div className="flex flex-wrap gap-4">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={`${base} system-live-link`}
        >
          Live Demo <ExternalLink className={large ? "w-5 h-5" : "w-4 h-4"} aria-hidden="true" />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={`${base} border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] backdrop-blur-xl hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)]`}
        >
          <GithubIcon className={large ? "w-5 h-5" : "w-4 h-4"} aria-hidden="true" /> Source Code
        </a>
      )}
    </div>
  );
}

function StackCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="modern-card rounded-[var(--radius-xl)] p-6">
      <h3 className="mb-4 flex items-center gap-2 text-h3 text-[var(--accent)]">
        {icon} {title}
      </h3>
      <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ArchitectureComponent = {
  name: string;
  tech: string;
  role: string;
  icon: React.ReactNode;
};

function getFactualArchitecture(project: Project): ArchitectureComponent[] {
  const components: ArchitectureComponent[] = [];

  // Luxe Spa Booking specific factual components
  if (project.slug === "luxe-spa") {
    return [
      {
        name: "Public Booking Interface",
        tech: "Next.js 16 (App Router), Tailwind CSS 4, Zustand",
        role: "Client-facing white-label booking funnel & service selector",
        icon: <Smartphone className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Admin & Staff Dashboard",
        tech: "shadcn/ui, Socket.io Client, Zustand",
        role: "Real-time agenda management, receptionist chat & service configuration",
        icon: <Layers className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "API & Access Control",
        tech: "Express.js (TypeScript), Helmet, Zod Validation",
        role: "Strict RBAC (Owner > Manager > Receptionist > Technician > Customer)",
        icon: <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Data & ORM Layer",
        tech: "PostgreSQL, Prisma ORM",
        role: "Multi-tenant business settings, appointment logs & customer CRM",
        icon: <Database className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Real-Time Pipeline",
        tech: "Socket.io WebSockets",
        role: "Instant schedule synchronization & live receptionist inbox",
        icon: <Zap className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Async Queue Workers",
        tech: "Redis, BullMQ Queue Workers",
        role: "Offloaded email dispatch, SMS reminders & background job processing",
        icon: <Cpu className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Automated Messaging",
        tech: "Twilio API, Nodemailer",
        role: "Automated SMS confirmations, review invitations & customer campaigns",
        icon: <MessageSquare className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "AI Concierge Engine",
        tech: "Gemini API",
        role: "Conversational assistant referencing live catalog & provider availability",
        icon: <Code2 className="w-5 h-5 text-[var(--accent)]" />,
      },
    ];
  }

  // Anlingo factual components
  if (project.slug === "anlingo") {
    return [
      {
        name: "Web Editor & Marketing Site",
        tech: "Next.js 14/16 App Router, TailwindCSS, React",
        role: "Public landing funnel & interactive writing workspace",
        icon: <Smartphone className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Express API Services",
        tech: "Express (TypeScript), Redis, Zod Contracts",
        role: "Grammar, translation, rewrite, dictation & usage API routes",
        icon: <Server className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Flutter Mobile Companion",
        tech: "Flutter, Riverpod, GoRouter, Dio",
        role: "Cross-platform mobile client with Sentry & Firebase Auth",
        icon: <Smartphone className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Database & Authentication",
        tech: "Firebase Auth, Firestore, PostgreSQL",
        role: "User identity, writing history & plan entitlement storage",
        icon: <Database className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Protected Admin System",
        tech: "Next.js Admin, 2FA Security",
        role: "Analytics, user administration, support & security operations",
        icon: <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Guarded AI Provider Pool",
        tech: "Gemini, OpenRouter, NVIDIA, DeepSeek",
        role: "Multi-provider AI routing with rate limiting & kill switches",
        icon: <Cpu className="w-5 h-5 text-[var(--accent)]" />,
      },
    ];
  }

  // ChakTech factual components
  if (project.slug === "chaktech") {
    return [
      {
        name: "Customer Storefront",
        tech: "Next.js 16, React 19, FR/AR RTL i18n",
        role: "Tunisia-first e-commerce experience with zero-FOUC tenant theming",
        icon: <Smartphone className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Payload Back-Office",
        tech: "Payload CMS, Express, TypeScript",
        role: "Admin surface for catalog, orders, inventory & localized i18n",
        icon: <Layers className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Tenant & Commerce API",
        tech: "Express, Drizzle ORM, Zod",
        role: "Hostname domain resolution, price revalidation & COD order processing",
        icon: <Server className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Database & Cache",
        tech: "PostgreSQL 16, Redis",
        role: "Tenant registrations, products, order queues & session storage",
        icon: <Database className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Search Engine",
        tech: "Typesense",
        role: "Typo-tolerant product search & faceted filtering",
        icon: <Zap className="w-5 h-5 text-[var(--accent)]" />,
      },
    ];
  }

  // Noxivo factual components
  if (project.slug === "noxivo") {
    return [
      {
        name: "Protected Agency Dashboard",
        tech: "Next.js 15 App Router, React 19, TailwindCSS",
        role: "Multi-tenant workspace management & WhatsApp team inbox",
        icon: <Layers className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Fastify Workflow Engine",
        tech: "Fastify 5, BullMQ, Redis",
        role: "DAG-style automation engine, message queues & event publishing",
        icon: <Cpu className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Database & Models",
        tech: "MongoDB, Mongoose, Zod Contracts",
        role: "Agency, tenant, workspace & WhatsApp conversation state",
        icon: <Database className="w-5 h-5 text-[var(--accent)]" />,
      },
      {
        name: "Developer Portal",
        tech: "Docusaurus 3",
        role: "Public API documentation, webhooks & n8n integration guides",
        icon: <Code2 className="w-5 h-5 text-[var(--accent)]" />,
      },
    ];
  }

  // Generic factual fallback built strictly from project.techStack
  if (project.techStack.frontend && project.techStack.frontend.length > 0) {
    components.push({
      name: "Frontend Application",
      tech: project.techStack.frontend.join(", "),
      role: "User interface & interactive user experience",
      icon: <Smartphone className="w-5 h-5 text-[var(--accent)]" />,
    });
  }

  if (project.techStack.backend && project.techStack.backend.length > 0) {
    components.push({
      name: "Backend Services",
      tech: project.techStack.backend.join(", "),
      role: "Business logic, API routes & server infrastructure",
      icon: <Server className="w-5 h-5 text-[var(--accent)]" />,
    });
  }

  if (project.techStack.tools && project.techStack.tools.length > 0) {
    components.push({
      name: "Tools & Integrations",
      tech: project.techStack.tools.join(", "),
      role: "Deployment, automation & external services",
      icon: <Wrench className="w-5 h-5 text-[var(--accent)]" />,
    });
  }

  return components;
}

export default async function ProjectProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const narrative = await getCaseStudyNarrative(slug);

  const slugIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[(slugIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(slugIndex + 1) % projects.length];

  const hasDesktopGallery = project.galleryAspect === "desktop";
  const jsonLd = projectJsonLd(project);
  const architectureItems = getFactualArchitecture(project);
  const relatedPosts = getPublishedPosts().filter((post) =>
    post.frontmatter.relatedCaseStudies.includes(project.slug),
  );
  const heroAlt = project.gallery.find((shot) => shot.src === project.heroImage)?.alt || "";
  const snapshotFields = project.snapshot
    ? [
        ["Timeframe", project.snapshot.timeframe],
        ["Status", project.snapshot.status?.replaceAll("-", " ")],
        ["Role", project.snapshot.role],
        ["Ownership", project.snapshot.ownership],
        ["Industry", project.snapshot.industry],
        ["Platform", project.snapshot.platform],
      ].filter((field): field is [string, string] => Boolean(field[1]))
    : [];

  // Construct table of contents sections dynamically based on present data
  const renderedSections: TocSection[] = [
    { id: "hero", label: "Overview" },
    { id: "impact", label: "Impact & Value" },
    { id: "context-and-problem", label: "Context & Problem" },
    { id: "solution", label: "The Solution" },
  ];

  if (architectureItems.length > 0) {
    renderedSections.push({ id: "architecture", label: "Architecture" });
  }

  if (project.features.length > 0) {
    renderedSections.push({ id: "key-product-flows", label: "Key Product Flows" });
    renderedSections.push({ id: "engineering-decisions", label: "Engineering Decisions" });
  }

  if (project.challenges && project.challenges.length > 0) {
    renderedSections.push({ id: "challenges", label: "Challenges & Solutions" });
  }

  if (project.gallery.length > 0) {
    renderedSections.push({ id: "visual-gallery", label: "Visual Gallery" });
  }

  renderedSections.push({ id: "technology-stack", label: "Technology Stack" });
  if (relatedPosts.length > 0) {
    renderedSections.push({ id: "related-articles", label: "Related Articles" });
  }
  renderedSections.push({ id: "final-result", label: "Results & Lessons" });
  renderedSections.push({ id: "start-similar-project", label: "Start a Project" });

  if (narrative && narrative.toc.length > 0) {
    let insertAfterId = "solution";
    if (narrative.placement === "after-architecture" && architectureItems.length > 0) {
      insertAfterId = "architecture";
    } else if (
      narrative.placement === "after-key-product-flows" &&
      project.features.length > 0
    ) {
      insertAfterId = "key-product-flows";
    } else if (
      narrative.placement === "after-engineering-decisions" &&
      project.features.length > 0
    ) {
      insertAfterId = "engineering-decisions";
    } else if (narrative.placement === "before-gallery") {
      if (project.challenges && project.challenges.length > 0) {
        insertAfterId = "challenges";
      } else if (project.features.length > 0) {
        insertAfterId = "engineering-decisions";
      } else if (architectureItems.length > 0) {
        insertAfterId = "architecture";
      }
    }

    const idx = renderedSections.findIndex((s) => s.id === insertAfterId);
    if (idx !== -1) {
      renderedSections.splice(idx + 1, 0, ...narrative.toc);
    } else {
      renderedSections.push(...narrative.toc);
    }
  }

  const NarrativeComponent = narrative?.Component;
  const narrativeContent = NarrativeComponent ? (
    <section
      id={narrative.toc[0]?.id || "case-study-narrative"}
      className="scroll-mt-32 space-y-6"
    >
      <NarrativeComponent />
    </section>
  ) : null;

  const renderedNarrativePositions = new Set<string>();

  const renderNarrativeSlot = (position: CaseStudyPlacement) => {
    if (!narrative || !narrativeContent) return null;
    if (narrative.placement === position && !renderedNarrativePositions.has("narrative")) {
      renderedNarrativePositions.add("narrative");
      return narrativeContent;
    }
    return null;
  };


  return (
    <div className="min-h-screen text-[var(--text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <SiteHeader backHref="/work" backLabel="Back to Work" />

      {/* Main Layout Container with Toc */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 pt-28 md:pt-32">
        <div className="lg:flex lg:gap-12">
          {/* Table of Contents component */}
          <ProjectToc sections={renderedSections} />

          {/* Main Case Study Content */}
          <main className="flex-1 min-w-0 space-y-20">
            {/* Section 1: Hero */}
            <section id="hero" className="scroll-mt-32">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-caption text-[var(--text-secondary)]">
                    {project.category}
                  </span>
                  <span className="text-[var(--text-tertiary)]">•</span>
                  <span className="text-xs font-semibold text-[var(--accent)]">
                    Full-Stack & Automation
                  </span>
                </div>
                <h1 className="text-h1">{project.title}</h1>
                <p className="text-body-large text-[var(--text-secondary)] max-w-3xl">
                  {project.tagline}
                </p>
                {snapshotFields.length > 0 && (
                  <div className="glass-panel rounded-[var(--radius-xl)] p-5 md:p-6">
                    <h2 className="text-caption text-[var(--accent)] mb-4">Project Snapshot</h2>
                    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {snapshotFields.map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                            {label}
                          </dt>
                          <dd className="mt-1 text-sm text-[var(--text-primary)] first-letter:uppercase">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {project.badges.map((badge) => (
                    <TechBadge key={badge} label={badge} />
                  ))}
                </div>
                <div className="pt-4">
                  <ProjectLinks project={project} large />
                </div>
              </div>

              {project.heroImage && (
                <div className="mt-10">
                  <div
                    className={`relative mx-auto w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-border)] bg-[var(--bg-surface)] shadow-[var(--glass-shadow)] ${
                      hasDesktopGallery ? "aspect-video max-w-4xl" : "aspect-[9/16] max-w-md"
                    }`}
                  >
                    <Image
                      src={project.heroImage}
                      alt={heroAlt}
                      fill
                      priority
                      sizes={
                        hasDesktopGallery
                          ? "(max-width: 1024px) 95vw, 880px"
                          : "(max-width: 768px) 90vw, 420px"
                      }
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                  </div>
                </div>
              )}
            </section>

            {/* Section 2: Impact */}
            <section id="impact" className="scroll-mt-32" aria-labelledby="impact-heading">
              <div className="modern-card rounded-[var(--radius-xl)] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-dim)] text-[var(--accent)]">
                    <Zap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="impact-heading" className="text-h2">
                      Scope & Ownership
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      What I built and owned
                    </p>
                  </div>
                </div>
                <p className="text-body-large text-[var(--text-primary)] mb-8">
                  {project.slug === "luxe-spa" &&
                    "A solo-built multi-tenant white-label booking and CRM platform (in development), designed to avoid per-transaction SaaS fees, with sub-10-second vertical preset switching, real-time technician sync, and an AI concierge scheduling flow."}
                  {project.slug === "anlingo" &&
                    "A solo-built AI writing product (in development) spanning web editor, Express API, usage-limited subscription billing, and a Flutter companion, keeping the free path lightweight and routing advanced work through guarded backend AI providers."}
                  {project.slug === "chaktech" &&
                    "Built a multi-tenant commerce platform for Tunisia with instant hostname tenant resolution, zero-FOUC server theming, cash-on-delivery checkout, and Payload CMS back-office."}
                  {project.slug === "noxivo" &&
                    "Created a WhatsApp-first automation platform with multi-tenant agency workspaces, Fastify workflow engine, BullMQ job queues, and Docusaurus developer documentation."}
                  {project.slug !== "luxe-spa" &&
                    project.slug !== "anlingo" &&
                    project.slug !== "chaktech" &&
                    project.slug !== "noxivo" &&
                    `Engineered a high-performance system for ${project.title}, delivering reliable ${project.category.toLowerCase()} capabilities strictly backed by clean code and robust software architecture.`}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.slice(0, 4).map((feat) => (
                    <div
                      key={feat.title}
                      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 p-4"
                    >
                      <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0" aria-hidden="true" />
                        {feat.title}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Context & Problem */}
            <section id="context-and-problem" className="scroll-mt-32" aria-labelledby="problem-heading">
              <h2 id="problem-heading" className="mb-6 text-h2">
                Context & Problem Statement
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="modern-card rounded-[var(--radius-xl)] p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-3">
                    The Challenge Solved
                  </div>
                  <h3 className="text-h3 mb-4">Core Operational Problem</h3>
                  <p className="text-body-regular text-[var(--text-secondary)]">
                    {project.overview.problem}
                  </p>
                </div>
                <div className="modern-card rounded-[var(--radius-xl)] p-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                    Target Users & Audience
                  </div>
                  <h3 className="text-h3 mb-4">Who This Was Built For</h3>
                  <p className="text-body-regular text-[var(--text-secondary)]">
                    {project.overview.audience}
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Solution */}
            <section id="solution" className="scroll-mt-32" aria-labelledby="solution-heading">
              <div className="glass-panel rounded-[var(--radius-xl)] p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-dim)] text-[var(--accent)]">
                    <Layers className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="solution-heading" className="text-h2">
                      The Architectural Solution
                    </h2>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                      System Implementation
                    </p>
                  </div>
                </div>
                <p className="text-body-large text-[var(--text-secondary)] leading-relaxed">
                  {project.overview.what}
                </p>
              </div>
            </section>

            {renderNarrativeSlot("after-solution")}

            {/* Section 5: Architecture */}
            {architectureItems.length > 0 && (
              <section id="architecture" className="scroll-mt-32" aria-labelledby="arch-heading">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 id="arch-heading" className="text-h2">
                      System Architecture & Components
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      Factual component topology derived from technology stack and features
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {architectureItems.map((comp) => (
                    <div
                      key={comp.name}
                      className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 shadow-[var(--glass-shadow)] transition-all hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)]"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--glass-border)]">
                          {comp.icon}
                        </div>
                        <h3 className="text-sm font-bold text-[var(--text-primary)]">
                          {comp.name}
                        </h3>
                      </div>
                      <div className="text-xs font-medium text-[var(--accent)] mb-2 font-mono">
                        {comp.tech}
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        {comp.role}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {renderNarrativeSlot("after-architecture")}

            {/* Section 6: Key Product Flows */}
            {project.features.length > 0 && (
              <section id="key-product-flows" className="scroll-mt-32" aria-labelledby="flows-heading">
                <h2 id="flows-heading" className="mb-8 text-h2">
                  Key Product Flows
                </h2>
                <div className="space-y-12">
                  {project.features.map((feat, idx) => {
                    const matchedScreenshot =
                      project.gallery.length > 0
                        ? project.gallery[idx % project.gallery.length]
                        : null;
                    const isEven = idx % 2 === 0;

                    return (
                      <div
                        key={feat.title}
                        className={`glass-panel rounded-[var(--radius-xl)] p-6 md:p-8 flex flex-col ${
                          matchedScreenshot ? "lg:flex-row lg:items-center lg:gap-8" : ""
                        }`}
                      >
                        <div className={`space-y-4 ${matchedScreenshot ? "lg:w-1/2" : "w-full"}`}>
                          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-dim)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                            Flow 0{idx + 1}
                          </div>
                          <h3 className="text-h3">{feat.title}</h3>
                          <p className="text-body-regular text-[var(--text-secondary)] leading-relaxed">
                            {feat.description}
                          </p>
                        </div>

                        {matchedScreenshot && (
                          <div
                            className={`mt-6 lg:mt-0 ${
                              matchedScreenshot.aspect === "phone"
                                ? "w-full max-w-xs mx-auto aspect-[9/19] lg:w-1/2"
                                : "w-full aspect-video lg:w-1/2"
                            } relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--bg-surface)] shadow-[var(--glass-shadow)] ${
                              !isEven ? "lg:order-first" : ""
                            }`}
                          >
                            <Image
                              src={matchedScreenshot.src}
                              alt={matchedScreenshot.alt}
                              fill
                              sizes="(max-width: 1024px) 90vw, 450px"
                              className="object-cover"
                              placeholder="blur"
                              blurDataURL={BLUR_PLACEHOLDER}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {renderNarrativeSlot("after-key-product-flows")}

            {/* Section 7: Engineering Decisions */}
            {project.features.length > 0 && (
              <section id="engineering-decisions" className="scroll-mt-32" aria-labelledby="decisions-heading">
                <h2 id="decisions-heading" className="mb-8 text-h2">
                  Engineering Decisions & Trade-offs
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="modern-card rounded-[var(--radius-xl)] p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">
                          <Code2 className="w-4 h-4" aria-hidden="true" />
                          Technical Decision
                        </div>
                        <h3 className="text-h3 mb-3">{feat.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {renderNarrativeSlot("after-engineering-decisions")}

            {/* Section 8: Challenges (Problem -> Decision -> Result cards) */}
            {project.challenges && project.challenges.length > 0 && (
              <section id="challenges" className="scroll-mt-32" aria-labelledby="challenges-heading">
                <div className="mb-8">
                  <h2 id="challenges-heading" className="text-h2">
                    Technical Challenges & Solutions
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    The real constraints and the decisions I made to solve them
                  </p>
                </div>

                <div className="space-y-6">
                  {project.challenges.map((ch, idx) => {
                    return (
                      <div key={ch.challenge} className="challenge-flow-card">
                        <div className="flex items-center justify-between mb-4 border-b border-[var(--border-subtle)] pb-3">
                          <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider font-mono">
                            Engineering Story 0{idx + 1}
                          </span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                          {/* Problem */}
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-error)] uppercase tracking-wider">
                              <span className="w-2 h-2 rounded-full bg-[var(--color-error)]" aria-hidden="true" />
                              Problem / Constraint
                            </div>
                            <h3 className="text-sm font-bold text-[var(--text-primary)]">
                              {ch.challenge}
                            </h3>
                          </div>

                          {/* Decision / Solution */}
                          <div className="space-y-2 lg:border-l lg:border-[var(--border-subtle)] lg:pl-6">
                            <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-warning)] uppercase tracking-wider">
                              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                              Architectural Decision
                            </div>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                              {ch.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {renderNarrativeSlot("before-gallery")}

            {/* Section 9: Visual Gallery */}
            {project.gallery.length > 0 && (
              <section id="visual-gallery" className="scroll-mt-32" aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className="mb-8 text-h2">
                  Visual Gallery & Interface Artifacts
                </h2>
                <div
                  className={
                    hasDesktopGallery
                      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                  }
                >
                  {project.gallery.map((shot) => {
                    const shotIsPhone = shot.aspect
                      ? shot.aspect === "phone"
                      : !hasDesktopGallery;
                    return (
                      <div
                        key={shot.src}
                        className={`relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--bg-surface)] shadow-[var(--glass-shadow)] ${
                          shotIsPhone ? "aspect-[9/19] w-full max-w-xs mx-auto" : "aspect-video"
                        }`}
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          sizes={
                            shotIsPhone
                              ? "(max-width: 640px) 90vw, (max-width: 768px) 45vw, 300px"
                              : "(max-width: 768px) 90vw, 500px"
                          }
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={BLUR_PLACEHOLDER}
                        />
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {narrative && !renderedNarrativePositions.has("narrative") && narrativeContent}


            {/* Section 10: Technology Stack */}
            <section id="technology-stack" className="scroll-mt-32" aria-labelledby="stack-heading">
              <h2 id="stack-heading" className="mb-8 text-h2">
                Technology Stack Breakdown
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StackCard
                  title="Frontend & UI"
                  icon={<Smartphone className="w-5 h-5" />}
                  items={project.techStack.frontend}
                />
                {project.techStack.backend && (
                  <StackCard
                    title="Backend & Database"
                    icon={<Server className="w-5 h-5" />}
                    items={project.techStack.backend}
                  />
                )}
                {project.techStack.tools && (
                  <StackCard
                    title="Tools & Infrastructure"
                    icon={<Wrench className="w-5 h-5" />}
                    items={project.techStack.tools}
                  />
                )}
              </div>
            </section>

            {relatedPosts.length > 0 && (
              <section id="related-articles" className="scroll-mt-32" aria-labelledby="related-articles-heading">
                <h2 id="related-articles-heading" className="mb-6 text-h2">
                  Related Articles
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="modern-card flex min-h-11 items-center justify-between rounded-[var(--radius-lg)] p-5 font-semibold hover:border-[var(--border-active)]"
                    >
                      {post.frontmatter.title}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Section 11: Final Result and Lessons */}
            <section id="final-result" className="scroll-mt-32" aria-labelledby="results-heading">
              <div className="modern-card rounded-[var(--radius-xl)] p-8 md:p-10">
                <h2 id="results-heading" className="text-h2 mb-4">
                  Final Retrospective & Architectural Lessons
                </h2>
                <p className="text-body-large text-[var(--text-secondary)] leading-relaxed mb-6">
                  Building {project.title} reinforced how I work: clear domain modeling, explicit separation of concerns, and system boundaries grounded strictly in the business requirements, rather than abstractions the product does not yet need.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-subtle)]">
                  {project.badges.map((badge) => (
                    <TechBadge key={badge} label={badge} />
                  ))}
                </div>
              </div>
            </section>

            {/* Section 12: Previous / Next Project Navigation */}
            <nav id="project-navigation" aria-label="Project navigation" className="scroll-mt-32 border-t border-[var(--border-subtle)] pt-12">
              <div className="grid sm:grid-cols-2 gap-6">
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex flex-col justify-between min-h-24 p-6 rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-all hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors">
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                    Previous Project
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
                      {prevProject.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                      {prevProject.category}
                    </div>
                  </div>
                </Link>

                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex flex-col justify-between min-h-24 p-6 rounded-[var(--radius-lg)] border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-all hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)] text-right focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <div className="flex items-center justify-end gap-2 text-xs font-semibold text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors">
                    Next Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-2">
                      {nextProject.title}
                    </div>
                    <div className="text-xs text-[var(--text-secondary)] mt-0.5">
                      {nextProject.category}
                    </div>
                  </div>
                </Link>
              </div>
            </nav>

            {/* Section 13: 'Start a Similar Project' CTA */}
            <section id="start-similar-project" className="scroll-mt-32 pt-8" aria-labelledby="cta-heading">
              <div className="glass-panel rounded-[var(--radius-xl)] p-8 md:p-12 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                  <h2 id="cta-heading" className="text-h2">
                    Start a Similar Project
                  </h2>
                  <p className="text-body-large text-[var(--text-secondary)]">
                    Have a platform, SaaS application, or automated workflow that needs expert engineering? Let&apos;s build it with clarity and precision.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cta-button cta-primary w-full sm:w-auto text-base font-bold min-h-11 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                    >
                      Book a 30-min Call <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <Link
                      href="/work"
                      className="cta-button cta-secondary w-full sm:w-auto text-base font-bold min-h-11 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                    >
                      Explore All Work
                    </Link>
                  </div>
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
