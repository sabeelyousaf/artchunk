import type { MetadataRoute } from "next";
import { absoluteUrl, LEGAL_PAGES, PRIMARY_NAV, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...PRIMARY_NAV.map((item) => ({
      url: absoluteUrl(item.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/talent" || item.href === "/studio" ? 0.9 : 0.8,
    })),
    ...LEGAL_PAGES.map((item) => ({
      url: absoluteUrl(item.href),
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
