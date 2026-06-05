/**
 * Decorative tropical leaf (monstera) SVG for ambient "tropical vibe".
 * Purely decorative → aria-hidden. Position with className from the parent.
 */
export default function LeafDecor({ className = "", variant = "monstera" }) {
  if (variant === "palm") {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M100 195c-2-40-6-78-30-110C50 60 28 45 10 40c20-2 44 4 64 22 6-26-2-48-16-66 18 10 34 30 40 56 14-22 36-36 62-40-20 14-38 34-46 60 24-14 50-16 76-8-28 2-54 16-72 40-4 32-6 60-8 91z" />
      </svg>
    );
  }
  // monstera leaf with characteristic fenestrations
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M100 12C58 14 24 48 18 92c-4 30 8 64 38 84l6-10c-18-16-26-40-22-64h22c-2 14 2 28 12 40l8-10c-6-10-8-22-6-34h26c-4 16 0 32 10 44l8-12c-6-10-8-22-4-34h24c8 0 16 4 22 12 2-46-32-88-78-94zm-30 56c-6 0-12-5-12-12s6-12 12-12 12 5 12 12-6 12-12 12z" />
      <rect x="96" y="100" width="6" height="92" rx="3" />
    </svg>
  );
}
