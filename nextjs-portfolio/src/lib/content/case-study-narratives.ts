import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ComponentType } from "react";
import { projects } from "@/data/projects";
import {
  CaseStudyNarrativeSchema,
  type CaseStudyPlacement,
  type CaseStudyTocEntry,
} from "./schemas";

export type CaseStudyNarrative = {
  Component: ComponentType;
  placement: CaseStudyPlacement;
  toc: CaseStudyTocEntry[];
  projectSlug: string;
};

const CASE_STUDIES_DIR = path.join(process.cwd(), "content", "case-studies");
const validSlugs = new Set(projects.map((p) => p.slug));

export function validateAllCaseStudyNarratives(): void {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return;

  const filenames = fs.readdirSync(CASE_STUDIES_DIR);
  const mdxFiles = filenames.filter(
    (file) => file.endsWith(".mdx") && !file.startsWith("_") && !file.startsWith(".")
  );

  for (const filename of mdxFiles) {
    const filePath = path.join(CASE_STUDIES_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const parseResult = CaseStudyNarrativeSchema.safeParse(data);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");
      throw new Error(`Invalid frontmatter in case study narrative "${filePath}": ${errorMsg}`);
    }

    const frontmatter = parseResult.data;

    if (!validSlugs.has(frontmatter.projectSlug)) {
      throw new Error(
        `Invalid projectSlug "${frontmatter.projectSlug}" in narrative "${filePath}": must match an existing project slug in src/data/projects.ts`
      );
    }

    const expectedSlug = filename.replace(/\.mdx$/, "");
    if (frontmatter.projectSlug !== expectedSlug) {
      throw new Error(
        `Slug mismatch in narrative "${filePath}": frontmatter projectSlug "${frontmatter.projectSlug}" does not match filename "${expectedSlug}"`
      );
    }
  }
}

export async function getCaseStudyNarrative(
  projectSlug: string
): Promise<CaseStudyNarrative | undefined> {
  // Validate all case study narratives at call/build time
  validateAllCaseStudyNarratives();

  const filePath = path.join(CASE_STUDIES_DIR, `${projectSlug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  const parseResult = CaseStudyNarrativeSchema.safeParse(data);
  if (!parseResult.success) {
    const errorMsg = parseResult.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");
    throw new Error(`Invalid frontmatter in case study narrative "${filePath}": ${errorMsg}`);
  }

  const frontmatter = parseResult.data;

  const mdxModule = await import(`../../../content/case-studies/${projectSlug}.mdx`);

  return {
    Component: mdxModule.default,
    placement: frontmatter.placement,
    toc: frontmatter.toc,
    projectSlug: frontmatter.projectSlug,
  };
}
