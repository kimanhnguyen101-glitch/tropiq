import { Container, Section, SectionTitle, Eyebrow, Button, PageHero } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Franchise — A Little Tropical Head Spa",
  description:
    "Bring the Tropi Q head spa concept to your city. A proven, experience-led model with steady growth. Explore partnership and franchise opportunities.",
  alternates: { canonical: "/franchise" },
};

export default function FranchisePage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="A Little Tropical Head Spa"
        image="/images/cover-franchise.png"
        aspectRatio="2008/783"
        intro="Tropi Q reimagined the head spa in Vietnam — and the model works. We're opening the concept to partners who share our obsession with experience."
      />

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { stat: "+20%", label: "Steady growth in guests using our services" },
              { stat: "5.0★", label: "Genuine guest rating on Google" },
              { stat: "85%", label: "International guests — a global, repeatable appeal" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-5xl text-gold">{s.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream-deep">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why the model works</p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
              Experience&#8209;led, not equipment&#8209;led
            </h2>
            <div className="rule mx-auto mt-5" />
            <p className="mt-5 text-base leading-relaxed text-ink-soft">
              We compete on feeling, scent and care — not on discounts. That makes the concept distinctive, defensible and a joy to run.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "A defined niche", d: "A premium, experience-first head spa positioned away from crowded traditional spas." },
              { t: "Signature identity", d: "A tropical concept and an exclusive scent that travel across cities and cultures." },
              { t: "Proven playbook", d: "Service routines, training and standards refined in a live, thriving location." },
              { t: "Global appeal", d: "Designed to delight international guests — instantly relevant in any tourist city." },
              { t: "Premium margins", d: "Guests who value experience over price, supported by genuine premium products." },
              { t: "Founder support", d: "Direct guidance, documents and know-how shared openly with every partner." },
            ].map((f) => (
              <div key={f.t} className="rounded-3xl border border-sand bg-cream p-8">
                <h3 className="font-display text-xl text-gold">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Founder journal teaser — links to the journal section */}
      <Section className="bg-cream">
        <Container className="max-w-3xl text-center">
          <Eyebrow>From the founder</Eyebrow>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            The thinking behind the brand
          </h2>
          <div className="rule mx-auto mt-6" />
          <p className="mt-6 text-base leading-relaxed text-ink-soft">
            We share notes, documents and lessons on building an experience-led head spa — openly,<br />
            for partners and curious founders alike. The founder&apos;s journal is on its way.
          </p>
          <Button href="/blog" variant="outline" className="mt-8">
            Read the journal
          </Button>
        </Container>
      </Section>

      <section className="bg-cream-deep py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-white px-10 py-12 shadow-sm">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">Let&apos;s talk partnership</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
            Interested in bringing A Little Tropical Head Spa to your city? Reach out and we&apos;ll
            share the full concept.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={whatsappLink} variant="gold">
              Enquire on WhatsApp
            </Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}
