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
        <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-2)]">
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          {heading}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="mt-3 text-base text-[var(--color-muted)] sm:text-lg">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
