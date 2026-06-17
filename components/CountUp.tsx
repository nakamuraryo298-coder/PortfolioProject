"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface CountUpProps {
  /** Target string such as "12+", "100%", "1.5k" — the leading number is animated. */
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Animates the numeric part of `value` from 0 up to its target once the
 * element scrolls into view, then stops. Any prefix/suffix (e.g. "+", "%")
 * is preserved.
 */
export default function CountUp({ value, duration = 3, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseFloat(match[2]) : 0;
  const suffix = match?.[3] ?? "";
  const decimals = match && match[2].includes(".") ? match[2].split(".")[1].length : 0;

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // Small delay so the counting is noticeable after the card appears,
    // then a gentle, steady ease-out that visibly ticks across the full duration.
    const controls = animate(0, target, {
      duration,
      delay: 0.35,
      ease: [0.33, 1, 0.68, 1], // easeOutCubic — gradual, readable count
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
