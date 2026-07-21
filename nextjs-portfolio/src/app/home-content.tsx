"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Star,
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
import { testimonials } from "@/data/testimonials";
import {
  BLUR_PLACEHOLDER,
  categoryToFilter,
  credibilityItems,
  ecosystemNodes,
  featuredHrefs,
  featuredWork,
  portraitPreviewImages,
  processSteps,
  projects,
  services,
  technicalDepth,
  workFilters,
  WorkFilter,
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
import TechnicalStory from "@/components/TechnicalStory";
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
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => categoryToFilter[p.category] === activeFilter);
  const remainingProjects = filteredProjects.filter(
    (p) => !featuredHrefs.includes(p.href)
  );

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll<HTMLElement>(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;

      reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    reveal();

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <>
      <SiteHeader />

      <section className="hero-section flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 mx-auto max-w-7xl w-full">
        <div className="hero-content z-10 grid w-full grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <StatusBadge>AVAILABLE FOR NEW PROJECTS</StatusBadge>

            <h1 className="hero-title reveal mb-8" style={{ transitionDelay: "100ms" }}>
              I build digital products that <span className="text-gradient">automate work</span>, convert users, and scale.
            </h1>

            <p
              className="hero-subtitle reveal mb-12 max-w-2xl text-body-large"
              style={{ transitionDelay: "200ms" }}
            >
              Full-stack software engineer and automation specialist. I design and build resilient systems, from React interfaces to n8n pipelines, that scale with the business behind them.
            </p>

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
          <SectionHeading className="mb-10">Selected Work</SectionHeading>

          <div className="reveal mb-20 flex flex-wrap gap-3 md:mb-24">
            {workFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`tech-badge min-h-11 transition-colors ${
                  activeFilter === filter
                    ? "!bg-[rgba(47,128,237,0.55)] !text-[var(--text-primary)]"
                    : ""
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mb-24 md:mb-32 space-y-20 md:space-y-32">
            {featuredWork.map((item, index) => (
              <FeaturedProject
                key={item.title}
                item={item}
                imageOnRight={index % 2 === 0}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingProjects.map((project) => (
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

      <section id="capabilities" className="py-32 md:py-40">
        <SectionContainer>
          <SectionHeading className="mb-16 text-center">
            Technical Depth
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalDepth.map((item, index) => (
              <TechnicalStory key={item.title} item={item} index={index} />
            ))}
          </div>
        </SectionContainer>
      </section>

      <section id="services" className="py-32 md:py-40">
        <SectionContainer>
          <SectionHeading className="mb-20 text-center md:mb-24">
            My Expertise
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

      <section id="feedback" className="py-32 md:py-40">
        <SectionContainer>
          <div className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
            <SectionHeading className="mb-0">Client Feedback</SectionHeading>
            <a
              href={freelancerUrl}
              target="_blank"
              rel="noreferrer"
              className="reveal inline-flex min-h-11 items-center text-body-regular font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              4.9 / 5 across 8 reviews on Freelancer.com
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <article
                key={`${item.author}-${item.projectTitle}`}
                className="modern-card reveal rounded-[var(--radius-xl)] p-8"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-6 flex items-center gap-1 text-[var(--accent)]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-[var(--text-secondary)]">
                    {item.rating.toFixed(1)}
                  </span>
                </div>
                <blockquote className="mb-8 text-body-regular text-[var(--text-primary)]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="font-semibold text-[var(--text-primary)]">
                    {item.author}
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {item.projectTitle}
                  </p>
                  <span className="mt-5 inline-flex rounded-full border border-[var(--border-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-tertiary)]">
                    via Freelancer.com
                  </span>
                </div>
              </article>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section id="process" className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-16">
        <SectionContainer>
          <h2 className="reveal mb-10 text-h2">How I Work</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="reveal">
                <div className="service-icon mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[var(--accent)]">
                  {index + 1}
                </div>
                <h3 className="text-h3">{step}</h3>
              </div>
            ))}
          </div>
        </SectionContainer>
      </section>

      <section id="about" className="border-t border-[var(--border-subtle)] py-32 md:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="glass-panel reveal relative mx-auto mb-10 h-32 w-32 overflow-hidden !rounded-full md:h-40 md:w-40">
            <Image
              src="/images/salmen-khelifi-full-stack-developer-portrait.jpg"
              alt="Salmen Khelifi, Full-Stack Developer & Automation Specialist"
              fill
              sizes="160px"
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              priority={false}
            />
          </div>
          <SectionHeading className="mb-10">About Me</SectionHeading>
          <p className="reveal mb-16 text-body-large text-[var(--text-secondary)] md:text-2xl md:leading-relaxed">
            With <span className="font-medium text-[var(--text-primary)]">5+ years of experience</span>, I
            bridge the gap between complex code and business goals.
            <br />
            <br />
            Whether it&apos;s a mobile app in <span className="font-medium text-[var(--text-primary)]">Flutter</span>, a
            custom <span className="font-medium text-[var(--text-primary)]">WordPress</span> plugin, or an
            autonomous <span className="font-medium text-[var(--text-primary)]">n8n</span> workflow, I build
            solutions that work.
          </p>
          <div className="about-links reveal flex flex-wrap justify-center gap-4">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon className="h-8 w-8" />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="h-8 w-8" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon className="h-8 w-8" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon className="h-8 w-8" />
            </a>
            <a href={xUrl} target="_blank" rel="noreferrer" aria-label="X">
              <XIcon className="h-8 w-8" />
            </a>
            <a
              href={freelancerUrl}
              target="_blank"
              rel="noreferrer"
              className="freelancer-link"
            >
              Freelancer.com
            </a>
            <a
              href={upworkUrl}
              target="_blank"
              rel="noreferrer"
              className="freelancer-link"
            >
              Upwork
            </a>
            <Link
              href="/resume"
              className="freelancer-link gap-2"
            >
              View résumé
            </Link>
            <a
              href="/salmen-khelifi-cv.pdf"
              download
              className="freelancer-link gap-2"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
