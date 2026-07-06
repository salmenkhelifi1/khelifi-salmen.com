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
    ];
  },
};

export default nextConfig;
