import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import { getPublishedPosts, getPostBySlug } from "@/lib/content/blog";
import {
  articleJsonLd,
  siteUrl,
  socialImage as defaultSocialImage,
  twitterImage,
} from "@/data/schema";
import { getProject, type Project } from "@/data/projects";
import { createSeoDescription, createSeoTitle } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

const automationTopicPattern = /\b(n8n|automation|workflow|webhook|integration)\b/i;

function firstArticleParagraph(content: string) {
  return content
    .replace(/```[\s\S]*?```/g, "")
    .split(/\n\s*\n/)
    .map((part) =>
      part
        .replace(/^#{1,6}\s+.*$/gm, "")
        .replace(/^>\s?/gm, "")
        .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
        .replace(/<[^>]+>/g, " ")
        .replace(/[*_`]/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    )
    .find((part) => part.length >= 80) || "";
}

export async function generateStaticParams() {
  const posts = getPublishedPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {};
  }

  const title = createSeoTitle(
    post.frontmatter.seoTitle || post.frontmatter.title,
    post.frontmatter.category,
    "Salmen Khelifi",
  );
  const descriptionSource = [
    post.frontmatter.seoDescription,
    post.frontmatter.excerpt,
  ].find(
    (value) => value && value !== post.frontmatter.title && value.length >= 80,
  )
    || firstArticleParagraph(post.content)
    || `An article by Salmen Khelifi about ${post.frontmatter.title}.`;
  const description = createSeoDescription(descriptionSource);
  const url = `${siteUrl}/blog/${post.slug}`;
  const canonicalUrl = post.frontmatter.canonicalUrl || url;
  const socialImage = post.frontmatter.cover
    ? {
        url: `${siteUrl}${post.frontmatter.cover}`,
        alt: post.frontmatter.coverAlt,
      }
    : defaultSocialImage;
  const postTwitterImage = post.frontmatter.cover
    ? socialImage
    : twitterImage;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.frontmatter.publishedAt,
      modifiedTime: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
      authors: [post.frontmatter.author],
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [postTwitterImage],
    },
    robots: {
      index: post.frontmatter.indexable,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  let MDXContent: React.ComponentType;
  try {
    const mdxModule = await import(`../../../../content/blog/${slug}.mdx`);
    MDXContent = mdxModule.default;
  } catch {
    notFound();
  }

  const jsonLd = articleJsonLd(post);
  const relatedProjects = post.frontmatter.relatedCaseStudies
    .map(getProject)
    .filter((project): project is Project => Boolean(project));
  const isAutomationArticle =
    post.frontmatter.indexable &&
    post.frontmatter.tags.some((tag) => automationTopicPattern.test(tag));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader backHref="/blog" backLabel="Back to Blog" />
      <main className="min-h-screen pt-32 pb-24">
        <article>
          <SectionContainer className="max-w-4xl">
            {/* Header / Meta */}
            <div className="mb-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--text-tertiary)] mb-4">
                <span className="font-semibold text-[var(--accent)]">
                  {post.frontmatter.category}
                </span>
                <span>•</span>
                <span>
                  By{" "}
                  <Link href="/resume" className="font-semibold hover:text-[var(--text-primary)]">
                    {post.frontmatter.author}
                  </Link>
                </span>
                <span>•</span>
                <span>{post.readingTime.text}</span>
                {post.frontmatter.publishedAt && (
                  <>
                    <span>•</span>
                    <time dateTime={post.frontmatter.publishedAt}>
                      {new Date(post.frontmatter.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </>
                )}
                {post.frontmatter.updatedAt &&
                  post.frontmatter.updatedAt !== post.frontmatter.publishedAt && (
                    <>
                      <span>•</span>
                      <span>
                        Updated{" "}
                        <time dateTime={post.frontmatter.updatedAt}>
                          {new Date(post.frontmatter.updatedAt).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                      </span>
                    </>
                  )}
              </div>
              <h1 className="text-h1 text-[var(--text-primary)] mb-6 tracking-tight">
                {post.frontmatter.title}
              </h1>
              <p className="text-body-large text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
                {post.frontmatter.excerpt}
              </p>
              {post.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {post.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-badge text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Optional Cover Image */}
            {post.frontmatter.cover && (
              <div className="mb-10 max-w-2xl mx-auto overflow-hidden rounded-2xl border border-[var(--glass-border)] shadow-md">
                <Image
                  src={post.frontmatter.cover}
                  alt={post.frontmatter.coverAlt || post.frontmatter.title}
                  width={1200}
                  height={630}
                  sizes="(min-width: 768px) 672px, calc(100vw - 3rem)"
                  className="w-full h-auto rounded-2xl block"
                  priority
                />
              </div>
            )}

            {/* Article Content */}
            <div className="glass-panel p-8 md:p-12 blog-article-content">
              <MDXContent />
            </div>
            {isAutomationArticle && (
              <aside
                className="modern-card mt-12 rounded-[var(--radius-lg)] p-6"
                aria-labelledby="automation-service-heading"
              >
                <h2 id="automation-service-heading" className="text-h2 mb-3">
                  Need an n8n workflow implemented?
                </h2>
                <p className="text-body-regular text-[var(--text-secondary)]">
                  Explore Salmen&apos;s approach to scoped, tested automation and API integration work.
                </p>
                <Link
                  href="/n8n-automation-developer"
                  className="mt-4 inline-flex min-h-11 items-center font-semibold text-[var(--accent)] hover:underline"
                >
                  Explore n8n automation development →
                </Link>
              </aside>
            )}
            {relatedProjects.length > 0 && (
              <aside className="mt-12" aria-labelledby="related-case-studies-heading">
                <h2 id="related-case-studies-heading" className="text-h2 mb-6">
                  Related Case Studies
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedProjects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="modern-card flex min-h-11 items-center justify-between rounded-[var(--radius-lg)] p-5 font-semibold hover:border-[var(--border-active)]"
                    >
                      {project.title}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </aside>
            )}
          </SectionContainer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
