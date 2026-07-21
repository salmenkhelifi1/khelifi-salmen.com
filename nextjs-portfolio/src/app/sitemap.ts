import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/schema";
import { getPublishedPosts } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const publishedPosts = getPublishedPosts();

  const staticRoutes = ["", "/resume", "/blog"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  const mainEntries: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: (route === "" ? "monthly" : "yearly") as MetadataRoute.Sitemap[number]["changeFrequency"],
      priority: route === "" ? 1 : 0.7,
    })),
    ...projectRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];

  const blogEntries: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.updatedAt
      ? new Date(post.frontmatter.updatedAt)
      : post.frontmatter.publishedAt
      ? new Date(post.frontmatter.publishedAt)
      : now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainEntries, ...blogEntries];
}
