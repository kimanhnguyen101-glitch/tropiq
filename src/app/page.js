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
      <section className="relative overflow-hidden py-28">
        <Image
          src="/images/store/store-07.jpg"
          alt="Tropi Q interior detail"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-olive-deep/85" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center text-cream">
            <p style={{ color: "rgba(238,226,214,0.85)", letterSpacing: "0.28em", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase" }}>
              Vietnam&apos;s true headspa experience
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight drop-shadow sm:text-4xl md:text-5xl">
              Why travelers keep coming back to Tropi Q
            </h2>
            <div className="rule mx-auto mt-6" style={{ background: "rgba(238,226,214,0.5)" }} />
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Vietnam's true headspa",
                d: "A complete headspa ritual inspired by tropical nature and traditional Vietnamese herbs — nothing rushed, nothing missed.",
              },
              {
                t: "All-in-one spa",
                d: "Head, scalp, shoulders, face and feet: everything in one place, one session, one destination.",
              },
              {
                t: "NO tip pressure",
                d: "Our team's warmth comes naturally. Tipping is entirely optional — never expected.",
              },
              {
                t: "NO card surcharge",
                d: "Pay by card at no extra cost. What you see on the menu is what you pay.",
              },
              {
                t: "NO hidden fees",
                d: "Full transparency on every service. No surprises at checkout — ever.",
              },
              {
                t: "Friendly staffs",
                d: "English-speaking, warm and attentive — ready to welcome you from the moment you arrive.",
              },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl bg-olive-deep/40 p-6 text-center text-cream backdrop-blur-sm">
                <h3 className="font-display text-xl text-cream">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/85">{f.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/experience" variant="light">
              Step inside
            </Button>
          </div>
        </Container>
      </section>

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
