"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Globe, Plus, Search } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { projects, projectsSection, nav } from "@/lib/content";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import TiltCard from "../TiltCard";
import ProjectCover from "../ProjectCover";

const STEP = 6;

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function Chip({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-transparent bg-[var(--color-accent)] text-white"
          : "border-[var(--color-border)] glass text-[var(--color-muted)] hover:text-[var(--color-fg)]"
      }`}
    >
      {label}
      <span className={active ? "text-xs text-white/80" : "text-xs text-[var(--color-muted)]"}>{count}</span>
    </button>
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(STEP);

  // unique categories in first-appearance order + a stable seed per project
  const { categories, indexOf } = useMemo(() => {
    const seen = new Map<string, { ja: string; en: string }>();
    const idx = new Map<string, number>();
    projects.forEach((p, i) => {
      idx.set(p.url, i);
      if (!seen.has(p.category.en)) seen.set(p.category.en, p.category);
    });
    return { categories: Array.from(seen.values()), indexOf: idx };
  }, []);

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        if (active !== "all" && p.category.en !== active) return false;
        if (!q) return true;
        const hay = `${p.title.ja} ${p.title.en} ${p.description.ja} ${p.description.en} ${p.category.ja} ${p.category.en}`.toLowerCase();
        return hay.includes(q);
      }),
    [active, q]
  );

  const visible = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleCount;
  const nextBatch = Math.min(STEP, remaining);

  const selectCategory = (en: string) => {
    setActive(en);
    setVisibleCount(STEP);
  };
  const onSearch = (v: string) => {
    setQuery(v);
    setVisibleCount(STEP);
  };

  return (
    <section id="projects" className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)]/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading label={nav.projects[lang]} heading={projectsSection.heading[lang]} lead={projectsSection.lead[lang]} />

        {/* controls: search + category filter */}
        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-5">
            <div className="relative mx-auto w-full max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]" />
              <input
                type="search"
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder={lang === "ja" ? "サイト名・業種で検索…" : "Search by name or industry…"}
                className="w-full rounded-xl glass-strong py-2.5 pl-9 pr-3 text-sm text-[var(--color-fg)] outline-none transition placeholder:text-[var(--color-muted)] focus:ring-2 focus:ring-[var(--color-accent)]/40"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Chip active={active === "all"} label={lang === "ja" ? "すべて" : "All"} count={projects.length} onClick={() => selectCategory("all")} />
              {categories.map((c) => (
                <Chip
                  key={c.en}
                  active={active === c.en}
                  label={c[lang]}
                  count={projects.filter((p) => p.category.en === c.en).length}
                  onClick={() => selectCategory(c.en)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        {visible.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((project, i) => (
              <Reveal key={project.url} delay={(i % 3) * 0.06}>
                <TiltCard className="group h-full" max={6}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ring-gradient card-soft flex h-full flex-col overflow-hidden rounded-2xl glass-strong"
                  >
                    <ProjectCover
                      image={project.image}
                      category={project.category.en}
                      seed={indexOf.get(project.url) ?? i}
                      alt={project.title[lang]}
                    />

                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-accent-2)]">
                          {project.category[lang]}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--color-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent-2)]" />
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-[var(--color-fg)]">
                        {project.title[lang]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.description[lang]}</p>
                      <div className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-xs text-[var(--color-muted)]">
                        <Globe className="h-3.5 w-3.5 text-[var(--color-accent-2)]" />
                        {hostOf(project.url)}
                      </div>
                    </div>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-[var(--color-muted)]">
            {lang === "ja" ? "該当する実績が見つかりませんでした。" : "No matching work found."}
          </p>
        )}

        {remaining > 0 && (
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + STEP)}
              className="btn-sheen group inline-flex items-center gap-2 rounded-xl glass-strong px-6 py-3 font-semibold text-[var(--color-fg)] transition-transform hover:scale-[1.03]"
            >
              <Plus className="h-4 w-4 text-[var(--color-accent-2)] transition-transform group-hover:rotate-90" />
              {lang === "ja" ? `実績をもっと見る（+${nextBatch}）` : `Show More (+${nextBatch})`}
            </button>
            <span className="font-mono text-xs text-[var(--color-muted)]">
              {lang === "ja"
                ? `${visible.length} / ${filtered.length} 件を表示中`
                : `Showing ${visible.length} of ${filtered.length}`}
            </span>
          </div>
        )}

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-[var(--color-muted)]">{projectsSection.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  );
}
