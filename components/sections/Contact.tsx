"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, MapPin, MessagesSquare, ArrowUpRight, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { SiLine } from "react-icons/si";
import { useLanguage } from "@/lib/language-context";
import { contact, profile, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Contact() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(lang === "ja" ? `お問い合わせ: ${form.name}` : `Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${lang === "ja" ? "お名前" : "Name"}: ${form.name}\n` +
        `${lang === "ja" ? "メール" : "Email"}: ${form.email}\n\n` +
        `${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const channels: { icon: LucideIcon | IconType; label: string; value: string; href: string; mail?: boolean }[] = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, mail: true },
    { icon: MessagesSquare, label: "Chatwork", value: lang === "ja" ? "チャットで相談する" : "Chat on Chatwork", href: profile.chatwork },
    { icon: SiLine, label: "LINE", value: lang === "ja" ? "LINEで相談する" : "Chat on LINE", href: profile.line },
  ];

  const underline =
    "w-full border-0 border-b border-[var(--color-border)] bg-transparent px-0 py-2.5 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)]/50 transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-0";
  const boxed =
    "w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-base)]/40 px-4 py-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)]/50 transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/15";
  const fieldLabel = "mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]";

  return (
    <section id="contact" className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-28 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading label={nav.contact[lang]} heading={contact.heading[lang]} lead={contact.lead[lang]} />

        <Reveal delay={0.05}>
          <div className="ring-gradient card-soft mt-14 overflow-hidden rounded-[1.75rem] glass-strong">
            <div className="grid lg:grid-cols-5">
              {/* Left: contact channels */}
              <div className="relative border-b border-[var(--color-border)] p-8 sm:p-10 lg:col-span-2 lg:border-b-0 lg:border-r">
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--color-accent)/10,transparent_55%)]" />

                <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide text-[var(--color-muted)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {lang === "ja" ? "新規案件 受付中 ・ 1営業日以内に返信" : "Available · replies within 1 business day"}
                </div>

                <h3 className="mt-5 whitespace-pre-line font-display text-xl font-semibold leading-snug text-[var(--color-fg)]">
                  {lang === "ja" ? "ご希望の方法で、\nお気軽にどうぞ。" : "Reach out however suits you."}
                </h3>

                <div className="mt-7 border-t border-[var(--color-border)]">
                  {channels.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.mail ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-b border-[var(--color-border)] py-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-[var(--color-border)] text-[var(--color-accent-2)] transition-colors group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-fg)]">
                        <c.icon className="h-[18px] w-[18px]" />
                      </span>
                      <div className="min-w-0">
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">{c.label}</div>
                        <div className="truncate text-sm font-medium text-[var(--color-fg)]">{c.value}</div>
                      </div>
                      <ArrowUpRight className="ml-auto h-4 w-4 -translate-x-1 text-[var(--color-muted)] opacity-0 transition-all group-hover:translate-x-0 group-hover:text-[var(--color-accent-2)] group-hover:opacity-100" />
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-[var(--color-muted)]">
                  <MapPin className="h-3.5 w-3.5" />
                  {lang === "ja" ? "拠点" : "Location"}：{profile.location[lang]}
                </div>
              </div>

              {/* Right: form */}
              <div className="p-8 sm:p-10 lg:col-span-3">
                <form onSubmit={onSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className={fieldLabel}>{contact.form.name[lang]}</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder={contact.form.namePlaceholder[lang]}
                        className={underline}
                      />
                    </div>
                    <div>
                      <label className={fieldLabel}>{contact.form.email[lang]}</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder={contact.form.emailPlaceholder[lang]}
                        className={underline}
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className={fieldLabel}>{contact.form.message[lang]}</label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={contact.form.messagePlaceholder[lang]}
                      className={boxed}
                    />
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <button
                      type="submit"
                      className="btn-sheen group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-accent)]/20 transition-transform hover:scale-[1.02]"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      {contact.form.submit[lang]}
                    </button>
                    <p className="text-xs text-[var(--color-muted)]">
                      {contact.form.or[lang]}:{" "}
                      <a href={`mailto:${profile.email}`} className="text-[var(--color-accent-2)] hover:underline">
                        {profile.email}
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
