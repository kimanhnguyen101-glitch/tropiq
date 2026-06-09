// Tropi Q service menu (head spa only for v1). Prices in VND.
// `duration` optional; `prices` is an array aligned with durations when present.

export const menu = [
  {
    id: "head-spa",
    title: "Headspa",
    tagline: "Our signature experience — scalp, neck and shoulders",
    video: "/videos/headspa.mp4",
    items: [
      {
        name: "Signature",
        vi: "Gói đặc biệt",
        price: 695000,
        badge: "Must-try",
        desc: "More than ten signature steps include hairwash and massages.",
      },
      {
        name: "Pure Light Relief",
        vi: "Gói thư giãn",
        price: 490000,
        desc: "30 minutes focused on head, neck and shoulder relaxation. Hair washed twice with sulfate & paraben-free herbal shampoo, finished with an ionic blow-dry.",
      },
      {
        name: "Tropi Herbal",
        vi: "Gói thảo dược",
        price: 450000,
        desc: "15 minutes of head, neck and shoulder relaxation, double wash with herbal shampoo and Tropi Q's exclusive herbal water, finished with an ionic blow-dry.",
      },
    ],
  },
  {
    id: "hair-wash",
    title: "Hair Wash",
    tagline: "A quiet, restorative cleanse",
    video: "/videos/hairwash.mp4",
    items: [
      {
        name: "Fresh",
        vi: "Gội sạch",
        price: 200000,
        desc: "Wash twice with sulfate & paraben-free herbal shampoo, blow-dry with an ionic dryer.",
      },
      {
        name: "Detox",
        vi: "Gội thải độc",
        price: 370000,
        desc: "Scalp exfoliation, double herbal wash and Tropi Q's exclusive herbal water, finished with an ionic blow-dry.",
      },
    ],
    addons: [
      { name: "Steam & scalp exfoliation", price: 200000 },
      { name: "Facial mini (cleanse · mask)", price: 200000 },
      { name: "Hair mask treatment", price: 200000 },
      { name: "Curly hair gel", price: 100000 },
    ],
  },
  {
    id: "body-relax",
    title: "Body Relax",
    tagline: "Premium oil massage to release tension",
    video: "/videos/massage.mp4",
    items: [
      {
        name: "Neck, Shoulder & Nape Relax",
        badge: "Must-try",
        durations: ["60'"],
        prices: [450000],
        desc: "Massage with premium oil, focused on neck, shoulders and nape.",
      },
      {
        name: "Body Relax",
        durations: ["60'", "75'", "90'"],
        prices: [450000, 560000, 675000],
        desc: "Full foot bath and body massage with premium essential oils.",
      },
    ],
    addons: [{ name: "Hot stone", price: 50000 }],
  },
  {
    id: "foot-spa",
    title: "Foot Spa",
    tagline: "From a herbal soak to a full experience",
    video: "/videos/footspa.mp4",
    items: [
      {
        name: "Foot Spa Signature",
        durations: ["70'"],
        prices: [890000],
        desc: "Herbal foot soak, callus remover, exfoliation with steamer, 20-minute foot massage, rice bran mask, lotion, cuticle trim and nail cleansing.",
      },
      {
        name: "Foot Relax",
        durations: ["30'", "45'"],
        prices: [320000, 460000],
        desc: "Foot bath and massage with premium oil, focused on the feet.",
      },
      {
        name: "Combo 1",
        price: 550000,
        wasPrice: 570000,
        desc: "Foot Relax 30' + callus remover.",
      },
      {
        name: "Combo 2",
        badge: "Must-try",
        price: 750000,
        wasPrice: 770000,
        desc: "Foot Relax 30' + callus remover + gel polish + free foot gel-polish removal.",
      },
    ],
    addons: [
      { name: "Foot exfoliation + lotion (with steamer)", price: 200000 },
      { name: "Callus remover (Himalayan salt soak) + heel moisturizer", price: 250000 },
    ],
  },
  {
    id: "facial",
    title: "Facial Treatment",
    tagline: "Premium skincare for face, neck and chest",
    video: "/videos/facial.mp4",
    items: [
      {
        name: "Relax Facial Care",
        price: 500000,
        desc: "Premium skincare using brands such as La Roche-Posay and Vichy, with a relaxing massage for face, neck and chest.",
      },
      {
        name: "Deep Hydration Facial",
        price: 680000,
        desc: "An 11-step facial combining water-infusion and skin-rejuvenating essence electroporation, finished with a premium anti-aging mask.",
      },
    ],
  },
  {
    id: "combo",
    title: "Signature Combos",
    tagline: "Curated journeys for a full reset",
    video: "/videos/combo.mp4",
    items: [
      {
        name: "Tropi 1",
        price: 600000,
        desc: "Body Relax 60' + hair wash. About 60 minutes.",
      },
      {
        name: "Tropi 2 — Top to Toes",
        price: 770000,
        badge: "Must-try",
        desc: "Headspa Light + Foot Relax. About 90 minutes.",
      },
      {
        name: "Tropi 3",
        price: 850000,
        badge: "New",
        desc: "Relax Facial + Detox hair wash. About 90 minutes.",
      },
    ],
  },
];

// Format VND like "695,000₫"
export function formatVnd(n) {
  return n.toLocaleString("en-US") + "₫";
}
