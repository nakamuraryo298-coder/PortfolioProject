"use client";

import { Check, Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { pricingPlans, pricingSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Pricing() {
  const { lang } = useLanguage();

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.pricing[lang]} heading={pricingSection.heading[lang]} lead={pricingSection.lead[lang]} />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.name.en} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 ${
                  plan.highlighted
                    ? "glass-strong ring-2 ring-[var(--color-accent)] shadow-2xl shadow-[var(--color-accent)]/20 lg:-translate-y-3"
                    : "ring-gradient glass-strong"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-3 py-1 text-xs font-semibold text-white">
                    <Star className="h-3 w-3" />
                    {lang === "ja" ? "人気" : "Popular"}
                  </span>
                )}

                <h3 className="font-display text-lg font-bold text-[var(--color-fg)]">{plan.name[lang]}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-display text-3xl font-bold text-gradient">{plan.price[lang]}</span>
                  <span className="pb-1 text-sm text-[var(--color-muted)]">{plan.unit[lang]}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{plan.description[lang]}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features[lang].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-fg)]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn-sheen mt-7 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] text-white shadow-lg shadow-[var(--color-accent)]/30"
                      : "glass text-[var(--color-fg)] hover:text-white"
                  }`}
                >
                  {plan.cta[lang]}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-[var(--color-muted)]">{pricingSection.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
