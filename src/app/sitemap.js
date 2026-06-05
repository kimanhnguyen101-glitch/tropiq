import { site } from "@/lib/site";
import { nav } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const paths = [...nav.map((n) => n.href), "/services/headspa"];
  // de-dupe
  const unique = Array.from(new Set(paths));
  return unique.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
