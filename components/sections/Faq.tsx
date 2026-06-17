"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { faqs, faqSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Faq() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading label={nav.faq[lang]} heading={faqSection.heading[lang]} lead={faqSection.lead[lang]} />

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question.en} delay={i * 0.04}>
                <div className="card-soft overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold text-[var(--color-fg)]">
                      <span className="mr-2 text-[var(--color-accent-2)]">Q.</span>
                      {item.question[lang]}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-[var(--color-border)] px-6 py-5 text-sm leading-relaxed text-[var(--color-muted)]">
                          {item.answer[lang]}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
