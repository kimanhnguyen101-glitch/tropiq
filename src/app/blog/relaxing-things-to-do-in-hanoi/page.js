import Image from "next/image";
import Link from "next/link";
import { Container, Section, PageHero } from "@/components/ui";
import BookingButton from "@/components/BookingButton";

export const metadata = {
  title: "7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake · Tropi Q",
  description:
    "From sunrise walks to a Vietnamese head spa near Hoan Kiem Lake — discover 7 genuinely relaxing things to do in Hanoi, plus a half-day itinerary to make the most of your visit.",
  alternates: { canonical: "/blog/relaxing-things-to-do-in-hanoi" },
  openGraph: {
    title: "7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake",
    description:
      "From sunrise walks to a Vietnamese head spa near Hoan Kiem Lake — discover 7 genuinely relaxing things to do in Hanoi, plus a half-day itinerary.",
    images: [
      {
        url: "/images/blog/head-spa-scalp-massage-hanoi.jpg",
        width: 800,
        height: 1067,
        alt: "Vietnamese head spa treatment at Tropi Q Hanoi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake",
    description:
      "From sunrise walks to a Vietnamese head spa near Hoan Kiem Lake — discover 7 genuinely relaxing things to do in Hanoi.",
    images: ["/images/blog/head-spa-scalp-massage-hanoi.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake",
  description:
    "From sunrise walks to a Vietnamese head spa near Hoan Kiem Lake — discover 7 genuinely relaxing things to do in Hanoi, plus a half-day itinerary.",
  image: "https://www.tropiqspa.com/images/blog/head-spa-scalp-massage-hanoi.jpg",
  datePublished: "2026-07-01",
  dateModified: "2026-07-01",
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
    "@id": "https://www.tropiqspa.com/blog/relaxing-things-to-do-in-hanoi",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Hanoi a good city for relaxation travel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hanoi has a long tradition of massage, herbal therapy, and tea culture — practices that are part of everyday Vietnamese life rather than reserved for tourists. The area around Hoan Kiem Lake and the Old Quarter offers a range of genuinely local relaxation experiences at accessible prices.",
      },
    },
    {
      "@type": "Question",
      name: "What is the most relaxing thing to do in Hanoi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For physical rest after travel, a traditional Vietnamese head spa combines scalp massage, herbal treatment, and deep relaxation in a single session. For mental calm, an early morning walk around Hoan Kiem Lake or a slow afternoon in a quiet café are equally restorative.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find a head spa near Hoan Kiem Lake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tropi Q is located at 7 Tran Phu, Ba Dinh, Hanoi — approximately 10 minutes on foot from Hoan Kiem Lake and a 2-minute walk from Phùng Hưng Train Street. It specialises in Vietnamese herbal head spa treatments and accepts bookings via WhatsApp: 0333 892 329.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Vietnamese head spa take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard session lasts 60 to 90 minutes and includes a scalp consultation, herbal cleanse, therapeutic massage targeting the scalp, neck and shoulders, and a nourishing treatment. Some guests add a foot spa, which extends the session accordingly.",
      },
    },
    {
      "@type": "Question",
      name: "Is a head spa worth it for tourists visiting Hanoi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most travelers — particularly those dealing with jet lag, muscle tension from long walks, or general travel fatigue — a head spa offers a specific kind of rest that sightseeing and standard massage do not. The combination of herbal ingredients, scalp care, and therapeutic massage tends to leave guests feeling noticeably different afterward.",
      },
    },
  ],
};

const itinerary = [
  { time: "8:00", activity: "Walk around Hoan Kiem Lake" },
  { time: "9:00", activity: "Vietnamese coffee at a hidden café" },
  { time: "10:30", activity: "Visit Hanoi Train Street" },
  { time: "12:00", activity: "Lunch near the Old Quarter" },
  { time: "14:00", activity: "Head spa at Tropi Q (7 Tran Phu, Ba Dinh)" },
  { time: "16:00", activity: "Browse the Old Quarter streets" },
  { time: "Sunset", activity: "Return to Hoan Kiem Lake" },
];

const faqs = [
  {
    q: "Is Hanoi a good city for relaxation travel?",
    a: "Hanoi has a long tradition of massage, herbal therapy, and tea culture — practices that are part of everyday Vietnamese life rather than reserved for tourists. The area around Hoan Kiem Lake and the Old Quarter offers a range of genuinely local relaxation experiences at accessible prices.",
  },
  {
    q: "What is the most relaxing thing to do in Hanoi?",
    a: "For physical rest after travel, a traditional Vietnamese head spa combines scalp massage, herbal treatment, and deep relaxation in a single session. For mental calm, an early morning walk around Hoan Kiem Lake or a slow afternoon in a quiet café are equally restorative. Both work well in combination.",
  },
  {
    q: "Where can I find a head spa near Hoan Kiem Lake?",
    a: "Tropi Q is located at 7 Tran Phu, Ba Dinh, Hanoi — approximately 10 minutes on foot from Hoan Kiem Lake and a 2-minute walk from Phùng Hưng Train Street. It specialises in Vietnamese herbal head spa treatments and accepts bookings via WhatsApp: 0333 892 329.",
  },
  {
    q: "How long does a Vietnamese head spa take?",
    a: "A standard session lasts 60 to 90 minutes and includes a scalp consultation, herbal cleanse, therapeutic massage targeting the scalp, neck and shoulders, and a nourishing treatment. Some guests add a foot spa, which extends the session accordingly.",
  },
  {
    q: "Is a head spa worth it for tourists visiting Hanoi?",
    a: "For most travelers — particularly those dealing with jet lag, muscle tension from long walks, or general travel fatigue — a head spa offers a specific kind of rest that sightseeing and standard massage do not. The combination of herbal ingredients, scalp care, and therapeutic massage tends to leave guests feeling noticeably different afterward.",
  },
];

export default async function RelaxingThingsHanoiPage({ params }) {
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title="7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake"
        image="/images/cover-blog.png"
        aspectRatio="2008/783"
        intro="Slow down, breathe, and discover what this part of the city does best."
      />

      <Section className="bg-white">
        <Container>
          <article className="mx-auto max-w-2xl">

            {/* Breadcrumb */}
            <nav className="mb-8 text-sm text-ink/50">
              <Link href="/blog" className="hover:text-gold transition-colors">Journal</Link>
              <span className="mx-2">·</span>
              <span>7 Relaxing Things to Do in Hanoi</span>
            </nav>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-widest text-gold">
              <span>Hanoi Guide</span>
              <span>·</span>
              <span>Head Spa</span>
              <span>·</span>
              <span>Travel Tips</span>
            </div>

            <h1 className="font-display text-3xl leading-snug text-ink md:text-4xl">
              7 Relaxing Things to Do in Hanoi Near Hoan Kiem Lake
            </h1>

            {/* Intro */}
            <p className="mt-6 text-base leading-relaxed text-ink/70">
              Hanoi is exciting — but it can also be overwhelming. After hours of walking through the Old Quarter, navigating busy intersections, and absorbing a city that never quite slows down, many travelers start looking for relaxing things to do in Hanoi that go beyond the next temple or street food stop.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Fortunately, the area around Hoan Kiem Lake offers far more than sightseeing. From quiet lakeside walks at dawn and hidden cafés to a genuine Vietnamese head spa in Hanoi that most guests describe as the highlight of their trip, this part of the city rewards those who take their time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Here are seven experiences worth slowing down for — all within easy reach of Hoan Kiem Lake.
            </p>

            {/* Hero image */}
            <figure className="my-10 overflow-hidden rounded-xl">
              <Image
                src="/images/blog/head-spa-scalp-massage-hanoi.jpg"
                alt="Vietnamese head spa treatment at Tropi Q Hanoi — therapist performing scalp massage with herbal ingredients"
                width={800}
                height={1067}
                className="w-full object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
              <figcaption className="mt-3 text-center text-xs text-ink/40">
                Head spa at Tropi Q — 7 Tran Phu, Ba Dinh, Hanoi
              </figcaption>
            </figure>

            {/* SECTION 1 */}
            <h2 className="font-display mt-12 text-2xl text-ink">
              1. Experience a Traditional Vietnamese Head Spa
            </h2>
            <p className="mt-1 text-xs uppercase tracking-widest text-gold">Top Recommendation</p>

            <p className="mt-4 text-base leading-relaxed text-ink/70">
              If you could choose only one relaxing experience in Hanoi, a traditional Vietnamese head spa would be difficult to beat.
            </p>

            <h3 className="font-display mt-6 text-lg text-ink">What is a Vietnamese head spa?</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              A head spa is a professional scalp and hair treatment — different from a regular massage and very different from a salon visit. The focus is the scalp itself: cleansing it deeply, stimulating blood flow through deliberate massage techniques, and nourishing it with targeted ingredients.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              In Vietnam, this practice draws from a long tradition of herbal hair care. Ingredients like <em>hương nhu</em> (Vietnamese holy basil), <em>ngải cứu</em> (mugwort), <em>bồ kết</em> (soapberry), and <em>vỏ bưởi</em> (pomelo peel) have been used to care for the scalp for generations. A skilled therapist combines these herbal ingredients with massage techniques that work across the scalp, neck, and shoulders in one continuous session.
            </p>

            <h3 className="font-display mt-6 text-lg text-ink">Why travelers keep coming back</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              For tourists, the appeal is straightforward. A head spa in Hanoi works on several things at once: jet lag, tension built up from travel and long walks, mental fatigue from navigating a new city, and the general need to stop moving for a while.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Unlike a standard massage, a head spa also includes a deep scalp cleanse and nourishing treatment — so you leave feeling genuinely rested, with noticeably healthier hair. Most guests describe it as somewhere between a massage and a meditation session. Many fall asleep during the treatment.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              A session typically lasts 60 to 90 minutes. No preparation needed. You simply arrive and lie back.
            </p>

            <h3 className="font-display mt-6 text-lg text-ink">Where to go: Tropi Q</h3>
            <p className="mt-3 text-base leading-relaxed text-ink/70">
              Tropi Q is located at 7 Tran Phu, Ba Dinh — about 10 minutes on foot from Hoan Kiem Lake and a 2-minute walk from Phùng Hưng Train Street. It was built specifically around the Vietnamese herbal head spa experience, with a signature herbal scent blended exclusively for the space, soft ambient lighting, curated music, and therapists trained in scalp techniques not found elsewhere in Vietnam.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The team speaks English and works regularly with international guests. Booking is done via WhatsApp, and sessions are available daily until 8:30pm.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70 italic">
              If you are looking for a peaceful, genuinely Vietnamese experience after exploring Hanoi, Tropi Q is one of the most recommended stops near Hoan Kiem Lake.
            </p>

            {/* SECTION 2 */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              2. Walk Around Hoan Kiem Lake at Sunrise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Before the city wakes up, Hoan Kiem Lake belongs to the locals. Between 5:30 and 7:00 in the morning, the lakeside path fills with a quiet rhythm: elderly residents practising tai chi, families walking side by side, vendors arranging their first trays of the day. The air is cooler, the motorbikes have not yet arrived, and the usual noise is still absent.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The walk around the full lake takes about 20 minutes at an easy pace. The Ngoc Son Temple — sitting on a small island connected to the shore by the red Huc Bridge — is best seen in this early light. The reflection on the calm water is one of those images most visitors who sleep in never get to see.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Even for those who are not naturally early risers, setting an alarm once during your time in Hanoi is worth it.
            </p>

            {/* SECTION 3 */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              3. Find a Quiet Café and Stay a While
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Hanoi has a coffee culture that rewards the unhurried. Hidden behind the main tourist streets are cafés tucked into courtyard gardens, up narrow staircases to balconies overlooking the rooftops, or inside French colonial-era buildings that have barely changed in decades. These are not places designed for a quick stop.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Egg coffee — <em>cà phê trứng</em> — is worth trying at least once. It is a Hanoi original: strong coffee in a small cup, topped with a warm, lightly sweetened egg cream. It sounds unusual. It tastes like something between a dessert and a drink, and it is difficult to describe to someone who has not had it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Find a seat with a view, order slowly, and resist the urge to plan your next stop while you are still in this one.
            </p>

            {/* SECTION 4 */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              4. Visit Hanoi Train Street During the Quiet Hours
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Hanoi Train Street is one of the city&apos;s most photographed spots — a narrow lane where the railway track runs so close to the houses that residents must step indoors when a train passes. At peak hours, it is crowded. But arrive on a weekday morning before 10:00, or on a quieter afternoon, and the street shows a different character: locals going about their day, cats asleep on the tracks, shopkeepers arranging goods in doorways just centimetres from the rail.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The train still comes through — check the schedule before you visit. The few minutes before it arrives, when residents calmly move chairs and pots off the tracks, feels entirely, distinctly Hanoi.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Tropi Q is a 2-minute walk from Phùng Hưng Train Street, which makes the two a natural pairing: the tracks in the morning, a head spa a short walk away in the afternoon.
            </p>

            {/* SECTION 5 */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              5. Try Vietnamese Herbal Tea — Starting with Atiso
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              When most travelers think of a break in Hanoi, coffee is the first instinct. But Vietnamese herbal tea is worth discovering on its own terms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Atiso — artichoke tea — stands out. It is a gentle, slightly earthy drink with a natural sweetness, made from dried artichoke flowers and leaves. It is calming, completely caffeine-free, and far more common in Vietnamese daily life than in tourist cafés. Crucially, it does not interfere with sleep — which makes it an ideal choice in the afternoon or evening, particularly for travelers adjusting to a new time zone.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Atiso is harder to find than it should be — most cafés simply do not serve it. At Tropi Q, guests are offered atiso tea as part of the head spa experience, brewed to a traditional recipe. It is a small detail, but one that reflects the same thinking as the treatment itself: Vietnamese ingredients, used simply, for genuine effect.
            </p>

            {/* SECTION 6 */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              6. Take a Slow Evening Walk Through the Old Quarter
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              The Old Quarter of Hanoi has 36 streets, each historically dedicated to a specific trade — silk, paper, tin, bamboo. Many of those trades are still visible today, alongside the small restaurants, cafés, and family shops that have filled in around them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              In the evening, when the temperature drops and the light softens, Hanoi Old Quarter becomes easier to absorb. The streets are still busy, but the pace shifts. Hidden side streets barely wide enough for two people open into quiet courtyards or small restaurants with plastic stools on the pavement.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Take a route without a destination. Turn down alleys that look interesting. Stop when something catches your attention. This is the part of Hanoi that rewards wandering more than any itinerary can plan for.
            </p>

            {/* SECTION 7 */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              7. Watch Sunset From the Lake
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Hoan Kiem Lake in the late afternoon feels different from every other time of day. The light on the water shifts from sharp to golden. Families return for an evening walk, street food appears along the paths, and the Turtle Tower in the middle of the lake catches the last of the light before the sky changes color.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/70">
              Local life returns to the edges of the water in a way that feels entirely natural — unhurried, unperformed, simply there. Find a bench or a low wall near the water. No agenda required. This is a good place to end a day that has moved at a human pace.
            </p>

            {/* ITINERARY */}
            <div className="my-14 rounded-2xl bg-cream/50 p-8">
              <h2 className="font-display text-2xl text-ink">
                Suggested Relaxing Half-Day Itinerary
              </h2>
              <p className="mt-2 text-sm text-ink/60">
                Everything within 15 minutes on foot from Hoan Kiem Lake.
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-sand/40">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-olive text-cream">
                      <th className="px-4 py-3 text-left font-medium">Time</th>
                      <th className="px-4 py-3 text-left font-medium">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itinerary.map((item, i) => (
                      <tr
                        key={item.time}
                        className={i % 2 === 0 ? "bg-white" : "bg-cream/30"}
                      >
                        <td className="px-4 py-3 font-medium text-gold">{item.time}</td>
                        <td className="px-4 py-3 text-ink/75">{item.activity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-ink/40">
                Nothing in this itinerary requires a taxi. Everything is within 15 minutes on foot from Hoan Kiem Lake.
              </p>
            </div>

            {/* FAQ */}
            <h2 className="font-display mt-14 text-2xl text-ink">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-l-2 border-gold pl-5">
                  <h3 className="font-medium text-ink">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="mt-14 rounded-xl bg-cream/40 p-6">
              <p className="text-sm font-medium text-ink">Related reading</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link
                    href="/blog/what-is-a-head-spa"
                    className="text-gold hover:underline underline-offset-4"
                  >
                    What Is a Head Spa? Everything You Need to Know →
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#head-spa"
                    className="text-gold hover:underline underline-offset-4"
                  >
                    Head Spa Services at Tropi Q →
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl bg-cream/50 px-8 py-10 text-center">
              <p className="font-display text-xl text-ink">Plan a relaxing day in Hanoi</p>
              <p className="mt-3 text-sm text-ink/60">
                Combine a morning walk around Hoan Kiem Lake with an authentic Vietnamese herbal head spa a short walk away. A natural way to recharge before continuing your journey through the city.
              </p>
              <p className="mt-2 text-xs text-ink/40">
                📍 7 Tran Phu, Ba Dinh, Hanoi (2-min walk from Phùng Hưng Train Street) · Open daily until 8:30pm
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
