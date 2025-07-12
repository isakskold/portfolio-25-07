import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://isakskold.xyz";

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sv`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add any additional routes here if needed
  ];
}
