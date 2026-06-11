import Image from "next/image";

/**
 * Decorative monstera illustration — watermark/ghost style.
 * White background disappears via mix-blend-mode: multiply.
 * Apply opacity + sizing via className (e.g. "opacity-10 h-64 w-64").
 * variant prop kept for API compat but both variants use the same image.
 */
export default function LeafDecor({ className = "", variant = "monstera" }) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ mixBlendMode: "multiply" }}
    >
      <Image
        src="/images/leaf-element.jpg"
        alt=""
        fill
        sizes="320px"
        className="object-contain"
      />
    </div>
  );
}
