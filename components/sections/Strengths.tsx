"use client";

import { Workflow, Award, MessagesSquare, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { strengths, strengthsSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Award,
  MessagesSquare,
};

export default function Strengths() {
  const { lang } = useLanguage();

  return (
    <section id="strengths" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.strengths[lang]} heading={strengthsSection.heading[lang]} lead={strengthsSection.lead[lang]} />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {strengths.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Workflow;
            return (
              <Reveal key={item.no} delay={i * 0.08}>
                <div className="card-glow card-soft relative h-full overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-base)] p-8">
                  <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-black text-[var(--color-surface-2)] select-none">
                    {item.no}
                  </span>
                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-white shadow-lg shadow-[var(--color-accent)]/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-[var(--color-fg)]">{item.title[lang]}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.description[lang]}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
