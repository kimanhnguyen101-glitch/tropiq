"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

/**
 * Flexible video block.
 * - Pass `src` for a self-hosted mp4/mov → renders <video>.
 * - Pass `embedUrl` for YouTube/Vimeo → renders responsive <iframe>.
 * - Pass neither → shows an on-brand placeholder (poster + play icon).
 *
 * autoPlay=true: muted, looping, plays when scrolled into view via IntersectionObserver.
 * The container has NO fixed aspect ratio so the video is shown at its natural
 * dimensions — portrait clips stay portrait, landscape clips stay landscape.
 *
 * autoPlay=false (default): standard <video controls> in a 16:9 container.
 */
export default function VideoEmbed({
  src,
  embedUrl,
  poster = "/images/store/store-01.jpg",
  alt = "Tropi Q headspa experience",
  caption,
  rounded = true,
  autoPlay = false,
  contained = false, // force 16:9 landscape frame even in autoPlay mode (object-contain)
}) {
  const radius = rounded ? "rounded-[2rem]" : "";
  const videoRef = useRef(null);

  // All video files (including .mov from iPhone) use video/mp4 type.
  // H.264-encoded MOV containers play correctly with this type in all
  // major browsers; "video/quicktime" is not supported by Chrome/Firefox.
  const videoType = "video/mp4";

  // Play/pause the video based on viewport visibility.
  useEffect(() => {
    if (!autoPlay || !videoRef.current) return;
    const el = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlay]);

  let inner;

  if (embedUrl) {
    inner = (
      <iframe
        src={embedUrl}
        title={alt}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ border: 0 }}
      />
    );
  } else if (src) {
    if (autoPlay) {
      // contained=true → 16:9 frame, video object-contain (no crop, letterbox if needed)
      // contained=false → natural dimensions (portrait stays portrait)
      inner = (
        <video
          ref={videoRef}
          className={contained ? "absolute inset-0 h-full w-full object-contain" : "block h-auto w-full"}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={src} type={videoType} />
        </video>
      );
    } else {
      inner = (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type={videoType} />
        </video>
      );
    }
  } else {
    // Placeholder — keeps a 16:9 frame until real footage is added.
    inner = (
      <>
        <Image
          src={poster}
          alt={alt}
          fill
          sizes="(min-width:1024px) 64rem, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink/35">
          <div className="flex flex-col items-center text-cream">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-olive-deep">
              <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <p className="mt-4 text-sm tracking-wide text-cream/90">Real footage coming soon</p>
          </div>
        </div>
      </>
    );
  }

  // contained or non-autoPlay → fixed 16:9 container
  // autoPlay without contained → natural dimensions (portrait stays portrait)
  const wrapperClass =
    autoPlay && src && !contained
      ? `overflow-hidden ${radius}`
      : `relative aspect-video overflow-hidden ${radius}`;

  return (
    <figure>
      <div className={wrapperClass}>{inner}</div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-ink-soft">{caption}</figcaption>
      )}
    </figure>
  );
}
