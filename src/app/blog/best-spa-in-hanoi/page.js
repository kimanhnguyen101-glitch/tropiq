import Link from "next/link";
import { Container, Section, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Best Spa in Hanoi: Top Picks for Every Budget and Need · Tropi Q",
  description:
    "Looking for the best spa in Hanoi? Compare quick treatments to full head spa experiences by time and price, then book Tropi Q directly on WhatsApp.",
  alternates: { canonical: "/blog/best-spa-in-hanoi" },
  openGraph: {
    title: "Best Spa in Hanoi: Top Picks for Every Budget and Need",
    description: "Looking for the best spa in Hanoi? Compare quick treatments to full head spa experiences by time and price.",
    images: [{ url: "/images/blog/head-spa-scalp-massage-hanoi.jpg", width: 800, height: 1067, alt: "Head spa treatment at Tropi Q Hanoi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa in Hanoi: Top Picks for Every Budget and Need",
    description: "Looking for the best spa in Hanoi? Compare quick treatments to full head spa experiences by time and price.",
    images: ["/images/blog/head-spa-scalp-massage-hanoi.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Spa in Hanoi: Top Picks for Every Budget and Need",
  description: "Looking for the best spa in Hanoi? Compare quick treatments to full head spa experiences by time and price, then book Tropi Q directly on WhatsApp.",
  image: "https://www.tropiqspa.com/images/blog/head-spa-scalp-massage-hanoi.jpg",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  author: { "@type": "Organization", name: "Tropi Q Head Spa", url: "https://www.tropiqspa.com" },
  publisher: { "@type": "Organization", name: "Tropi Q Head Spa", url: "https://www.tropiqspa.com", logo: { "@type": "ImageObject", url: "https://www.tropiqspa.com/images/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.tropiqspa.com/blog/best-spa-in-hanoi" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the best spa in Hanoi for tourists?", acceptedAnswer: { "@type": "Answer", text: "It depends on how much time you have. For a quick reset between sightseeing stops, a foot spa is the fastest option. For a proper half-day experience, a head spa paired with a body massage is worth setting time aside for." } },
    { "@type": "Question", name: "How much does a spa in Hanoi cost?", acceptedAnswer: { "@type": "Answer", text: "At Tropi Q, quick treatments like a foot relax or hair wash start around 200,000–460,000₫, full head spa and massage sessions run 450,000–695,000₫, and premium combo packages sit between 600,000–890,000₫." } },
    { "@type": "Question", name: "Is there a good spa within walking distance of Hoan Kiem Lake?", acceptedAnswer: { "@type": "Answer", text: "Yes — Tropi Q is on Tran Phu Street, an easy walk from Hoan Kiem Lake and the Old Quarter, and close to Hanoi Train Street." } },
    { "@type": "Question", name: "What's the difference between a foot spa and a head spa?", acceptedAnswer: { "@type": "Answer", text: "A foot spa focuses on tired feet and legs after a day of walking. A head spa is scalp-and-hair focused, built more around a mental reset than physical muscle relief." } },
    { "@type": "Question", name: "Do I need to book a spa in Hanoi in advance?", acceptedAnswer: { "@type": "Answer", text: "It's not always required, but booking ahead — especially over WhatsApp — means you get the treatment and time slot you actually want, rather than whatever's available when you walk in." } },
  ],
};

const quickPicks = [
  { who: "A tourist with an hour between sights", pick: "Foot Relax (30–45 min)", why: "Fast, affordable, no long commitment" },
  { who: "A couple wanting a shared experience", pick: "Tropi 2 – Top to Toes combo", why: "Full-body pairing in one visit" },
  { who: "A business traveler, mentally drained", pick: "Head Spa Signature", why: "Built for a proper reset, not just muscle relief" },
  { who: "An expat wanting regular self-care", pick: "Hair Wash Detox or monthly Body Relax", why: "Affordable enough to repeat often" },
  { who: "Celebrating something", pick: "Tropi 3 combo", why: "The fullest version of the experience" },
];

const faqs = [
  { q: "What is the best spa in Hanoi for tourists?", a: "It depends on how much time you have. For a quick reset between sightseeing stops, a foot spa is the fastest option. For a proper half-day experience, a head spa paired with a body massage is worth setting time aside for." },
  { q: "How much does a spa in Hanoi cost?", a: "At Tropi Q, quick treatments like a foot relax or hair wash start around 200,000–460,000₫, full head spa and massage sessions run 450,000–695,000₫, and premium combo packages sit between 600,000–890,000₫." },
  { q: "Is there a good spa within walking distance of Hoan Kiem Lake?", a: "Yes — Tropi Q is on Tran Phu Street, an easy walk from Hoan Kiem Lake and the Old Quarter, and close to Hanoi Train Street." },
  { q: "What's the difference between a foot spa and a head spa?", a: "A foot spa focuses on tired feet and legs after a day of walking. A head spa is scalp-and-hair focused, built more around a mental reset than physical muscle relief." },
  { q: "Do I need to book a spa in Hanoi in advance?", a: "It's not always required, but booking ahead — especially over WhatsApp — means you get the treatment and time slot you actually want, rather than whatever's available when you walk in." },
];

export default function BestSpaInHanoiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        title="Best Spa in Hanoi"
        image="/images/cover-blog.png"
        aspectRatio="2008/783"
        intro="Top picks for every budget and need — compared by time and price."
      />
      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-2xl">
            <nav className="mb-8 text-sm text-ink/50">
              <Link href="/blog" className="hover:text-gold transition-colors">Journal</Link>
              <span className="mx-2">·</span>
              <span>Best Spa in Hanoi</span>
            </nav>
            <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-gold">
              <span>Spa Guide</span><span>·</span><span>Hanoi</span><span>·</span><span>Budget Guide</span>
            </div>
            <h1 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Best Spa in Hanoi: Top Picks for Every Budget and Need
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Walk ten minutes around Hoan Kiem Lake and you&apos;ll pass more spa signboards than you can count — foot massage stalls, hair-wash counters, full head spa studios, all promising the same thing in different words. The hard part isn&apos;t finding a spa in Hanoi. It&apos;s picking the right one for the time you actually have and the price you&apos;re actually willing to pay. This guide breaks it down by both, with real prices, so you&apos;re not choosing blind off a menu board on the street.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">What to Consider First</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Before comparing options, it helps to answer three quick questions: how much time do you have (twenty minutes between sights, or a free afternoon), are you going solo or with someone, and what you actually need right now — physical relief, a proper reset, or something worth remembering. A tired pair of feet and a mentally drained business traveler are not solved by the same treatment, even if both get called &quot;spa&quot; on the sign outside.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">A few practical things are worth checking once you&apos;ve narrowed it down to a shortlist:</p>
            <ul className="mt-5 space-y-4">
              {[
                { label: "Clear pricing.", body: "A spa that posts its treatment list and prices upfront, rather than negotiating once you're already seated, is a good sign you'll get what you booked." },
                { label: "Recent reviews that mention specifics.", body: "A high star rating on its own doesn't tell you much. Reviews that mention the therapist, the treatment, or the space directly are more useful than ones that just praise the location." },
                { label: "Distance from where you're staying.", body: "Most visitors base themselves near Hoan Kiem Lake or the Old Quarter, so a spa on Tran Phu Street or nearby means no time lost to Hanoi traffic — worth more than it sounds when you only have an afternoon free." },
                { label: "English-friendly booking.", body: "Being able to book ahead in English, ideally over WhatsApp, avoids the guesswork of a walk-in with limited shared language, especially for anything involving your scalp or skin directly." },
              ].map((item) => (
                <li key={item.label} className="border-l-2 border-gold pl-4">
                  <span className="font-medium text-ink">{item.label} </span>
                  <span className="text-ink/70">{item.body}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Once those boxes are checked, the decision really comes down to time and budget — which is what the rest of this guide is built around.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Short on Time? Quick Refresh (30–60 Minutes)</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              If you&apos;ve got a gap between sightseeing stops, a foot spa is the fastest way to reset. Tropi Q&apos;s Foot Relax runs 30 or 45 minutes (320,000₫ / 460,000₫) — a warm soak and pressure-point massage on tired feet and calves, no full undressing or long commitment required. If your scalp needs attention more than your feet, the Fresh hair wash (200,000₫) is a quick, affordable way to get the herbal-wash experience without booking a full head spa session.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Both work well for travelers staying near the Old Quarter or Hoan Kiem Lake who want something in and out within the hour, without sacrificing a full afternoon.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Want the Full Experience? Half-Day Picks</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              This is where a spa visit stops being a quick fix and starts being the reason you set aside a few hours. Tropi Q&apos;s Signature head spa (695,000₫) is the most-booked option here — a full scalp and hair ritual built around Vietnamese herbal ingredients, paired with the Body Relax massage (450,000₫ for 60 minutes, up to 675,000₫ for 90) for anyone carrying tension from long flights or long walking days. If you&apos;d rather ease in first, Tropi Herbal (450,000₫) is a gentler introduction to the same herbal tradition at a lower price point.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Booking a head spa and a body massage back to back turns a spa stop into an actual half-day plan — which is exactly what it&apos;s designed for.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Treating Yourself or a Couple? Premium Picks</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              For a special occasion, or simply wanting to go all in, Tropi Q&apos;s combo packages are built for exactly that. Tropi 2 – Top to Toes (770,000₫) is the most popular combo, pairing head spa with body and foot care in a single visit. Tropi 3 (850,000₫) is the newest addition, layering in extra treatments for anyone who wants the fullest version of the experience. If foot care is the focus, the Foot Spa Signature (890,000₫, 70 minutes) is a longer, more involved version of the quick foot relax — worth it when you have the afternoon to spend properly rather than squeezing it between errands.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              These packages also work well for couples wanting a shared experience rather than two separate quick treatments.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Tropi Q&apos;s Signature Head Spa — Found Nowhere Else</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Once you know what you&apos;re after, it&apos;s worth understanding what actually sets Tropi Q apart from the dozen other spas on the same street.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The Signature head spa is a ritual designed by the owner and not replicated anywhere else in Hanoi. It opens with a scent produced exclusively for Tropi Q, followed by a gentle proprietary scalp exfoliant safe for every scalp type, and finishes with an aloe vera hair mask rinsed using Tropi Q&apos;s own herbal water and hair perfume water. The ritual draws on Vietnamese herbal traditions passed down through generations — <em>hương nhu, ngải cứu, bồ kết, vỏ bưởi, and cỏ mần trầu</em> — brought into a spa setting rather than kept as a home remedy, and paired with skincare from La Roche-Posay and Vichy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              You&apos;ll find Tropi Q at 7 Tran Phu Street, Ba Dinh, just 50 meters from Hanoi Train Street and an easy walk from Hoan Kiem Lake and the Old Quarter — close enough for convenience, quiet enough for an actual reset. The Tropi Q People guide every session, and the space carries a 5.0 rating from 88 Google reviews. Open daily, 10:30am–8:30pm.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Quick Picks by Who You Are</h2>
            <div className="mt-6 overflow-x-auto rounded-xl border border-sand">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-xs uppercase tracking-wider text-ink/50">
                  <tr>
                    {["You are…", "Best pick", "Why"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/60">
                  {quickPicks.map((row) => (
                    <tr key={row.who} className="align-top">
                      <td className="px-4 py-4 text-ink">{row.who}</td>
                      <td className="px-4 py-4 font-medium text-ink">{row.pick}</td>
                      <td className="px-4 py-4 text-ink/70">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-display mt-12 text-2xl text-ink">FAQ</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-medium text-ink">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.a}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display mt-12 text-2xl text-ink">Final Thoughts</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              There&apos;s no single &quot;best spa in Hanoi&quot; — there&apos;s the right spa for the time, budget, and need you have right now. If that need is a proper head spa experience you won&apos;t find anywhere else in the city, Tropi Q is built for exactly that. Message the Tropi Q People on WhatsApp to book, or drop by 7 Tran Phu Street, Ba Dinh — a short walk from Hoan Kiem Lake and the Old Quarter.
            </p>

            <div className="mt-14 rounded-2xl bg-cream/50 px-8 py-10 text-center">
              <p className="font-display text-xl text-ink">Find the right session for your schedule.</p>
              <p className="mt-3 text-sm text-ink/60">
                Message the Tropi Q People on WhatsApp to book, or drop by 7 Tran Phu Street, Ba Dinh — open daily 10:30am–8:30pm.
              </p>
              <div className="mt-6">
                <BookingButton className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-sm font-medium text-cream transition hover:opacity-90">
                  Book a session
                </BookingButton>
              </div>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
