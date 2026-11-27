"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
import { useI18n } from "../../i18n/client";
import { fill } from "../../i18n/format";
import { INFO_PATH } from "../../lib/hubs";
import { labelClass } from "../ui";

type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "sent" | "failed";

const EMAIL_PATTERN = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

/** Contact form. Sends to /api/contact/ (trailing slash matches the site setting); if that fails, points the visitor to the email address instead. */
export default function ContactForm({ address }: { address: string }) {
  const { t: all, href } = useI18n();
  const t = all.contact;
  const uid = useId();
  const [values, setValues] = useState({ name: "", email: "", message: "", website: "" });
  const [errors, setErrors] = useState<Field[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");

  const check = () => {
    const bad: Field[] = [];
    if (!values.name.trim()) bad.push("name");
    if (!EMAIL_PATTERN.test(values.email.trim())) bad.push("email");
    if (values.message.trim().length < 10) bad.push("message");
    return bad;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const bad = check();
    setErrors(bad);
    if (bad.length) {
      document.getElementById(`${uid}-${bad[0]}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; fields?: Field[] };
      if (res.ok && data.ok) {
        setSentTo(values.email.trim());
        setValues({ name: "", email: "", message: "", website: "" });
        setStatus("sent");
      } else if (res.status === 400 && data.fields?.length) {
        setErrors(data.fields);
        setStatus("idle");
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    }
  };

  const errorText: Record<Field, string> = { name: t.invalidName, email: t.invalidEmail, message: t.invalidMessage };
  const fieldClass = (field: Field) =>
    `mt-1.5 w-full rounded-xl border bg-surface px-3 py-2.5 text-sm text-ink transition-colors focus:outline-none ${
      errors.includes(field) ? "border-red-400/70" : "border-line focus:border-brand-400"
    }`;
  const fieldProps = (field: Field) => ({
    id: `${uid}-${field}`,
    name: field,
    value: values[field],
    onChange: (e: { target: { value: string } }) => setValues((v) => ({ ...v, [field]: e.target.value })),
    "aria-invalid": errors.includes(field) || undefined,
    "aria-describedby": errors.includes(field) ? `${uid}-${field}-error` : undefined,
    className: fieldClass(field),
  });
  const fieldError = (field: Field) =>
    errors.includes(field) && (
      <p id={`${uid}-${field}-error`} className="mt-1 text-[11px] text-red-600">
        {errorText[field]}
      </p>
    );

  if (status === "sent") {
    return (
      <div role="status" className="flex items-start gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-ink">{fill(t.sent, { email: sentTo })}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-name`} className={labelClass}>
            {t.name}
          </label>
          <input type="text" autoComplete="name" maxLength={100} {...fieldProps("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor={`${uid}-email`} className={labelClass}>
            {t.email}
          </label>
          <input type="email" autoComplete="email" maxLength={200} dir="ltr" {...fieldProps("email")} />
          {fieldError("email")}
        </div>
      </div>
      <div>
        <label htmlFor={`${uid}-message`} className={labelClass}>
          {t.message}
        </label>
        <textarea rows={6} maxLength={5000} {...fieldProps("message")} />
        {fieldError("message")}
      </div>

      {/* Spam trap: hidden from people and screen readers, bots fill it in */}
      <div aria-hidden="true" className="absolute -start-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => setValues((v) => ({ ...v, website: e.target.value }))}
        />
      </div>

      {status === "failed" && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-600">
          {t.failed}{" "}
          <a href={`mailto:${address}`} dir="ltr" className="font-semibold underline">
            {address}
          </a>
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-muted">
          {t.privacyNote}{" "}
          <Link href={href(INFO_PATH.privacy)} className="font-semibold text-brand-700 hover:underline">
            {all.nav.info.privacy}
          </Link>
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-5 py-2.5 text-xs font-bold tracking-wider text-on-brand uppercase shadow-md transition-opacity disabled:opacity-60"
        >
          <Send className="h-3.5 w-3.5 rtl:-scale-x-100" aria-hidden="true" />
          {status === "sending" ? t.sending : t.send}
        </button>
      </div>
    </form>
  );
}
