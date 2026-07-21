import { ArrowRight, Award, CheckCircle2, Clock, Star } from "lucide-react";
import { freelancerUrl } from "@/data/schema";
import { testimonials } from "@/data/testimonials";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

export default function TestimonialSpotlight() {
  const featured = testimonials[0]; // Austin L. - n8n Automation Workflows Specialist
  const supporting = [testimonials[1], testimonials[2]]; // Robert D. & Jørgen G.

  return (
    <section id="feedback" className="py-32 md:py-40">
      <SectionContainer>
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading className="mb-0">Client Feedback</SectionHeading>
          <a
            href={freelancerUrl}
            target="_blank"
            rel="noreferrer"
            className="reveal inline-flex min-h-11 items-center text-body-regular font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            4.9 / 5 across 8 reviews on Freelancer.com
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Verified Stats Row */}
        <div className="glass-panel reveal mb-12 grid grid-cols-2 gap-4 rounded-[var(--radius-xl)] p-6 sm:grid-cols-4 md:p-8">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex items-center gap-1.5 text-[var(--accent)]">
              <Star className="h-5 w-5 fill-current" aria-hidden="true" />
              <span className="text-lg font-bold text-[var(--text-primary)]">4.9 / 5</span>
            </div>
            <span className="text-caption text-[var(--text-secondary)]">Across 8 Reviews</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex items-center gap-1.5 text-[var(--accent)]">
              <Clock className="h-5 w-5" aria-hidden="true" />
              <span className="text-lg font-bold text-[var(--text-primary)]">100%</span>
            </div>
            <span className="text-caption text-[var(--text-secondary)]">On-Time</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex items-center gap-1.5 text-[var(--accent)]">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              <span className="text-lg font-bold text-[var(--text-primary)]">100%</span>
            </div>
            <span className="text-caption text-[var(--text-secondary)]">On-Budget</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-2 flex items-center gap-1.5 text-[var(--accent)]">
              <Award className="h-5 w-5" aria-hidden="true" />
              <span className="text-lg font-bold text-[var(--text-primary)]">Preferred</span>
            </div>
            <span className="text-caption text-[var(--text-secondary)]">Freelancer Badge</span>
          </div>
        </div>

        {/* Featured Testimonial */}
        <article className="glass-panel reveal mb-8 rounded-[var(--radius-xl)] p-8 md:p-12">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1 text-[var(--accent)]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
              <span className="ml-2 text-sm font-semibold text-[var(--text-secondary)]">
                {featured.rating.toFixed(1)}
              </span>
            </div>
            <span className="inline-flex rounded-full border border-[var(--glass-border-bright)] bg-[var(--accent-dim)] px-3.5 py-1 text-xs font-semibold text-[var(--text-primary)]">
              Featured Review
            </span>
          </div>

          <blockquote className="mb-8 text-xl font-medium leading-relaxed text-[var(--text-primary)] md:text-2xl md:leading-relaxed">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>

          <cite className="not-italic flex flex-col justify-between gap-2 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-bold text-[var(--text-primary)] text-lg">{featured.author}</p>
              <p className="text-sm text-[var(--text-secondary)]">{featured.projectTitle}</p>
            </div>
            <span className="inline-flex items-center self-start sm:self-auto rounded-full border border-[var(--border-muted)] px-3 py-1 text-xs font-semibold text-[var(--text-tertiary)]">
              via Freelancer.com
            </span>
          </cite>
        </article>

        {/* 2 Supporting Excerpts */}
        <div className="grid gap-6 md:grid-cols-2">
          {supporting.map((item, index) => (
            <article
              key={`${item.author}-${item.projectTitle}`}
              className="modern-card reveal flex flex-col justify-between rounded-[var(--radius-xl)] p-6 md:p-8"
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div>
                <div className="mb-4 flex items-center gap-1 text-[var(--accent)]" aria-label={`${item.rating} out of 5 stars`}>
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
                <blockquote className="mb-6 text-body-regular text-[var(--text-primary)]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <cite className="not-italic border-t border-[var(--border-subtle)] pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)]">{item.author}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{item.projectTitle}</p>
                  </div>
                  <span className="inline-flex rounded-full border border-[var(--border-muted)] px-2.5 py-0.5 text-xs font-semibold text-[var(--text-tertiary)]">
                    Freelancer.com
                  </span>
                </div>
              </cite>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
