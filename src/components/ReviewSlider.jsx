"use client";
import { useRef } from "react";
import Image from "next/image";

const reviewImages = Array.from({ length: 20 }, (_, i) => ({ src: `/images/reviews/review-${String(i + 1).padStart(2, "0")}.jpg`, alt: `5-star guest review of Tropi Q head spa Hanoi — review ${i + 1}` }));
const GAP = 16;

export default function ReviewSlider() {
  const scrollRef = useRef(null);
  const firstCardRef = useRef(null);
  const scroll = (dir) => { const cardW = firstCardRef.current?.offsetWidth ?? 560; scrollRef.current?.scrollBy({ left: dir * (cardW + GAP), behavior: "smooth" }); };
  return (
    <div className="relative">
      <button onClick={() => scroll(-1)} aria-label="Previous reviews" className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-white shadow-md transition hover:bg-neutral-50 sm:-left-5 sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <div ref={scrollRef} className="overflow-x-auto scroll-smooth" style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="flex gap-4" style={{ width: "max-content" }}>
          {reviewImages.map((img, i) => (
            <div key={i} ref={i === 0 ? firstCardRef : undefined} className="shrink-0 overflow-hidden rounded-2xl border border-sand bg-white shadow-sm" style={{ width: "min(560px, 85vw)", scrollSnapAlign: "start" }}>
              <Image src={img.src} alt={img.alt} width={560} height={350} quality={90} sizes="(max-width: 640px) 85vw, 560px" className="h-auto w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => scroll(1)} aria-label="Next reviews" className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-sand bg-white shadow-md transition hover:bg-neutral-50 sm:-right-5 sm:h-11 sm:w-11">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink stroke-2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>
    </div>
  );
}