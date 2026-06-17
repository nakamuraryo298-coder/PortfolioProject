"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { contact, profile, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Contact() {
  const { lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === "ja" ? `お問い合わせ: ${form.name}` : `Inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `${lang === "ja" ? "お名前" : "Name"}: ${form.name}\n` +
        `${lang === "ja" ? "メール" : "Email"}: ${form.email}\n\n` +
        `${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const socials = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: profile.twitter, label: "Twitter / X" },
  ];

  const inputClass =
    "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-fg)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20";

  return (
    <section id="contact" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.contact[lang]} heading={contact.heading[lang]} lead={contact.lead[lang]} />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="card-soft flex h-full flex-col justify-between gap-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-base)] p-8">
              <div className="space-y-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--color-muted)]">Email</div>
                    <div className="font-semibold text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]">
                      {profile.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-accent-2)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--color-muted)]">
                      {lang === "ja" ? "拠点" : "Location"}
                    </div>
                    <div className="font-semibold text-[var(--color-fg)]">{profile.location[lang]}</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-3 text-xs uppercase tracking-wider text-[var(--color-muted)]">
                  {lang === "ja" ? "ソーシャル" : "Social"}
                </div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                    >
                      <s.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={onSubmit} className="card-soft rounded-2xl border border-[var(--color-border)] bg-[var(--color-base)] p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]">
                    {contact.form.name[lang]}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={contact.form.namePlaceholder[lang]}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]">
                    {contact.form.email[lang]}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={contact.form.emailPlaceholder[lang]}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-medium text-[var(--color-fg)]">
                  {contact.form.message[lang]}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={contact.form.messagePlaceholder[lang]}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-transform hover:scale-[1.01] sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {contact.form.submit[lang]}
              </button>
              <p className="mt-4 text-xs text-[var(--color-muted)]">
                {contact.form.or[lang]}:{" "}
                <a href={`mailto:${profile.email}`} className="text-[var(--color-accent)] hover:underline">
                  {profile.email}
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
