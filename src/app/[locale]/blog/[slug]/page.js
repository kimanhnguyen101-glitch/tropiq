import { notFound } from "next/navigation";

const articleSlugs = [
  "best-spa-in-hanoi",
  "head-spa-in-hanoi-guide",
  "best-spa-massage-hanoi-old-quarter",
  "best-massage-in-hanoi-guide",
  "what-is-a-head-spa",
  "relaxing-things-to-do-in-hanoi",
];

export async function generateStaticParams() {
  const locales = ["en", "vi"];
  return locales.flatMap((locale) => articleSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!articleSlugs.includes(slug)) return {};
  const mod = await import(`@/app/blog/${slug}/page.js`).catch(() => null);
  return mod?.metadata ?? {};
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  if (!articleSlugs.includes(slug)) notFound();
  const mod = await import(`@/app/blog/${slug}/page.js`).catch(() => null);
  if (!mod) notFound();
  const Article = mod.default;
  return <Article />;
}
