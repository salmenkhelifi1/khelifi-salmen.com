import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        source: "/project-grammarai",
        destination: "/projects/grammarai",
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
};

export default nextConfig;
