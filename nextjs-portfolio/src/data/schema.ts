import type { Project } from "@/data/projects";
import { testimonials } from "@/data/testimonials";

export const siteUrl = "https://khelifi-salmen.com";
export const bookingUrl = "https://cal.com/salmen-khelifi/30min";
export const freelancerUrl = "https://www.freelancer.com/u/khelifisalmen";

export const personAndServiceJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Salmen Khelifi",
    jobTitle: "Full-Stack Developer & Automation Specialist",
    url: siteUrl,
    email: "contact@khelifi-salmen.com",
    sameAs: ["https://github.com/salmenkhelifi1", freelancerUrl],
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
    "@type": "ProfessionalService",
    name: "Salmen Khelifi",
    url: siteUrl,
    email: "contact@khelifi-salmen.com",
    areaServed: "Worldwide",
    serviceType: [
      "Full-stack development",
      "Mobile app development",
      "DevOps",
      "Workflow automation",
      "AI integration",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "8",
      bestRating: "5",
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

export function projectJsonLd(project: Project) {
  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: `${siteUrl}/#work`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: projectUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.tagline,
      description: project.overview.what,
      url: projectUrl,
      image: project.heroImage ? `${siteUrl}${project.heroImage}` : undefined,
      creator: {
        "@type": "Person",
        name: "Salmen Khelifi",
        url: siteUrl,
      },
      keywords: project.badges.join(", "),
      genre: project.category,
    },
  ];
}
