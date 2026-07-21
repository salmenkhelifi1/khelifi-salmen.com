"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { projects as realProjects, Project as RealProject } from "@/data/projects";
import {
  FeaturedWorkItem,
  Project as HomepageProject,
  portraitPreviewImages,
} from "@/data/homepage";
import { bookingUrl } from "@/data/schema";
import SectionContainer from "@/components/SectionContainer";
import SectionHeading from "@/components/SectionHeading";
import FeaturedProject from "@/components/FeaturedProject";
import CompactProject from "@/components/CompactProject";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

export type WorkPageCategory =
  | "All"
  | "SaaS and Platforms"
  | "Automation and AI"
  | "Mobile"
  | "E-commerce"
  | "Websites";

export const workCategories: readonly WorkPageCategory[] = [
  "All",
  "SaaS and Platforms",
  "Automation and AI",
  "Mobile",
  "E-commerce",
  "Websites",
] as const;

export const projectCategoryMap: Record<string, WorkPageCategory> = {
  "luxe-spa": "SaaS and Platforms",
  anlingo: "SaaS and Platforms",
  noxivo: "SaaS and Platforms",
  "ai-workflow-automation": "Automation and AI",
  adaptifit: "Mobile",
  chaktech: "E-commerce",
  leyel: "E-commerce",
  "hti-ecommerce": "E-commerce",
  "chab-ka": "E-commerce",
  velyssa: "E-commerce",
  "electronic-ecommerce": "E-commerce",
  "sainteagnes-blog": "Websites",
  "digitrends-dev": "Websites",
  "digitrends-pro": "Websites",
  rentiora: "Websites",
};

const featuredSlugs = new Set(["luxe-spa", "chaktech", "anlingo", "noxivo"]);

function projectToFeaturedWorkItem(p: RealProject): FeaturedWorkItem {
  return {
    eyebrow: p.category,
    title: p.title,
    href: `/projects/${p.slug}`,
    image: p.heroImage || (p.gallery[0] ? p.gallery[0].src : ""),
    tags: p.badges.slice(0, 5),
    rows: [
      { label: "Problem", text: p.overview.problem },
      { label: "Solution", text: p.overview.what },
      { label: "Target Audience", text: p.overview.audience },
    ],
  };
}

function projectToHomepageProject(p: RealProject): HomepageProject {
  return {
    category: p.category,
    title: p.title,
    description: p.tagline || p.overview.what,
    tags: p.badges,
    href: `/projects/${p.slug}`,
    linkLabel: p.links?.live ? "View Project" : "View Case Study",
    image: p.heroImage || (p.gallery[0] ? p.gallery[0].src : ""),
  };
}

export default function WorkGrid() {
  const [activeCategory, setActiveCategory] = useState<WorkPageCategory>("All");

  const filteredProjects =
    activeCategory === "All"
      ? realProjects
      : realProjects.filter(
          (p) => projectCategoryMap[p.slug] === activeCategory
        );

  const featuredProjects = filteredProjects.filter((p) =>
    featuredSlugs.has(p.slug)
  );

  const compactProjects = filteredProjects.filter(
    (p) => !featuredSlugs.has(p.slug)
  );

  return (
    <SectionContainer>
      <header className="mb-16 md:mb-20 text-left">
        <div className="mb-4 text-caption text-[var(--text-secondary)] uppercase tracking-wider">
          Engineering Portfolio
        </div>
        <h1 className="text-h1 mb-6 text-[var(--text-primary)] max-w-3xl">
          Systems, platforms, and applications built for scale.
        </h1>
        <p className="text-body-large text-[var(--text-secondary)] max-w-2xl">
          Production SaaS ecosystems, mobile products, e-commerce architectures,
          and automated workflows built with a focus on reliability, performance,
          and clean technical design.
        </p>
      </header>

      {/* Accessible Category Filters */}
      <nav
        aria-label="Work category filters"
        className="mb-16 flex flex-wrap gap-3"
      >
        {workCategories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setActiveCategory(cat)}
              className={`tech-badge min-h-11 cursor-pointer transition-colors px-5 py-2.5 rounded-full border text-sm font-semibold ${
                isSelected
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--text-primary)]"
                  : "border-[var(--border-muted)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--border-active)] hover:text-[var(--text-primary)]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </nav>

      {/* Featured Projects Tier */}
      {featuredProjects.length > 0 && (
        <div className="mb-20 md:mb-28 space-y-20 md:space-y-28">
          {featuredProjects.map((project, idx) => (
            <FeaturedProject
              key={project.slug}
              item={projectToFeaturedWorkItem(project)}
              imageOnRight={idx % 2 === 0}
            />
          ))}
        </div>
      )}

      {/* Standard / Compact Projects Tier */}
      {compactProjects.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {compactProjects.map((project) => (
            <CompactProject
              key={project.slug}
              project={projectToHomepageProject(project)}
              isPortraitPreview={
                project.galleryAspect === "phone" ||
                portraitPreviewImages.has(
                  project.heroImage || (project.gallery[0] ? project.gallery[0].src : "")
                )
              }
            />
          ))}
        </div>
      )}

      {/* Contact CTA Section */}
      <section className="mt-32 md:mt-40 border-t border-[var(--border-subtle)] pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="mb-6 text-center">
            Have a product, workflow, or platform that needs to be built?
          </SectionHeading>
          <p className="mb-10 text-body-large text-[var(--text-secondary)]">
            I am available for new full-stack development, SaaS architecture, and automation projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <PrimaryButton href={bookingUrl} target="_blank" rel="noreferrer">
              Start a Project
            </PrimaryButton>
            <SecondaryButton href="mailto:contact@khelifi-salmen.com">
              Email Me <Mail className="ml-2 h-4 w-4" />
            </SecondaryButton>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
