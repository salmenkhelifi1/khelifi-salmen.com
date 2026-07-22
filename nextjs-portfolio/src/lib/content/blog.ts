import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogFrontmatter, BlogFrontmatterSchema } from "./schemas";
import { calculateReadingTime, ReadingTime } from "./reading-time";
import { projects } from "@/data/projects";

const validProjectSlugs = new Set(projects.map((p) => p.slug));

export type BlogPost = {
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: ReadingTime;
  slug: string;
  filePath: string;
};

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const filenames = fs.readdirSync(BLOG_DIRECTORY);
  const mdxFiles = filenames.filter(
    (file) => file.endsWith(".mdx") && !file.startsWith("_") && !file.startsWith(".")
  );

  const posts: BlogPost[] = mdxFiles.map((filename) => {
    const filePath = path.join(BLOG_DIRECTORY, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const parseResult = BlogFrontmatterSchema.safeParse(data);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; ");
      throw new Error(`Invalid frontmatter in blog post "${filePath}": ${errorMsg}`);
    }

    const frontmatter = parseResult.data;
    const readingTime = calculateReadingTime(content);

    const expectedSlug = filename.replace(/\.mdx$/, "");
    if (frontmatter.slug !== expectedSlug) {
      throw new Error(
        `Slug mismatch in blog post "${filePath}": frontmatter slug "${frontmatter.slug}" does not match filename "${expectedSlug}"`
      );
    }

    for (const relatedSlug of frontmatter.relatedCaseStudies) {
      if (!validProjectSlugs.has(relatedSlug)) {
        throw new Error(
          `Invalid relatedCaseStudies entry "${relatedSlug}" in blog post "${filePath}": must match an existing project slug in src/data/projects.ts`
        );
      }
    }

    return {
      frontmatter,
      content,
      readingTime,
      slug: frontmatter.slug,
      filePath,
    };
  });

  return posts.sort((a, b) => {
    const dateA = a.frontmatter.publishedAt || "1970-01-01";
    const dateB = b.frontmatter.publishedAt || "1970-01-01";
    return dateB.localeCompare(dateA);
  });
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.frontmatter.status === "published");
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const publishedPosts = getPublishedPosts();
  return publishedPosts.find((post) => post.slug === slug);
}
