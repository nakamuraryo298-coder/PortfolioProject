import Reveal from "./Reveal";

interface SectionHeadingProps {
  label: string;
  heading: string;
  lead?: string;
}

export default function SectionHeading({ label, heading, lead }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent-2)]">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--color-accent-2)]" />
          {label}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--color-accent-2)]" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-5xl text-balance">
          {heading}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]" />
      </Reveal>
      {lead && (
        <Reveal delay={0.15}>
          <p className="mt-5 leading-relaxed text-[var(--color-muted)] sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
