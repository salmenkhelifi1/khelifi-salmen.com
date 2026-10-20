import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, FileText } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import SubstackEmbed from "@/components/SubstackEmbed";
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

const parts = [
  {
    heading: "Who and why",
    body: "Who the app is for, what problem it solves, and how you will know it worked.",
  },
  {
    heading: "What gets built",
    body: "The smallest version to launch, platforms, accounts, data and integrations.",
  },
  {
    heading: "After launch",
    body: "Who maintains it, who handles store review and support, and your budget and deadline.",
  },
];

export default function ChecklistPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen pt-32 pb-24">
        <SectionContainer>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <span className="text-caption text-[var(--accent)]">Free checklist</span>
              <h1 className="mt-2 text-h1 text-[var(--text-primary)]">
                12 questions to answer before you hire an app developer
              </h1>
              <p className="mt-4 max-w-xl text-body-large text-[var(--text-secondary)]">
                One page. Answer them on paper, then talk to any developer. If you cannot answer one,
                that is the first thing to discuss.
              </p>

              <ul className="mt-8 grid gap-5">
                {parts.map((part) => (
                  <li key={part.heading} className="flex gap-3">
                    <CheckCircle2
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-h3 text-[var(--text-primary)]">{part.heading}</h2>
                      <p className="mt-1 text-body-regular text-[var(--text-secondary)]">{part.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 max-w-xl">
                <SubstackEmbed
                  resource="scoping-checklist"
                  placement="checklist_page"
                  heading="Get the checklist by email"
                  blurb="Subscribe and the checklist lands in your inbox, then occasional emails about building apps and websites. Unsubscribe any time."
                />
              </div>

              <p className="mt-6 text-body-regular text-[var(--text-secondary)]">
                Looking for more free material?{" "}
                <Link href="/resources" className="text-[var(--accent)] underline underline-offset-4">
                  See all free resources
                </Link>
                .
              </p>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="glass-panel overflow-hidden p-4">
                <Image
                  src="/images/checklist-preview-v2.jpg"
                  alt="Preview of the one-page checklist: 12 questions in three parts, plus red flags in any quote"
                  width={989}
                  height={1028}
                  className="h-auto w-full rounded-md"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
              <p className="mt-3 flex items-center gap-2 text-body-regular text-[var(--text-secondary)]">
                <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                One A4 page, PDF
              </p>
            </div>
          </div>
        </SectionContainer>
      </main>
      <SiteFooter showNewsletter={false} />
    </>
  );
}
