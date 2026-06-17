"use client";

import { useLanguage } from "@/lib/language-context";
import { processSteps, processSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Process() {
  const { lang } = useLanguage();

  return (
    <section id="flow" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface-2)]/40 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading label={nav.flow[lang]} heading={processSection.heading[lang]} lead={processSection.lead[lang]} />

        <div className="relative mt-14">
          {/* Connector line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-[var(--color-accent-2)] sm:left-1/2" />

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.no} delay={i * 0.05}>
                <div className={`relative flex items-start gap-5 pl-0 sm:w-1/2 ${i % 2 === 0 ? "sm:ml-auto sm:flex-row sm:pl-10" : "sm:mr-auto sm:flex-row-reverse sm:pr-10 sm:text-right"}`}>
                  {/* Number node */}
                  <div
                    className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-lg font-black text-white shadow-lg shadow-[var(--color-accent)]/25 ${
                      i % 2 === 0 ? "sm:-ml-[55px]" : "sm:-mr-[55px]"
                    }`}
                  >
                    {step.no}
                  </div>

                  <div className="card-soft flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                    <h3 className="font-bold text-[var(--color-fg)]">{step.title[lang]}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{step.description[lang]}</p>
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
