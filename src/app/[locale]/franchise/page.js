import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container, Section, Button, PageHero } from "@/components/ui";
import { whatsappLink, site } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "franchise" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: locale === "vi" ? "/vi/franchise" : "/franchise" },
  };
}

export default async function FranchisePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "franchise" });

  const valueCards = [
    { n: "01", title: t("v1Title"), body: t("v1Body") },
    { n: "02", title: t("v2Title"), body: t("v2Body") },
    { n: "03", title: t("v3Title"), body: t("v3Body") },
    { n: "04", title: t("v4Title"), body: t("v4Body") },
    { n: "05", title: t("v5Title"), body: t("v5Body") },
    { n: "06", title: t("v6Title"), body: t("v6Body") },
  ];

  const stats = [
    { num: t("stat1Num"), label: t("stat1Label") },
    { num: t("stat2Num"), label: t("stat2Label") },
    { num: t("stat3Num"), label: t("stat3Label") },
  ];

  const usps = [
    { n: "01", title: t("usp01Title"), body: t("usp01Body"), pills: t.raw("usp01Pills") },
    { n: "02", title: t("usp02Title"), body: t("usp02Body"), tags: t.raw("usp02Tags") },
    { n: "03", title: t("usp03Title"), body: t("usp03Body") },
    { n: "04", title: t("usp04Title"), body: t("usp04Body") },
    { n: "05", title: t("usp05Title"), body: t("usp05Body") },
  ];

  const models = [
    { n: "01", title: t("m1Title"), body: t("m1Body") },
    { n: "02", title: t("m2Title"), body: t("m2Body") },
    { n: "03", title: t("m3Title"), body: t("m3Body") },
  ];

  return (
    <>
      <PageHero
        title={<>{t("heroTitle")}<br />{t("heroTitleLine2")}</>}
        image="/images/cover-experience.png"
        aspectRatio="2008/783"
        intro={t("heroIntro")}
      />

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("whoEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{t("whoTitle")}</h2>
            <div className="rule mx-auto mt-5" />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{t("whoLede")}</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-8 text-base leading-relaxed text-ink-soft sm:grid-cols-2">
            <p>{t("whoP1")}</p>
            <p>{t("whoP2")}</p>
          </div>
          <blockquote className="mx-auto mt-10 max-w-3xl rounded-3xl bg-ink px-10 py-10 text-center">
            <p className="font-display text-xl leading-relaxed text-cream sm:text-2xl">
              &ldquo;{t("whoQuote")}{" "}
              <span className="italic text-gold">{t("whoQuoteEm")}&rdquo;</span>
            </p>
          </blockquote>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("valueEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{t("valueTitle")}</h2>
            <div className="rule mx-auto mt-5" />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{t("valueLede")}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valueCards.map((c) => (
              <div key={c.n} className="rounded-3xl border border-sand bg-white px-7 py-7">
                <p className="font-display text-2xl text-gold">{c.n}</p>
                <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-olive sm:text-sm">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("proofEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{t("proofTitle")}</h2>
            <div className="rule mx-auto mt-5" />
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.num} className="text-center">
                <p className="font-display text-5xl text-gold sm:text-6xl">{s.num}</p>
                <p className="mx-auto mt-3 max-w-[22ch] text-sm leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-ink/40">{t("internalData")}</p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-neutral-50 px-7 py-7 text-sm leading-relaxed text-ink-soft">
              {t("market1")}<sup className="text-gold">[1]</sup>
            </div>
            <div className="rounded-3xl bg-neutral-50 px-7 py-7 text-sm leading-relaxed text-ink-soft">
              {t("market2")}<sup className="text-gold">[2]</sup>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-ink px-8 py-12 sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("whyDiffEyebrow")}</p>
            <h3 className="font-display mt-4 max-w-2xl text-2xl leading-tight text-cream sm:text-3xl">{t("whyDiffTitle")}</h3>
            <ul className="mt-8 divide-y divide-cream/10">
              {usps.map((u) => (
                <li key={u.n} className="grid grid-cols-[40px_1fr] gap-x-5 py-7 sm:grid-cols-[56px_1fr_1.5fr] sm:gap-x-8">
                  <p className="font-display text-2xl text-gold/60 sm:text-3xl">{u.n}</p>
                  <h4 className="font-display text-lg text-gold sm:text-xl">{u.title}</h4>
                  <div className="col-start-2 mt-1.5 sm:col-start-3 sm:mt-0">
                    <p className="text-sm leading-relaxed text-cream/80">{u.body}</p>
                    {u.pills && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {u.pills.map((p) => (
                          <span key={p} className="rounded-full border border-cream/20 bg-cream/5 px-3 py-1 text-xs text-cream/70">{p}</span>
                        ))}
                      </div>
                    )}
                    {u.tags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {u.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-cream">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-ink/40">{t("footnote")}</p>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("modelsEyebrow")}</p>
            <h2 className="font-display mt-4 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{t("modelsTitle")}</h2>
            <div className="rule mx-auto mt-5" />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{t("modelsLede")}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {models.map((m) => (
              <div key={m.n} className="rounded-3xl border border-sand bg-white px-7 py-8">
                <p className="font-display text-2xl text-gold">{m.n}</p>
                <h3 className="mt-3 text-xs font-semibold uppercase tracking-wide text-olive sm:text-sm">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl bg-ink px-10 py-14 text-center">
            <h2 className="font-display text-3xl text-cream sm:text-4xl">{t("ctaTitle")}</h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-cream/75">{t("ctaDesc")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="mailto:tropiqspa@gmail.com" variant="light">{t("ctaRequest")}</Button>
              <Button href={whatsappLink} variant="light" className="bg-transparent border border-cream/30 text-cream hover:bg-cream/10 hover:text-cream">{t("ctaWhatsapp")}</Button>
            </div>
            <p className="mt-7 text-sm text-cream/50">
              {site.phone.display}&nbsp;&middot;&nbsp;
              <a href="mailto:tropiqspa@gmail.com" className="text-gold underline underline-offset-2 hover:text-gold/80">tropiqspa@gmail.com</a>&nbsp;&middot;&nbsp;
              tropiqspa.com
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
