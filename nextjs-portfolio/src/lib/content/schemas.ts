import { z } from "zod";

export const BlogStatusSchema = z.enum(["draft", "published", "archived"]);
export type BlogStatus = z.infer<typeof BlogStatusSchema>;

export const BlogFrontmatterSchema = z
  .object({
    title: z.string().min(1),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    excerpt: z.string().min(1),
    status: BlogStatusSchema,
    publishedAt: z.string().date().optional(),
    updatedAt: z.string().date().optional(),
    category: z.string().min(1),
    tags: z.array(z.string().min(1)).default([]),
    featured: z.boolean().default(false),
    cover: z.string().startsWith("/").optional(),
    coverAlt: z.string().min(1).optional(),
    author: z.literal("Salmen Khelifi"),
    seoTitle: z.string().min(1).optional(),
    seoDescription: z.string().min(1).optional(),
    canonicalUrl: z.string().url().optional(),
    relatedCaseStudies: z.array(z.string()).default([]),
  })
  .refine((data) => !data.cover || !!data.coverAlt, {
    message: "coverAlt is required whenever cover is set",
    path: ["coverAlt"],
  })
  .refine((data) => data.status !== "published" || !!data.publishedAt, {
    message: "publishedAt is required once status is \"published\"",
    path: ["publishedAt"],
  });

export type BlogFrontmatter = z.infer<typeof BlogFrontmatterSchema>;

export const CaseStudyPlacementSchema = z
  .enum([
    "after-solution",
    "after-architecture",
    "after-key-product-flows",
    "after-engineering-decisions",
    "before-gallery",
  ])
  .default("after-engineering-decisions");

export type CaseStudyPlacement = z.infer<typeof CaseStudyPlacementSchema>;

export const CaseStudyTocEntrySchema = z.object({
  id: z.string(),
  label: z.string(),
});

export type CaseStudyTocEntry = z.infer<typeof CaseStudyTocEntrySchema>;

export const CaseStudyNarrativeSchema = z.object({
  projectSlug: z.string(),
  placement: CaseStudyPlacementSchema,
  toc: z.array(CaseStudyTocEntrySchema).default([]),
});

export type CaseStudyNarrativeFrontmatter = z.infer<typeof CaseStudyNarrativeSchema>;

