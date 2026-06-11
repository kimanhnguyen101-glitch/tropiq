import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Container, Section, SectionTitle, Button, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: locale === "vi" ? "/vi/experience" : "/experience" },
  };
}

const galleryImages = [
  { src: "/images/store/store-01.jpg", alt: "Tropi Q head spa treatment room — warm lighting and tropical decor" },
  { src: "/images/store/store-02.jpg", alt: "Scalp massage treatment at Tropi Q Hanoi" },
  { src: "/images/store/store-03.jpg", alt: "Relaxing herbal head spa experience at Tropi Q" },
  { src: "/images/store/store-04.jpg", alt: "Foot spa area at Tropi Q spa Hanoi" },
  { src: "/images/store/store-05.jpg", alt: "Premium facial care service at Tropi Q" },
  { src: "/images/store/store-11.jpg", alt: "Tropi Q spa interior — tropical ambiance" },
  { src: "/images/store/store-12.jpg", alt: "Guests relaxing at Tropi Q head spa Hanoi" },
];

export default async function ExperiencePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "experience" });
  const tc = await getTranslations({ locale, namespace: "common" });

  const features = [
    { t: t("f1Title"), d: t("f1Desc") },
    { t: t("f2Title"), d: t("f2Desc") },
    { t: t("f3Title"), d: t("f3Desc") },
  ];

  return (
    <>
      <PageHero
        title={<>{t("heroTitle")}<br />{t("heroTitleLine2")}</>}
        image="/images/cover-experience.png"
        aspectRatio="2008/783"
        imageClassName="object-cover"
      />
      <Section className="bg-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.t}>
                <h3 className="text-lg font-semibold text-ink">{f.t}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-neutral-50 pt-0">
        <Container>
          <SectionTitle eyebrow={t("galleryEyebrow")} title={t("galleryTitle")} />
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {galleryImages.map((img, i) => (
              <div key={img.src} className="relative overflow-hidden rounded-2xl break-inside-avoid">
                <Image src={img.src} alt={img.alt} width={700} height={i % 3 === 0 ? 900 : 700} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <section className="bg-neutral-50 py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-white px-10 py-12 shadow-sm">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">{t("ctaTitle")}</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">{t("ctaDesc")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <BookingButton className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-cream transition hover:opacity-90">{t("ctaBook")}</BookingButton>
              <Button href={whatsappLink} variant="primary">{tc("contactUs")}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
