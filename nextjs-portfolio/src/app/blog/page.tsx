import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import SectionHeading from "@/components/SectionHeading";
import BlogListWithFilter from "@/components/BlogListWithFilter";
import { siteUrl } from "@/data/schema";
import { getPublishedPosts } from "@/lib/content/blog";

const title = "Blog";
const description =
  "Engineering write-ups, architecture decisions, and retrospectives from real production projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/blog`,
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        alt: "Salmen Khelifi - Full-Stack Developer & Automation Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        alt: "Salmen Khelifi - Full-Stack Developer & Automation Specialist",
      },
    ],
  },
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-32 pb-24">
        <SectionContainer>
          <div className="mb-12 max-w-3xl">
            <span className="text-caption text-[var(--accent)]">Writing & Retrospectives</span>
            <h1 className="mt-2 text-h1 text-[var(--text-primary)]">Engineering Journal</h1>
            <p className="mt-4 text-body-large text-[var(--text-secondary)]">
              Deep dives into production hardening, system architecture, database migrations, and solo engineering decisions.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="glass-panel p-10 md:p-14 text-center max-w-2xl mx-auto my-12">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg-elevated)] text-[var(--accent)] mb-6">
                <BookOpen className="h-6 w-6" aria-hidden="true" />
              </div>
              <SectionHeading className="mb-3 text-center">Writing is on the way.</SectionHeading>
              <p className="text-body-regular text-[var(--text-secondary)] max-w-md mx-auto">
                Real engineering write-ups from real projects, published as they&apos;re ready. Check back soon for technical retrospectives and architecture deep dives.
              </p>
              <div className="mt-8">
                <Link
                  href="/"
                  className="cta-button cta-secondary inline-flex items-center gap-2"
                >
                  Return to Portfolio
                </Link>
              </div>
            </div>
          ) : (
            <BlogListWithFilter posts={posts} />
          )}
        </SectionContainer>
      </main>
      <SiteFooter />
    </>
  );
}
