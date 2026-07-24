const fs = require("fs");
const path = require("path");

const STUDIO_BLOG_DIR = "/Users/salmenkhelifi/Developer/salmen/social-content-studio/output/blog";
const PORTFOLIO_CONTENT_DIR = path.join(__dirname, "../content/blog");
const PORTFOLIO_PUBLIC_DIR = path.join(__dirname, "../public/images/blog");

if (!fs.existsSync(STUDIO_BLOG_DIR)) {
  console.error(`Studio blog directory not found at ${STUDIO_BLOG_DIR}`);
  process.exit(1);
}

if (!fs.existsSync(PORTFOLIO_CONTENT_DIR)) {
  fs.mkdirSync(PORTFOLIO_CONTENT_DIR, { recursive: true });
}
if (!fs.existsSync(PORTFOLIO_PUBLIC_DIR)) {
  fs.mkdirSync(PORTFOLIO_PUBLIC_DIR, { recursive: true });
}

const entries = fs.readdirSync(STUDIO_BLOG_DIR, { withFileTypes: true });

let syncedCount = 0;
let updatedImages = 0;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;

  const folderPath = path.join(STUDIO_BLOG_DIR, entry.name);
  const manifestPath = path.join(folderPath, "manifest.json");
  const studioMdxPath = path.join(folderPath, "portfolio.mdx");
  const coverPath = path.join(folderPath, "images/cover.png");

  if (!fs.existsSync(manifestPath)) continue;

  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    const slug = manifest.slug;
    if (!slug) continue;

    // 1. Copy Cover Image
    if (fs.existsSync(coverPath)) {
      const targetImgDir = path.join(PORTFOLIO_PUBLIC_DIR, slug);
      if (!fs.existsSync(targetImgDir)) {
        fs.mkdirSync(targetImgDir, { recursive: true });
      }
      const targetCoverPath = path.join(targetImgDir, "cover.png");
      fs.copyFileSync(coverPath, targetCoverPath);
      updatedImages++;
    }

    // 2. Sync MDX file
    const targetMdxPath = path.join(PORTFOLIO_CONTENT_DIR, `${slug}.mdx`);
    const coverUrlPath = `/images/blog/${slug}/cover.png`;

    let mdxBody = "";
    if (fs.existsSync(studioMdxPath)) {
      let raw = fs.readFileSync(studioMdxPath, "utf8");
      const parts = raw.split(/^---$/m);
      if (parts.length >= 3) {
        mdxBody = parts.slice(2).join("---").trim();
      } else {
        mdxBody = raw.trim();
      }
    } else if (fs.existsSync(targetMdxPath)) {
      let raw = fs.readFileSync(targetMdxPath, "utf8");
      const parts = raw.split(/^---$/m);
      if (parts.length >= 3) {
        mdxBody = parts.slice(2).join("---").trim();
      } else {
        mdxBody = raw.trim();
      }
    }

    const title = (manifest.title || slug).replace(/"/g, '\\"');
    const category = manifest.category || "Engineering";
    const tags = JSON.stringify(manifest.tags || []);
    const date = manifest.createdAt ? manifest.createdAt.split("T")[0] : "2026-07-24";
    const coverAlt = `${title} cover illustration`;

    const cleanFrontmatter = `---
title: "${title}"
slug: "${slug}"
excerpt: "${title}"
status: "published"
updatedAt: "${date}"
publishedAt: "${date}"
category: "${category}"
tags: ${tags}
featured: false
cover: "${coverUrlPath}"
coverAlt: "${coverAlt}"
author: "Salmen Khelifi"
seoTitle: "${title}"
seoDescription: "${title}"
canonicalUrl: "https://khelifi-salmen.com/blog/${slug}"
relatedCaseStudies: []
---

${mdxBody}`;

    fs.writeFileSync(targetMdxPath, cleanFrontmatter, "utf8");
    syncedCount++;
  } catch (err) {
    console.error(`Error processing ${entry.name}:`, err.message);
  }
}

console.log(`Successfully synced ${syncedCount} blog posts and ${updatedImages} cover thumbnails!`);
