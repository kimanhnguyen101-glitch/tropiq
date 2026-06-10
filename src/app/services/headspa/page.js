import Image from "next/image";
import { Container, Section, SectionTitle, Eyebrow, Button, PageHero } from "@/components/ui";
import { menu, formatVnd } from "@/lib/menu";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "The Head Spa Experience",
  description:
    "Tropi Q's signature head spa experience — essential oils, scalp massage, exfoliation, herbal water and an ionic blow-dry. Watch the experience and choose your package.",
  alternates: { canonical: "/services/headspa" },
};

const headSpa = menu.find((g) => g.id === "head-spa");

const steps = [
  { n: "01", t: "Choose your oils", d: "We begin by blending essential oils to suit your mood and your scalp." },
  { n: "02", t: "Scalp & shoulder massage", d: "Slow, intentional pressure across head, neck and shoulders to release the day." },
  { n: "03", t: "Scalp exfoliation & mask", d: "A gentle cleanse and nourishing hair mask to renew the scalp." },
  { n: "04", t: "Exclusive herbal water", d: "Our signature herbal water — a Tropi Q signature you'll find nowhere else." },
  { n: "05", t: "Ionic blow-dry", d: "A protective, glossy finish with an ionic dryer. You leave glowing." },
];

export default function HeadSpaPage() {
  return (
    <>
      <PageHero
        eyebrow="Signature experience"
        title="The Tropi Q head spa"
        image="/images/store/store-06.jpg"
        intro="The treatment we are known for — a slow, sensory experience for the scalp, neck and shoulders, finished with our exclusive herbal water and signature scent."
      />

      {/* Video placeholder — swap the poster image for a real <video> when footage is ready */}
      <Section className="bg-white">
        <Container className="max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-[2rem]">
            <Image
              src="/images/store/store-01.jpg"
              alt="Tropi Q head spa session in progress"
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-ink/30">
              <div className="flex flex-col items-center text-cream">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-olive-deep">
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <p className="mt-4 text-sm tracking-wide text-cream/90">
                  Real footage coming soon
                </p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ink-soft">
            A real video of the session will live here once the footage is ready.
          </p>
        </Container>
      </Section>

      {/* The experience, step by step */}
      <Section className="bg-neutral-50">
        <Container className="max-w-4xl">
          <SectionTitle eyebrow="The experience" title="Five steps to stillness" />
          <ol className="mt-14 space-y-10">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-6">
                <span className="font-display text-3xl text-gold/60">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink">{s.t}</h3>
                  <p className="mt-2 text-base leading-relaxed text-ink-soft">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Packages */}
      <Section className="bg-white">
        <Container>
          <SectionTitle
            eyebrow="Choose your head spa"
            title="Three sessions, one feeling"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {headSpa.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col rounded-3xl border border-sand bg-neutral-50 p-8"
              >
                {item.badge && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
                    {item.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl text-ink">{item.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                <p className="mt-6 font-display text-xl text-gold">{formatVnd(item.price)}</p>
                <Button href={whatsappLink} variant="primary" className="mt-6">
                  Book this session
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="outline">
              See the full menu
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
