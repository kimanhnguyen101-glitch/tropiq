import Image from "next/image";
import { Container, Section, SectionTitle, Button, Stars } from "@/components/ui";
import LeafDecor from "@/components/LeafDecor";
import ReviewSlider from "@/components/ReviewSlider";
import { site, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------- Cover (image only) */}
      <section className="relative w-full overflow-hidden" style={{ aspectRatio: "1672/652" }}>
        <Image
          src="/images/cover-home.png"
          alt="Tropi Q headspa treatment room in Hanoi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* ----------------------------------------- Headline (below cover) */}
      <Section className="relative bg-white pb-12 text-center sm:pb-16">
        <LeafDecor className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rotate-12 text-olive/20" />
        <LeafDecor variant="palm" className="pointer-events-none absolute -left-8 bottom-0 h-56 w-56 -rotate-12 text-olive/15" />
        <Container className="relative">
          <h1 className="font-display mx-auto max-w-4xl text-4xl font-medium leading-[1.05] text-ink sm:text-6xl">
            True Headspa <span className="italic text-gold">in Vietnam</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Tropi Q is a premier relaxation and wellness destination in the heart of Hanoi, designed
            for international travelers and business visitors. Inspired by tropical nature and enriched
            with traditional Vietnamese herbs, Tropi Q offers a holistic experience that rejuvenates
            the body, mind, and soul.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={whatsappLink} variant="gold">
              Book your session
            </Button>
            <Button href="/services" variant="outline">
              See our full menu
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-ink-soft">
            <Stars rating={5} />
            <span>5.0★ guest rated</span>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------------- Difference */}
      <Section className="bg-neutral-50">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Why travelers keep coming back to Tropi Q
            </h2>
            <div className="rule mx-auto mt-5" />
          </div>
          <div className="mx-auto mt-12 max-w-3xl grid gap-3 sm:grid-cols-2">
            {[
              "Vietnam's true headspa experience",
              "All-in-one spa",
              "NO tip pressure",
              "NO card surcharge",
              "NO hidden fees",
              "Friendly staffs",
            ].map((label) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-sand bg-white px-6 py-5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
                <p className="font-display text-lg text-ink">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/experience" variant="primary">
              Step inside
            </Button>
          </div>
        </Container>
      </Section>

      {/* ---------------------------------------- From our guests, With Love */}
      <Section className="bg-white">
        <Container>
          <SectionTitle
            eyebrow="From our guests, With Love"
            title="5.0★ guest rated"
            intro="No incentives, no pressure — just guests who came to relax and left telling others."
          />
          <div className="mt-14">
            <ReviewSlider />
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- CTA band */}
      <section className="bg-neutral-50 py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-white px-10 py-12 shadow-sm">
            <h2 className="font-display text-3xl text-ink sm:text-4xl md:text-5xl">Ready to unwind?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
              Message us on WhatsApp to book your headspa experience. We&apos;ll help you choose the
              perfect treatment for your time in Hanoi.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={whatsappLink} variant="gold">
                Book on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
