import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BLUR_PLACEHOLDER, FeaturedWorkItem } from "@/data/homepage";

interface FeaturedProjectProps {
  item: FeaturedWorkItem;
  imageOnRight?: boolean;
}

export default function FeaturedProject({
  item,
  imageOnRight = true,
}: FeaturedProjectProps) {
  return (
    <article className="project-card group reveal grid items-center gap-10 md:grid-cols-12 md:gap-16">
      <div className={`md:col-span-5 ${imageOnRight ? "md:order-1" : "md:order-2"}`}>
        <div className="mb-4 text-caption text-[var(--text-secondary)]">
          {item.eyebrow}
        </div>
        <h2 className="mb-6 text-h2">{item.title}</h2>
        <div className="mb-8 flex flex-wrap gap-3">
          {item.tags.map((tag) => (
            <span className="tech-badge" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-10 space-y-6">
          {item.rows.map((row) => (
            <div key={row.label}>
              <div className="mb-1 text-sm font-semibold text-[var(--text-secondary)] opacity-80 uppercase tracking-wider">
                {row.label}
              </div>
              <p className="text-body-regular text-[var(--text-primary)]">
                {row.text}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={item.href}
          className="project-link inline-flex min-h-11 items-center text-lg font-bold text-[var(--text-primary)]"
        >
          View Case Study <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
      <div className={`md:col-span-7 ${imageOnRight ? "md:order-2" : "md:order-1"}`}>
        <div className="image-preview relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-muted)] bg-[var(--bg-surface)] aspect-[4/3]">
          <Image
            src={item.image}
            alt={`${item.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover object-top"
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-page)] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </article>
  );
}
