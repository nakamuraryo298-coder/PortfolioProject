"use client";

import { CheckCircle2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { projects, featuredCaseStudies, caseStudiesSection, projectCategories, nav } from "@/lib/content";
import { getProjectDetail } from "@/lib/project-details";
import { techIcon } from "@/lib/tech-icons";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function CaseStudies() {
  const { lang } = useLanguage();
  const L = caseStudiesSection.labels;
  const catLabel = (k: string) => projectCategories.find((c) => c.key === k)?.[lang] ?? k;

  const cases = featuredCaseStudies
    .map((url) => projects.find((p) => p.url === url))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section id="cases" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.cases[lang]} heading={caseStudiesSection.heading[lang]} lead={caseStudiesSection.lead[lang]} />

        <div className="mt-14 space-y-8">
          {cases.map((cs, i) => {
            const detail = getProjectDetail(cs);
            const scope = detail.scope[lang].slice(0, 4);
            return (
              <Reveal key={cs.url} delay={(i % 2) * 0.05}>
                <article className="ring-gradient card-soft overflow-hidden rounded-3xl glass-strong">
                  <div className="grid lg:grid-cols-2">
                    {/* Screenshot */}
                    <div className={`relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-full ${i % 2 ? "lg:order-2" : ""}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/projects/${cs.image}`}
                        alt={cs.title[lang]}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                      <div
                        className={`pointer-events-none absolute inset-0 hidden lg:block ${
                          i % 2
                            ? "bg-gradient-to-l from-transparent via-transparent to-[var(--color-surface)]/60"
                            : "bg-gradient-to-r from-transparent via-transparent to-[var(--color-surface)]/60"
                        }`}
                      />
                    </div>

                    {/* Narrative */}
                    <div className="flex flex-col p-7 sm:p-9">
                      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                        {cs.categories.map((k, idx) => (
                          <span key={k} className="inline-flex items-center gap-1.5">
                            {idx > 0 && <span className="text-[var(--color-muted)]">·</span>}
                            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent-2)]">{catLabel(k)}</span>
                          </span>
                        ))}
                      </div>

                      <h3 className="mt-2 font-display text-2xl font-bold text-[var(--color-fg)]">{cs.title[lang]}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{cs.description[lang]}</p>

                      <div className="mt-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent-2)]">{L.scope[lang]}</div>
                        <ul className="mt-2.5 grid gap-1.5">
                          {scope.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-fg)]">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {detail.tech.map((tech) => {
                          const { Icon, color } = techIcon(tech);
                          return (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white/5 px-2.5 py-1 font-mono text-xs text-[var(--color-muted)]"
                            >
                              <Icon className="h-3.5 w-3.5" style={{ color }} />
                              {tech}
                            </span>
                          );
                        })}
                      </div>

                      <a
                        href={cs.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl glass px-5 py-2.5 font-semibold text-[var(--color-fg)] transition-colors hover:text-white"
                      >
                        {lang === "ja" ? "サイトを見る" : "Visit site"}
                        <ExternalLink className="h-4 w-4 text-[var(--color-accent-2)]" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-[var(--color-muted)]">{caseStudiesSection.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
