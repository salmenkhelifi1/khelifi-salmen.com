import { siteUrl } from "@/data/schema";
import { getIndexablePublishedPosts } from "./blog";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// Same filter as sitemap.ts: only posts that are canonical on this site.
export function getFeedPosts() {
  return getIndexablePublishedPosts().filter(
    (post) =>
      !post.frontmatter.canonicalUrl ||
      post.frontmatter.canonicalUrl === `${siteUrl}/blog/${post.slug}`,
  );
}

export function buildRssFeed(): string {
  const posts = getFeedPosts();
  const latest = posts[0]?.frontmatter;
  const lastBuild = new Date(
    latest?.updatedAt || latest?.publishedAt || Date.now(),
  ).toUTCString();

  const items = posts
    .map(({ frontmatter: f, slug }) => {
      const url = `${siteUrl}/blog/${slug}`;
      const categories = [f.category, ...f.tags]
        .map((c) => `      <category>${escapeXml(c)}</category>`)
        .join("\n");
      return `    <item>
      <title>${escapeXml(f.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(f.publishedAt!).toUTCString()}</pubDate>
      <description>${escapeXml(f.seoDescription || f.excerpt)}</description>
${categories}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Salmen Khelifi: Engineering Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Engineering write-ups, architecture decisions, and project retrospectives from a full-stack developer.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}
