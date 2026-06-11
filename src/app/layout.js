import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Playfair_Display({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400","500","600","700","800"], style: ["normal","italic"], display: "swap" });
const anek = Jost({ variable: "--font-anek", subsets: ["latin"], weight: ["300","400","500","600"], display: "swap" });

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html className={`${cormorant.variable} ${anek.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-white">
        {children}
      </body>
    </html>
  );
}
