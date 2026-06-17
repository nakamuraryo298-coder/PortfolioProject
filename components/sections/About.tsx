"use client";

import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { about, nav, hero } from "@/lib/content";
import Reveal from "../Reveal";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-2)]">
                {nav.about[lang]}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                {about.lead[lang]}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {about.paragraphs[lang].map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-base leading-relaxed text-[var(--color-muted)]">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.highlights[lang].map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent-2)]" />
                    <span className="text-sm text-[var(--color-fg)]">{h}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Decorative card stack */}
          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] opacity-20 blur-2xl" />
              <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
                <div className="flex items-center gap-4">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-2xl font-black text-white">
                    高
                  </div>
                  <div>
                    <div className="font-bold text-[var(--color-fg)]">高橋 貴樹</div>
                    <div className="text-sm text-[var(--color-muted)]">Takaki Takahashi</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  {hero.stats.slice(0, 2).map((s) => (
                    <div key={s.label.en} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] p-4">
                      <div className="text-2xl font-black text-gradient">{s.value}</div>
                      <div className="mt-1 text-xs text-[var(--color-muted)]">{s.label[lang]}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-base)] p-4">
                  <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    {hero.badges.available[lang]}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
