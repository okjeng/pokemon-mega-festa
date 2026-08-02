import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { NAV_ITEMS } from "@/data/nav";
import { STATION_DETAILS } from "@/data/stationDetails";

export default function sitemap(): MetadataRoute.Sitemap {
  const navUrls = NAV_ITEMS.map((item) => ({
    url: `${SITE_URL}${item.href}`,
    changeFrequency: "daily" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));

  const stationUrls = STATION_DETAILS.map((s) => ({
    url: `${SITE_URL}/subway/${s.slug}`,
    changeFrequency: "daily" as const,
    priority: 0.6,
  }));

  return [...navUrls, ...stationUrls];
}
