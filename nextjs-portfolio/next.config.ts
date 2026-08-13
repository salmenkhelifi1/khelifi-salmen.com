import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/upwork",
        destination: "https://www.upwork.com/freelancers/~01f5b8025abe71abf2",
        permanent: false,
      },
      {
        source: "/freelancer",
        destination: "https://www.freelancer.com/u/khelifisalmen",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/salmen-khelifi/",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/salmenkhelifi1",
        permanent: false,
      },
      {
        source: "/x",
        destination: "https://x.com/khlifisalmen2",
        permanent: false,
      },
      {
        source: "/call",
        destination: "https://cal.com/salmen-khelifi/30min",
        permanent: false,
      },
      {
        source: "/cv",
        destination: "/resume",
        permanent: true,
      },
      {
        source: "/project-adaptifit",
        destination: "/projects/adaptifit",
        permanent: true,
      },
      {
        source: "/project-rentiora",
        destination: "/projects/rentiora",
        permanent: true,
      },
      {
        source: "/project-chaktech",
        destination: "/projects/chaktech",
        permanent: true,
      },
      {
        source: "/project-n8n",
        destination: "/projects/ai-workflow-automation",
        permanent: true,
      },
      {
        source: "/project-mobile",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/project-stitch-collection",
        destination: "/#work",
        permanent: true,
      },
      {
        source: "/project-stitch-mobile",
        destination: "/#work",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cal.com https://*.cal.com https://connect.facebook.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cal.com https://*.cal.com",
              "img-src 'self' data: blob: https://*.googleusercontent.com https://*.google-analytics.com https://*.cal.com https://cal.com https://www.facebook.com",
              "font-src 'self' https://fonts.gstatic.com https://cal.com https://*.cal.com",
              "connect-src 'self' https://*.cal.com https://cal.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.sentry.io https://www.facebook.com",
              "frame-src 'self' https://cal.com https://*.cal.com https://salmenkhelifi.substack.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remark-frontmatter", "remark-mdx-frontmatter"],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
