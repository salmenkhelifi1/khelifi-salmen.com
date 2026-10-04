import fs from "fs";
import path from "path";
import { siteUrl } from "@/data/schema";
import { getFeedPosts } from "@/lib/content/feed";

export const dynamic = "force-static";

// Hand-written intro lives in content/llms/llms-base.txt; the blog section is
// generated from MDX at build time so it never goes stale.
export function GET() {
  const base = fs
    .readFileSync(path.join(process.cwd(), "content", "llms", "llms-base.txt"), "utf8")
    .trimEnd();

  const posts = getFeedPosts()
    .map(
      ({ frontmatter: f, slug }) =>
        `- [${f.title}](${siteUrl}/blog/${slug}): ${f.seoDescription || f.excerpt}`,
    )
    .join("\n");

  const body = `${base}

## Blog

RSS feed: ${siteUrl}/feed.xml

${posts}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
