"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { nav, profile } from "@/lib/content";

const links = [
  { id: "about", label: nav.about },
  { id: "skills", label: nav.skills },
  { id: "experience", label: nav.experience },
  { id: "projects", label: nav.projects },
  { id: "services", label: nav.services },
  { id: "contact", label: nav.contact },
];

export default function Navbar() {
  const { lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[var(--color-base)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-sm font-black text-white">
            T
          </span>
          <span className="text-[var(--color-fg)] transition-colors group-hover:text-white">
            Takaki<span className="text-[var(--color-accent)]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
            >
              {link.label[lang]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-semibold text-[var(--color-fg)] transition-colors hover:border-[var(--color-accent)]"
          >
            <Languages className="h-4 w-4" />
            {lang === "ja" ? "EN" : "日本語"}
          </button>

          <a
            href="#contact"
            className="hidden rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-block"
          >
            {nav.contact[lang]}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-base)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={close}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-fg)]"
                >
                  {link.label[lang]}
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                onClick={close}
                className="mt-1 rounded-lg bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-3 py-3 text-center text-sm font-semibold text-white"
              >
                {nav.contact[lang]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
