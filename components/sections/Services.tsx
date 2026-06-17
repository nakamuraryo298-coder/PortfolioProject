"use client";

import { Code2, Smartphone, Cloud, Sparkles, Compass, RefreshCw, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { services, servicesSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  Cloud,
  Sparkles,
  Compass,
  RefreshCw,
};

export default function Services() {
  const { lang } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.services[lang]} heading={servicesSection.heading[lang]} lead={servicesSection.lead[lang]} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <Reveal key={service.title.en} delay={i * 0.06}>
                <div className="card-glow card-soft group h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-base)] p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-white transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[var(--color-fg)]">{service.title[lang]}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{service.description[lang]}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
