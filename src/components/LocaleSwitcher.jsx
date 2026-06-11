"use client";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const basePath = pathname.startsWith("/vi") ? pathname.slice(3) || "/" : pathname;
  const enHref = basePath;
  const viHref = `/vi${basePath === "/" ? "" : basePath}`;

  return (
    <div className="flex items-center gap-1 text-xs font-medium">
      <Link href={enHref} className={`px-1.5 py-0.5 rounded transition-colors ${locale === "en" ? "text-gold font-semibold" : "text-ink-soft hover:text-ink"}`}>EN</Link>
      <span className="text-ink/20">|</span>
      <Link href={viHref} className={`px-1.5 py-0.5 rounded transition-colors ${locale === "vi" ? "text-gold font-semibold" : "text-ink-soft hover:text-ink"}`}>VI</Link>
    </div>
  );
}
