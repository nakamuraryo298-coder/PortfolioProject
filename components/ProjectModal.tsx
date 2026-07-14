"use client";

import { useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Globe, UserRound, CheckCircle2 } from "lucide-react";
import { projectCategories, type Project, type Lang } from "@/lib/content";
import { getProjectDetail } from "@/lib/project-details";
import { techIcon } from "@/lib/tech-icons";
import ProjectCover from "./ProjectCover";

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
      <span className="h-px w-5 bg-gradient-to-r from-[var(--color-accent-2)] to-transparent" />
      {children}
    </div>
  );
}

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectModal({
  project,
  seed,
  lang,
  onClose,
}: {
  project: Project;
  seed: number;
  lang: Lang;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const label = (k: string) => projectCategories.find((c) => c.key === k)?.[lang] ?? k;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* dialog */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title[lang]}
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.24, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="ring-gradient relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl glass-strong"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-20 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white/90 backdrop-blur transition-colors hover:bg-black/60"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="shrink-0">
          <ProjectCover image={project.image} category={project.categories[0]} seed={seed} alt={project.title[lang]} />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {project.categories.map((k, i) => (
              <span key={k} className="inline-flex items-center gap-1.5">
                {i > 0 && <span className="text-[var(--color-muted)]">·</span>}
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent-2)]">{label(k)}</span>
              </span>
            ))}
          </div>

          <h3 className="mt-2 font-display text-2xl font-bold text-[var(--color-fg)]">{project.title[lang]}</h3>
          <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{project.description[lang]}</p>

          {(() => {
            const detail = getProjectDetail(project);
            return (
              <div className="mt-6 space-y-6 border-t border-[var(--color-border)] pt-6">
                {/* Role */}
                <div>
                  <Label>{lang === "ja" ? "担当範囲" : "My Role"}</Label>
                  <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-[var(--color-fg)]">
                    <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                    {detail.role[lang]}
                  </p>
                </div>

                {/* Tech / skills */}
                <div>
                  <Label>{lang === "ja" ? "使用技術・スキル" : "Skills & Tech"}</Label>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {detail.tech.map((t) => {
                      const { Icon, color } = techIcon(t);
                      return (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-[var(--color-muted)]"
                        >
                          <Icon className="h-3.5 w-3.5" style={{ color }} />
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Scope */}
                <div>
                  <Label>{lang === "ja" ? "対応内容" : "Scope of Work"}</Label>
                  <ul className="mt-2.5 grid gap-1.5">
                    {detail.scope[lang].map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm leading-relaxed text-[var(--color-fg)]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent-2)]" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })()}

          {project.url && (
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-sheen inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-3)] px-5 py-2.5 font-semibold text-white shadow-lg shadow-[var(--color-accent)]/25 transition-transform hover:scale-[1.03]"
              >
                {lang === "ja" ? "サイトを見る" : "Visit site"}
                <ExternalLink className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)]">
                <Globe className="h-3.5 w-3.5 text-[var(--color-accent-2)]" />
                {hostOf(project.url)}
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
