"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "fr", label: "Le Français" },
];

const STORAGE_KEY = "tropiq-locale-chosen";

export default function LanguagePrompt() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  const select = (code) => {
    window.localStorage.setItem(STORAGE_KEY, code);
    setOpen(false);
    if (code !== locale) router.replace(pathname, { locale: code });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
        <p className="font-display text-xl text-ink">Choose your language</p>
        <p className="mt-1 text-sm text-ink-soft">Chọn ngôn ngữ · Choisissez votre langue</p>
        <div className="mt-6 flex flex-col gap-3">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => select(l.code)}
              className="rounded-full border border-sand px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
