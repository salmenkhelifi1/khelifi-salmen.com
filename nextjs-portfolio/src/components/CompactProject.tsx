import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLUR_PLACEHOLDER, Project } from "@/data/homepage";

interface CompactProjectProps {
  project: Project;
  isPortraitPreview?: boolean;
}

export default function CompactProject({
  project,
  isPortraitPreview = false,
}: CompactProjectProps) {
  return (
    <article className="project-card group reveal flex flex-col">
      <div
        className={`image-preview relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-muted)] bg-[var(--bg-surface)] mb-6 ${
          isPortraitPreview ? "aspect-[4/5] mx-auto w-full max-w-sm" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes={
            isPortraitPreview
              ? "(max-width: 768px) 100vw, 384px"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover object-top"
          placeholder="blur"
          blurDataURL={BLUR_PLACEHOLDER}
        />
      </div>
      <div className="mb-2 text-caption text-[var(--text-secondary)]">
        {project.category}
      </div>
      <h3 className="mb-4 text-h3 flex-grow">{project.title}</h3>
      <Link
        href={project.href}
        className="project-link inline-flex min-h-11 items-center font-bold text-[var(--text-primary)]"
      >
        {project.linkLabel} <ArrowRight className="ml-1.5 h-4 w-4" />
      </Link>
    </article>
  );
}
