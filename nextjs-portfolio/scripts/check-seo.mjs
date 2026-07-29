import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const siteUrl = "https://www.khelifi-salmen.com";
const appDir = path.join(process.cwd(), ".next", "server", "app");
const machineFiles = ["/llms.txt", "/llms-full.txt", "/services.md", "/pricing.md"];
const errors = [];

function decode(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function read(file) {
  return fs.readFileSync(path.join(process.cwd(), file), "utf8");
}

function meta(html, attribute, value) {
  return decode(
    html.match(
      new RegExp(`<meta ${attribute}="${value}" content="([^"]*)"`, "i"),
    )?.[1],
  );
}

function hasRobotsDirective(html, directive) {
  return meta(html, "name", "robots")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .includes(directive);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasNetlifyHeader(config, pathname, name, value) {
  const rule = config.match(
    new RegExp(
      `\\[\\[headers\\]\\]\\s*for\\s*=\\s*"${escapeRegExp(pathname)}"([\\s\\S]*?)(?=\\[\\[headers\\]\\]|$)`,
    ),
  );

  return Boolean(
    rule &&
      new RegExp(
        `^\\s*${escapeRegExp(name)}\\s*=\\s*"${escapeRegExp(value)}"\\s*$`,
        "m",
      ).test(rule[1]),
  );
}

function hasType(value, type) {
  if (Array.isArray(value)) return value.some((item) => hasType(item, type));
  return value && typeof value === "object" && value["@type"] === type;
}

function hasKey(value, key) {
  if (Array.isArray(value)) return value.some((item) => hasKey(item, key));
  if (!value || typeof value !== "object") return false;
  return key in value || Object.values(value).some((item) => hasKey(item, key));
}

const projectSlugs = [...read("src/data/projects.ts").matchAll(/^\s+slug: "([^"]+)",$/gm)]
  .map((match) => match[1]);

const publishedBlogPosts = fs
  .readdirSync(path.join(process.cwd(), "content", "blog"))
  .filter((file) => file.endsWith(".mdx") && !file.startsWith("_"))
  .map((file) => {
    const { data } = matter(read(path.join("content", "blog", file)));
    return {
      slug: file.replace(/\.mdx$/, ""),
      status: data.status,
      indexable: data.indexable !== false,
    };
  })
  .filter((post) => post.status === "published");

const indexableBlogPosts = publishedBlogPosts.filter((post) => post.indexable);
const noindexBlogPosts = publishedBlogPosts.filter((post) => !post.indexable);

const routes = [
  { route: "/", file: "index.html", jsonLd: "Person" },
  { route: "/work", file: "work.html" },
  { route: "/resume", file: "resume.html" },
  { route: "/blog", file: "blog.html" },
  {
    route: "/n8n-automation-developer",
    file: "n8n-automation-developer.html",
    jsonLd: "Service",
    breadcrumb: true,
  },
  { route: "/404", file: "_not-found.html", indexable: false },
  ...projectSlugs.map((slug) => ({
    route: `/projects/${slug}`,
    file: `projects/${slug}.html`,
    jsonLd: "CreativeWork",
    breadcrumb: true,
  })),
  ...publishedBlogPosts.map(({ slug, indexable }) => ({
    route: `/blog/${slug}`,
    file: `blog/${slug}.html`,
    jsonLd: "BlogPosting",
    breadcrumb: true,
    indexable,
  })),
];

const titles = new Map();
const descriptions = new Map();

for (const page of routes) {
  const file = path.join(appDir, page.file);
  if (!fs.existsSync(file)) {
    errors.push(`${page.route}: generated HTML missing`);
    continue;
  }

  const html = fs.readFileSync(file, "utf8");
  const title = decode(html.match(/<title>(.*?)<\/title>/i)?.[1]);
  const description = meta(html, "name", "description");
  const canonical = decode(html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1]);
  const expectedUrl = `${siteUrl}${page.route === "/" ? "" : page.route}`;

  if (page.indexable === false && !hasRobotsDirective(html, "noindex")) {
    errors.push(`${page.route}: noindex robots directive missing`);
  }
  if (page.indexable !== false && hasRobotsDirective(html, "noindex")) {
    errors.push(`${page.route}: unexpectedly marked noindex`);
  }
  if (page.route === "/" && hasRobotsDirective(html, "index")) {
    errors.push("/: root layout still emits an explicit index robots directive");
  }

  if (title.length < 50 || title.length > 60) {
    errors.push(`${page.route}: title length ${title.length}, expected 50-60`);
  }
  // A complete source-backed description can be shorter than a conventional
  // snippet target; do not pad it with an unrelated fragment to reach 80.
  if (description.length < 40 || description.length > 160) {
    errors.push(`${page.route}: description length ${description.length}, expected 40-160`);
  }
  if (!/[.!?]$/.test(description)) {
    errors.push(`${page.route}: description does not end as a complete sentence`);
  }
  if (canonical !== expectedUrl) {
    errors.push(`${page.route}: canonical is ${canonical || "missing"}`);
  }
  if (meta(html, "property", "og:title") !== title) {
    errors.push(`${page.route}: og:title missing or differs from title`);
  }
  if (meta(html, "property", "og:description") !== description) {
    errors.push(`${page.route}: og:description missing or differs from description`);
  }
  if (meta(html, "property", "og:url") !== expectedUrl) {
    errors.push(`${page.route}: og:url missing or non-canonical`);
  }
  if (!meta(html, "property", "og:image").startsWith(siteUrl)) {
    errors.push(`${page.route}: absolute www og:image missing`);
  }
  if (meta(html, "name", "twitter:card") !== "summary_large_image") {
    errors.push(`${page.route}: twitter:card missing`);
  }
  if (meta(html, "name", "twitter:title") !== title) {
    errors.push(`${page.route}: twitter:title missing or differs from title`);
  }
  if (!meta(html, "name", "twitter:image").startsWith(siteUrl)) {
    errors.push(`${page.route}: absolute www twitter:image missing`);
  }

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt="[^"]*"/i.test(image[0])) {
      errors.push(`${page.route}: img without alt attribute`);
    }
  }

  const jsonLd = [...html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
  )].map((match) => {
    try {
      return JSON.parse(match[1]);
    } catch {
      errors.push(`${page.route}: invalid JSON-LD`);
      return null;
    }
  });

  if (page.jsonLd && !jsonLd.some((value) => hasType(value, page.jsonLd))) {
    errors.push(`${page.route}: ${page.jsonLd} JSON-LD missing`);
  }
  if (page.breadcrumb && !jsonLd.some((value) => hasType(value, "BreadcrumbList"))) {
    errors.push(`${page.route}: BreadcrumbList JSON-LD missing`);
  }
  if (jsonLd.some((value) => JSON.stringify(value).includes("https://khelifi-salmen.com"))) {
    errors.push(`${page.route}: JSON-LD contains non-www host`);
  }
  if (page.route === "/" && jsonLd.some((value) => hasKey(value, "telephone"))) {
    errors.push("/: JSON-LD still exposes telephone");
  }

  titles.set(title, [...(titles.get(title) || []), page.route]);
  descriptions.set(description, [...(descriptions.get(description) || []), page.route]);
}

for (const [title, matchingRoutes] of titles) {
  if (matchingRoutes.length > 1) {
    errors.push(`duplicate title "${title}" on ${matchingRoutes.join(", ")}`);
  }
}

for (const [, matchingRoutes] of descriptions) {
  if (matchingRoutes.length > 1) {
    errors.push(`duplicate description on ${matchingRoutes.join(", ")}`);
  }
}

const sitemap = read(".next/server/app/sitemap.xml.body");
const robots = read(".next/server/app/robots.txt.body");
const netlify = read("../netlify.toml");
const nextConfig = read("next.config.ts");

if (!/\[\[plugins\]\]\s*package\s*=\s*"@netlify\/plugin-nextjs"/.test(netlify)) {
  errors.push("netlify.toml must enable @netlify/plugin-nextjs for Next.js routing");
}
if (sitemap.includes("https://khelifi-salmen.com")) {
  errors.push("sitemap contains non-www host");
}
for (const page of routes.filter(
  ({ route, indexable }) => route !== "/404" && indexable !== false,
)) {
  const expectedUrl = `${siteUrl}${page.route === "/" ? "" : page.route}`;
  if (!sitemap.includes(`<loc>${expectedUrl}</loc>`)) {
    errors.push(`sitemap missing ${page.route}`);
  }
}
for (const route of machineFiles) {
  if (sitemap.includes(`<loc>${siteUrl}${route}</loc>`)) {
    errors.push(`sitemap includes non-indexable machine file ${route}`);
  }
}
for (const { slug } of noindexBlogPosts) {
  if (sitemap.includes(`<loc>${siteUrl}/blog/${slug}</loc>`)) {
    errors.push(`sitemap includes noindex blog post /blog/${slug}`);
  }
}
if (!robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) {
  errors.push("robots.txt has the wrong sitemap URL");
}
if (!/User-Agent: OAI-SearchBot/i.test(robots)) {
  errors.push("robots.txt does not explicitly allow OAI-SearchBot");
}
if (/source\s*:\s*["']\/project-grammarai["']/.test(nextConfig)) {
  errors.push("next.config.ts still redirects /project-grammarai");
}
for (const [name, value] of [
  ["X-Content-Type-Options", "nosniff"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["X-Frame-Options", "SAMEORIGIN"],
]) {
  if (!hasNetlifyHeader(netlify, "/*", name, value)) {
    errors.push(`netlify.toml missing ${name} on all routes`);
  }
}
for (const pathname of machineFiles) {
  if (!fs.existsSync(path.join(process.cwd(), "public", pathname.slice(1)))) {
    errors.push(`${pathname}: public source missing`);
  }
  if (robots.includes(`Disallow: ${pathname}`)) {
    errors.push(`${pathname}: robots.txt blocks crawler access`);
  }
  if (!hasNetlifyHeader(netlify, pathname, "X-Robots-Tag", "noindex")) {
    errors.push(`netlify.toml missing X-Robots-Tag noindex for ${pathname}`);
  }
}
for (const imageRoute of ["opengraph-image", "twitter-image"]) {
  const body = path.join(appDir, `${imageRoute}.body`);
  if (!fs.existsSync(body) || fs.statSync(body).size === 0) {
    errors.push(`/${imageRoute} did not render`);
  }
}

if (errors.length) {
  console.error(`SEO audit failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 40)) console.error(`- ${error}`);
  if (errors.length > 40) console.error(`- ...and ${errors.length - 40} more`);
  process.exit(1);
}

console.log(
  `SEO audit passed: ${routes.length} HTML routes, ${projectSlugs.length} projects, ${indexableBlogPosts.length} indexable and ${noindexBlogPosts.length} noindex blog posts, 2 social image routes.`,
);
