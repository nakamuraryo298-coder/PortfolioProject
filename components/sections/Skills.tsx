"use client";

import { Layout, Server, Smartphone, Cloud, Database, ShieldCheck, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { skillCategories, skillsSection, nav } from "@/lib/content";
import { techIcon } from "@/lib/tech-icons";
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

const marqueeItems = [
  "React", "Next.js", "TypeScript", "Node.js", "Go", "Python", "AWS", "GCP",
  "Docker", "Kubernetes", "Terraform", "GraphQL", "PostgreSQL", "Redis",
  "React Native", "Flutter", "LLM / RAG", "Vue.js", "Rust", "TensorFlow",
];

export default function Skills() {
  const { lang } = useLanguage();

  return (
    <section id="skills" className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.skills[lang]} heading={skillsSection.heading[lang]} lead={skillsSection.lead[lang]} />
      </div>

      {/* Infinite tech marquee — now with brand icons */}
      <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track gap-3 pr-3">
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const { Icon, color } = techIcon(item);
            return (
              <span
                key={i}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full glass px-5 py-2.5 font-mono text-sm text-[var(--color-fg)]"
              >
                <Icon className="h-5 w-5" style={{ color }} />
                {item}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? Layout;
            return (
              <Reveal key={cat.title.en} delay={i * 0.06}>
                <div className="ring-gradient card-soft h-full rounded-2xl glass-strong p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent-3)]/20 text-[var(--color-accent-2)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display font-bold text-[var(--color-fg)]">{cat.title[lang]}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const { Icon: TechI, color } = techIcon(skill);
                      return (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
                        >
                          <TechI className="h-3.5 w-3.5" style={{ color }} />
                          {skill}
                        </span>
                      );
                    })}
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
