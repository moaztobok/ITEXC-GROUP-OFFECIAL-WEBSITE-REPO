import type { MetadataRoute } from "next";

// Services pages are prioritized over the about us page due to their importance in search results
// change Frequency can be changed later
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://itexc-group-demo.vercel.app/",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1.0
    },
    {
      url: "https://itexc-group-demo.vercel.app/services/branding",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://itexc-group-demo.vercel.app/services/engineering",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://itexc-group-demo.vercel.app/services/erp",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://itexc-group-demo.vercel.app/services/hr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://itexc-group-demo.vercel.app/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: "https://itexc-group-demo.vercel.app/units/dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://itexc-group-demo.vercel.app/units/erp",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://itexc-group-demo.vercel.app/units/hr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://itexc-group-demo.vercel.app/units/studio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: "https://itexc-group-demo.vercel.app/_not-found",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5
    }
  ];
}
