import type { Project } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import type { BlogPost } from "@/lib/content/blog";

export const siteUrl = "https://khelifi-salmen.com";
export const bookingUrl = "https://cal.com/salmen-khelifi/30min";
export const freelancerUrl = "https://www.freelancer.com/u/khelifisalmen";
export const githubUrl = "https://github.com/salmenkhelifi1";
export const linkedinUrl = "https://www.linkedin.com/in/salmen-khelifi/";
export const facebookUrl = "https://www.facebook.com/khelifisalmen1";
export const instagramUrl = "https://www.instagram.com/khelifi.salmen/";
export const substackUrl = "https://salmenkhelifi.substack.com/";
export const youtubeUrl = "https://www.youtube.com/@khelifisalmen";
export const xUrl = "https://x.com/khlifisalmen2";
export const upworkUrl = "https://www.upwork.com/freelancers/~01f5b8025abe71abf2";
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;
export const serviceId = `${siteUrl}/#service`;

export const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Salmen Khelifi",
    jobTitle: "Full-Stack Developer & Automation Specialist",
    url: siteUrl,
    email: "hello@khelifi-salmen.com",
    telephone: "+84961566302",
    sameAs: [
      githubUrl,
      linkedinUrl,
      substackUrl,
      youtubeUrl,
      instagramUrl,
      freelancerUrl,
      facebookUrl,
      xUrl,
      upworkUrl,
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Flutter",
      "n8n",
      "DevOps",
      "PostgreSQL",
      "AI integration",
      "Gemini API",
      "OpenAI API",
      "Vapi",
      "Docker",
      "Linux",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: "Salmen Khelifi",
    url: siteUrl,
    creator: {
      "@id": personId,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": serviceId,
    name: "Salmen Khelifi",
    url: siteUrl,
    email: "hello@khelifi-salmen.com",
    telephone: "+84961566302",
    areaServed: "Worldwide",
    serviceType: [
      "Full-stack development",
      "Mobile app development",
      "DevOps",
      "Workflow automation",
      "AI integration",
    ],
    provider: {
      "@id": personId,
    },
    review: testimonials.slice(0, 4).map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.author,
      },
      name: item.projectTitle,
      reviewBody: item.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating.toString(),
        bestRating: "5",
      },
    })),
  },
];

type BreadcrumbItem = {
  name: string;
  url: string;
};

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function projectCreativeWorkJsonLd(project: Project) {
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#creative-work`,
    name: project.title,
    description: project.tagline,
    url: projectUrl,
    image: project.heroImage ? `${siteUrl}${project.heroImage}` : undefined,
    author: {
      "@type": "Person",
      "@id": personId,
      name: "Salmen Khelifi",
      url: siteUrl,
    },
    keywords: project.badges,
    genre: project.category,
  };
}

export function projectJsonLd(project: Project) {
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Projects", url: `${siteUrl}/work` },
      { name: project.title, url: projectUrl },
    ]),
    projectCreativeWorkJsonLd(project),
  ];
}

export function articleJsonLd(post: BlogPost) {
  const postUrl = post.frontmatter.canonicalUrl || `${siteUrl}/blog/${post.slug}`;

  return [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Blog", url: `${siteUrl}/blog` },
      { name: post.frontmatter.title, url: postUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${postUrl}#article`,
      headline: post.frontmatter.title,
      description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
      url: postUrl,
      datePublished: post.frontmatter.publishedAt,
      dateModified: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
      author: {
        "@type": "Person",
        "@id": personId,
        name: post.frontmatter.author,
        url: siteUrl,
      },
      publisher: {
        "@type": "Person",
        "@id": personId,
        name: "Salmen Khelifi",
        url: siteUrl,
      },
      image: post.frontmatter.cover ? `${siteUrl}${post.frontmatter.cover}` : undefined,
      keywords: post.frontmatter.tags.join(", "),
      articleSection: post.frontmatter.category,
    },
  ];
}
