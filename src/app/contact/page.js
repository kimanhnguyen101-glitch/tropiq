import { Container, Section, Eyebrow, Button, PageHero } from "@/components/ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact & Location",
  description:
    "Visit Tropi Q head spa at No. 7 Tran Phu Street, Ba Dinh, Hanoi — moments from the Old Quarter. Open daily 9:00–21:00. Book on WhatsApp.",
  alternates: { canonical: "/contact" },
};

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  site.address.mapsQuery
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Find us"
        title="Visit Tropi Q"
        image="/images/store/store-07.jpg"
        intro="In the heart of Hanoi, just steps from the Old Quarter. We can't wait to welcome you."
      />

      <Section className="bg-cream">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Details */}
            <div>
              <Eyebrow>Address</Eyebrow>
              <p className="mt-3 text-lg leading-relaxed text-ink">
                {site.address.street}
                <br />
                {site.address.district}, {site.address.city}
                <br />
                {site.address.country}
              </p>

              <div className="mt-8">
                <Eyebrow>Opening hours</Eyebrow>
                {site.hours.map((h) => (
                  <p key={h.days} className="mt-3 text-lg text-ink">
                    {h.days}
                    <span className="block text-base text-ink-soft">{h.time}</span>
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <Eyebrow>Get in touch</Eyebrow>
                <p className="mt-3 text-lg text-ink">
                  <a href={`tel:${site.phone.intl}`} className="hover:text-gold">
                    {site.phone.display}
                  </a>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={whatsappLink} variant="primary">
                  Book on WhatsApp
                </Button>
                <Button href={`tel:${site.phone.intl}`} variant="outline">
                  Call us
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-[2rem] border border-sand">
              <iframe
                title="Tropi Q location on Google Maps"
                src={mapEmbed}
                className="h-full min-h-80 w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
