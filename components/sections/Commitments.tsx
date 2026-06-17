"use client";

import {
  ShieldCheck,
  FileSignature,
  ReceiptText,
  Activity,
  Clock,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { commitments, commitmentsSection } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  FileSignature,
  ReceiptText,
  Activity,
  Clock,
  LifeBuoy,
};

export default function Commitments() {
  const { lang } = useLanguage();

  return (
    <section id="commitments" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label={lang === "ja" ? "安心" : "Trust"}
          heading={commitmentsSection.heading[lang]}
          lead={commitmentsSection.lead[lang]}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item, i) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <Reveal key={item.title.en} delay={(i % 3) * 0.06}>
                <div className="card-glow card-soft flex h-full items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-accent)]/12 to-[var(--color-accent-3)]/12 text-[var(--color-accent)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-fg)]">{item.title[lang]}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                      {item.description[lang]}
                    </p>
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
