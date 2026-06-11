import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import HolidayNotice from "@/components/HolidayNotice";

const GTM_ID = "GTM-W8JN8NL3";
const GA_ID = "G-MJVZ8WEXEY";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isVi = locale === "vi";
  return {
    metadataBase: new URL(site.url),
    title: {
      default: isVi ? `${site.name} — Head Spa Thực Thụ tại Việt Nam` : `${site.name} — True Head Spa in Vietnam`,
      template: `%s · ${site.name} Head Spa`,
    },
    description: isVi
      ? "Tropi Q là điểm đến head spa cao cấp giữa lòng Hà Nội — không gian nhiệt đới với hương thơm đặc trưng và sự chăm sóc tinh tế. Thư giãn, tươi mới, phục hồi."
      : "Tropi Q is a premium head spa in the heart of Hanoi — a tropical sanctuary of warm light, signature herbal aromas and slow, intentional care. Relax, refresh, renew.",
    keywords: isVi
      ? ["head spa hà nội", "head spa việt nam", "spa đầu hà nội", "thư giãn hà nội", "Tropi Q"]
      : ["head spa Hanoi", "head spa Vietnam", "scalp treatment Hanoi", "spa near old quarter Hanoi", "relaxation Hanoi", "Tropi Q"],
    alternates: { canonical: isVi ? "/vi" : "/" },
    openGraph: {
      type: "website",
      locale: isVi ? "vi_VN" : "en_US",
      url: isVi ? `${site.url}/vi` : site.url,
      siteName: site.name,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Tropi Q — True Head Spa in Vietnam, Hanoi" }],
    },
    robots: { index: true, follow: true },
    verification: { google: "fBagCxQs7ES3ebLf6T7yVPo4DR5Z4ewTI3zqKdfNWHs" },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: `${site.name} Head Spa`,
    description: "Tropi Q is a premium head spa in the heart of Hanoi.",
    url: site.url,
    telephone: site.phone.intl,
    priceRange: "$$",
    image: `${site.url}/images/store/store-01.jpg`,
    address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.district, addressCountry: "VN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.reviews.rating, reviewCount: site.reviews.count },
    openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "10:30", closes: "20:30" },
  };

  return (
    <NextIntlClientProvider messages={messages}>
      <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Script id="gtm-init" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
      <Script id="tiktok-pixel" strategy="afterInteractive">{`!function(w,d,t){w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};ttq.load('DAEPPBBC77U5DGQ6BVQG');ttq.page();}(window,document,'ttq');`}</Script>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
      <HolidayNotice />
    </NextIntlClientProvider>
  );
}
