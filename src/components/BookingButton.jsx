"use client";
import { whatsappLink } from "@/lib/site";

export default function BookingButton({ children, service = "", className = "" }) {
  const href = service
    ? `https://wa.me/84333892329?text=${encodeURIComponent(`Hi Tropi Q! I'd like to book: ${service}`)}`
    : whatsappLink;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
