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

type Params = { slug: string };

const GithubIcon = createLucideIcon("Github", [
  [
    "path",
    {
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
  return {
    title: `${project.title} - ${project.category} | Salmen Khelifi`,
    description: project.tagline,
  };
}

function TechBadge({ label }: { label: string }) {
  return (
    <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
      {label}
    </span>
  );
}

function ProjectLinks({ project, large }: { project: Project; large?: boolean }) {
  const { github, live } = project.links;
  if (!github && !live) return null;
  const base = large
    ? "inline-flex items-center gap-2 px-8 py-4 font-bold rounded-full transition-colors"
    : "inline-flex items-center gap-2 px-5 py-2.5 font-semibold rounded-full text-sm transition-colors";
  return (
    <div className="flex flex-wrap gap-4">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className={`${base} ${project.accent.button} text-white`}
        >
          Live Demo <ExternalLink className={large ? "w-5 h-5" : "w-4 h-4"} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className={`${base} bg-white/5 border border-white/10 hover:bg-white/10 text-white`}
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
  accentText,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  accentText: string;
}) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
      <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${accentText}`}>
        {icon} {title}
      </h3>
      <ul className="space-y-3 text-gray-400">
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

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            Khelifi<span className="text-blue-500">.</span>
          </Link>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 relative overflow-hidden">
        <div
          className="blob w-96 h-96 bg-blue-600/10 rounded-full top-10 left-1/4 blur-[100px]"
          aria-hidden="true"
        ></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p
              className={`font-semibold mb-4 tracking-wider text-sm uppercase ${project.accent.text}`}
            >
              {project.category}
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
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
              className={`relative w-full mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${
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
              />
            </div>
          )}
        </div>
      </header>

      {/* Overview */}
      <section className="py-20 bg-black/40" aria-labelledby="overview-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="overview-heading" className="text-3xl font-bold mb-10">
            Overview
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="modern-card p-8 rounded-3xl">
              <h3 className="text-lg font-bold mb-3 text-white">What it is</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.overview.what}
              </p>
            </div>
            <div className="modern-card p-8 rounded-3xl">
              <h3 className="text-lg font-bold mb-3 text-white">
                The problem it solves
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {project.overview.problem}
              </p>
            </div>
            <div className="modern-card p-8 rounded-3xl">
              <h3 className="text-lg font-bold mb-3 text-white">Who it&apos;s for</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.overview.audience}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      {project.features.length > 0 && (
        <section className="py-20" aria-labelledby="features-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="features-heading" className="text-3xl font-bold mb-10">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <CheckCircle
                    className={`w-6 h-6 mt-1 shrink-0 ${project.accent.text}`}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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
        <section className="py-20 bg-black/40" aria-labelledby="gallery-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="gallery-heading" className="text-3xl font-bold mb-10">
              Screenshots
            </h2>
            <div
              className={
                hasDesktopGallery
                  ? "grid grid-cols-1 md:grid-cols-2 gap-8"
                  : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              }
            >
              {project.gallery.map((shot, i) => (
                <div
                  key={shot.src}
                  className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl ${
                    hasDesktopGallery ? "aspect-video" : "aspect-[9/19]"
                  } ${
                    !hasDesktopGallery && i % 2 === 1 ? "md:-mt-8" : ""
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes={
                      hasDesktopGallery
                        ? "(max-width: 768px) 90vw, 560px"
                        : "(max-width: 640px) 90vw, (max-width: 768px) 45vw, 30vw"
                    }
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech stack */}
      <section className="py-20" aria-labelledby="stack-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="stack-heading" className="text-3xl font-bold mb-10">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StackCard
              title="Frontend"
              icon={<Smartphone className="w-5 h-5" />}
              items={project.techStack.frontend}
              accentText={project.accent.text}
            />
            {project.techStack.backend && (
              <StackCard
                title="Backend"
                icon={<Server className="w-5 h-5" />}
                items={project.techStack.backend}
                accentText={project.accent.text}
              />
            )}
            {project.techStack.tools && (
              <StackCard
                title="Tools & Infrastructure"
                icon={<Wrench className="w-5 h-5" />}
                items={project.techStack.tools}
                accentText={project.accent.text}
              />
            )}
          </div>
        </div>
      </section>

      {/* Challenges & learnings */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-20 bg-black/40" aria-labelledby="challenges-heading">
          <div className="max-w-6xl mx-auto px-6">
            <h2 id="challenges-heading" className="text-3xl font-bold mb-10">
              Challenges & Learnings
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-gray-300">
                    <th className="py-4 px-4 font-semibold">Challenge</th>
                    <th className="py-4 px-4 font-semibold">Solution</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  {project.challenges.map((row) => (
                    <tr key={row.challenge} className="border-b border-white/5">
                      <td className="py-4 px-4 text-white">{row.challenge}</td>
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Interested in {project.title}?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Explore the project or check out more of my work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ProjectLinks project={project} large />
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-full transition-colors"
            >
              All Projects <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© 2026 Salmen Khelifi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
