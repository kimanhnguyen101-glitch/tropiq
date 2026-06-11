"use client";

import Image from "next/image";

// 20 review screenshots + 8 customer photos
const reviewImages = Array.from({ length: 20 }, (_, i) => ({
  src: `/images/reviews/review-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Guest review ${i + 1}`,
}));

const customerPhotos = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/customers/customer-${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Tropi Q staff with guest ${i + 1}`,
}));

export default function ReviewSlider() {
  // Duplicate list for seamless infinite loop
  const slides = [...reviewImages, ...reviewImages];

  return (
    <div className="space-y-14">
      {/* ── Auto-scrolling review screenshots ── */}
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {slides.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 overflow-hidden rounded-2xl border border-sand bg-white shadow-sm"
              style={{ width: 420, height: 260 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="420px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Customer + staff photos grid ── */}
      <div>
        <p className="mb-6 text-center text-xs uppercase tracking-[0.25em] text-gold">
          Moments with our guests
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {customerPhotos.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
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
