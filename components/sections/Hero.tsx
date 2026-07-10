"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  CalendarDays,
  FolderCheck,
  LayoutGrid,
  BadgeCheck,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { hero, profile } from "@/lib/content";
import CountUp from "../CountUp";
import Magnetic from "../Magnetic";

const statIcons: Record<string, LucideIcon> = { CalendarDays, FolderCheck, LayoutGrid, BadgeCheck };

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      {/* Ambient grid + grain (energy clouds come from the global MagicBackground) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid">
        <div className="noise absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Copy */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[var(--color-fg)]">{hero.badges.available[lang]}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 font-mono text-sm text-[var(--color-accent-2)]"
          >
            {"<"}
            <span className="text-[var(--color-muted)]">HiromuTakahashi</span>
            {" />"} — {hero.greeting[lang]}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="text-gradient-flow">{profile.name[lang]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-display text-lg font-semibold text-[var(--color-fg)] sm:text-xl"
          >
            {profile.title[lang]}
            <span className="inline-flex items-center gap-1 text-base font-normal text-[var(--color-muted)]">
              <MapPin className="h-4 w-4" />
              {profile.location[lang]}
            </span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-2xl font-bold leading-snug text-[var(--color-fg)] sm:text-3xl text-balance"
          >
            {hero.tagline[lang]}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-4 max-w-xl leading-relaxed text-[var(--color-muted)]"
          >
            {hero.subtitle[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="btn-sheen group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-6 py-3 font-semibold text-white shadow-lg shadow-[var(--color-accent)]/30 transition-transform hover:scale-[1.03]"
              >
                {hero.ctaPrimary[lang]}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#cases"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold text-[var(--color-fg)] transition-colors hover:text-white"
              >
                <Sparkles className="h-4 w-4 text-[var(--color-accent-2)]" />
                {hero.ctaSecondary[lang]}
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {hero.stats.map((stat) => {
              const Icon = statIcons[stat.icon] ?? Sparkles;
              return (
                <div
                  key={stat.label.en}
                  className="ring-gradient group rounded-2xl glass p-4 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-[var(--color-accent-2)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="mt-3 font-display text-2xl font-bold leading-none sm:text-3xl">
                    <CountUp value={stat.value} className="text-gradient" />
                  </div>
                  <div className="mt-1.5 text-xs leading-tight text-[var(--color-muted)]">{stat.label[lang]}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Portrait — framed in a spotlight on the right half */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[52%] items-center justify-center xl:right-[3%] lg:flex"
      >
        <div className="relative h-[33rem] w-[33rem]">
          {/* Spotlight glow */}
          <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[var(--color-accent)]/35 via-[var(--color-accent-3)]/20 to-transparent blur-[70px]" />
          {/* Concentric ring frame */}
          <div className="absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[27rem] w-[27rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--color-accent)]/20" />
          <div className="animate-spin-slow-rev absolute left-1/2 top-1/2 h-[31rem] w-[31rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
          {/* soft base shadow so the figure feels grounded */}
          <div className="absolute bottom-6 left-1/2 h-10 w-56 -translate-x-1/2 rounded-[100%] bg-black/50 blur-2xl" />

          {/* Portrait, anchored to the bottom of the disc */}
          <Image
            src="/portrait.png"
            alt={profile.name[lang]}
            width={900}
            height={900}
            priority
            className="absolute bottom-0 left-1/2 h-[34rem] w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] [mask-image:linear-gradient(to_bottom,black_90%,transparent)]"
          />
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-[var(--color-muted)] sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-scroll-cue" />
      </motion.a>
    </section>
  );
}
