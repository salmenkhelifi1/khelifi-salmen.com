import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import SectionContainer from "@/components/SectionContainer";
import { bookingUrl } from "@/data/schema";

export type ServiceProof = { slug: string; name: string; summary: string };
export type ServiceContent = {
  eyebrow: string;
  h1: string;
  intro: string;
  problems: string[];
  builds: string[];
  proof: ServiceProof[];
  steps: string[];
  related: { href: string; label: string }[];
  jsonLd: unknown;
};

export default function ServicePage({ content }: { content: ServiceContent }) {
  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(content.jsonLd) }}
      />
      <SiteHeader />
      <main className="pt-32 pb-24">
        <SectionContainer className="max-w-4xl">
          <p className="text-caption uppercase tracking-wider text-[var(--accent)]">{content.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-h1">{content.h1}</h1>
          <p className="mt-6 max-w-2xl text-body-large text-[var(--text-secondary)]">{content.intro}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton href={bookingUrl}>Book a discovery call</PrimaryButton>
            <SecondaryButton href="/work">View selected work</SecondaryButton>
          </div>

          <section className="mt-24 grid gap-12 border-t border-[var(--border-subtle)] pt-16 md:grid-cols-2">
            <div>
              <h2 className="text-h2">Problems I solve</h2>
              <ul className="mt-6 space-y-4 text-body-regular text-[var(--text-secondary)]">
                {content.problems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-h2">What I build</h2>
              <ul className="mt-6 space-y-4 text-body-regular text-[var(--text-secondary)]">
                {content.builds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-24 border-t border-[var(--border-subtle)] pt-16">
            <h2 className="text-h2">Proof: work I have built</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {content.proof.map((item) => (
                <Link
                  key={item.slug}
                  className="modern-card rounded-[var(--radius-xl)] p-6 hover:border-[var(--accent)]"
                  href={`/projects/${item.slug}`}
                >
                  <h3 className="text-h3">{item.name}</h3>
                  <p className="mt-3 text-body-regular text-[var(--text-secondary)]">{item.summary}</p>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-body-regular text-[var(--text-secondary)]">
              On Freelancer.com: 100% on-time and on-budget delivery. Full history in the{" "}
              <Link className="underline underline-offset-4" href="/resume">résumé</Link>.
            </p>
          </section>

          <section className="mt-24 border-t border-[var(--border-subtle)] pt-16">
            <h2 className="text-h2">How an engagement starts</h2>
            <ol className="mt-6 space-y-4 text-body-regular text-[var(--text-secondary)]">
              {content.steps.map((item, i) => (
                <li key={item}>{i + 1}. {item}</li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href={bookingUrl}>Book a discovery call</PrimaryButton>
              <SecondaryButton href="/#contact">Send the problem by message</SecondaryButton>
            </div>
            <p className="mt-8 text-body-regular text-[var(--text-secondary)]">
              Related:{" "}
              {content.related.map((r, i) => (
                <span key={r.href}>
                  {i > 0 && " · "}
                  <Link className="underline underline-offset-4" href={r.href}>{r.label}</Link>
                </span>
              ))}
            </p>
          </section>
        </SectionContainer>
      </main>
      <SiteFooter />
    </div>
  );
}
