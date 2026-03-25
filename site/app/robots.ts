import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://site-mbse8ft0k-stephenandrews-projects.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
