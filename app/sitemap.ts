export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { absoluteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/resume/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/work/imf-communiques/"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
