import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    title: locale === "vi" ? "Đã nhận yêu cầu — Tropi Q Head Spa" : "Booking Received — Tropi Q Head Spa Hanoi",
    robots: { index: false },
  };
}

function Section({ className, children }) {
  return <section className={`py-20 ${className}`}>{children}</section>;
}

export default async function ThankYouPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "thankyou" });
  const prefix = locale === "vi" ? "/vi" : "";

  return (
    <Section className="min-h-[70vh] bg-white flex items-center">
      <Container>
        <div className="mx-auto max-w-md rounded-3xl bg-white px-10 py-14 text-center shadow-sm border border-sand">
          <span className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-olive/10 text-olive">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
          </span>
          <h1 className="font-display mt-6 text-3xl text-ink">{t("title")}</h1>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{t("body")}</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium text-cream transition hover:opacity-90">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-cream"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.338-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.728.886.936-3.621-.234-.372A9.818 9.818 0 112.18 12 9.82 9.82 0 0112 21.818z"/></svg>
            {t("cta")}
          </a>
          <a href={`${prefix}/`} className="mt-4 block text-sm text-ink-soft underline underline-offset-4 hover:text-ink">{t("back")}</a>
        </div>
      </Container>
    </Section>
  );
}
