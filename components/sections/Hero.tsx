"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { hero, profile } from "@/lib/content";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Hero artwork background (和 × technology) */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        {/* Left cream scrim — keeps the text legible over the artwork */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-base)] via-[var(--color-base)]/85 to-[var(--color-base)]/10 sm:via-[var(--color-base)]/70 sm:to-transparent" />
        {/* Gentle overall wash for small screens */}
        <div className="absolute inset-0 bg-[var(--color-base)]/20 sm:bg-transparent" />
        {/* Top wash so the navbar stays readable */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--color-base)]/70 to-transparent" />
        {/* Bottom fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--color-base)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-1.5 text-sm shadow-sm backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-[var(--color-fg)]">{hero.badges.available[lang]}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6"
          >
            <p className="text-lg font-medium text-[var(--color-muted)]">{hero.greeting[lang]}</p>
            <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-7xl">
              <span className="text-gradient">{profile.name[lang]}</span>
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xl font-bold text-[var(--color-fg)] sm:text-2xl">
              {profile.title[lang]}
              <span className="inline-flex items-center gap-1 text-base font-normal text-[var(--color-muted)]">
                <MapPin className="h-4 w-4" />
                {profile.location[lang]}
              </span>
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-2xl font-bold leading-snug text-[var(--color-fg)] sm:text-3xl"
          >
            {hero.tagline[lang]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {hero.subtitle[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-6 py-3 font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-transform hover:scale-[1.03]"
            >
              {hero.ctaPrimary[lang]}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-6 py-3 font-semibold text-[var(--color-fg)] shadow-sm backdrop-blur transition-colors hover:border-[var(--color-accent)]"
            >
              <Sparkles className="h-4 w-4 text-[var(--color-accent-2)]" />
              {hero.ctaSecondary[lang]}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-soft mt-14 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-4"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label.en} className="bg-[var(--color-surface)]/90 px-5 py-5 text-center backdrop-blur sm:text-left">
                <div className="text-3xl font-black text-gradient">{stat.value}</div>
                <div className="mt-1 text-xs text-[var(--color-muted)]">{stat.label[lang]}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
