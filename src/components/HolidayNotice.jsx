"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HolidayNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const expiry = new Date("2026-09-03T00:00:00+07:00");
    if (new Date() >= expiry) return;
    setOpen(true);
  }, []);

  const close = () => setOpen(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-ink/60 transition hover:text-ink"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <a
          href="https://wa.me/84333892329"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <Image
            src="/images/holiday-notice.png"
            alt="Tropi Q Holiday Notice — Closed 02.09.2026, back 03.09.2026"
            width={960}
            height={960}
            className="w-full rounded-3xl shadow-2xl"
            priority
          />
        </a>
      </div>
    </div>
  );
}
