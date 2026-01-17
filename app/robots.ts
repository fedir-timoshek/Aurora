import { MetadataRoute } from "next";
import { content } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${content.brand.url}/sitemap.xml`
  };
}
