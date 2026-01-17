import { MetadataRoute } from "next";
import { content } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: content.brand.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
