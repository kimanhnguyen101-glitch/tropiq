import { site } from "@/lib/site";
import { nav } from "@/lib/site";

const blogSlugs = [
  "what-is-a-head-spa",
  "relaxing-things-to-do-in-hanoi",
  "head-spa-in-hanoi-guide",
  "best-spa-massage-hanoi-old-quarter",
  "best-massage-in-hanoi-guide",
  "best-spa-in-hanoi",
];

export default function sitemap() {
  const now = new Date();
  const pagePaths = ["/", ...nav.map((n) => n.href), "/policies"];
  const unique = Array.from(new Set(pagePaths));

  const enPages = unique.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));

  const viPages = unique.map((path) => ({
    url: `${site.url}/vi${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/blog" ? "weekly" : "monthly",
    priority: path === "/" ? 0.9 : 0.7,
  }));

  const enPosts = blogSlugs.map((slug) => ({
    url: `${site.url}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const viPosts = blogSlugs.map((slug) => ({
    url: `${site.url}/vi/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...enPages, ...viPages, ...enPosts, ...viPosts];
}
