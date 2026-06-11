// Tropi Q service menu. Prices in VND.
// `durations` + `prices` are parallel arrays when a service has multiple lengths.

export const menu = [
  {
    id: "head-spa",
    title: "Head Spa",
    video: "/videos/headspa.mp4",
    items: [
      {
        id: "fresh-head-spa",
        name: "Fresh Head Spa",
        desc: "Cleanses the hair and scalp, leaving you feeling fresh, clean and refreshed.",
        price: 180000,
        tagline: "Clean & Refresh",
      },
      {
        id: "detox-head-spa",
        name: "Detox Head Spa",
        desc: "A steam and scalp detox ritual that deeply cleanses, removes excess oil and leaves the scalp feeling fresh and refreshed.",
        price: 290000,
        tagline: "Deep Cleanse & Detox",
      },
      {
        id: "head-spa-light",
        name: "Head Spa Light 60'",
        desc: "A 60-minute Head Spa featuring a 20-minute head massage, combined with hair and scalp care to help release tension and restore your energy.",
        price: 390000,
        tagline: "Relax & Recharge",
        badge: "Most Chosen",
      },
      {
        id: "local-head-spa",
        name: "Local Head Spa",
        desc: "A relaxing head massage combined with Vietnamese herbal water, offering a soothing care ritual inspired by the local Vietnamese experience.",
        price: 590000,
        tagline: "Herbal Relaxation Ritual",
      },
      {
        id: "signature-head-spa",
        name: "Signature Head Spa",
        desc: "Our exclusive 15-step ritual combines intensive hair and scalp care with deep relaxation — the ultimate Head Spa experience at Tropi Q.",
        price: 695000,
        tagline: "Exclusive 15-Step Ritual",
        badge: "Most Chosen",
      },
    ],
  },
  {
    id: "foot-spa",
    title: "Foot Spa",
    video: "/videos/footspa.mp4",
    items: [
      {
        id: "foot-spa-signature",
        name: "Foot Spa Signature",
        desc: "Tropi foot soak, callus remover, exfoliation combined with steamer therapy, 20-minute foot massage, rice bran mask, lotion, cuticle trimming and nail cleansing – no polish",
        durations: ["70'"],
        prices: [890000],
      },
      {
        id: "foot-relax",
        name: "Foot Relax",
        desc: "Foot bath, massage with premium massage oil focusing on foot",
        durations: ["30'", "45'"],
        prices: [320000, 460000],
      },
      {
        id: "combo-1",
        name: "Combo 1",
        desc: "Foot relax 30m + callus remover",
        badge: "Most Chosen",
        price: 550000,
        wasPrice: 570000,
      },
      {
        id: "combo-2",
        name: "Combo 2",
        desc: "Foot relax 30p + callus remover + gel polish foot nail + FREE foot gel polish removal",
        price: 750000,
        wasPrice: 770000,
      },
    ],
    addons: [
      { id: "foot-exfoliation-lotion", name: "Foot Exfoliation + Lotion (combined with steamer)", price: 200000 },
      { id: "callus-remover-heel-moisturizer", name: "Callus Remover (Tropi foot soak with pink Himalayan salt) + Heel Moisturizer", price: 250000 },
    ],
  },
  {
    id: "facial",
    title: "Facial Treatment",
    video: "/videos/facial.mp4",
    items: [
      {
        id: "relax-facial-care",
        name: "Relax Facial Care",
        desc: "Premium skincare treatments using products from brands like La Roche-Posay and Vichy, focusing on massage for the face, neck, and chest",
        price: 500000,
      },
      {
        id: "deep-hydration-facial",
        name: "Deep Hydration Facial",
        desc: "An 11-step facial spa combined with a water-infusion essence electroporation and intensive deep-hydration mask",
        price: 680000,
      },
    ],
  },
  {
    id: "combo",
    title: "Combo",
    items: [
{
        id: "tropi-2-top-to-toes",
        name: "Tropi 2 : Top to Toes",
        desc: "Headspa LIGHT + Foot relax : 90 mins",
        price: 770000,
        badge: "Most Chosen",
      },
      {
        id: "tropi-3",
        name: "Tropi 3",
        desc: "Facial Relax + Hair wash \"DETOX\"",
        price: 850000,
        badge: "New",
      },
    ],
  },
];

// Format VND like "695,000₫"
export function formatVnd(n) {
  return n.toLocaleString("en-US") + "₫";
}
