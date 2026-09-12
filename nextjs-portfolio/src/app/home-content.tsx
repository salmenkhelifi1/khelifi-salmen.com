import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hand } from "lucide-react";
import { bookingUrl } from "@/data/schema";
import {
  BLUR_PLACEHOLDER,
  credibilityItems,
  featuredWork,
  homepageCompactHrefs,
  portraitPreviewImages,
  projects,
  services,
} from "@/data/homepage";
import CompactProject from "@/components/CompactProject";
import ContactCTA from "@/components/ContactCTA";
import CredibilityStrip from "@/components/CredibilityStrip";
import EngineeringProof from "@/components/EngineeringProof";
import FeaturedProject from "@/components/FeaturedProject";
import HomeAbout from "@/components/HomeAbout";
import PrimaryButton from "@/components/PrimaryButton";
import ProcessTimeline from "@/components/ProcessTimeline";
import RevealObserver from "@/components/RevealObserver";
import SecondaryButton from "@/components/SecondaryButton";
import SectionContainer from "@/components/SectionContainer";
import SectionHeading from "@/components/SectionHeading";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import TestimonialSpotlight from "@/components/TestimonialSpotlight";

export default function HomeContent() {
  const compactProjects = homepageCompactHrefs
    .map((href) => projects.find((project) => project.href === href))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section aria-label="Hero introduction" className="hero-section flex w-full flex-col items-center px-5 sm:px-6">
          <div className="hero-content mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="hero-copy flex flex-col items-start text-left lg:col-span-7">
              <div className="hero-kicker reveal" style={{ transitionDelay: "50ms" }}>
                <span className="hero-kicker-dot" aria-hidden="true" />
                <span>Hey, I&apos;m Salmen</span>
                <span className="hero-kicker-icon" aria-hidden="true">
                  <Hand className="hero-kicker-icon-glyph" strokeWidth={2.25} />
                </span>
              </div>

              <h1 className="hero-title reveal" style={{ transitionDelay: "100ms" }}>
                I build and improve digital products that <span className="hero-title-accent">save work</span>, convert customers, and stay reliable as they grow.
              </h1>

              <p className="hero-subtitle reveal text-body-large" style={{ transitionDelay: "180ms" }}>
                I help founders, agencies, and businesses launch web and mobile products, fix existing systems, and automate repetitive operations, from architecture to production.
              </p>

              <div className="hero-actions reveal flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={{ transitionDelay: "240ms" }}>
                <PrimaryButton href="#contact" className="w-full sm:w-auto">
                  Tell me about your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PrimaryButton>
                <SecondaryButton href="#work" className="w-full sm:w-auto">View selected work</SecondaryButton>
              </div>

              <a
                href={bookingUrl}
                data-cal-namespace="30min"
                data-cal-link="salmen-khelifi/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="hero-calendar-link reveal"
                style={{ transitionDelay: "280ms" }}
              >
                Prefer a call? Book 30 minutes <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-media reveal" style={{ transitionDelay: "220ms" }}>
            <Image
              src="/images/salmen-workspace-hero.png"
              alt="Salmen Khelifi working at a laptop in his workspace"
              fill
              sizes="(max-width: 1023px) calc(100vw - 2.5rem), 46vw"
              className="hero-portrait"
              placeholder="blur"
              blurDataURL={BLUR_PLACEHOLDER}
              priority
            />
            <div className="hero-media-shade" aria-hidden="true" />
            <div className="hero-media-caption">
              <span className="hero-media-caption-dot" aria-hidden="true" />
              <span>Based in Tunisia · working worldwide</span>
            </div>
          </div>
        </section>

        <CredibilityStrip items={credibilityItems} />

        <section id="capabilities" aria-label="What I can help you do" className="py-24 md:py-32">
          <SectionContainer>
            <div className="mb-12 max-w-3xl reveal md:mb-16">
              <p className="mb-3 text-caption text-[var(--accent)]">Ways I can help</p>
              <SectionHeading className="mb-4">What I can help you do</SectionHeading>
              <p className="text-body-large text-[var(--text-secondary)]">
                Start with the business outcome. I will shape the product and technical path around what already exists, what is risky, and what needs to ship.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="outcome-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                    <div className="service-icon mb-6 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]">
                      <Icon className="h-6 w-6 text-[var(--accent)]" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 text-h3">{service.title}</h3>
                    <p className="text-body-regular text-[var(--text-secondary)]">{service.description}</p>
                    {service.href && (
                      <Link href={service.href} className="project-link mt-5 inline-flex min-h-11 items-center font-semibold text-[var(--text-primary)]">
                        Explore automation services <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </article>
                );
              })}
            </div>
          </SectionContainer>
        </section>

        <section id="work" aria-label="Featured projects" className="py-24 md:py-32">
          <SectionContainer>
            <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-caption text-[var(--accent)]">Selected evidence</p>
                <SectionHeading className="mb-0">Selected work</SectionHeading>
              </div>
              <Link href="/work" className="project-link inline-flex min-h-11 items-center font-semibold text-[var(--text-primary)]">
                View all work <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mb-16 space-y-16 md:mb-20 md:space-y-24">
              {featuredWork.map((item, index) => (
                <FeaturedProject key={item.title} item={item} imageOnRight={index % 2 === 0} headingLevel="h3" />
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {compactProjects.map((project) => (
                <CompactProject key={project.title} project={project} isPortraitPreview={portraitPreviewImages.has(project.image)} />
              ))}
            </div>
          </SectionContainer>
        </section>

        <TestimonialSpotlight />
        <EngineeringProof />
        <ProcessTimeline />
        <HomeAbout />
        <ContactCTA />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
