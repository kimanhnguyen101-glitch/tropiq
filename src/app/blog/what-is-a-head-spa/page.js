import Image from "next/image";
import Link from "next/link";
import { Container, Section, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "What Is a Head Spa? Everything You Need to Know · Tropi Q Hanoi",
  description:
    "Curious about head spa? Learn what a head spa is, how it works, the real benefits for your scalp — and why Hanoi is one of the best places to try one.",
  alternates: { canonical: "/blog/what-is-a-head-spa" },
  openGraph: {
    title: "What Is a Head Spa? Everything You Need to Know",
    description:
      "Curious about head spa? Learn what a head spa is, how it works, the real benefits for your scalp — and why Hanoi is one of the best places to try one.",
    images: [
      {
        url: "/images/blog/head-spa-scalp-massage-hanoi.jpg",
        width: 800,
        height: 1067,
        alt: "Head spa scalp massage treatment at Tropi Q, Hanoi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is a Head Spa? Everything You Need to Know",
    description:
      "Curious about head spa? Learn what a head spa is, how it works, the real benefits for your scalp — and why Hanoi is one of the best places to try one.",
    images: ["/images/blog/head-spa-scalp-massage-hanoi.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is a Head Spa? Everything You Need to Know About This Growing Wellness Trend",
  description:
    "Curious about head spa? Learn what a head spa is, how it works, the real benefits for your scalp — and why Hanoi is one of the best places to try one.",
  image: "https://www.tropiqspa.com/images/blog/head-spa-scalp-massage-hanoi.jpg",
  datePublished: "2026-06-01",
  dateModified: "2026-06-24",
  author: {
    "@type": "Organization",
    name: "Tropi Q Head Spa",
    url: "https://www.tropiqspa.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Tropi Q Head Spa",
    url: "https://www.tropiqspa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.tropiqspa.com/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.tropiqspa.com/blog/what-is-a-head-spa",
  },
};

export default async function WhatIsHeadSpaPage({ params }) {
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        title="What Is a Head Spa?"
        image="/images/cover-blog.png"
        aspectRatio="2008/783"
        intro="Everything you need to know about this growing wellness trend — and why Hanoi is one of the best places to try one."
      />

      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-2xl">

            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-ink/50">
              <Link href="/blog" className="hover:text-gold transition-colors">Journal</Link>
              <span className="mx-2">·</span>
              <span>What Is a Head Spa?</span>
            </nav>

            {/* Meta */}
            <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-gold">
              <span>Head Spa</span>
              <span>·</span>
              <span>Scalp Health</span>
              <span>·</span>
              <span>Hanoi</span>
            </div>

            <h1 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              What Is a Head Spa? Everything You Need to Know About This Growing Wellness Trend
            </h1>

            <p className="mt-6 text-base leading-relaxed text-ink/70">
              You have probably seen it on social media — someone lying back in a dimly lit room while a therapist works slowly through their scalp with warm hands and fragrant herbs. It looks deeply relaxing. But if you have never tried one, you might still be asking: what exactly <em>is</em> a head spa?
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The answer is more interesting than you might expect. A head spa is not a haircut, not a simple shampoo, and not your average massage. It is a dedicated scalp and hair treatment that has quietly become one of the most sought-after experiences for travelers who want to slow down and genuinely take care of themselves.
            </p>

            {/* IMAGE 1 — treatment photo */}
            <figure className="my-10 overflow-hidden rounded-xl">
              <Image
                src="/images/blog/head-spa-scalp-massage-hanoi.jpg"
                alt="Head spa treatment at Tropi Q — therapist performing scalp massage in Hanoi"
                width={800}
                height={1067}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
              <figcaption className="mt-3 text-center text-xs text-ink/40">
                A head spa session at Tropi Q, 7 Trần Phú, Hanoi
              </figcaption>
            </figure>

            {/* Section 1 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              What Is a Head Spa, Exactly?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A head spa is a professional treatment focused on the health of your scalp — the skin underneath your hair. Unlike a regular salon visit, a head spa treats the scalp as what it truly is: skin that needs cleansing, nourishment, and circulation, just like the skin on your face.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A typical session combines several steps: a deep scalp cleanse, a targeted massage using specific pressure techniques, and often a nourishing treatment applied directly to the scalp. Depending on where you go, the treatment may also include care for the neck, shoulders, and sometimes the face — since tension in those areas directly affects how your scalp feels.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The term "head spa" originated in Japan, where scalp care has been a serious part of personal care culture for decades. From there it spread across Asia, and in recent years it has found a growing audience worldwide.
            </p>

            {/* Section 2 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              How Is a Head Spa Different from a Regular Hair Wash?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              This is the question most first-timers ask, and it is a fair one. When you wash your hair at home — or even at a regular salon — the focus is the hair itself: cleaning it, conditioning it, making it look good. The scalp is incidental.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A head spa flips that entirely. The scalp is the focus. The hair is secondary.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                {
                  title: "The massage is intentional.",
                  body: "A trained therapist uses specific pressure points and movements to stimulate blood flow to the scalp and release built-up tension. This is not the casual rinse-and-lather you do in the shower.",
                },
                {
                  title: "The products are targeted.",
                  body: "Head spa treatments use ingredients chosen for scalp health — oils, herbal infusions, or serums that address dryness, buildup, or sensitivity — rather than generic shampoo.",
                },
                {
                  title: "The pace is completely different.",
                  body: "A head spa session typically lasts 60 to 90 minutes. There is nowhere to rush. That unhurried quality is part of what makes it feel restorative in a way a regular wash never does.",
                },
                {
                  title: "The experience goes beyond clean hair.",
                  body: "Most people leave a head spa feeling calmer, lighter, and noticeably less tense — even if they came in just out of curiosity.",
                },
              ].map((item) => (
                <li key={item.title} className="border-l-2 border-gold pl-4">
                  <span className="font-medium text-ink">{item.title}</span>{" "}
                  <span className="text-ink/70">{item.body}</span>
                </li>
              ))}
            </ul>

            {/* Section 3 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              What Happens During a Head Spa Session?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              While every spa has its own approach, a typical head spa treatment follows a similar flow.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              You begin with a scalp consultation — a therapist will look at your scalp type, ask about any concerns (dryness, sensitivity, oiliness), and choose the treatment approach accordingly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Then comes the cleanse. Your scalp is washed carefully, often with a specialized product. In some traditions, particularly in Vietnam, this step uses a blend of natural herbs — plants like <em>hương nhu</em> (holy basil), <em>ngải cứu</em> (mugwort), and <em>bồ kết</em> (soapberry) that have been used in hair care for generations. These are not marketing additions; they genuinely affect how the scalp feels and smells during and after the treatment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              After the cleanse, the massage begins — slow, deliberate movements across the scalp, the base of the skull, the neck, and sometimes the shoulders. The pressure is firm but not uncomfortable. Many people fall asleep during this part.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A nourishing treatment is then applied to the scalp and allowed to absorb. The session ends with a final rinse and a gentle blow-dry.
            </p>

            {/* IMAGE 2 — room photo */}
            <figure className="my-10 overflow-hidden rounded-xl">
              <Image
                src="/images/blog/head-spa-room-tropi-q-hanoi.jpg"
                alt="Head spa treatment room at Tropi Q Hanoi — warm tropical interior with curtains and massage beds"
                width={800}
                height={1067}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <figcaption className="mt-3 text-center text-xs text-ink/40">
                The head spa room at Tropi Q, 7 Trần Phú, Hoan Kiem, Hanoi
              </figcaption>
            </figure>

            {/* Section 4 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              The Real Benefits of a Head Spa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The reasons people keep coming back to head spa are practical, not just indulgent.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Improved scalp circulation",
                  body: "The massage techniques increase blood flow to the scalp, delivering more nutrients to hair follicles and supporting healthier hair growth over time.",
                },
                {
                  title: "Relief from tension and stress",
                  body: "The scalp holds a surprising amount of tension. A head spa massage releases it — and many clients find headaches ease, shoulders drop, and sleep quality improves.",
                },
                {
                  title: "Deeper cleansing",
                  body: "Regular washing does not fully remove product buildup or excess sebum. A professional head spa cleanse goes deeper, reducing itchiness, flakiness, and scalp congestion.",
                },
                {
                  title: "A genuine mental reset",
                  body: "People walk out of a head spa feeling clearer and calmer. Having your full attention given to one small, often-neglected part of your body for an hour is quietly restorative.",
                },
              ].map((b) => (
                <div key={b.title} className="rounded-lg bg-cream/40 p-5">
                  <h3 className="font-medium text-ink">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{b.body}</p>
                </div>
              ))}
            </div>

            {/* Section 5 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              Why Head Spa Is Becoming a Global Trend
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Head spa has gone from a niche Asian practice to a mainstream experience for one simple reason: it addresses something modern life creates in abundance — chronic tension and a sense of never truly switching off.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              It is also, compared to many treatments, remarkably accessible. You do not need any preparation. You do not need to commit to a series of sessions. You arrive, lie back, and let someone take care of you for an hour. That simplicity is powerful.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              For travelers in particular, a head spa offers something that sightseeing cannot: genuine stillness. After days of airports, itineraries, and unfamiliar time zones, an hour of focused, unhurried care can feel like the most valuable thing you do on a trip.
            </p>

            {/* Section 6 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              Why Hanoi Is One of the Best Places to Experience a Head Spa
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              If you happen to be in Hanoi — or planning to visit — you are in a particularly good place to try one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Vietnam has a long tradition of herbal hair care. Plants like <em>vỏ bưởi</em> (pomelo peel), <em>cỏ mần trầu</em> (goosegrass), and <em>bồ kết</em> have been used to cleanse and nourish the scalp for centuries, long before the term "head spa" existed. When that tradition is combined with modern spa technique, the result is something you genuinely cannot find elsewhere.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              If you are staying near Hoan Kiem Lake, a head spa makes for a natural afternoon. One hour. No agenda. Just care.
            </p>

            {/* CTA */}
            <div className="mt-14 rounded-2xl bg-cream/50 px-8 py-10 text-center">
              <p className="font-display text-xl text-ink">Ready to try a head spa in Hanoi?</p>
              <p className="mt-3 text-sm text-ink/60">
                Tropi Q is at 7 Trần Phú, a short walk from Hoan Kiem Lake.
                Reach us on WhatsApp to book or ask any questions.
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
