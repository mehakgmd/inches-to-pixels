import { SITE_NAME } from "../../lib/site";

/**
 * Contact form endpoint. Checks the message and emails it to FORM_RECIPIENT through Resend (https://resend.com).
 * Replying to that email in your inbox replies straight to the visitor (their address is set as Reply-To).
 *
 * Settings (environment variables on the server, never in the code):
 *   RESEND_API_KEY      API key from Resend. Without it the form answers "not configured".
 *   CONTACT_FROM_EMAIL  Sender. Default: Resend's test sender, which can deliver to the email address the
 *                       Resend account was created with. After verifying inchestopixel.com in Resend, set this
 *                       to e.g. "Inches to Pixel <noreply@inchestopixel.com>" to send to any address.
 *   CONTACT_TO_EMAIL    Overrides where messages go. Default: FORM_RECIPIENT below.
 */

/** Inbox that receives contact form messages. Server-only: never sent to the browser. */
const FORM_RECIPIENT = "alltoolsmetrics@gmail.com";

const LIMITS = { name: 100, email: 200, message: 5000, body: 20_000 };
const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

type Field = "name" | "email" | "message";

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length") ?? 0) > LIMITS.body) {
    return Response.json({ error: "too_large" }, { status: 413 });
  }

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  // Hidden "website" field: people never see it, bots fill it in. Pretend success so bots learn nothing.
  if (clean(data.website, 200)) return Response.json({ ok: true });

  const name = clean(data.name, LIMITS.name).replace(/[\r\n]+/g, " ");
  const email = clean(data.email, LIMITS.email);
  const message = clean(data.message, LIMITS.message);

  const invalid: Field[] = [];
  if (!name) invalid.push("name");
  if (!EMAIL_PATTERN.test(email)) invalid.push("email");
  if (message.length < 10) invalid.push("message");
  if (invalid.length) return Response.json({ error: "invalid", fields: invalid }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ error: "not_configured" }, { status: 503 });

  const to = process.env.CONTACT_TO_EMAIL || FORM_RECIPIENT;
  const from = process.env.CONTACT_FROM_EMAIL || `${SITE_NAME} <onboarding@resend.dev>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Contact form: ${name}`,
        // Plain text only, so nothing in the message can be rendered as HTML.
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: email service returned", res.status);
      return Response.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Contact form: could not reach the email service", err);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
