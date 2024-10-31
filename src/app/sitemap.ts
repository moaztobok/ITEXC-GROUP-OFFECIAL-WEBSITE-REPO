import type { MetadataRoute } from "next";

// Services pages are prioritized over the about us page due to their importance in search results
// change Frequency can be changed later
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/branding`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/engineering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/erp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/hr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/units/dev`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/units/erp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/units/hr`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/units/studio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/_not-found`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];
}
