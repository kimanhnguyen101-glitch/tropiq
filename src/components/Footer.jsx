import Link from "next/link";
import Image from "next/image";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          {site.logoLight ? (
            <Image src={site.logoLight} alt="Tropi Q Head Spa" width={434} height={145} className="h-11 w-auto" />
          ) : (
            <span className="font-display text-2xl font-semibold tracking-wide text-cream">
              tropi<span className="text-gold-soft">Q</span>
            </span>
          )}
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            True headspa in Vietnam. A tropical retreat in the heart of Hanoi.
          </p>
          <p className="mt-4 text-sm italic text-gold-soft">{site.motto}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold-soft">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold-soft">Visit us</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <p>{site.address.street}</p>
            <p>
              {site.address.district}, {site.address.city}
            </p>
            <p>
              <a href={`tel:${site.phone.intl}`} className="hover:text-cream">
                {site.phone.display}
              </a>
            </p>
            {site.hours.map((h) => (
              <p key={h.days}>
                {h.days}: {h.time}
              </p>
            ))}
          </address>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-cream/30 px-5 py-2 text-sm transition-colors hover:bg-cream hover:text-olive-deep"
          >
            Book on WhatsApp
          </a>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.989950663423!2d105.8433!3d21.0301516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab35ea0b1f05%3A0xdc7e04bb22e91767!2sTropi%20Q%20-%20True%20Headspa%20in%20Vietnam!5e1!3m2!1sen!2s!4v1781098033502!5m2!1sen!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tropi Q location on Google Maps"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Tropi Q Head Spa. All rights reserved.</p>
          <p>Made with care in Hanoi.</p>
        </div>
      </div>
    </footer>
  );
}
