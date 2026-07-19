import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/schema";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...[
        "GPTBot",
        "ChatGPT-User",
        "ClaudeBot",
        "Claude-Web",
        "PerplexityBot",
        "Google-Extended",
        "CCBot",
        "meta-externalagent",
      ].map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
