import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tidalinktattoo.co.nz";
  const routes = ["", "/artists", "/gallery", "/booking", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date("2026-03-25"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
