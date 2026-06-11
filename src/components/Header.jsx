"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { nav, site, whatsappLink } from "@/lib/site";
import LocaleSwitcher from "@/components/LocaleSwitcher";

function Logo() {
  if (site.logo) return <Image src={site.logo} alt="Tropi Q Head Spa" width={434} height={145} priority className="h-6 w-auto sm:h-10" />;
  return <span className="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">tropi<span className="text-gold">Q</span></span>;
}

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const tc = useTranslations("common");

  const prefix = locale === "vi" ? "/vi" : "";
  const localizedHref = (href) => href === "/" ? `${prefix}/` : `${prefix}${href}`;
  const desktopNav = [{ href: "/", key: "home" }, ...nav];

  const isActive = (href) => {
    const full = localizedHref(href);
    return full === "/" || full === "/vi/" ? pathname === full || pathname === full.slice(0, -1) : pathname.startsWith(full);
  };

  const linkClass = (href) => `shrink-0 whitespace-nowrap px-2 py-1 tracking-wide transition-colors hover:text-gold ${isActive(href) ? "text-gold" : "text-ink-soft"}`;

  return (
    <header className="sticky top-0 z-50 border-b border-sand/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4 sm:h-18 sm:gap-6 sm:px-8">
        <Link href={localizedHref("/")} aria-label="Tropi Q home" className="shrink-0"><Logo /></Link>
        <div className="relative flex-1 overflow-hidden sm:hidden">
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white/95 to-transparent" />
          <nav className="flex items-center gap-1 overflow-x-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {nav.map((item) => <Link key={item.href} href={localizedHref(item.href)} className={`${linkClass(item.href)} text-sm`}>{t(item.key)}</Link>)}
          </nav>
        </div>
        <div className="hidden flex-1 sm:block" />
        <nav className="hidden items-center gap-6 sm:flex">
          {desktopNav.map((item) => <Link key={item.href} href={localizedHref(item.href)} className={`${linkClass(item.href)} text-lg`}>{t(item.key)}</Link>)}
        </nav>
        <LocaleSwitcher />
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-gold px-3 py-2 text-xs font-medium text-cream transition-colors hover:bg-gold-soft sm:px-7 sm:py-3 sm:text-base">
          {tc("bookNow")}
        </a>
      </div>
    </header>
  );
}
