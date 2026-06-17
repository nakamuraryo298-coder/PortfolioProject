"use client";

import { Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { experiences, experienceSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading label={nav.experience[lang]} heading={experienceSection.heading[lang]} lead={experienceSection.lead[lang]} />

        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={`relative flex flex-col gap-3 pl-12 sm:w-1/2 sm:pl-0 ${i % 2 === 0 ? "sm:ml-auto sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
                  {/* Node */}
                  <span
                    className={`absolute left-[9px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-base)] sm:left-auto ${
                      i % 2 === 0 ? "sm:-left-[8px]" : "sm:-right-[8px]"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  </span>

                  <div className="card-glow card-soft rounded-2xl border border-[var(--color-border)] bg-[var(--color-base)] p-6 text-left">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-2)]">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.period[lang]}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-[var(--color-fg)]">{exp.role[lang]}</h3>
                    <p className="text-sm font-medium text-[var(--color-accent)]">{exp.company[lang]}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{exp.description[lang]}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t} className="rounded-md bg-[var(--color-surface)] px-2 py-0.5 text-xs text-[var(--color-muted)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
