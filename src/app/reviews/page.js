import { Container, Section, PageHero, Button, Stars } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Reviews",
  description:
    "Tropi Q is rated 5.0 from 88 natural Google reviews. Read what travellers and locals say about Hanoi's true head spa.",
  alternates: { canonical: "/reviews" },
};

// Representative guest reviews. Replace with live Google reviews embed when ready.
const reviews = [
  { q: "The most relaxing thing I did in Vietnam. The head massage was unreal and the whole place smells incredible. Already miss it.", a: "Traveller from the UK" },
  { q: "Warm, spotlessly clean and genuinely caring staff. I booked twice in one trip to Hanoi — that says everything.", a: "Guest from Australia" },
  { q: "Un vrai bijou caché près du Vieux Quartier. Je suis entré par curiosité et c'était la meilleure décision du voyage.", a: "Voyageur de France" },
  { q: "暗いスパとは全然違います。温かい照明がとても心地よく、ハーバルウォーターのフィニッシュは特別な体験でした。", a: "日本からのゲスト" },
  { q: "Professional from start to finish. They asked what I needed and tailored everything. Left feeling brand new.", a: "Expat in Hanoi" },
  { q: "The signature scent is unforgettable. My hair smelled amazing for days. Worth every đồng.", a: "Traveller from the USA" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="What guests say"
        title="5.0★ guest rated"
        image="/images/cover-review.png"
        aspectRatio="2008/783"
        intro="Every review is natural — no incentives, no pressure. Just guests who came to relax and left wanting to tell others."
      />

      <Section className="bg-cream">
        <Container>
          <div className="mx-auto mb-14 flex max-w-md flex-col items-center rounded-3xl border border-sand bg-cream-deep/40 p-8 text-center">
            <p className="font-display text-6xl text-gold">{site.reviews.rating.toFixed(1)}</p>
            <Stars rating={5} className="mt-2 [&_svg]:h-5 [&_svg]:w-5" />
            <p className="mt-3 text-sm text-ink-soft">
              Guest rated on {site.reviews.source}
            </p>
            <Button href={site.social.google} variant="outline" className="mt-6">
              View on Google
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <figure key={i} className="rounded-3xl border border-sand bg-cream p-8">
                <Stars rating={5} />
                <blockquote className="mt-4 text-base leading-relaxed text-ink">“{r.q}”</blockquote>
                <figcaption className="mt-5 text-sm text-ink-soft">— {r.a}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-olive py-20 text-center text-cream">
        <Container>
          <h2 className="font-display text-3xl sm:text-4xl">Come write your own</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-cream/85">
            Reserve your session and discover why Hanoi keeps coming back.
          </p>
          <Button href={whatsappLink} variant="gold" className="mt-8">
            Book on WhatsApp
          </Button>
        </Container>
      </section>
    </>
  );
}
