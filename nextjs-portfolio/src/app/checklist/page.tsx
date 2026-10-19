import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import { siteUrl, socialImage, twitterImage } from "@/data/schema";

const title = "Free Checklist: 12 Questions Before You Hire an App Developer";
const description =
  "A one-page checklist of 12 questions to answer before hiring an app developer. Subscribe to my newsletter and get it by email.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/checklist",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/checklist`,
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [twitterImage],
  },
};

const questionGroups = [
  "Who the app is for and what success looks like",
  "What gets built first, on which platforms, with what data",
  "Who maintains it, supports it and owns the code after launch",
];

export default function ChecklistPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <SectionContainer>
          <div className="max-w-3xl">
            <span className="text-caption text-[var(--accent)]">Free checklist</span>
            <h1 className="mt-2 text-h1 text-[var(--text-primary)]">
              12 questions to answer before you hire an app developer
            </h1>
            <p className="mt-4 text-body-large text-[var(--text-secondary)]">
              One page. Answer them on paper, then talk to any developer. Subscribe to my newsletter
              and I will email you the checklist.
            </p>
            <ul className="mt-6 space-y-2 text-body-regular text-[var(--text-secondary)]">
              {questionGroups.map((group) => (
                <li key={group}>{group}</li>
              ))}
            </ul>
          </div>

          <div className="glass-panel mt-10 max-w-xl p-6 md:p-8">
            <h2 className="mb-4 text-h3 text-[var(--text-primary)]">Get the checklist by email</h2>
            <iframe
              src="https://salmenkhelifi.substack.com/embed"
              title="Subscribe to Salmen Khelifi's newsletter on Substack"
              className="h-[20rem] w-full rounded-md border border-[var(--glass-border)] bg-white"
              loading="lazy"
            />
            <p className="mt-4 text-[0.8125rem] leading-relaxed text-[var(--text-secondary)]">
              You will get the checklist, then occasional emails about building apps and websites.
              Unsubscribe any time.
            </p>
          </div>
        </SectionContainer>
      </main>
      <SiteFooter />
    </>
  );
}
