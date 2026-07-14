"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { testimonials, testimonialsSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const fadeMask =
  "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)";

export default function Testimonials() {
  const { lang } = useLanguage();
  // duplicate the list so the marquee can loop seamlessly (translateX -50%)
  const track = [...testimonials, ...testimonials];

  return (
    <section id="voice" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.voice[lang]} heading={testimonialsSection.heading[lang]} lead={testimonialsSection.lead[lang]} />
      </div>

      <Reveal delay={0.05}>
        <div
          className="group relative mt-14 flex overflow-hidden"
          style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
        >
          <ul className="flex w-max animate-[marquee_75s_linear_infinite] gap-6 pr-6 group-hover:[animation-play-state:paused]">
            {track.map((t, i) => (
              <li key={i} className="w-[300px] shrink-0 sm:w-[360px]">
                <figure className="ring-gradient card-soft flex h-full flex-col rounded-2xl glass-strong p-7">
                  <Quote className="h-8 w-8 text-[var(--color-accent)]/60" />
                  <div className="mt-3 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--color-fg)]">
                    {t.quote[lang]}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] font-display font-bold text-white">
                      {t.author.charAt(0)}
                    </span>
                    <div>
                      <div className="font-semibold text-[var(--color-fg)]">{t.author}</div>
                      <div className="text-xs text-[var(--color-muted)]">{t.role[lang]}</div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs text-[var(--color-muted)]">{testimonialsSection.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
