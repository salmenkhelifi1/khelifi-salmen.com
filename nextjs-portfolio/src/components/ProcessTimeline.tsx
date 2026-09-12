import { ChevronDown } from "lucide-react";
import { processSteps } from "@/data/homepage";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";

export default function ProcessTimeline() {
  return (
    <section id="process" className="border-y border-[var(--border-subtle)] py-24 md:py-32">
      <SectionContainer>
        <div className="mb-12 max-w-3xl reveal md:mb-16">
          <p className="mb-3 text-caption text-[var(--accent)]">A predictable path</p>
          <SectionHeading className="mb-4">How we move from problem to production</SectionHeading>
          <p className="text-body-large text-[var(--text-secondary)]">
            Clear checkpoints keep scope, risk, and progress visible without adding process for its own sake.
          </p>
        </div>

        <ol className="process-grid">
          {processSteps.map((step, index) => (
            <li key={step.title} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <span className="process-number">{step.number}</span>
              <h3 className="mt-5 text-h3">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{step.activity}</p>
              <details className="process-detail mt-4">
                <summary>
                  What you receive <ChevronDown className="disclosure-chevron h-4 w-4" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-sm font-medium text-[var(--text-primary)]">{step.deliverable}</p>
                <p className="mt-2 text-sm italic text-[var(--text-secondary)]">&ldquo;{step.concern}&rdquo;</p>
              </details>
            </li>
          ))}
        </ol>
      </SectionContainer>
    </section>
  );
}
