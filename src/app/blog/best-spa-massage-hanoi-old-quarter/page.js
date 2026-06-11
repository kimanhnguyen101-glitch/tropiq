import Link from "next/link";
import { Container, Section, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Best Spa and Massage in Hanoi Old Quarter: A Local Guide · Tropi Q",
  description:
    "Looking for the best spa or massage in Hanoi Old Quarter? Here's how locals choose between a quick massage, a full spa, or an authentic herbal head spa.",
  alternates: { canonical: "/blog/best-spa-massage-hanoi-old-quarter" },
  openGraph: {
    title: "Best Spa and Massage in Hanoi Old Quarter: A Local Guide",
    description: "Looking for the best spa or massage in Hanoi Old Quarter? Here's how locals choose.",
    images: [{ url: "/images/blog/head-spa-scalp-massage-hanoi.jpg", width: 800, height: 1067, alt: "Spa treatment at Tropi Q, Old Quarter Hanoi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa and Massage in Hanoi Old Quarter: A Local Guide",
    description: "Looking for the best spa or massage in Hanoi Old Quarter? Here's how locals choose.",
    images: ["/images/blog/head-spa-scalp-massage-hanoi.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Spa and Massage in Hanoi Old Quarter: A Local Guide",
  description: "Looking for the best spa or massage in Hanoi Old Quarter? Here's how locals choose between a quick massage, a full spa, or an authentic herbal head spa.",
  image: "https://www.tropiqspa.com/images/blog/head-spa-scalp-massage-hanoi.jpg",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  author: { "@type": "Organization", name: "Tropi Q Head Spa", url: "https://www.tropiqspa.com" },
  publisher: { "@type": "Organization", name: "Tropi Q Head Spa", url: "https://www.tropiqspa.com", logo: { "@type": "ImageObject", url: "https://www.tropiqspa.com/images/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.tropiqspa.com/blog/best-spa-massage-hanoi-old-quarter" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is the best massage in Hanoi Old Quarter?", acceptedAnswer: { "@type": "Answer", text: "It depends on what you need. Quick foot and body massage spots are spread across Hang Bong and the streets near Hoan Kiem Lake, while quieter, more considered experiences tend to sit slightly off the busiest tourist strips, like near Train Street." } },
    { "@type": "Question", name: "Is there a good spa within walking distance of Hoan Kiem Lake?", acceptedAnswer: { "@type": "Answer", text: "Yes — most Old Quarter spas sit within a ten-minute walk of the lake, making it a reliable reference point when planning where to go." } },
    { "@type": "Question", name: "What's the difference between a massage and a spa treatment?", acceptedAnswer: { "@type": "Answer", text: "Massage is muscle-focused and usually quicker. A spa treatment is broader and can include head spa, body spa, or beauty services, generally built around a longer, more complete experience." } },
    { "@type": "Question", name: "Which spa is best for tourists in Hanoi?", acceptedAnswer: { "@type": "Answer", text: "One close to your hotel and Hoan Kiem Lake, with recent reviews mentioning the therapist and massage specifically. If you want something distinctly Vietnamese rather than an imported style, a Vietnamese herbal head spa is worth prioritizing." } },
    { "@type": "Question", name: "How much does a massage cost in Hanoi Old Quarter?", acceptedAnswer: { "@type": "Answer", text: "Pricing varies widely by service type and setting — a quick foot massage costs less than a full head spa or spa package. Check directly with each spa for current pricing." } },
    { "@type": "Question", name: "Is it better to choose a head spa or body massage?", acceptedAnswer: { "@type": "Answer", text: "If you're physically sore from walking, a body massage targets that directly. If you're mentally drained and want to properly switch off, a head spa is the better fit — it's built around relaxation rather than muscle recovery." } },
  ],
};

const experiences = [
  { exp: "Foot Massage", time: "30–45 min", bestFor: "Quick refresh between sightseeing" },
  { exp: "Body Massage", time: "60–90 min", bestFor: "Muscle recovery after a long walking day" },
  { exp: "Head Spa", time: "75–120 min", bestFor: "Relaxation and scalp care, mental reset" },
  { exp: "Spa Package", time: "120+ min", bestFor: "A full, unhurried experience" },
];

const faqs = [
  { q: "Where is the best massage in Hanoi Old Quarter?", a: "It depends on what you need. Quick foot and body massage spots are spread across Hang Bong and the streets near Hoan Kiem Lake, while quieter, more considered experiences tend to sit slightly off the busiest tourist strips, like near Train Street." },
  { q: "Is there a good spa within walking distance of Hoan Kiem Lake?", a: "Yes — most Old Quarter spas sit within a ten-minute walk of the lake, making it a reliable reference point when planning where to go." },
  { q: "What's the difference between a massage and a spa treatment?", a: "Massage is muscle-focused and usually quicker. A spa treatment is broader and can include head spa, body spa, or beauty services, generally built around a longer, more complete experience." },
  { q: "Which spa is best for tourists in Hanoi?", a: "One close to your hotel and Hoan Kiem Lake, with recent reviews mentioning the therapist and massage specifically. If you want something distinctly Vietnamese rather than an imported style, a Vietnamese herbal head spa is worth prioritizing." },
  { q: "How much does a massage cost in Hanoi Old Quarter?", a: "Pricing varies widely by service type and setting — a quick foot massage costs less than a full head spa or spa package. Check directly with each spa for current pricing." },
  { q: "Is it better to choose a head spa or body massage?", a: "If you're physically sore from walking, a body massage targets that directly. If you're mentally drained and want to properly switch off, a head spa is the better fit — it's built around relaxation rather than muscle recovery." },
];

export default function BestSpaMassageOldQuarterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        title="Best Spa & Massage in Hanoi Old Quarter"
        image="/images/cover-blog.png"
        aspectRatio="2008/783"
        intro="How to choose between a quick massage, a full spa, or an authentic Vietnamese herbal head spa — a local's guide."
      />
      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-2xl">
            <nav className="mb-8 text-sm text-ink/50">
              <Link href="/blog" className="hover:text-gold transition-colors">Journal</Link>
              <span className="mx-2">·</span>
              <span>Best Spa &amp; Massage — Old Quarter</span>
            </nav>
            <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-gold">
              <span>Hanoi Guide</span><span>·</span><span>Massage</span><span>·</span><span>Old Quarter</span>
            </div>
            <h1 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Best Spa and Massage in Hanoi Old Quarter: A Local Guide
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Walk any street around Hoan Kiem Lake and you'll pass a dozen spas before you finish your coffee. Foot massage shops, full-service spas, head spa studios, nail bars — the Old Quarter has all of it, packed into a few walkable blocks. That's a good problem to have, but it also means the question isn't really "where's a spa nearby," it's "which kind of experience actually fits what I need right now."
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              This guide walks through the differences, how to choose well, and which areas around Hoan Kiem are worth exploring depending on what you're after.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Why Hanoi Old Quarter Is a Great Place for Spa &amp; Massage</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The Old Quarter works for spa-hunting for the same reason it works for everything else travelers come here for: it's dense, walkable, and used to serving people on short visits. You can step out of a hotel on Hang Bac or Ma May and reach several spas without touching a taxi.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The range is wide, too. Budget foot massage places sit a few doors down from quieter, more considered spas — so whether you have twenty minutes between sightseeing stops or a free afternoon, there's usually something within a short walk. The trade-off is that quality varies just as widely as price, which is exactly why it's worth knowing what you're looking for before you pick the nearest signboard.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Massage vs Spa – What's the Difference?</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              These terms get used interchangeably in the Old Quarter, but they're not the same experience.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                { label: "Massage", body: "Muscle-focused — foot massage, back massage, full body massage. Usually quicker, more transactional, aimed at relieving physical tension. Good for a mid-trip reset." },
                { label: "Body spa", body: "Broader: massage plus additional steps like scrubs, wraps, or steam. Takes longer and leans more into the experience itself." },
                { label: "Head spa", body: "Scalp-and-mind focused rather than full-body — aromatherapy, gentle scalp massage, a proper hair wash, and neck-and-shoulder work. A good fit if you're feeling mentally wiped rather than just physically sore." },
                { label: "Beauty spa", body: "Covers nails, skin, and facial treatments — closer to a beauty routine than a relaxation ritual, often booked alongside one of the above." },
              ].map((item) => (
                <li key={item.label} className="border-l-2 border-gold pl-4">
                  <span className="font-medium text-ink">{item.label} — </span>
                  <span className="text-ink/70">{item.body}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-12 text-2xl text-ink">How to Choose the Best Spa in Old Quarter</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A few things are worth checking before you commit, especially with so many options within a five-minute walk of each other.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Hygiene", body: "Clean stations, sanitized tools, fresh linens between clients — worth a quick look before you book, particularly for anything involving your scalp or skin directly." },
                { label: "Therapist skill", body: "Technique varies a lot, even between spas that look similar from the outside. Reviews that mention the therapist specifically are more useful than ones that just praise the space." },
                { label: "Reviews", body: "Recent reviews from other travelers carry more weight than a polished storefront or menu board. Look for specifics, not just star ratings." },
                { label: "Atmosphere", body: "Some places are fast and functional, built for turnover. Others are quieter and designed for you to actually relax. It depends on whether you have twenty minutes or two hours." },
                { label: "Location", body: "A spa five minutes from where you're staying gets used; one across town, in Hanoi traffic, often doesn't." },
                { label: "Pricing", body: "Costs vary widely across the Old Quarter depending on service type and setting. It's worth checking directly with each spa, since pricing structures differ." },
              ].map((item) => (
                <div key={item.label} className="rounded-lg bg-cream/40 p-5">
                  <h3 className="font-medium text-ink">{item.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display mt-12 text-2xl text-ink">Best Spa Experiences by Your Needs</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Different needs call for different lengths and styles of treatment. Here's roughly how they break down:
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-sand">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-xs uppercase tracking-wider text-ink/50">
                  <tr>
                    {["Experience", "Time", "Best For"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/60">
                  {experiences.map((row) => (
                    <tr key={row.exp}>
                      <td className="px-4 py-4 font-medium text-ink">{row.exp}</td>
                      <td className="px-4 py-4 text-ink/70">{row.time}</td>
                      <td className="px-4 py-4 text-ink/70">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-display mt-12 text-2xl text-ink">Best Areas Around Hoan Kiem for Spa &amp; Massage</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Ta Hien</strong> is the busiest and most tourist-facing strip, better known for its bars than spas, but a few solid massage spots sit just off the main street.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Hang Bong</strong> has a mix of budget and mid-range spas, convenient if you're staying nearby and want something quick.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Phung Hung</strong> is quieter than the core tourist streets, with a handful of spas that lean more relaxed than transactional.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Train Street</strong> and the surrounding lanes are a bit removed from the busiest tourist flow, which tends to mean calmer, less rushed spa experiences — a good fit if you're after quiet over convenience.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Tropi Q – Authentic Vietnamese Herbal Head Spa</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Tropi Q is a herbal head spa built around a signature ritual designed by the owner and not replicated elsewhere in the Old Quarter. The experience leans fully into relaxation: a scent produced exclusively for Tropi Q opens the session, a gentle scalp exfoliant — proprietary and safe for every scalp type — and the ritual finishes with an aloe vera hair mask, rinsed with Tropi Q's own herbal water and hair perfume water.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The ritual draws on Vietnamese herbal traditions — <em>hương nhu, ngải cứu, bồ kết, vỏ bưởi, and cỏ mần trầu</em> — ingredients used in Vietnamese households for generations, brought into a spa setting. It's paired with skincare from La Roche-Posay and Vichy, guided throughout by the Tropi Q People in a quiet, tropical space.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Tucked just off Train Street at <strong>7 Tran Phu, Ba Dinh, Hanoi</strong> (50m from Hanoi Train Street). For travelers weighing a quick foot massage against something more considered, Tropi Q is built for the second kind of visit.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-medium text-ink">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-cream/50 px-8 py-10 text-center">
              <p className="font-display text-xl text-ink">Ready to try the quieter side of the Old Quarter?</p>
              <p className="mt-3 text-sm text-ink/60">
                Message the Tropi Q People on WhatsApp to book, or find the studio at 7 Tran Phu, Ba Dinh, Hanoi.
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
