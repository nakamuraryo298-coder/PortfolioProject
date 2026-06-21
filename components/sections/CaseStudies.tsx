"use client";

import { Target, Lightbulb, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { caseStudies, caseStudiesSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { techIcon } from "@/lib/tech-icons";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const L = caseStudiesSection.labels;

  return (
    <section id="cases" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.cases[lang]} heading={caseStudiesSection.heading[lang]} lead={caseStudiesSection.lead[lang]} />

        <div className="mt-14 space-y-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title.en} delay={(i % 2) * 0.05}>
              <article className="ring-gradient card-soft overflow-hidden rounded-3xl glass-strong">
                <div className="grid gap-0 lg:grid-cols-5">
                  {/* Left: narrative */}
                  <div className="lg:col-span-3 lg:border-r lg:border-white/10 p-7 sm:p-9">
                    <span className="inline-block rounded-full bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--color-accent-2)]">
                      {cs.tag[lang]}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-[var(--color-fg)]">{cs.title[lang]}</h3>

                    <div className="mt-6 space-y-5">
                      <div className="flex gap-3">
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--color-accent-3)]/15 text-[var(--color-accent-3)]">
                          <Target className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent-3)]">{L.challenge[lang]}</div>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{cs.challenge[lang]}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                          <Lightbulb className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent)]">{L.solution[lang]}</div>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{cs.solution[lang]}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {cs.stack.map((tech) => {
                        const { Icon, color } = techIcon(tech);
                        return (
                          <span key={tech} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white/5 px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]">
                            <Icon className="h-3.5 w-3.5" style={{ color }} />
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: results */}
                  <div className="lg:col-span-2 bg-white/[0.02] p-7 sm:p-9">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--color-accent-2)]">
                      <TrendingUp className="h-4 w-4" />
                      {L.result[lang]}
                    </div>
                    <div className="mt-5 space-y-5">
                      {cs.results.map((r) => (
                        <div key={r.label.en}>
                          <div className="font-display text-3xl font-bold text-gradient">{r.value}</div>
                          <div className="text-sm text-[var(--color-muted)]">{r.label[lang]}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-[var(--color-muted)]">{caseStudiesSection.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
