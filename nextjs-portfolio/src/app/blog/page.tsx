import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import SectionHeading from "@/components/SectionHeading";
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
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="glass-panel flex flex-col justify-between p-8 transition-all hover:border-[var(--border-active)]"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-tertiary)] mb-4">
                      <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent)]">
                        <Tag className="h-3 w-3" aria-hidden="true" />
                        {post.frontmatter.category}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readingTime.text}
                      </span>
                      {post.frontmatter.publishedAt && (
                        <>
                          <span>•</span>
                          <time dateTime={post.frontmatter.publishedAt}>
                            {new Date(post.frontmatter.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </>
                      )}
                    </div>
                    <h2 className="text-h3 text-[var(--text-primary)] mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[var(--accent)] transition-colors"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <p className="text-body-regular text-[var(--text-secondary)] mb-6 line-clamp-3">
                      {post.frontmatter.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-tertiary)]">
                      By {post.frontmatter.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      Read Article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </SectionContainer>
      </main>
      <SiteFooter />
    </>
  );
}
