import Link from "next/link";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { nav, site, whatsappLink } from "@/lib/site";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tc = await getTranslations("nav");
  const locale = await getLocale();
  const prefix = locale === "vi" ? "/vi" : "";

  return (
    <footer className="bg-ink text-cream/90">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          {site.logoLight ? <Image src={site.logoLight} alt="Tropi Q Head Spa" width={434} height={145} className="h-11 w-auto" /> : <span className="font-display text-2xl font-semibold tracking-wide text-cream">tropi<span className="text-gold-soft">Q</span></span>}
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">{t("tagline")}</p>
          <p className="mt-4 text-sm italic text-gold-soft">{site.motto}</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold-soft">{t("explore")}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}><Link href={`${prefix}${item.href}`} className="text-cream/80 transition-colors hover:text-cream">{tc(item.key)}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.25em] text-gold-soft">{t("visitUs")}</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-cream/80">
            <p>{site.address.street}</p>
            <p>{site.address.district}, {site.address.city}</p>
            <p><a href={`tel:${site.phone.intl}`} className="hover:text-cream">{site.phone.display}</a></p>
            {site.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}
          </address>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full bg-olive px-5 py-2 text-sm text-cream transition-colors hover:bg-olive-deep">{t("bookOnWhatsApp")}</a>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.989950663423!2d105.8433!3d21.0301516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab35ea0b1f05%3A0xdc7e04bb22e91767!2sTropi%20Q%20-%20True%20Headspa%20in%20Vietnam!5e1!3m2!1sen!2s!4v1781098033502!5m2!1sen!2s" width="100%" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Tropi Q location on Google Maps" />
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
          <div className="mb-4 grid gap-1 text-xs text-cream/40 sm:grid-cols-2">
            <p>{site.legal.businessName} · MST: {site.legal.taxId}</p>
            <p>{site.address.full}</p>
            <p>
              <a href={`tel:${site.phone.intl}`} className="hover:text-cream/70">{site.phone.display}</a>
              {" · "}
              <a href={`mailto:${site.legal.email}`} className="hover:text-cream/70">{site.legal.email}</a>
            </p>
            <p>
              <Link href={`${prefix}/policies`} className="underline underline-offset-2 hover:text-cream/70">{locale === "vi" ? "Chính sách & Điều khoản" : "Policies & Terms"}</Link>
            </p>
          </div>
        </div>
        <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-xs text-cream/50">&copy; {new Date().getFullYear()} Tropi Q. {t("rights")}</p>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 48 32" className="h-6 w-auto rounded" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="32" rx="4" fill="#1A1F71"/><text x="7" y="22" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="#FFFFFF">VISA</text></svg>
            <svg viewBox="0 0 48 32" className="h-6 w-auto rounded" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="32" rx="4" fill="#252525"/><circle cx="18" cy="16" r="9" fill="#EB001B"/><circle cx="30" cy="16" r="9" fill="#F79E1B"/><path d="M24 9.3a9 9 0 010 13.4A9 9 0 0124 9.3z" fill="#FF5F00"/></svg>
            <svg viewBox="0 0 48 32" className="h-6 w-auto rounded" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="32" rx="4" fill="#fff"/><rect x="6" y="6" width="11" height="20" rx="3" fill="#003087"/><rect x="18" y="6" width="11" height="20" rx="3" fill="#CC0000"/><rect x="30" y="6" width="11" height="20" rx="3" fill="#007B40"/><text x="8" y="20" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="#fff">J</text><text x="20" y="20" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="#fff">C</text><text x="32" y="20" fontFamily="Arial" fontWeight="bold" fontSize="8" fill="#fff">B</text></svg>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
