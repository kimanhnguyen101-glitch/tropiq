// Central site configuration — single source of truth for brand + contact info.

export const site = {
  name: "Tropi Q",
  tagline: "Headspa & Relaxation",
  // When the founder provides a logo, drop the file in /public/images/ and set
  // this to e.g. "/images/logo.svg". Until then, the text wordmark is used.
  logo: "/images/logo.png", // olive wordmark, transparent — for light backgrounds (header)
  logoLight: "/images/logo-light.png", // cream wordmark — for dark backgrounds (footer)
  motto: "Relax · Refresh · Renew",
  // Positioning line used across the site
  headline: "True Headspa in Vietnam",
  description:
    "Tropi Q is a premium head spa in the heart of Hanoi — a tropical sanctuary of warm light, signature herbal aromas and slow, intentional care. Relax, refresh, renew.",
  url: "https://www.tropiqspa.vn",
  locale: "en",
  address: {
    street: "No. 7 Tran Phu Street",
    district: "Ba Dinh Ward",
    city: "Hanoi",
    country: "Vietnam",
    full: "No. 7 Tran Phu Street, Ba Dinh Ward, Hanoi, Vietnam",
    // Google Maps embed/search query
    mapsQuery: "Tropi Q Head Spa, 7 Tran Phu, Ba Dinh, Hanoi",
  },
  phone: {
    display: "033 389 2329",
    // International format for tel: and WhatsApp links
    intl: "+84333892329",
    whatsapp: "84333892329",
  },
  hours: [
    { days: "Open daily", time: "10:30am – 8:30pm" },
  ],
  reviews: {
    rating: 5.0,
    count: 88,
    source: "Google",
  },
  social: {
    instagram: "https://www.instagram.com/tropiqspa",
    tiktok: "https://www.tiktok.com/@tropiqspa",
    google: "https://www.tropiqspa.vn",
  },
  // ~ exchange rate used only for the "approx" USD hint on prices (not a live rate)
  vndPerUsd: 25500,
};

// Pre-built WhatsApp deep link with a friendly default message
export const whatsappLink = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(
  "Hi Tropi Q! I'd like to book a head spa session."
)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/reviews", label: "Reviews" },
  { href: "/franchise", label: "Franchise" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];
