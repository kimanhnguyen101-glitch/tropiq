import Link from "next/link";
import { Container, Section, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "Head Spa in Hanoi: What It Is, Where to Go, What to Expect · Tropi Q",
  description:
    "New to head spa in Hanoi? Learn what it is, what to expect, and how to choose the right one — plus where locals recommend booking one.",
  alternates: { canonical: "/blog/head-spa-in-hanoi-guide" },
  openGraph: {
    title: "Head Spa in Hanoi: What It Is, Where to Go, What to Expect",
    description: "New to head spa in Hanoi? Learn what it is, what to expect, and how to choose the right one.",
    images: [{ url: "/images/blog/head-spa-scalp-massage-hanoi.jpg", width: 800, height: 1067, alt: "Head spa treatment at Tropi Q Hanoi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Head Spa in Hanoi: What It Is, Where to Go, What to Expect",
    description: "New to head spa in Hanoi? Learn what it is, what to expect, and how to choose the right one.",
    images: ["/images/blog/head-spa-scalp-massage-hanoi.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Head Spa in Hanoi: What It Is, Where to Go, What to Expect",
  description: "New to head spa in Hanoi? Learn what it is, what to expect, and how to choose the right one.",
  image: "https://www.tropiqspa.com/images/blog/head-spa-scalp-massage-hanoi.jpg",
  datePublished: "2026-07-18",
  dateModified: "2026-07-18",
  author: { "@type": "Organization", name: "Tropi Q Head Spa", url: "https://www.tropiqspa.com" },
  publisher: { "@type": "Organization", name: "Tropi Q Head Spa", url: "https://www.tropiqspa.com", logo: { "@type": "ImageObject", url: "https://www.tropiqspa.com/images/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.tropiqspa.com/blog/head-spa-in-hanoi-guide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a head spa?", acceptedAnswer: { "@type": "Answer", text: "A head spa is a scalp-and-mind relaxation ritual involving aromatherapy, gentle scalp massage, a proper hair wash, and neck-and-shoulder massage — more thorough than a standard hair wash." } },
    { "@type": "Question", name: "Is a head spa worth it?", acceptedAnswer: { "@type": "Answer", text: "For most people, yes, especially if you're carrying tension in the scalp, neck, or shoulders. It's less about luxury and more about giving yourself time to actually relax." } },
    { "@type": "Question", name: "How much does a head spa cost in Hanoi?", acceptedAnswer: { "@type": "Answer", text: "Pricing varies widely depending on style and setting, from affordable salon add-ons to premium standalone rituals. It's worth checking directly with each spa, since menus and pricing structures differ." } },
    { "@type": "Question", name: "How long does a head spa take?", acceptedAnswer: { "@type": "Answer", text: "A full session typically runs 60–90 minutes, including the massage and finishing steps. Shorter versions closer to 30 minutes are usually scalp add-ons rather than the full ritual." } },
    { "@type": "Question", name: "Which head spa is best for tourists in Hanoi?", acceptedAnswer: { "@type": "Answer", text: "One located near Hoan Kiem or the Old Quarter makes logistics easiest. Since you're in Vietnam, a Vietnamese herbal head spa is worth prioritizing over a Japanese-style import or a plain hair wash." } },
    { "@type": "Question", name: "Is herbal head spa different from Japanese head spa?", acceptedAnswer: { "@type": "Answer", text: "Yes. Herbal head spa centers on Vietnamese botanical ingredients, scent, and an unhurried, relaxation-first ritual, while Japanese-style head spa tends to be more technique- and tool-driven. Both are valid, just built around different priorities." } },
  ],
};

const types = [
  { type: "Japanese head spa", style: "Precise, technique-driven, often uses specialized scalp-scanning tools", experience: "Clinical, quiet, methodical", bestFor: "Those wanting a structured, results-focused scalp treatment" },
  { type: "Vietnamese herbal head spa", style: "Built around local herbal ingredients (hương nhu, ngải cứu, bồ kết, vỏ bưởi, cỏ mần trầu)", experience: "Warm, sensory, rooted in local wellbeing traditions", bestFor: "Travelers wanting something distinctly Vietnamese, not a franchise formula" },
  { type: "Luxury hotel spa", style: "Premium setting, broader menu (head spa as one of several treatments)", experience: "Polished, hospitality-standard", bestFor: "Those prioritizing setting and service over specialization" },
  { type: "Beauty salon add-on", style: "Head spa offered alongside haircuts and coloring", experience: "Quick, convenient, less specialized", bestFor: "Those combining it with a haircut, not seeking a dedicated ritual" },
];

const faqs = [
  { q: "What is a head spa?", a: "A head spa is a scalp-and-mind relaxation ritual involving aromatherapy, gentle scalp massage, a proper hair wash, and neck-and-shoulder massage — more thorough than a standard hair wash." },
  { q: "Is a head spa worth it?", a: "For most people, yes, especially if you're carrying tension in the scalp, neck, or shoulders. It's less about luxury and more about giving yourself time to actually relax." },
  { q: "How much does a head spa cost in Hanoi?", a: "Pricing varies widely depending on style and setting, from affordable salon add-ons to premium standalone rituals. It's worth checking directly with each spa, since menus and pricing structures differ." },
  { q: "How long does a head spa take?", a: "A full session typically runs 60–90 minutes, including the massage and finishing steps. Shorter versions closer to 30 minutes are usually scalp add-ons rather than the full ritual." },
  { q: "Which head spa is best for tourists in Hanoi?", a: "One located near Hoan Kiem or the Old Quarter makes logistics easiest. Since you're in Vietnam, a Vietnamese herbal head spa is worth prioritizing over a Japanese-style import or a plain hair wash." },
  { q: "Is herbal head spa different from Japanese head spa?", a: "Yes. Herbal head spa (like Tropi Q's) centers on Vietnamese botanical ingredients, scent, and an unhurried, relaxation-first ritual, while Japanese-style head spa tends to be more technique- and tool-driven. Both are valid, just built around different priorities." },
];

export default function HeadSpaInHanoiGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        title="Head Spa in Hanoi"
        image="/images/cover-blog.png"
        aspectRatio="2008/783"
        intro="What it is, where to go, and what to expect — a practical guide for first-timers."
      />
      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-2xl">
            <nav className="mb-8 text-sm text-ink/50">
              <Link href="/blog" className="hover:text-gold transition-colors">Journal</Link>
              <span className="mx-2">·</span>
              <span>Head Spa in Hanoi</span>
            </nav>
            <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-gold">
              <span>Head Spa</span><span>·</span><span>Hanoi Guide</span><span>·</span><span>Wellness</span>
            </div>
            <h1 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              Head Spa in Hanoi: What It Is, Where to Go, What to Expect
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink/70">
              If you've spent even a day walking around Hoan Kiem Lake or the Old Quarter, you've probably noticed the signs: "Head Spa," tucked between nail salons and coffee shops, sometimes with a queue outside. It's not a passing trend. Head spa has become one of the things visitors and residents alike now build into their Hanoi itinerary, right alongside a walk around the lake or a coffee break on Tran Phu Street.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              But "head spa" gets used loosely — some places mean a proper scalp treatment, others mean a fancy hair wash. This guide breaks down what a head spa actually is, what to expect during a session, the different styles you'll find across Hanoi, and how to choose one that matches what you're looking for.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">What Is a Head Spa?</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A head spa is a scalp-and-mind relaxation ritual that goes well beyond washing your hair. Where a standard hair wash cleans and maybe conditions, a head spa is built around slowing down — scent, touch, and an extended massage that a quick wash was never designed to include.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">It's easiest to think of it on a spectrum:</p>
            <ul className="mt-4 space-y-3">
              {[
                { label: "Hair wash", desc: "Cleansing only, a few minutes, usually a lead-in to a haircut." },
                { label: "Scalp treatment", desc: "A targeted, results-driven step (like a detox or anti-dandruff treatment), more clinical than relaxing." },
                { label: "Head spa", desc: "A full ritual: aromatherapy, gentle scalp massage, a proper hair wash, and neck-and-shoulder massage, typically 60–90 minutes." },
              ].map((item) => (
                <li key={item.label} className="border-l-2 border-gold pl-4">
                  <span className="font-medium text-ink">{item.label} — </span>
                  <span className="text-ink/70">{item.desc}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The massage and the scent are what people tend to remember most, and that's really the point. A good head spa isn't diagnosing your scalp — it's giving your mind and body a place to slow down, with the scalp treated as gently and attentively as a facial treats the skin.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">What Can You Expect During a Head Spa?</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Most head spa sessions in Hanoi follow a similar shape, even if the details vary by place.
            </p>
            <div className="mt-5 space-y-4">
              {[
                { label: "The flow", body: "A head spa session usually opens with essential oil — inhaled or applied lightly so your mind starts to settle before anyone touches your scalp. From there, a gentle scalp massage eases tension without any clinical fuss, followed by the hair wash itself, done lying back rather than leaning over a basin, which matters more than it sounds like for how relaxed you feel. Many sessions close with a neck-and-shoulder massage, since tension in the scalp rarely stays in the scalp." },
                { label: "Duration", body: "Expect somewhere between 60 and 90 minutes for a proper session. Anything under 30 minutes is closer to a quick scalp add-on than a full head spa." },
                { label: "Atmosphere", body: "This is where places differ the most. Some lean efficient and fast; others build a full sensory experience — lighting, scent, tea before or after. If atmosphere matters to you as much as the treatment itself, it's worth checking photos or asking before booking." },
                { label: "Benefits people report", body: "Reduced tension in the scalp, neck, and shoulders, a calmer mind by the end of the session, and better sleep that night. It's not a medical treatment — it's a relaxation ritual that a regular hair wash never gives you time for." },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-gold pl-4">
                  <span className="font-medium text-ink">{item.label}: </span>
                  <span className="text-ink/70">{item.body}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display mt-12 text-2xl text-ink">Different Types of Head Spa in Hanoi</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Not every head spa is the same, and that's really the core thing to understand before you book one. The style of head spa shapes the whole experience — the pace, the techniques, the products, even how much conversation happens during the session.
            </p>
            <div className="mt-6 overflow-x-auto rounded-xl border border-sand">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50 text-xs uppercase tracking-wider text-ink/50">
                  <tr>
                    {["Type", "Style & Focus", "Typical Experience", "Best For"].map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand/60">
                  {types.map((row) => (
                    <tr key={row.type} className="align-top">
                      <td className="px-4 py-4 font-medium text-ink">{row.type}</td>
                      <td className="px-4 py-4 text-ink/70">{row.style}</td>
                      <td className="px-4 py-4 text-ink/70">{row.experience}</td>
                      <td className="px-4 py-4 text-ink/70">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              None of these is objectively "better" — they're built for different priorities. A Japanese-style head spa and a Vietnamese herbal one can both be excellent, but they're solving for different things. Knowing which one you actually want saves you from picking based on proximity alone.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">How to Choose the Best Head Spa in Hanoi</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A few things are worth checking before you book, especially if you're only in Hanoi for a short stay and want to get it right the first time.
            </p>
            <ul className="mt-5 space-y-4">
              {[
                { label: "Choose Vietnam, not an import.", body: "You're in Hanoi, Vietnam — so it's worth experiencing a head spa that's actually Vietnamese, rather than a Japanese-style import or, at the other end, just a plain hair wash with a different name on the door. A Vietnamese herbal head spa gives you something you can't get at home or at a generic salon: local ingredients, local technique, a ritual shaped by this place specifically." },
                { label: "Budget.", body: "Prices range from affordable salon add-ons to premium standalone rituals. Decide whether you want a quick treatment or a full experience, since the two aren't priced — or delivered — the same way." },
                { label: "Therapist skill.", body: "Scalp massage technique varies a lot between therapists. Reviews that specifically mention the massage (not just 'nice place') are a good signal." },
                { label: "Hygiene.", body: "Look for visibly clean stations, sanitized tools, and fresh linens between clients. This matters more for head spa than most treatments, given the direct contact with hair and scalp." },
                { label: "Products used.", body: "Ask what's actually being applied to your scalp and hair. Places that can explain their ingredients — herbal or otherwise — tend to be more transparent about what you're paying for." },
                { label: "Reviews.", body: "Recent reviews from other travelers or expats are more reliable than a polished website. Look for specifics: mentions of the massage, the therapist, how relaxed people felt afterward." },
              ].map((item) => (
                <li key={item.label} className="border-l-2 border-gold pl-4">
                  <span className="font-medium text-ink">{item.label} </span>
                  <span className="text-ink/70">{item.body}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-12 text-2xl text-ink">Best Areas to Find Head Spa in Hanoi</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              For visitors, location matters almost as much as the treatment itself — a head spa near your hotel means you can actually relax afterward instead of rushing back through traffic.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              <strong className="text-ink">Hoan Kiem and the Old Quarter</strong> are the most convenient areas for most travelers, within walking distance of the lake, Trang Tien, and the main tourist streets. Tran Phu Street, on the edge of the Old Quarter, is a particularly walkable spot — close enough to the lake to combine a head spa with a stroll before or after.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              <strong className="text-ink">West Lake (Tay Ho)</strong> is popular with expats and longer-stay visitors, with a more residential, laid-back pace and a different mix of spas geared toward regulars rather than one-time tourists.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              If you're only in Hanoi for a few days, staying close to Hoan Kiem makes it easy to fit a head spa into your existing plans rather than treating it as a separate trip.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">Tropi Q Signature Herbal Head Spa</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Once you understand the differences between head spa styles, it's easier to see where something like Tropi Q fits in.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Tropi Q's head spa is a herbal ritual designed by the owner and not replicated elsewhere in Hanoi. A few things are exclusive to the experience: the essential oil is a signature scent produced only for Tropi Q, the scalp exfoliation uses a proprietary blend gentle enough to be safe for every scalp type, and the finishing hair mask is made with aloe vera to leave hair naturally smooth without weighing it down. The ritual is rinsed and finished with Tropi Q's own herbal water and hair perfume water — both made exclusively for the brand rather than sourced off the shelf.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              It also draws on Vietnamese herbal traditions — <em>hương nhu, ngải cứu, bồ kết, vỏ bưởi, and cỏ mần trầu</em> — ingredients Vietnamese households have used for hair and scalp care for generations, brought into a spa setting rather than a home remedy. The experience leans into a tropical, unhurried atmosphere, guided by the Tropi Q People, with the same attention to hygiene and gentle touch covered earlier in this guide.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              It's built for people who want something that feels specifically Vietnamese — not a Japanese formula transplanted into Hanoi, but a relaxation ritual shaped around local ingredients and a founder's own approach to scent, touch, and scalp care.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              You'll find it at 7 Tran Phu, Ba Dinh, Hanoi (50m from Hanoi Train Street) — an easy stop if you're already exploring the Old Quarter or Hoan Kiem area.
            </p>

            <h2 className="font-display mt-12 text-2xl text-ink">FAQ</h2>
            <div className="mt-6 space-y-6">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-medium text-ink">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-2xl bg-cream/50 px-8 py-10 text-center">
              <p className="font-display text-xl text-ink">Ready to experience it firsthand?</p>
              <p className="mt-3 text-sm text-ink/60">
                The Tropi Q People are happy to walk you through it. Message on WhatsApp to book, or find the studio at 7 Tran Phu, Ba Dinh, Hanoi.
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
