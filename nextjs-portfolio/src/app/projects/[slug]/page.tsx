import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  createLucideIcon,
  ExternalLink,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";
import { getProject, projects, type Project } from "@/data/projects";
import { bookingUrl, projectJsonLd, siteUrl } from "@/data/schema";

const BLUR_PLACEHOLDER =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAFAAgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDhc+1FFFUB/9k=";

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
  if (!project) return { title: "Project Not Found | Salmen Khelifi" };
  const path = `/projects/${project.slug}`;
  return {
    title: `${project.title} - ${project.category}`,
    description: project.tagline,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${project.title} - ${project.category}`,
      description: project.tagline,
      url: `${siteUrl}${path}`,
      images: project.heroImage
        ? [
            {
              url: project.heroImage,
              alt: `${project.title} featured screenshot`,
            },
          ]
        : undefined,
    },
  };
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="tech-badge">
      {label}
    </span>
  );
}

function ProjectLinks({ project, large }: { project: Project; large?: boolean }) {
  const { github, live } = project.links;
  if (!github && !live) return null;
  const base = large
    ? "inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full px-8 py-4 font-bold transition-colors"
    : "inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors";
  return (
    <div className="flex flex-wrap gap-4">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={`${base} system-live-link`}
        >
          Live Demo <ExternalLink className={large ? "w-5 h-5" : "w-4 h-4"} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={`${base} border border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] backdrop-blur-xl hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)]`}
        >
          <GithubIcon className={large ? "w-5 h-5" : "w-4 h-4"} /> GitHub
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
    <div className="glass-panel rounded-[var(--radius-lg)] p-6">
      <h3 className="mb-4 flex items-center gap-2 text-h3 text-[var(--accent)]">
        {icon} {title}
      </h3>
      <ul className="space-y-3 text-[var(--text-secondary)]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function ProjectProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const hasDesktopGallery = project.galleryAspect === "desktop";
  const jsonLd = projectJsonLd(project);

  return (
    <div className="min-h-screen text-[var(--text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <nav className="nav-blur fixed top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="inline-flex min-h-11 items-center text-xl font-bold tracking-tight text-[var(--text-primary)]">
            Khelifi<span className="text-[var(--accent)]">.</span>
          </Link>
          <Link
            href="/#work"
            className="inline-flex min-h-11 items-center gap-2 text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden pb-20 pt-32">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-caption text-[var(--text-secondary)]">
              {project.category}
            </p>
            <h1 className="mb-6 text-h1">
              {project.title}
            </h1>
            <p className="mb-8 text-body-large text-[var(--text-secondary)]">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {project.badges.map((badge) => (
                <TechBadge key={badge} label={badge} />
              ))}
            </div>
            <ProjectLinks project={project} />
          </div>
          {project.heroImage && (
            <div
              className={`relative mx-auto w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--glass-border)] bg-[var(--bg-surface)] shadow-[var(--glass-shadow)] ${
                hasDesktopGallery
                  ? "aspect-video max-w-xl"
                  : "aspect-[9/16] max-w-xs"
              }`}
            >
              <Image
                src={project.heroImage}
                alt={`${project.title} featured screenshot`}
                fill
                priority
                sizes={
                  hasDesktopGallery
                    ? "(max-width: 768px) 90vw, 560px"
                    : "(max-width: 768px) 90vw, 320px"
                }
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>
          )}
        </div>
      </header>

      {/* Overview */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-20" aria-labelledby="overview-heading">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="overview-heading" className="mb-10 text-h2">
            Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-card rounded-[var(--radius-xl)] p-8">
              <h3 className="mb-3 text-h3">What it is</h3>
              <p className="text-body-regular text-[var(--text-secondary)]">
                {project.overview.what}
              </p>
            </div>
            <div className="modern-card rounded-[var(--radius-xl)] p-8">
              <h3 className="mb-3 text-h3">
                The problem it solves
              </h3>
              <p className="text-body-regular text-[var(--text-secondary)]">
                {project.overview.problem}
              </p>
            </div>
            <div className="modern-card rounded-[var(--radius-xl)] p-8">
              <h3 className="mb-3 text-h3">Who it&apos;s for</h3>
              <p className="text-body-regular text-[var(--text-secondary)]">
                {project.overview.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {project.features.length > 0 && (
        <section className="py-20" aria-labelledby="features-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="features-heading" className="mb-10 text-h2">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <CheckCircle
                    className="mt-1 h-6 w-6 shrink-0 text-[var(--accent)]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="mb-1 text-h3">
                      {feature.title}
                    </h3>
                    <p className="text-body-regular text-[var(--text-secondary)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-20" aria-labelledby="gallery-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="gallery-heading" className="mb-10 text-h2">
              Screenshots
            </h2>
            <div
              className={
                hasDesktopGallery
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
                          ? "(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                          : "(max-width: 768px) 90vw, 560px"
                      }
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_PLACEHOLDER}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="py-20" aria-labelledby="stack-heading">
        <div className="mx-auto max-w-6xl px-6">
          <h2 id="stack-heading" className="mb-10 text-h2">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StackCard
              title="Frontend"
              icon={<Smartphone className="w-5 h-5" />}
              items={project.techStack.frontend}
            />
            {project.techStack.backend && (
              <StackCard
                title="Backend"
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
        </div>
      </section>

      {/* Challenges & learnings */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 py-20" aria-labelledby="challenges-heading">
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="challenges-heading" className="mb-10 text-h2">
              Challenges & Learnings
            </h2>
            <div className="glass-panel overflow-x-auto rounded-[var(--radius-lg)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    <th className="py-4 px-4 font-semibold">Challenge</th>
                    <th className="py-4 px-4 font-semibold">Solution</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  {project.challenges.map((row) => (
                    <tr key={row.challenge} className="border-b border-[var(--border-subtle)] last:border-b-0">
                      <td className="py-4 px-4 text-[var(--text-primary)]">{row.challenge}</td>
                      <td className="py-4 px-4">{row.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 id="cta-heading" className="mb-6 text-h2">
            Interested in {project.title}?
          </h2>
          <p className="mb-10 text-body-large text-[var(--text-secondary)]">
            Explore the project or check out more of my work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ProjectLinks project={project} large />
            <Link
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full bg-[rgba(47,128,237,0.55)] px-8 py-4 font-bold text-[var(--text-primary)] backdrop-blur-xl transition-colors hover:bg-[rgba(59,141,243,0.7)]"
            >
              Book a 30-min call <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex min-h-11 min-w-11 items-center gap-2 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-8 py-4 font-bold text-[var(--text-primary)] backdrop-blur-xl transition-colors hover:border-[var(--border-active)] hover:bg-[var(--glass-bg-elevated)]"
            >
              All Projects <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--border-subtle)] py-12">
        <div className="mx-auto max-w-6xl px-6 text-center text-[var(--text-tertiary)]">
          <p>© 2026 Salmen Khelifi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
