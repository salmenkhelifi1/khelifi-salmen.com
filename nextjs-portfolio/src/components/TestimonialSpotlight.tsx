import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { freelancerUrl } from "@/data/schema";
import { testimonials } from "@/data/testimonials";
import SectionContainer from "./SectionContainer";

export default function TestimonialSpotlight() {
  const featured = testimonials[0];
  const supporting = testimonials.slice(1, 3);

  return (
    <section id="feedback" aria-labelledby="feedback-heading" className="py-24 md:py-32">
      <SectionContainer>
        <article className="testimonial-feature reveal">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="mb-4 text-caption text-[var(--accent)]">Client perspective</p>
              <h2 id="feedback-heading" className="mb-4 text-h2">Trusted to take ownership</h2>
              <div className="flex items-center gap-1 text-[var(--accent)]" aria-label={`${featured.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
                <span className="ml-2 font-semibold text-[var(--text-secondary)]">{featured.rating.toFixed(1)}</span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <blockquote className="text-xl font-medium leading-relaxed text-[var(--text-primary)] md:text-2xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <footer className="mt-7 border-t border-[var(--border-subtle)] pt-5">
                <p className="font-bold text-[var(--text-primary)]">{featured.author}</p>
                <p className="text-sm text-[var(--text-secondary)]">{featured.projectTitle}</p>
              </footer>
            </div>
          </div>

          <details className="supporting-reviews mt-8">
            <summary>
              Read two more verified client reviews
              <ChevronDown className="disclosure-chevron h-4 w-4" aria-hidden="true" />
            </summary>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {supporting.map((item) => (
                <blockquote key={`${item.author}-${item.projectTitle}`} className="supporting-review">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">{item.author}</strong> · {item.projectTitle}
                  </footer>
                </blockquote>
              ))}
            </div>
          </details>

          <a href={freelancerUrl} target="_blank" rel="noreferrer" className="project-link mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--text-secondary)]">
            4.9 / 5 across 8 reviews on Freelancer.com <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </SectionContainer>
    </section>
  );
}
