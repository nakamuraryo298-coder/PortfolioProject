"use client";

import { Layout, Server, Smartphone, Cloud, Database, ShieldCheck, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { skillCategories, skillsSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Smartphone,
  Cloud,
  Database,
  ShieldCheck,
};

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.skills[lang]} heading={skillsSection.heading[lang]} lead={skillsSection.lead[lang]} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Layout;
            return (
              <Reveal key={cat.title.en} delay={i * 0.06}>
                <div className="card-glow h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-3)]/20 text-[var(--color-accent-2)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-[var(--color-fg)]">{cat.title[lang]}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[var(--color-border)] bg-[var(--color-base)] px-2.5 py-1 text-xs font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                      >
                        {skill}
                      </span>
                    ))}
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
