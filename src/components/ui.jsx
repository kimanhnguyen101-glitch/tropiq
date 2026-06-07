import Link from "next/link";
import Image from "next/image";

// Reusable primitives shared across pages.

export function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({ className = "", children, id }) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className = "" }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionTitle({ eyebrow, title, intro, center = true, className = "" }) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-3 text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <div className={`rule mt-5 ${center ? "mx-auto" : ""}`} />
      {intro && <p className="mt-5 text-base leading-relaxed text-ink-soft">{intro}</p>}
    </div>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300";

export function Button({ href, children, variant = "primary", className = "", ...props }) {
  const styles = {
    primary: "bg-olive text-cream hover:bg-olive-deep",
    gold: "bg-gold text-cream hover:bg-gold-soft",
    outline: "border border-olive/40 text-olive hover:bg-olive hover:text-cream",
    light: "bg-cream text-olive-deep hover:bg-white",
  }[variant];

  const cls = `${buttonBase} ${styles} ${className}`;

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    if (external) {
      return (
        <a href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

// Inner-page cover: a real Tropi Q photo as the hero background (per feedback —
// every sub-page should have an image cover, not a flat color + text).
// `image` defaults to a store photo; swap per page or when new photos arrive.
export function PageHero({ eyebrow, title, intro, image = "/images/store/store-03.jpg", aspectRatio }) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={aspectRatio ? { aspectRatio } : { minHeight: "52vh" }}
    >
      <Image
        src={image}
        alt={typeof title === "string" ? title : "Tropi Q"}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/40 to-ink/30" />
      <Container className="relative z-10 pb-12 sm:pb-16">
        <div className="max-w-2xl text-cream">
          {eyebrow && <Eyebrow className="text-gold-soft">{eyebrow}</Eyebrow>}
          <h1 className="font-display mt-3 text-4xl leading-tight drop-shadow sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="rule mt-6 bg-gold-soft" />
          {intro && (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90">{intro}</p>
          )}
        </div>
      </Container>
    </section>
  );
}

// Simple star rating display
export function Stars({ rating = 5, className = "" }) {
  return (
    <span className={`inline-flex text-gold ${className}`} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </span>
  );
}
