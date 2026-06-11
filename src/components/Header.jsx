"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, site, whatsappLink } from "@/lib/site";

function Logo() {
  if (site.logo) {
    return (
      <Image
        src={site.logo}
        alt="Tropi Q Head Spa"
        width={434}
        height={145}
        priority
        className="h-9 w-auto sm:h-10"
      />
    );
  }
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-display text-2xl font-semibold tracking-wide text-ink">
        tropi<span className="text-gold">Q</span>
      </span>
      <span className="hidden text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft sm:inline">
        Head Spa
      </span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    // Sticky solid bar — the menu is visually separate from the page cover below.
    <header className="sticky top-0 z-50 border-b border-sand/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Tropi Q home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base tracking-wide transition-colors hover:text-gold ${
                  active ? "text-gold" : "text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-olive px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-olive-deep"
          >
            Book now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-sand/60 bg-white px-5 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-base text-ink-soft hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-olive px-5 py-3 text-center text-sm font-medium text-cream"
          >
            Book on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
