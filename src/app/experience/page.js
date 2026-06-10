import Image from "next/image";
import { Container, Section, SectionTitle, Eyebrow, Button, PageHero } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "The Experience",
  description:
    "Step inside Tropi Q — warm light, tropical greenery, genuine premium ingredients and a private head spa room in the heart of Hanoi.",
  alternates: { canonical: "/experience" },
};

// Gallery: 4 new JPGs from founder + 6 existing store photos
const gallery = [
  { src: "/images/store/gallery-01.jpg", alt: "Tropi Q headspa space" },
  { src: "/images/store/gallery-02.jpg", alt: "Tropi Q headspa space" },
  { src: "/images/store/gallery-03.jpg", alt: "Tropi Q headspa space" },
  { src: "/images/store/gallery-04.jpg", alt: "Tropi Q headspa space" },
  { src: "/images/store/store-01.jpg", alt: "Tropi Q headspa interior" },
  { src: "/images/store/store-02.jpg", alt: "Tropi Q headspa interior" },
  { src: "/images/store/store-03.jpg", alt: "Tropi Q headspa interior" },
  { src: "/images/store/store-05.jpg", alt: "Tropi Q headspa interior" },
  { src: "/images/store/store-06.jpg", alt: "Tropi Q headspa interior" },
  { src: "/images/store/store-09.jpg", alt: "Tropi Q headspa interior" },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Step inside the sanctuary"
        image="/images/cover-experience.png"
        aspectRatio="2008/783"
        intro="Warm light, tropical green and the quiet hum of calm. A space designed so that the moment you arrive, your shoulders drop."
      />

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Warm light, never dim",
                d: "We refuse dark, dim rooms. Soft, warm light keeps you feeling safe and at ease, even with your eyes closed.",
              },
              {
                t: "Genuine premium ingredients",
                d: "Herbal jars, original-brand skincare and our exclusive herbal water — everything you see is real and high quality.",
              },
              {
                t: "A private headspa room",
                d: "Set apart from the street, your session unfolds in a calm, dedicated space just for headspa.",
              },
            ].map((f) => (
              <div key={f.t}>
                <h3 className="text-lg font-semibold text-ink">{f.t}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-deep pt-0">
        <Container>
          <SectionTitle eyebrow="Gallery" title="A look around Tropi Q" />
          <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {gallery.map((img, i) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-2xl break-inside-avoid"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={700}
                  height={i % 3 === 0 ? 900 : 700}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-cream-deep py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-white px-10 py-12 shadow-sm">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">See it for yourself</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
              Photos only go so far. Come breathe it in.
            </p>
            <Button href={whatsappLink} variant="gold" className="mt-8">
              Book a visit
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
