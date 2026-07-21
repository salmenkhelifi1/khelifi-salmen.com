import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SectionContainer from "@/components/SectionContainer";
import { getPublishedPosts, getPostBySlug } from "@/lib/content/blog";
import { articleJsonLd, siteUrl } from "@/data/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

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

  const title = post.frontmatter.seoTitle || `${post.frontmatter.title} | Salmen Khelifi`;
  const description = post.frontmatter.seoDescription || post.frontmatter.excerpt;
  const url = post.frontmatter.canonicalUrl || `${siteUrl}/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.frontmatter.publishedAt,
      modifiedTime: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
      authors: [post.frontmatter.author],
      images: post.frontmatter.cover
        ? [{ url: `${siteUrl}${post.frontmatter.cover}` }]
        : undefined,
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
              <div className="mb-12 overflow-hidden rounded-2xl border border-[var(--glass-border)]">
                <Image
                  src={post.frontmatter.cover}
                  alt={post.frontmatter.coverAlt || post.frontmatter.title}
                  width={1200}
                  height={630}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            )}

            {/* Article Content */}
            <div className="glass-panel p-8 md:p-12">
              <MDXContent />
            </div>
          </SectionContainer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
