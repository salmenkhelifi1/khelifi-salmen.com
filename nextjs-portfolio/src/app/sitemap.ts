import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/schema";

const legacyRoutes = [
  "/project-adaptifit",
  "/project-chaktech",
  "/project-grammarai",
  "/project-mobile",
  "/project-n8n",
  "/project-rentiora",
  "/project-stitch-collection",
  "/project-stitch-mobile",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    ...projects.map((project) => `/projects/${project.slug}`),
    ...legacyRoutes,
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
