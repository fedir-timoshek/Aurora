import { MetadataRoute } from "next";
import { content } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = content.brand.url.startsWith("http")
    ? content.brand.url.replace(/\/$/, "")
    : "https://example.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    }
  ];
}
