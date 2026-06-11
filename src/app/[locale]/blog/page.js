import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Container, Section, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: locale === "vi" ? "/vi/blog" : "/blog" },
  };
}

export default async function BlogPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const prefix = locale === "vi" ? "/vi" : "";

  const posts = t.raw("posts");

  return (
    <>
      <PageHero
        title={t("heroTitle")}
        image="/images/cover-blog.png"
        aspectRatio="2008/783"
        intro={t("heroIntro")}
      />
      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <Link key={post.slug} href={`${prefix}/blog/${post.slug}`} className="group flex h-full flex-col rounded-2xl border border-sand p-8 transition-shadow hover:shadow-md">
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest text-gold">
                    {post.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    <span className="text-ink/30">·</span>
                    <span className="text-ink/40">{post.readTime}</span>
                  </div>
                  <h2 className="font-display mt-3 text-xl leading-snug text-ink transition group-hover:text-gold md:text-2xl">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-gold underline-offset-4 group-hover:underline">{tc("readMore")}</span>
                </Link>
              ))}
            </div>
            <p className="mt-16 text-center text-sm text-ink/30">{tc("moreComingSoon")}</p>
            <div className="mt-10 text-center">
              <BookingButton className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-medium text-cream transition hover:opacity-90">
                {tc("bookASession")}
              </BookingButton>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
