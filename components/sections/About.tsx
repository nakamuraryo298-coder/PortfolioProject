"use client";

import Image from "next/image";
import { CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { about, nav, hero, profile } from "@/lib/content";
import { techIcon } from "@/lib/tech-icons";
import Reveal from "../Reveal";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-14">
          {/* Left: narrative */}
          <div className="lg:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-2)]">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--color-accent-2)]" />
                {nav.about[lang]}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{about.lead[lang]}</h2>
            </Reveal>
            <div className="mt-6 space-y-4">
              {about.paragraphs[lang].map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="leading-relaxed text-[var(--color-muted)]">{p}</p>
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

          {/* Right: profile card */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[var(--color-accent)]/30 to-[var(--color-accent-2)]/20 opacity-50 blur-2xl" />
              <div className="ring-gradient card-soft overflow-hidden rounded-3xl glass-strong">
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt={profile.name[lang]}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  {/* subtle gradient for legibility of the badge */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-base)]/40 via-transparent to-transparent" />
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {lang === "ja" ? "稼働可能" : "Available"}
                  </span>
                </div>

                <div className="p-6">
                  <div className="font-display text-lg font-bold text-[var(--color-fg)]">{profile.name[lang]}</div>
                  <div className="text-sm text-[var(--color-muted)]">{profile.title[lang]}</div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-[var(--color-muted)]">
                    <MapPin className="h-3 w-3" /> {profile.location[lang]}
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {hero.stats.slice(0, 2).map((s) => (
                      <div key={s.label.en} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="font-display text-xl font-bold text-gradient">{s.value}</div>
                        <div className="text-xs text-[var(--color-muted)]">{s.label[lang]}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  <div className="mt-5">
                    <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--color-accent-2)]">
                      <Sparkles className="h-3 w-3" />
                      {about.toolsLabel[lang]}
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {about.tools.map((t) => {
                        const { Icon, color } = techIcon(t);
                        return (
                          <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-[var(--color-muted)]">
                            <Icon className="h-3.5 w-3.5" style={{ color }} />
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-display text-2xl font-bold text-[var(--color-fg)]">{about.valuesLabel[lang]}</h3>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values[lang].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="ring-gradient card-soft h-full rounded-2xl glass-strong p-6">
                  <div className="font-display text-3xl font-bold text-[var(--color-accent)]/30">0{i + 1}</div>
                  <h4 className="mt-2 font-bold text-[var(--color-fg)]">{v.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
