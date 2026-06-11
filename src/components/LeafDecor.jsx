/**
 * Decorative tropical leaf SVGs. Purely decorative → aria-hidden.
 * variant="monstera" (default) → lá trầu bà (heartleaf philodendron)
 * variant="palm"              → lá cây cọ (fan palm frond)
 */
export default function LeafDecor({ className = "", variant = "monstera" }) {
  if (variant === "palm") {
    // Fan palm: five fronds radiating from a central stem
    return (
      <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="currentColor">
        {/* Stem */}
        <path d="M97 198 L97 128 L103 128 L103 198 Z" />
        {/* Centre frond — straight up */}
        <path d="M96 128 C94 92 92 52 96 6 C104 52 106 92 104 128 Z" />
        {/* Left frond */}
        <path d="M94 126 C74 102 46 68 14 44 C36 58 68 92 92 123 Z" />
        {/* Far-left frond */}
        <path d="M91 122 C66 93 32 56 2 34 C26 48 60 82 89 119 Z" />
        {/* Right frond */}
        <path d="M106 126 C126 102 154 68 186 44 C164 58 132 92 108 123 Z" />
        {/* Far-right frond */}
        <path d="M109 122 C134 93 168 56 198 34 C174 48 140 82 111 119 Z" />
      </svg>
    );
  }

  // Default: heartleaf philodendron (lá trầu bà)
  // Characteristic large rounded leaf with heart-notch at the base
  return (
    <svg viewBox="0 0 200 205" className={className} aria-hidden="true" fill="currentColor">
      {/* Leaf body */}
      <path d="
        M 100 8
        C 140 8, 185 46, 185 92
        C 185 142, 158 180, 122 193
        C 112 197, 104 188, 100 183
        C 96 188, 88 197, 78 193
        C 42 180, 15 142, 15 92
        C 15 46, 60 8, 100 8 Z
      " />
      {/* Short stem */}
      <rect x="97" y="193" width="6" height="14" rx="3" />
    </svg>
  );
}
