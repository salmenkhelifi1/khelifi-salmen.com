import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import SectionHeading from "@/components/SectionHeading";
import BlogListWithFilter from "@/components/BlogListWithFilter";
import { siteUrl, socialImage, twitterImage } from "@/data/schema";
import { getPublishedPosts } from "@/lib/content/blog";

const title = "Engineering Journal & Retrospectives | Salmen Khelifi";
const description =
  "Read Salmen Khelifi’s engineering journal on system architecture, database migrations, automation, production hardening, and decisions from real projects.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/blog`,
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
