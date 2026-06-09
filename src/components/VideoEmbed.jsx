import Image from "next/image";

/**
 * Flexible video block.
 * - Pass `src` for a self-hosted mp4 → renders <video> with poster.
 * - Pass `embedUrl` for YouTube/Vimeo → renders responsive <iframe>.
 * - Pass neither → shows an on-brand placeholder (poster + play button)
 *   so the layout is ready before real footage arrives.
 *
 * Swap-in later: just provide `src` or `embedUrl`.
 */
export default function VideoEmbed({
  src,
  embedUrl,
  poster = "/images/store/store-01.jpg",
  alt = "Tropi Q head spa experience",
  caption,
  rounded = true,
  autoPlay = false,
}) {
  const radius = rounded ? "rounded-[2rem]" : "";
  // Detect video type from extension
  const videoType = src?.toLowerCase().endsWith(".mov") ? "video/quicktime" : "video/mp4";

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
    inner = autoPlay ? (
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={src} type={videoType} />
      </video>
    ) : (
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
  } else {
    // Placeholder
    inner = (
      <>
        <Image src={poster} alt={alt} fill sizes="(min-width:1024px) 64rem, 100vw" className="object-cover" />
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

  return (
    <figure>
      <div className={`relative aspect-video overflow-hidden ${radius}`}>{inner}</div>
      {caption && <figcaption className="mt-3 text-center text-xs text-ink-soft">{caption}</figcaption>}
    </figure>
  );
}
