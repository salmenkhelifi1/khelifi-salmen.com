import type { Project } from "@/data/projects";
import type { BlogPost } from "@/lib/content/blog";

export const siteUrl = "https://www.khelifi-salmen.com";
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
export const authorProfileUrl = `${siteUrl}/resume`;
export const fiverrUrl = "https://www.fiverr.com/salmenkhlifi";

// Fixed-scope entry points. Slugs are legacy and do not match the current gig
// titles, so keep both fields in sync by hand when a gig is renamed on Fiverr.
export const fiverrGigs = [
  {
    title: "Automate WhatsApp and email leads into your CRM with n8n",
    blurb: "Inbound messages routed through n8n into structured CRM records.",
    url: `${fiverrUrl}/set-up-or-fix-n8n-workflows-zapier-and-n8n`,
  },
  {
    title: "Fix Supabase auth, RLS, storage and permission denied errors",
    blurb: "Row-level security and policy errors traced and resolved.",
    url: `${fiverrUrl}/fix-supabase-auth-rls-storage-and-permission-denied-errors`,
  },
  {
    title: "Make your Lovable, Bolt or Replit app production ready",
    blurb: "Auth, environments, error handling and deployment hardening.",
    url: `${fiverrUrl}/create-a-workflow-automation-service-using-n8n`,
  },
  {
    title: "Fix Lovable, Bolt, Replit or Base44 AI app bugs",
    blurb: "Debugging and repair for AI-generated codebases.",
    url: `${fiverrUrl}/fix-lovable-bolt-replit-or-base44-ai-app-bugs`,
  },
] as const;
export const personId = `${siteUrl}/#person`;
export const websiteId = `${siteUrl}/#website`;
export const serviceId = `${siteUrl}/#service`;
export const socialImage = {
  url: `${siteUrl}/opengraph-image`,
  alt: "Salmen Khelifi - Full-Stack Developer & Automation Specialist",
};
export const twitterImage = {
  url: `${siteUrl}/twitter-image`,
  alt: socialImage.alt,
};

export const siteJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Salmen Khelifi",
    jobTitle: "Full-Stack Developer & Automation Specialist",
    url: authorProfileUrl,
    email: "hello@khelifi-salmen.com",
    description:
      "Tunisia-based full-stack developer and automation specialist working remotely worldwide on web products, mobile apps, SaaS platforms, and n8n integrations.",
    image: `${siteUrl}/images/salmen-khelifi-full-stack-developer-portrait.jpg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
    },
    // telephone removed pending owner confirmation
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
      fiverrUrl,
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
    description:
      "Portfolio, case studies, engineering writing, and contact details for Salmen Khelifi.",
    creator: {
      "@id": personId,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: "Salmen Khelifi",
    url: siteUrl,
    email: "hello@khelifi-salmen.com",
    description:
      "Full-stack web and SaaS engineering, mobile app development, n8n automation, AI integration, and DevOps for clients worldwide.",
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
  },
];

export const authorProfileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${authorProfileUrl}#profile`,
  url: authorProfileUrl,
  mainEntity: {
    "@type": "Person",
    "@id": personId,
  },
};

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
  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const canonicalUrl = post.frontmatter.canonicalUrl || postUrl;

  return [
    breadcrumbJsonLd([
      { name: "Home", url: siteUrl },
      { name: "Blog", url: `${siteUrl}/blog` },
      { name: post.frontmatter.title, url: postUrl },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      headline: post.frontmatter.title,
      description: post.frontmatter.seoDescription || post.frontmatter.excerpt,
      url: canonicalUrl,
      datePublished: post.frontmatter.publishedAt,
      dateModified: post.frontmatter.updatedAt || post.frontmatter.publishedAt,
      author: {
        "@type": "Person",
        "@id": personId,
        name: post.frontmatter.author,
        url: authorProfileUrl,
      },
      publisher: {
        "@type": "Person",
        "@id": personId,
        name: "Salmen Khelifi",
        url: authorProfileUrl,
      },
      image: post.frontmatter.cover
        ? `${siteUrl}${post.frontmatter.cover}`
        : socialImage.url,
      keywords: post.frontmatter.tags.join(", "),
      articleSection: post.frontmatter.category,
    },
  ];
}
