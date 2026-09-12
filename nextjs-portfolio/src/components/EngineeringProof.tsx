import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { technicalDepth } from "@/data/homepage";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

export default function EngineeringProof() {
  return (
    <section id="technical-depth" aria-label="Engineering proof" className="py-24 md:py-32">
      <SectionContainer>
        <div className="mb-12 max-w-3xl reveal md:mb-16">
          <p className="mb-3 text-caption text-[var(--accent)]">How I reduce delivery risk</p>
          <SectionHeading className="mb-4">Engineering proof, when you need the detail</SectionHeading>
          <p className="text-body-large text-[var(--text-secondary)]">
            Four real decisions from shipped products. Start with the verified result, then open the technical reasoning that matters to your evaluation.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {technicalDepth.map((item, index) => {
            const Icon = item.icon;
            return (
              <details
                key={item.title}
                className="evidence-disclosure reveal"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <summary>
                  <span className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)]">
                    <Icon className="h-5 w-5 text-[var(--accent)]" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-h3 text-[var(--text-primary)]">{item.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[var(--text-secondary)]">
                      {item.verification}
                    </span>
                  </span>
                  <ChevronDown className="disclosure-chevron h-5 w-5 shrink-0 text-[var(--text-tertiary)]" aria-hidden="true" />
                </summary>

                <div className="evidence-detail">
                  <dl className="grid gap-4 text-sm">
                    <div>
                      <dt>Challenge</dt>
                      <dd>{item.challenge}</dd>
                    </div>
                    <div>
                      <dt>Risk</dt>
                      <dd>{item.risk}</dd>
                    </div>
                    <div>
                      <dt>Decision</dt>
                      <dd>{item.decision}</dd>
                    </div>
                  </dl>
                  <Link href={item.href} className="project-link mt-6 inline-flex min-h-11 items-center font-semibold text-[var(--text-primary)]">
                    See {item.projectLabel} case study
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </details>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
