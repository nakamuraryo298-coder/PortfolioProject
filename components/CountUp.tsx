"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  /** Full display value, e.g. "12+", "60+", "100%". The numeric part is animated; prefix/suffix are preserved. */
  value: string;
  /** Animation length in seconds. */
  duration?: number;
  /** Delay before counting starts, in seconds. */
  delay?: number;
  className?: string;
}

export default function CountUp({ value, duration = 1.8, delay = 0.3, className }: CountUpProps) {
  // Split into optional prefix (non-digits), the number, and an optional suffix.
  const parsed = value.match(/^(\D*)([\d.,]+)(.*)$/);
  const prefix = parsed?.[1] ?? "";
  const rawNum = parsed?.[2] ?? "";
  const suffix = parsed?.[3] ?? "";
  const target = parsed ? parseFloat(rawNum.replace(/,/g, "")) : 0;
  const decimals = rawNum.includes(".") ? rawNum.split(".")[1].length : 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !parsed) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplay(target);
      return;
    }

    let raf = 0;
    let startTs: number | null = null;

    const tick = (now: number) => {
      if (startTs === null) startTs = now;
      const progress = Math.min((now - startTs) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setDisplay(target);
    };

    const timer = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [inView, parsed, target, duration, delay]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
