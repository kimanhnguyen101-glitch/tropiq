import { getTranslations, getLocale, setRequestLocale } from "next-intl/server";
import { Container, Section, PageHero, Button } from "@/components/ui";
import VideoEmbed from "@/components/VideoEmbed";
import { menu, formatVnd } from "@/lib/menu";
import { whatsappLink } from "@/lib/site";
import LeafDecor from "@/components/LeafDecor";
import BookingButton from "@/components/BookingButton";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
    alternates: { canonical: locale === "vi" ? "/vi/services" : "/services" },
  };
}

const findItem = (groupId, itemId) => {
  const group = menu.find((g) => g.id === groupId);
  return { group, item: group?.items.find((i) => i.id === itemId) };
};

const bestSellerRefs = [
  { groupId: "head-spa", itemId: "head-spa-light", href: "#head-spa" },
  { groupId: "combo", itemId: "tropi-2-top-to-toes", href: "#combo" },
  { groupId: "facial", itemId: "relax-facial-care", href: "#facial" },
];

const groupPoster = {
  "head-spa": "/images/store/store-01.jpg",
  "foot-spa": "/images/store/store-04.jpg",
  facial: "/images/store/store-05.jpg",
  combo: "/images/store/store-01.jpg",
};

function PriceLine({ item }) {
  if (item.durations) {
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
      {item.wasPrice && <p className="text-sm text-ink-soft line-through">{formatVnd(item.wasPrice)}</p>}
      <p className="text-lg font-semibold text-gold">{formatVnd(item.price)}</p>
    </div>
  );
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const tc = await getTranslations({ locale, namespace: "common" });
  const prefix = locale === "vi" ? "/vi" : "";

  const bestSellers = bestSellerRefs.map(({ groupId, itemId, href }) => {
    const { item } = findItem(groupId, itemId);
    return { ...item, groupId, href };
  });

  return (
    <>
      <h1 className="sr-only">Tropi Q Head Spa — Full Menu & Services in Hanoi</h1>
      <PageHero image="/images/cover-services.png" aspectRatio="1908/824" imageClassName="object-cover" />

      <Section className="relative overflow-hidden bg-neutral-50">
        <LeafDecor variant="palm" className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 text-olive/10" />
        <Container className="relative">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-ink-soft">{t("bestSellersEyebrow")}</p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              {t("bestSellersTitle")} <span className="text-gold italic">{t("bestSellersTitleEm")}</span>
            </h2>
            <span className="mt-3 inline-block rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cream">
              {t("bestSellersBadge")}
            </span>
            <div className="rule mx-auto mt-5" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {bestSellers.map((item) => (
              <div key={item.id} className="flex flex-col rounded-3xl border border-sand bg-white p-8 transition-shadow hover:shadow-lg">
                {item.badge && (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-gold/15 px-3 py-1 text-xs font-medium tracking-wide text-gold">
                    {item.badge === "Best Seller" ? "Must Try" : item.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl text-ink">{item.name}</h3>
                {item.desc && <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.desc}</p>}
                <Button href={item.href} variant="outline" className="mt-6 self-start">{t("bookThis")}</Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="max-w-4xl">
          <nav className="mb-14 flex flex-wrap justify-center gap-3">
            {menu.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="rounded-full border border-sand px-4 py-2 text-sm text-ink-soft transition-colors hover:border-gold hover:text-gold">
                {group.title}
              </a>
            ))}
          </nav>
          <div className="space-y-20">
            {menu.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-28">
                <div className="text-center">
                  <h2 className="font-display text-3xl text-ink sm:text-4xl">{group.title}</h2>
                  <div className="rule mx-auto mt-5" />
                </div>
                {(group.video || group.embedUrl) && (
                  <div className="mx-auto mt-8 max-w-2xl">
                    <VideoEmbed src={group.video} embedUrl={group.embedUrl} poster={groupPoster[group.id]} alt={`Tropi Q ${group.title} service video`} autoPlay contained />
                  </div>
                )}
                <ul className="mt-10 divide-y divide-sand/70">
                  {group.items.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-6 py-6">
                      <div>
                        <h3 className="flex flex-wrap items-center gap-2 font-medium text-ink">
                          <span className="text-lg">{item.name}</span>
                          {item.badge && (
                            <span className="rounded-full bg-gold px-3 py-0.5 text-xs font-semibold tracking-wide text-cream">{item.badge}</span>
                          )}
                        </h3>
                        {item.tagline && <p className="mt-0.5 text-xs font-medium uppercase tracking-widest text-gold/80">{item.tagline}</p>}
                        {item.desc && <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">{item.desc}</p>}
                      </div>
                      <PriceLine item={item} />
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <BookingButton service={group.title} className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-cream transition hover:opacity-90">
                    {tc("bookASession")}
                  </BookingButton>
                </div>
                {group.addons && (
                  <div className="mt-6 rounded-2xl bg-neutral-100 p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-gold">Add-ons</p>
                    <ul className="mt-3 space-y-2">
                      {group.addons.map((a) => (
                        <li key={a.id} className="flex items-center justify-between gap-4 text-sm text-ink-soft">
                          <span>{a.name}</span>
                          <span className="whitespace-nowrap font-medium text-ink">{formatVnd(a.price)}</span>
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
            <h2 className="font-display text-3xl text-ink sm:text-4xl">{t("ctaTitle")}</h2>
            <p className="mt-5 text-base text-ink-soft">{t("ctaDesc")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={whatsappLink} variant="primary">{t("ctaWhatsapp")}</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
