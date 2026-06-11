"use client";

import { useRef } from "react";
import Image from "next/image";

const reviewImages = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/reviews/review-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Guest review ${i + 1}`,
}));

const customerPhotos = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/customers/customer-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Tropi Q staff with guest ${i + 1}`,
}));

const CARD_W = 560;
const GAP = 16;

export default function ReviewSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * (CARD_W + GAP), behavior: "smooth" });
  };

  return (
    <div className="space-y-14">
      {/* ── Review screenshots with prev/next buttons ── */}
      <div className="relative">
        {/* Prev */}
        <button
          onClick={() => scroll(-1)}
          aria-label="Previous reviews"
          className="absolute -left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-white shadow-md transition hover:bg-neutral-50"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink stroke-2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Scroll strip */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4" style={{ width: "max-content" }}>
            {reviewImages.map((img, i) => (
              <div
                key={i}
                className="shrink-0 overflow-hidden rounded-2xl border border-sand bg-white shadow-sm"
                style={{ width: CARD_W, height: 350, scrollSnapAlign: "start" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={CARD_W}
                  height={350}
                  quality={90}
                  sizes="560px"
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={() => scroll(1)}
          aria-label="Next reviews"
          className="absolute -right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-white shadow-md transition hover:bg-neutral-50"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink stroke-2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Customer + staff photos grid ── */}
      <div>
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-gold">
          Moments with our guests
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {customerPhotos.map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
