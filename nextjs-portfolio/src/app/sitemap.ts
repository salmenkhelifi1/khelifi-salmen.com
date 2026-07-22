import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/schema";
import { getPublishedPosts } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedPosts = getPublishedPosts().filter(
    (post) =>
      !post.frontmatter.canonicalUrl ||
      new URL(post.frontmatter.canonicalUrl).origin === siteUrl,
  );

  const staticRoutes = ["", "/work", "/resume", "/blog"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const mainEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: (route === "" || route === "/blog"
        ? "monthly"
        : "yearly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: route === "" ? 1 : 0.7,
    })),
    ...projectRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];

  const blogEntries: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    ...(post.frontmatter.updatedAt || post.frontmatter.publishedAt
      ? {
          lastModified: new Date(
            post.frontmatter.updatedAt || post.frontmatter.publishedAt!,
          ),
        }
      : {}),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainEntries, ...blogEntries];
}
