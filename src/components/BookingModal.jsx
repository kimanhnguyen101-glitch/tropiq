"use client";
import { useState, useEffect, useCallback } from "react";
import { menu, formatVnd } from "@/lib/menu";

const EMPTY = { name: "", phone: "", phoneType: "WhatsApp", email: "", guests: "1", services: [], date: "", time: "", notes: "", _hp: "" };
const PHONE_TYPES = ["WhatsApp", "Zalo", "Phone"];

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const handler = (e) => { setOpen(true); setStatus("idle"); const preService = e.detail?.service ?? ""; setForm({ ...EMPTY, services: preService ? [preService] : [] }); };
    window.addEventListener("open-booking", handler);
    return () => window.removeEventListener("open-booking", handler);
  }, []);

  const close = useCallback(() => { setOpen(false); setTimeout(() => setStatus("idle"), 300); }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, close]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const toggleService = (label) => setForm((f) => ({ ...f, services: f.services.includes(label) ? f.services.filter((s) => s !== label) : [...f.services, label] }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.services.length === 0) return;
    setStatus("loading");
    try {
      await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, services: form.services.join(", "), submittedAt: new Date().toISOString() }) });
      const isVi = window.location.pathname.startsWith("/vi");
      window.location.href = isVi ? "/vi/thank-you" : "/thank-you";
    } catch { setStatus("error"); }
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm" onClick={close}>
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl" style={{ maxHeight: "90dvh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
        <button onClick={close} aria-label="Close" className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-ink-soft transition hover:bg-neutral-100">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
        {status === "success" ? (
          <div className="flex flex-col items-center px-8 py-14 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-olive/10 text-olive">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <h2 className="font-display mt-5 text-2xl text-ink">We got your request!</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">Our team will confirm your booking via WhatsApp or phone within a few hours.</p>
            <button onClick={close} className="mt-8 rounded-full bg-gold px-8 py-3 text-sm font-medium text-cream transition hover:opacity-90">Done</button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-8 py-8">
            <h2 className="font-display text-2xl text-ink">Book your session</h2>
            <a href="https://wa.me/84989327997" target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 transition hover:bg-green-100">
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-green-600"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L0 24l6.338-1.506A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.213-3.728.886.936-3.621-.234-.372A9.818 9.818 0 112.18 12 9.82 9.82 0 0112 21.818z"/></svg>
              For the fastest booking, message us on WhatsApp: 098 932 7997
            </a>
            <div className="mt-5 space-y-5">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Your name" required><input type="text" required placeholder="e.g. Sarah" value={form.name} onChange={set("name")} className="field-input" /></Field>
                <Field label="Guests" required><input type="number" required min="1" max="20" value={form.guests} onChange={set("guests")} className="field-input" /></Field>
              </div>
              <div>
                <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft">Phone number <span className="text-gold">*</span></span>
                <div className="flex gap-2 mb-2">
                  {PHONE_TYPES.map((t) => (
                    <button key={t} type="button" onClick={() => setForm((f) => ({ ...f, phoneType: t }))}
                      className={`flex-1 rounded-full border py-1.5 text-xs font-medium transition ${form.phoneType === t ? "border-gold bg-gold text-cream" : "border-sand text-ink-soft hover:border-gold hover:text-gold"}`}>
                      {t}
                    </button>
                  ))}
                </div>
                <input type="tel" required placeholder={form.phoneType === "WhatsApp" ? "+84 98 932 7997" : form.phoneType === "Zalo" ? "0989 327 997" : "0989 327 997"} value={form.phone} onChange={set("phone")} className="field-input" />
              </div>
              <Field label="Email (backup contact)"><input type="email" placeholder="your@email.com" value={form.email} onChange={set("email")} className="field-input" /><span className="mt-1 block text-xs text-ink-soft">We&apos;ll use this only if we can&apos;t reach you by phone.</span></Field>
              <div>
                <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-soft">Services <span className="text-gold">*</span></span>
                <div className="max-h-52 overflow-y-auto rounded-2xl border border-sand" style={{ scrollbarWidth: "thin" }}>
                  {menu.map((group) => (
                    <div key={group.id}>
                      <p className="sticky top-0 bg-neutral-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink-soft">{group.title}</p>
                      {group.items.map((item) => {
                        const price = item.prices ? item.prices[0] : item.price;
                        const label = `${group.title} — ${item.name}`;
                        const checked = form.services.includes(label);
                        return (
                          <label key={item.id} onClick={() => toggleService(label)} className={`flex cursor-pointer items-center justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-neutral-50 ${checked ? "bg-gold/5" : ""}`}>
                            <span className="flex items-center gap-2.5">
                              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${checked ? "border-gold bg-gold" : "border-sand"}`}>
                                {checked && <svg viewBox="0 0 10 8" className="h-2.5 w-2.5 fill-cream"><path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                              </span>
                              <span className="text-sm text-ink">{item.name}</span>
                            </span>
                            <span className="shrink-0 text-xs font-medium text-gold">{formatVnd(price)}{item.prices ? "+" : ""}</span>
                          </label>
                        );
                      })}
                    </div>
                  ))}
                </div>
                {form.services.length === 0 && <p className="mt-1.5 text-xs text-ink-soft">Please select at least one service.</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Preferred date" required><input type="date" required min={new Date().toISOString().split("T")[0]} value={form.date} onChange={set("date")} className="field-input" /></Field>
                <Field label="Preferred time" required><input type="time" required value={form.time} onChange={set("time")} className="field-input" /></Field>
              </div>
              <Field label="Notes (optional)"><textarea rows={2} placeholder="Any special requests or questions..." value={form.notes} onChange={set("notes")} className="field-input resize-none" /></Field>
            </div>
            {status === "error" && <p className="mt-4 text-sm text-red-500">Something went wrong. Please try again or message us on WhatsApp.</p>}
            <input type="text" name="_hp" value={form._hp} onChange={set("_hp")} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
            <button type="submit" disabled={status === "loading" || form.services.length === 0} className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-medium text-cream transition hover:opacity-90 disabled:opacity-50">
              {status === "loading" ? "Sending..." : "Request booking"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-soft">{label}{required && <span className="ml-0.5 text-gold">*</span>}</span>
      {children}
    </label>
  );
}