import type { MetadataRoute } from "next";

import { routes, siteUrl } from "./site-config";

export const dynamic = "force-static";

const lastModified = new Date("2026-03-25");
const priorities: Record<(typeof routes)[number], number> = {
  "/": 1,
  "/artists/": 0.9,
  "/gallery/": 0.9,
  "/booking/": 0.8,
  "/contact/": 0.8,
};
const changeFrequencies: Record<
  (typeof routes)[number],
  MetadataRoute.Sitemap[number]["changeFrequency"]
> = {
  "/": "weekly",
  "/artists/": "monthly",
  "/gallery/": "weekly",
  "/booking/": "monthly",
  "/contact/": "monthly",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`,
    lastModified,
    changeFrequency: changeFrequencies[route],
    priority: priorities[route],
  }));
}
