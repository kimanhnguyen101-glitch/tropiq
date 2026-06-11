import { Container, Section, SectionTitle, PageHero, Button } from "@/components/ui";
import VideoEmbed from "@/components/VideoEmbed";
import { menu, formatVnd } from "@/lib/menu";
import { whatsappLink } from "@/lib/site";
import LeafDecor from "@/components/LeafDecor";

// June 2026 best sellers — pulled from menu data
const find = (groupId, name) =>
  menu.find((g) => g.id === groupId)?.items.find((i) => i.name === name);

const bestSellers = [
  { ...find("head-spa", "Signature"), title: "Signature Headspa", badge: "Must-try", href: "/services#head-spa" },
  { ...find("combo", "Tropi 2 — Top to Toes"), title: "Top to Toes", badge: "Must-try", href: "/services#combo" },
  { ...find("facial", "Relax Facial Care"), title: "Facial Care", badge: "Must-try", href: "/services#facial" },
];

// Poster image per service group for the illustrative video slot (swap for real
// footage by setting `video`/`embedUrl` on the group in lib/menu.js).
const groupPoster = {
  "head-spa": "/images/store/store-01.jpg",
  "hair-wash": "/images/store/store-06.jpg",
  "body-relax": "/images/store/store-08.jpg",
  "foot-spa": "/images/store/store-04.jpg",
  facial: "/images/store/store-03.jpg",
  combo: "/images/store/store-10.jpg",
};

export const metadata = {
  title: "Services & Menu",
  description:
    "Tropi Q's full head spa menu — signature head spa, hair wash, body relax, foot spa, facials and curated combos. Prices in VND.",
  alternates: { canonical: "/services" },
};

function PriceLine({ item }) {
  if (item.durations) {
    // Each duration gets its own line: "490,000₫ (60')"
    return (
      <div className="text-right space-y-1">
        {item.durations.map((d, i) => (
          <p key={d} className="whitespace-nowrap text-base font-semibold text-gold">
            {formatVnd(item.prices[i])}{" "}
            <span className="text-sm font-normal text-ink-soft">({d})</span>
          </p>
        ))}
      </div>
    );
  }
  return (
    <div className="text-right">
      {item.wasPrice && (
        <p className="text-sm text-ink-soft line-through">{formatVnd(item.wasPrice)}</p>
      )}
      <p className="text-lg font-semibold text-gold">{formatVnd(item.price)}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/cover-services.png"
        aspectRatio="1448/792"
        imageClassName="object-cover"
      />

      {/* ------------------------------------------ June 2026 best sellers */}
      <Section className="relative overflow-hidden bg-neutral-50">
        <LeafDecor variant="palm" className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 text-olive/10" />
        <Container className="relative">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-ink-soft">Find your perfect match</p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              June 2026 <span className="text-gold italic">Best Sellers</span>
            </h2>
            <span className="mt-3 inline-block rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cream">
              ★ Best Seller
            </span>
            <div className="rule mx-auto mt-5" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {bestSellers.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl border border-sand bg-white p-8 transition-shadow hover:shadow-lg"
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
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-4xl">
          {/* Quick jump nav */}
          <nav className="mb-14 flex flex-wrap justify-center gap-3">
            {menu.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-full border border-sand px-4 py-2 text-sm text-ink-soft transition-colors hover:border-gold hover:text-gold"
              >
                {group.title}
              </a>
            ))}
          </nav>

          <div className="space-y-20">
            {menu.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <div className="text-center">
                  <h2 className="font-display text-3xl text-ink sm:text-4xl">{group.title}</h2>
                  <p className="mt-2 text-sm italic text-ink-soft">{group.tagline}</p>
                  <div className="rule mx-auto mt-5" />
                </div>

                <div className="mx-auto mt-8 max-w-2xl">
                  <VideoEmbed
                    src={group.video}
                    embedUrl={group.embedUrl}
                    poster={groupPoster[group.id]}
                    alt={`${group.title} at Tropi Q`}
                    autoPlay
                    contained
                  />
                </div>

                <ul className="mt-10 divide-y divide-sand/70">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-6 py-6">
                      <div>
                        <h3 className="flex flex-wrap items-center gap-2 font-medium text-ink">
                          <span className="text-lg">{item.name}</span>
                          {item.badge && (
                            <span className="rounded-full bg-gold px-3 py-0.5 text-xs font-semibold tracking-wide text-cream">
                              {item.badge}
                            </span>
                          )}
                        </h3>
                        {item.desc && (
                          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                            {item.desc}
                          </p>
                        )}
                      </div>
                      <PriceLine item={item} />
                    </li>
                  ))}
                </ul>

                {group.addons && (
                  <div className="mt-6 rounded-2xl bg-neutral-100 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Add-ons</p>
                    <ul className="mt-3 space-y-2">
                      {group.addons.map((a) => (
                        <li
                          key={a.name}
                          className="flex items-center justify-between gap-4 text-sm text-ink-soft"
                        >
                          <span>{a.name}</span>
                          <span className="whitespace-nowrap font-medium text-ink">
                            {formatVnd(a.price)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-neutral-50 py-20 text-center">
        <Container>
          <div className="mx-auto max-w-xl rounded-3xl bg-white px-10 py-12 shadow-sm">
            <h2 className="font-display text-3xl text-ink sm:text-4xl">Not sure where to start?</h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">
              Message us and we&apos;ll recommend the perfect session for your time in Hanoi.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={whatsappLink} variant="gold">
                Ask on WhatsApp
              </Button>
              <Button href="/services/headspa" variant="outline">
                Our signature head spa
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
