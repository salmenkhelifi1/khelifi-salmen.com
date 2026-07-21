"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowRight,
  Download,
  createLucideIcon,
} from "lucide-react";
import {
  bookingUrl,
  facebookUrl,
  freelancerUrl,
  githubUrl,
  instagramUrl,
  linkedinUrl,
  upworkUrl,
  xUrl,
} from "@/data/schema";
import {
  BLUR_PLACEHOLDER,
  capabilityMarkers,
  credibilityItems,
  ecosystemNodes,
  featuredWork,
  homepageCompactHrefs,
  portraitPreviewImages,
  projects,
  services,
  technicalDepth,
} from "@/data/homepage";
import SiteHeader from "@/components/SiteHeader";
import SectionContainer from "@/components/SectionContainer";
import SectionHeading from "@/components/SectionHeading";
import StatusBadge from "@/components/StatusBadge";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CredibilityStrip from "@/components/CredibilityStrip";
import FeaturedProject from "@/components/FeaturedProject";
import CompactProject from "@/components/CompactProject";
import TestimonialSpotlight from "@/components/TestimonialSpotlight";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactCTA from "@/components/ContactCTA";
import SiteFooter from "@/components/SiteFooter";

const GithubIcon = createLucideIcon("Github", [
  [
    "path",
    {
      key: "github-path",
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
  ],
]);

const LinkedinIcon = createLucideIcon("Linkedin", [
  [
    "path",
    {
      key: "linkedin-main",
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z",
    },
  ],
  ["rect", { key: "linkedin-posts", width: "4", height: "12", x: "2", y: "9" }],
  ["circle", { key: "linkedin-dot", cx: "4", cy: "4", r: "2" }],
]);

const FacebookIcon = createLucideIcon("Facebook", [
  [
    "path",
    {
      key: "facebook-path",
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
    },
  ],
]);

const InstagramIcon = createLucideIcon("Instagram", [
  ["rect", { key: "instagram-frame", width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5" }],
  [
    "path",
    {
      key: "instagram-lens",
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    },
  ],
  ["line", { key: "instagram-dot", x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" }],
]);

const XIcon = createLucideIcon("X", [
  [
    "path",
    {
      key: "x-path",
      d: "M18.9 2h3.4l-7.4 8.5L23.6 22h-6.8l-5.3-7-6.1 7H2l7.9-9L1.6 2h7l4.8 6.4L18.9 2Zm-1.2 18h1.9L7.6 3.9h-2L17.7 20Z",
    },
  ],
]);

export default function HomeContent() {
  // Homepage shows a curated four: two featured + two compact. The full,
  // filterable archive lives at /work — the homepage is a focused journey,
  // not a project database.
  const compactProjects = homepageCompactHrefs
    .map((href) => projects.find((p) => p.href === href))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  useEffect(() => {
    // IntersectionObserver instead of a scroll listener: fires reliably on
    // anchor jumps, fast scrolling, and filter changes (scroll events don't).
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px" }
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.active)")
        .forEach((element) => observer.observe(element));
    };

    observeAll();
    // Re-observe when the work filter swaps the project list in/out.
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <>
      <SiteHeader />

      <main>
      <section className="hero-section flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 md:pt-40 pb-16 mx-auto max-w-7xl w-full">
        <div className="hero-content z-10 grid w-full grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <StatusBadge>AVAILABLE FOR NEW PROJECTS</StatusBadge>

            <h1 className="hero-title reveal mb-8" style={{ transitionDelay: "100ms" }}>
              I build digital products that <span className="text-gradient">automate work</span>, convert users, and scale.
            </h1>

            <p
              className="hero-subtitle reveal mb-8 max-w-2xl text-body-large"
              style={{ transitionDelay: "200ms" }}
            >
              Full-stack software engineer and automation specialist. I design and build resilient systems, from React interfaces to n8n pipelines, that scale with the business behind them.
            </p>

            <ul
              className="reveal mb-12 flex flex-wrap gap-3"
              style={{ transitionDelay: "250ms" }}
              aria-label="Core capabilities"
            >
              {capabilityMarkers.map((marker) => (
                <li
                  key={marker}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 text-caption text-[var(--text-secondary)]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                    aria-hidden="true"
                  />
                  {marker}
                </li>
              ))}
            </ul>

            <div
              className="hero-actions reveal flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
              style={{ transitionDelay: "300ms" }}
            >
              <PrimaryButton href="#work" className="w-full sm:w-auto">
                View Selected Work
              </PrimaryButton>
              <SecondaryButton
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                Start a Project
              </SecondaryButton>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block reveal" style={{ transitionDelay: "400ms" }}>
            <ArchitectureDiagram nodes={ecosystemNodes} />
          </div>
        </div>
      </section>

      <CredibilityStrip items={credibilityItems} />

      <section id="work" className="py-32 md:py-40">
        <SectionContainer>
          <SectionHeading className="mb-16 md:mb-20">
            Selected Work
          </SectionHeading>

          <div className="mb-24 md:mb-32 space-y-20 md:space-y-32">
            {featuredWork.map((item, index) => (
              <FeaturedProject
                key={item.title}
                item={item}
                imageOnRight={index % 2 === 0}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {compactProjects.map((project) => (
              <CompactProject
                key={project.title}
                project={project}
                isPortraitPreview={portraitPreviewImages.has(project.image)}
              />
            ))}
          </div>

          <div className="mt-16 text-center reveal">
            <Link
              href="/work"
              className="project-link inline-flex min-h-11 items-center text-lg font-bold text-[var(--text-primary)]"
            >
              View All Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </SectionContainer>
      </section>

      <section id="technical-depth" className="py-32 md:py-40">
        <SectionContainer>
          <div className="mb-16 text-center reveal">
            <SectionHeading className="mb-4">
              Technical Credibility & Engineering Proof
            </SectionHeading>
            <p className="max-w-2xl mx-auto text-body-large text-[var(--text-secondary)]">
              Owning hard technical decisions: every architecture choice, live migration, and system constraint is backed by verified engineering proof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalDepth.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="modern-card reveal rounded-[var(--radius-xl)] p-8 md:p-10 flex flex-col justify-between"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="service-icon flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]">
                        <Icon className="h-6 w-6 text-[var(--text-secondary)]" />
                      </div>
                      <Link
                        href={item.href}
                        className="inline-flex min-h-11 items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline"
                      >
                        {item.projectLabel} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>

                    <h3 className="mb-6 text-h3 text-[var(--text-primary)]">
                      {item.title}
                    </h3>

                    <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                      <div className="border-l-2 border-[var(--border-muted)] pl-3">
                        <span className="font-semibold text-[var(--text-tertiary)] block text-caption mb-0.5">
                          Challenge
                        </span>
                        {item.challenge}
                      </div>

                      <div className="border-l-2 border-[var(--border-muted)] pl-3">
                        <span className="font-semibold text-[var(--text-tertiary)] block text-caption mb-0.5">
                          Risk
                        </span>
                        {item.risk}
                      </div>

                      <div className="border-l-2 border-[var(--accent-dim)] pl-3">
                        <span className="font-semibold text-[var(--text-primary)] block text-caption mb-0.5">
                          Decision
                        </span>
                        {item.decision}
                      </div>

                      <div className="border-l-2 border-[var(--accent)] pl-3">
                        <span className="font-semibold text-[var(--accent)] block text-caption mb-0.5">
                          Verification
                        </span>
                        <span className="font-medium text-[var(--text-primary)]">
                          {item.verification}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-tertiary)] font-mono">
                      Verified Case Study
                    </span>
                    <Link
                      href={item.href}
                      className="text-xs font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                    >
                      View details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      <section id="capabilities" className="py-32 md:py-40">
        <SectionContainer>
          <SectionHeading className="mb-20 text-center md:mb-24">
            Capabilities
          </SectionHeading>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  className="service-card modern-card reveal rounded-[var(--radius-xl)] p-8 md:p-10"
                  key={service.title}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="service-icon mb-8 flex h-14 w-14 items-center justify-center rounded-[var(--radius-md)]">
                    <Icon className="h-7 w-7 text-[var(--text-secondary)]" />
                  </div>
                  <h3 className="mb-4 text-h3">{service.title}</h3>
                  <p className="text-body-regular text-[var(--text-secondary)]">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      <TestimonialSpotlight />

      <ProcessTimeline />

      <section id="about" className="border-t border-[var(--border-subtle)] py-32 md:py-40">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left / Editorial Sidebar */}
            <div className="lg:col-span-5 flex flex-col items-start reveal">
              <div className="glass-panel relative mb-8 h-44 w-44 md:h-52 md:w-52 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-border-bright)] shadow-xl">
                <Image
                  src="/images/salmen-khelifi-full-stack-developer-portrait.jpg"
                  alt="Salmen Khelifi, Full-Stack Developer & Automation Specialist"
                  fill
                  sizes="(max-width: 768px) 176px, 208px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  priority={false}
                />
              </div>

              <div className="mb-6">
                <StatusBadge>AVAILABLE FOR NEW PROJECTS</StatusBadge>
              </div>

              <ul className="mb-8 space-y-3 w-full text-sm text-[var(--text-secondary)]">
                <li className="flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>Solo, full-stack: architecture to deployment</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>Based in Tunisia, working remote worldwide</span>
                </li>
                <li className="flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3.5 py-2.5">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  <span>Building web, mobile, and SaaS since 2021</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full mb-8">
                <PrimaryButton
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto min-h-11 justify-center"
                >
                  Book a Call
                </PrimaryButton>
                <Link
                  href="/resume"
                  className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-active)] bg-[var(--bg-surface)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                >
                  View résumé
                </Link>
                <a
                  href="/salmen-khelifi-cv.pdf"
                  download
                  className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] px-3 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  aria-label="Download CV"
                >
                  <Download className="h-4 w-4 mr-1.5" />
                  CV
                </a>
              </div>

              {/* Secondary Social Links */}
              <div className="pt-6 border-t border-[var(--border-subtle)] w-full">
                <p className="text-caption text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                  Profiles & Channels
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={freelancerUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-md border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    Freelancer.com
                  </a>
                  <a
                    href={upworkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-md border border-[var(--border-subtle)] text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    Upwork
                  </a>
                  <a
                    href={xUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X Profile"
                    className="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    <XIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook Profile"
                    className="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram Profile"
                    className="p-2 rounded-md border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-active)] transition-colors"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right / Main Editorial Composition */}
            <div className="lg:col-span-7 flex flex-col justify-center reveal">
              <SectionHeading className="mb-8">About Me</SectionHeading>

              <div className="space-y-6 text-body-large text-[var(--text-secondary)] leading-relaxed">
                <p className="text-xl font-medium text-[var(--text-primary)] leading-relaxed">
                  I protect working software. I avoid unnecessary rewrites and focus on changes that improve the product, reduce operational risk, or move the roadmap forward.
                </p>

                <p>
                  I can own delivery end to end, from architecture and backend systems to the interface, automation, testing, and deployment.
                </p>

                <div className="my-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 md:p-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-3">
                    Engineering Philosophy & Tooling
                  </h4>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    Reliable software is built through clear system boundaries, thorough verification, and pragmatic decisions. I use automation and AI-assisted tooling to accelerate investigation and repetitive implementation. Architecture, review, testing, and final decisions stay deliberate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>

      <ContactCTA />
      </main>

      <SiteFooter />
    </>
  );
}
