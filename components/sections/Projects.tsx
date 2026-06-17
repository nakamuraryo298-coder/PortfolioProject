"use client";

import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { projects, projectsSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.projects[lang]} heading={projectsSection.heading[lang]} lead={projectsSection.lead[lang]} />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title.en} delay={(i % 2) * 0.08}>
              <article className="card-glow card-soft group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-base)] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-2)]">
                      {project.category[lang]}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-[var(--color-fg)]">{project.title[lang]}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--color-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]" />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{project.description[lang]}</p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights[lang].map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-[var(--color-fg)]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-[var(--color-muted)]">{projectsSection.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
