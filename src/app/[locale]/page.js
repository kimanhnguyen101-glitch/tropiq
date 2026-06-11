"use client";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Container, Section, SectionTitle, Button, Stars } from "@/components/ui";
import LeafDecor from "@/components/LeafDecor";
import ReviewSlider from "@/components/ReviewSlider";
import { whatsappLink } from "@/lib/site";

export default function Home() {
  const t = useTranslations("home");
  const tc = useTranslations("common");
  const locale = useLocale();
  const prefix = locale === "vi" ? "/vi" : "";

  const pts = [t("pt1"), t("pt2"), t("pt3"), t("pt4"), t("pt5"), t("pt6")];

  return (
    <>
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "2008/783" }}>
        <Image src="/images/cover-home.png" alt="Tropi Q head spa treatment room in Hanoi" fill priority sizes="100vw" className="object-cover" />
      </section>
      <Section className="relative bg-white pb-12 text-center sm:pb-16">
        <LeafDecor className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rotate-12 text-olive/20 hidden sm:block" />
        <LeafDecor variant="palm" className="pointer-events-none absolute -left-8 bottom-0 h-56 w-56 -rotate-12 text-olive/15 hidden sm:block" />
        <Container className="relative">
          <h1 className="font-display mx-auto max-w-4xl text-3xl font-medium leading-[1.1] text-ink sm:text-5xl lg:text-6xl">{t("heroTitle")} <span className="italic text-gold">{t("heroTitleEm")}</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-lg">{t("heroDesc")}</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-gold px-7 py-3 text-sm font-medium text-cream transition hover:opacity-90 sm:w-auto">{tc("bookSession")}</a>
            <Button href={`${prefix}/services`} variant="outline" className="w-full sm:w-auto">{t("seeMenu")}</Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-ink-soft"><Stars rating={5} /><span>{t("guestRated")}</span></div>
        </Container>
      </Section>
      <section className="border-t border-sand/50 bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-gold">{t("signatureEyebrow")}</p>
            <h2 className="font-display mt-4 text-center text-3xl leading-tight text-olive sm:text-5xl lg:text-6xl">
              {t("signatureTitle")} <span className="italic text-gold">{t("signatureTitleEm")}</span>
            </h2>
            <p className="mt-4 text-center text-xs font-medium uppercase tracking-widest text-olive/50 sm:text-sm">{t("signatureSub")}</p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { num: "01", title: t("usp01Title"), body: t("usp01Body") },
                { num: "02", title: t("usp02Title"), body: t("usp02Body") },
                { num: "03", title: t("usp03Title"), body: t("usp03Body") },
                { num: "04", title: t("usp04Title"), body: t("usp04Body") },
              ].map(({ num, title, body }) => (
                <div key={num} className="rounded-2xl border border-gold/30 bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-7">
                  <p className="font-display text-2xl text-gold sm:text-3xl">{num}</p>
                  <h3 className="mt-2 text-xs font-semibold uppercase tracking-wide text-olive sm:mt-3 sm:text-sm">{title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-soft sm:mt-2 sm:text-sm">{body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl">
              <video src="/videos/headspa.mp4" autoPlay muted loop playsInline className="w-full object-cover" style={{ maxHeight: "460px" }} />
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
              <a href={`https://wa.me/84333892329?text=${encodeURIComponent("Hi Tropi Q! I'd like to book: Signature Head Spa")}`} target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-cream transition hover:opacity-90 sm:w-auto">{t("bookSignature")}</a>
              <Button href={`${prefix}/services#head-spa`} variant="outline" className="w-full sm:w-auto">{t("seeAllHeadSpa")}</Button>
            </div>
          </div>
        </Container>
      </section>
      <section className="overflow-hidden border-t border-sand/50 bg-white pt-10 pb-16">
        <div className="mb-8 px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("beyondEyebrow")}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">{t("beyondTitle")}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-ink-soft">{t("beyondDesc")}</p>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-4 sm:justify-center sm:gap-4 sm:px-10 snap-x snap-mandatory scrollbar-hide">
          {["/videos/footspa.mp4", "/videos/facial.mp4", "/videos/hairwash.mp4"].map((src) => (
            <div key={src} className="shrink-0 w-40 snap-start overflow-hidden rounded-2xl sm:w-56 sm:rounded-3xl">
              <video src={src} autoPlay muted loop playsInline className="h-64 w-full object-cover sm:h-96" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-cream transition hover:opacity-90">{tc("reserveMoment")}</a>
        </div>
      </section>
      <Section className="bg-olive/5">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("fromPriceEyebrow")}</p>
            <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">{t("fromPriceTitle")}</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center rounded-3xl border border-sand bg-white px-8 py-10 text-center">
              <h3 className="font-display text-3xl text-ink">Fresh Head Spa</h3>
              <p className="mt-3 text-2xl font-semibold text-gold">180,000₫</p>
            </div>
            <div className="flex flex-col items-center rounded-3xl border border-gold/40 bg-white px-8 py-10 text-center shadow-sm">
              <h3 className="font-display text-3xl text-ink">Detox Head Spa</h3>
              <p className="mt-3 text-2xl font-semibold text-gold">290,000₫</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href={`${prefix}/services`} variant="primary">{tc("seeFullMenu")}</Button>
          </div>
        </Container>
      </Section>
      <Section className="border-t border-sand/50 bg-white">
        <Container>
          <SectionTitle eyebrow={t("reviewsEyebrow")} title={t("reviewsTitle")} intro={t("reviewsIntro")} />
          <div className="mt-14"><ReviewSlider /></div>
        </Container>
      </Section>
      <section className="border-t border-sand/50 bg-olive/5 py-16 text-center">
        <Container>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">{t("ctaTitle")}</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-ink-soft">{t("ctaDesc")}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Button href={whatsappLink} variant="primary" className="w-full sm:w-auto">{tc("bookViaWhatsApp")}</Button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full rounded-full border border-gold px-7 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-cream sm:w-auto">{tc("bookOnline")}</a>
          </div>
        </Container>
      </section>
      <section className="border-t border-sand/50 bg-neutral-50 py-16 sm:py-20">
        <Container>
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t("momentsEyebrow")}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {[1,2,3,4,5,6,7,8].map((n) => (
              <div key={n} className="overflow-hidden rounded-2xl aspect-square">
                <Image src={`/images/customers/customer-0${n}.jpg`} alt="Tropi Q guest moment" width={400} height={400} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Section className="border-t border-sand/50 bg-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">{t("whyTitle")}</h2>
            <div className="rule mx-auto mt-5" />
          </div>
          <div className="mx-auto mt-12 max-w-3xl grid gap-3 sm:grid-cols-2">
            {pts.map((label) => (<div key={label} className="flex items-center gap-3 rounded-2xl border border-sand bg-white px-4 py-4 sm:gap-4 sm:px-6 sm:py-5"><span className="h-2 w-2 shrink-0 rounded-full bg-gold" /><p className="text-sm text-ink sm:text-base">{label}</p></div>))}
          </div>
          <div className="mt-10 text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="rounded-full border border-gold px-7 py-3 text-sm font-medium text-gold transition hover:bg-gold hover:text-cream">{tc("bookASession")}</a>
          </div>
        </Container>
      </Section>
    </>
  );
}
