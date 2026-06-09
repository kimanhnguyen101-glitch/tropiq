import Image from "next/image";
import { Container, Section, SectionTitle, Eyebrow, Button, PageHero } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "The story behind Tropi Q — Vietnam's first head spa to reimagine relaxation as a feeling. A tropical sanctuary in the heart of Hanoi.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Reimagining the headspa in Hanoi"
        image="/images/cover-about.png"
        aspectRatio="2007/783"
        intro="Tropi Q was created to redefine headspa in Vietnam — not as a quick service, but as a tropical experience of warmth, scent and genuine care."
      />

      <Section className="bg-cream">
        <Container>
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/about-concept.jpg"
                alt="Inside Tropi Q headspa"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>A tropical concept</Eyebrow>
              <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl">
                Familiar enough to feel safe, new enough to feel special
              </h2>
              <div className="rule mt-6" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                Our tropical concept was designed with international guests in mind — warm and
                welcoming, never strange, never sterile. From the moment you step in, the greenery,
                the light and the aroma tell you this is somewhere to slow down.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                We sit in the heart of Hanoi&apos;s tourist district, just steps from the Old
                Quarter, with a private head spa room set apart from the world outside.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-deep">
        <Container>
          <SectionTitle
            eyebrow="What we believe"
            title="The details that make Tropi Q"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Experience over everything",
                d: "We chose a niche the traditional spa overlooked: the experience itself. Every step is designed around how you feel.",
              },
              {
                t: "Warm light, always",
                d: "No dim rooms, no darkness. Warm light keeps you feeling safe even with your eyes closed.",
              },
              {
                t: "A signature scent",
                d: "Essential oils and hair perfume blended to a ratio that belongs only to Tropi Q.",
              },
              {
                t: "Genuine, premium materials",
                d: "Original-brand, high-quality products — quality we never compromise.",
              },
              {
                t: "A caring team",
                d: "Friendly, attentive therapists who protect your quiet rather than fill it with chatter.",
              },
              {
                t: "Loved by guests",
                d: "5.0★ guest rated on Google — natural reviews, never bought, never pressured.",
              },
            ].map((v) => (
              <div key={v.t} className="rounded-3xl border border-sand bg-cream p-8">
                <h3 className="font-display text-xl text-gold">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-olive py-20 text-center text-cream">
        <Container>
          <h2 className="font-display text-3xl sm:text-4xl">Come feel the difference</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/85">
            The best way to understand Tropi Q is to close your eyes inside it.
          </p>
          <Button href={whatsappLink} variant="gold" className="mt-8">
            Book your session
          </Button>
        </Container>
      </section>
    </>
  );
}
