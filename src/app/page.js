import Image from "next/image";
import { Container, Section, SectionTitle, Eyebrow, Button, Stars } from "@/components/ui";
import VideoEmbed from "@/components/VideoEmbed";
import LeafDecor from "@/components/LeafDecor";
import { site, whatsappLink } from "@/lib/site";
import { menu } from "@/lib/menu";

// Three featured offers for the home page (per feedback): Signature Head Spa,
// Top-to-Toes combo, and Facial Care. No prices here — link out to the full menu.
const find = (groupId, name) =>
  menu.find((g) => g.id === groupId)?.items.find((i) => i.name === name);

const featured = [
  {
    ...find("head-spa", "Signature"),
    title: "Signature Headspa",
    badge: "Must-try",
    href: "/services#head-spa",
  },
  {
    ...find("combo", "Tropi 2 — Top to Toes"),
    title: "Top to Toes",
    badge: "Must-try",
    href: "/services#combo",
  },
  {
    ...find("facial", "Relax Facial Care"),
    title: "Facial Care",
    badge: "Must-try",
    href: "/services#facial",
  },
];

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
      <Section className="relative bg-cream pb-12 text-center sm:pb-16">
        <LeafDecor className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rotate-12 text-olive/20" />
        <LeafDecor variant="palm" className="pointer-events-none absolute -left-8 bottom-0 h-56 w-56 -rotate-12 text-olive/15" />
        <Container className="relative">
          <h1 className="font-display mx-auto max-w-4xl text-4xl font-medium leading-[1.05] text-ink sm:text-6xl">
            True Headspa <span className="italic text-gold">in Vietnam</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            A tropical retreat of warm light, signature scents and slow, intentional care —<br />
            moments from Hanoi&apos;s Old Quarter.
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

      {/* ------------------------------------------------------------ Welcome */}
      <Section className="bg-cream-deep">
        <Container>
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div>
              <Eyebrow>Welcome to Tropi Q</Eyebrow>
              <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
                The true headspa in Vietnam — felt, not just done
              </h2>
              <div className="rule mt-6" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft">
                Tropi Q is a <strong className="font-medium text-ink">multi-sensory experience</strong>:
                the tropical ambiance, the scents, the soft sounds and the gentle touch of your
                technician all working together to slow you down.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                At its heart is our <strong className="font-medium text-ink">signature scent</strong> —
                essential oils and a hair perfume blended to a ratio that belongs only to Tropi Q,
                so you carry the calm with you long after you leave.
              </p>
              <Button href="/about" variant="outline" className="mt-8">
                Our story
              </Button>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/Welcome to Tropi Q.jpg"
                alt="A multi-sensory headspa moment at Tropi Q"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ------------------------------------------------- Featured services */}
      <Section className="relative overflow-hidden bg-cream">
        <LeafDecor variant="palm" className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 text-olive/10" />
        <Container className="relative">
          <SectionTitle
            eyebrow="Signature offers"
            title="Find your perfect match"
            intro="Three guest favourites to begin with — explore the full menu for every treatment and price."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl border border-sand bg-cream-deep/40 p-8 transition-shadow hover:shadow-lg"
              >
                {item.badge && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-medium tracking-wide text-gold">
                    {item.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                <Button href={item.href} variant="outline" className="mt-6 self-start">
                  View details
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="primary">
              See our full menu
            </Button>
          </div>
        </Container>
      </Section>

      {/* --------------------------------------------- Video: guest experience */}
      <Section className="bg-cream-deep">
        <Container className="max-w-4xl">
          <SectionTitle
            eyebrow="See it to feel it"
            title="A glimpse of the experience"
            intro="Watch real guests unwind through the Tropi Q head spa — the ambiance, the scents, the touch."
          />
          <div className="mt-12">
            <VideoEmbed
              src="/videos/home.mp4"
              alt="Guests experiencing the Tropi Q headspa"
              caption="Guest experience at Tropi Q."
              autoPlay
            />
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
            <p className="eyebrow" style={{ color: "rgba(238,226,214,0.85)", letterSpacing: "0.28em", fontSize: "0.72rem", fontWeight: 500, textTransform: "uppercase" }}>The Tropi Q difference</p>
            <h2 className="font-display mt-3 text-3xl leading-tight drop-shadow sm:text-4xl md:text-5xl">
              A scent you&apos;ll remember Hanoi by
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream drop-shadow">
              Our hair tonics and perfumes are customised to a ratio that exists nowhere else — an
              original blend created only for Tropi Q. It lingers long after you leave.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              { t: "Warm light, never dim", d: "So you feel safe enough to fully relax with your eyes closed." },
              { t: "Original-brand products", d: "Genuine, premium materials — nothing cut, nothing compromised." },
              { t: "A signature aroma", d: "Custom essential oils and hair perfume blended only for Tropi Q." },
              { t: "No extra charge for card payments", d: "Pay however is convenient for you — no hidden fees." },
              { t: "No pressure to tip the staff", d: "Our team is here to care for you, with no expectations." },
              { t: "Friendly and welcoming", d: "Every guest is greeted warmly from the moment they arrive." },
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

      {/* ---------------------------------------------------------- Reviews */}
      <Section className="bg-cream">
        <Container>
          <SectionTitle
            eyebrow="Loved by travellers"
            title="5.0★ guest rated"
            intro="No incentives, no pressure — just guests who came to relax and left telling others."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                q: "The most relaxing thing I did in Vietnam. The head massage was unreal and the space smells incredible.",
                a: "Google guest",
              },
              {
                q: "Warm, clean and genuinely caring staff. I booked twice in one trip to Hanoi.",
                a: "Google guest",
              },
              {
                q: "A hidden gem near the Old Quarter. Walked past, loved the look, came in — best decision.",
                a: "Google guest",
              },
            ].map((r, i) => (
              <figure key={i} className="rounded-3xl border border-sand bg-cream-deep/40 p-8">
                <Stars rating={5} />
                <blockquote className="mt-4 text-base leading-relaxed text-ink">
                  “{r.q}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-ink-soft">— {r.a}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/reviews" variant="outline">
              Read more reviews
            </Button>
          </div>
        </Container>
      </Section>

      {/* -------------------------------------------------------- CTA band */}
      <section className="bg-olive py-20 text-center text-cream">
        <Container>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl">Ready to unwind?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/90">
            Message us on WhatsApp to book your headspa experience. We&apos;ll help you choose the
            perfect treatment for your time in Hanoi.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={whatsappLink} variant="gold">
              Book on WhatsApp
            </Button>
            <Button href="/contact" variant="light">
              Find us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
