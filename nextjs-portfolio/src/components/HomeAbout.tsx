import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { BLUR_PLACEHOLDER } from "@/data/homepage";
import { githubUrl, linkedinUrl } from "@/data/schema";
import SectionContainer from "./SectionContainer";
import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";

export default function HomeAbout() {
  return (
    <section id="about" aria-label="About Salmen Khelifi" className="border-t border-[var(--border-subtle)] py-24 md:py-32">
      <SectionContainer>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="reveal lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-muted)]">
              <Image
                src="/images/khelifi-salmen.png"
                alt="Salmen Khelifi, full-stack developer and automation specialist"
                fill
                sizes="(max-width: 1023px) 384px, 32vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_PLACEHOLDER}
              />
            </div>
          </div>

          <div className="reveal lg:col-span-8">
            <div className="mb-6"><StatusBadge>AVAILABLE FOR NEW PROJECTS</StatusBadge></div>
            <SectionHeading className="mb-6">A practical partner for the whole delivery path</SectionHeading>
            <div className="max-w-3xl space-y-5 text-body-large text-[var(--text-secondary)]">
              <p className="font-medium text-[var(--text-primary)]">
                I protect working software. I avoid unnecessary rewrites and focus on changes that improve the product, reduce operational risk, or move the roadmap forward.
              </p>
              <p>
                I can own delivery end to end, from architecture and backend systems to the interface, automation, testing, and production verification. AI-assisted tooling helps with investigation and repetitive work; architecture, review, and final decisions stay deliberate.
              </p>
            </div>

            <ul className="my-8 grid gap-3 text-sm text-[var(--text-secondary)] sm:grid-cols-2">
              <li className="outcome-point">Architecture through production</li>
              <li className="outcome-point">Web, mobile, SaaS, and automation</li>
              <li className="outcome-point">Focused changes over risky rewrites</li>
              <li className="outcome-point">Clear validation and handoff</li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <Link href="/resume" className="cta-button cta-secondary">View résumé</Link>
              <a href="/salmen-khelifi-cv.pdf" download className="inline-flex min-h-11 items-center gap-2 px-3 font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 px-3 font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                LinkedIn <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 px-3 font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                GitHub <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
