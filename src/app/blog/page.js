import { Container, Section, PageHero, Button } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Journal",
  description:
    "Notes on head spa, scalp wellness, the tropical concept and slow travel in Hanoi — from the team and founder of Tropi Q.",
  alternates: { canonical: "/blog" },
};

// Planned topics for upcoming articles (SEO scaffolding for v1).
const planned = [
  { t: "What is a head spa, really?", d: "The experience, the benefits and why it feels so good.", tag: "Head spa 101" },
  { t: "How to relax in Hanoi between sightseeing", d: "Slow moments to balance a busy travel itinerary.", tag: "Travel" },
  { t: "Scalp care for healthier hair", d: "Simple habits and what our herbal water does.", tag: "Wellness" },
  { t: "The story of our signature scent", d: "How we blended an aroma that belongs only to Tropi Q.", tag: "Behind the brand" },
  { t: "Building an experience-led spa", d: "Founder notes on the model behind Tropi Q.", tag: "Founder journal" },
  { t: "A first-timer's guide to your visit", d: "What to expect, what to wear, how to prepare.", tag: "Guide" },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Notes on calm, scalp & Hanoi"
        image="/images/store/store-05.jpg"
        intro="Stories on head spa, wellness, our tropical concept and the founder's journey. New writing is on the way."
      />

      <Section className="bg-cream">
        <Container>
          <div className="mb-12 rounded-3xl border border-dashed border-gold/40 bg-cream-deep/30 p-8 text-center">
            <p className="font-display text-2xl text-ink">Articles coming soon</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
              We&apos;re preparing the first pieces below. In the meantime, the best way to
              experience Tropi Q is in person.
            </p>
            <Button href={whatsappLink} variant="primary" className="mt-6">
              Book a session
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {planned.map((p) => (
              <article
                key={p.t}
                className="flex flex-col rounded-3xl border border-sand bg-cream p-8"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gold">{p.tag}</span>
                <h2 className="font-display mt-3 text-2xl leading-snug text-ink">{p.t}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.d}</p>
                <span className="mt-6 text-sm italic text-ink-soft">Coming soon</span>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
