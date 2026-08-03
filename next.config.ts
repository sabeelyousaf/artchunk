import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy WordPress paths → new site sections
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/services/",
        destination: "/studio",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/faqs/",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/pricing-plan",
        destination: "/talent",
        permanent: true,
      },
      {
        source: "/pricing-plan/",
        destination: "/talent",
        permanent: true,
      },
      // Common WP leftovers
      {
        source: "/contact",
        destination: "/#final",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/#final",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/#final",
        permanent: true,
      },
      {
        source: "/contact-us/",
        destination: "/#final",
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
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
