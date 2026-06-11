import { bookingScriptUrl } from "@/lib/site";

export async function POST(request) {
  try {
    const body = await request.json();

    // Honeypot: bots fill hidden fields, humans don't
    if (body._hp) {
      return Response.json({ ok: true });
    }

    const { _hp, ...safeBody } = body;
    // Fire-and-forget — don't block the response waiting for Apps Script
    fetch(bookingScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(safeBody),
    }).catch(() => {});

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
