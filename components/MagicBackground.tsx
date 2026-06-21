"use client";

import { useEffect, useRef } from "react";

interface Mote {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  hue: number;
  phase: number;
  twinkle: number;
}

const HUES = [255, 250, 190, 330, 45]; // indigo, violet, cyan, rose, gold

export default function MagicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let motes: Mote[] = [];
    let raf = 0;
    let t = 0;

    const spawn = (atBottom = false): Mote => ({
      x: Math.random() * w,
      y: atBottom ? h + Math.random() * 40 : Math.random() * h,
      r: 0.6 + Math.random() * 2.2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -(0.15 + Math.random() * 0.5),
      hue: HUES[Math.floor(Math.random() * HUES.length)],
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.6 + Math.random() * 1.4,
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.max(36, Math.floor((w * h) / 26000)));
      motes = Array.from({ length: count }, () => spawn());
    };

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const m of motes) {
        // drift with a gentle arcane sway
        m.x += m.vx + Math.sin((t + m.phase * 60) * 0.005) * 0.18;
        m.y += m.vy;

        // recycle when it floats off the top
        if (m.y < -20) Object.assign(m, spawn(true));
        if (m.x < -20) m.x = w + 20;
        if (m.x > w + 20) m.x = -20;

        const tw = 0.45 + 0.55 * Math.sin(t * 0.02 * m.twinkle + m.phase);
        const radius = m.r * (3.5 + tw * 2.5);
        const alpha = 0.12 + tw * 0.5;

        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, radius);
        g.addColorStop(0, `hsla(${m.hue}, 90%, 72%, ${alpha})`);
        g.addColorStop(0.4, `hsla(${m.hue}, 90%, 62%, ${alpha * 0.4})`);
        g.addColorStop(1, "hsla(0, 0%, 0%, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(m.x, m.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // bright core
        ctx.fillStyle = `hsla(${m.hue}, 100%, 88%, ${alpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      // draw a single static frame
      ctx.globalCompositeOperation = "lighter";
      for (const m of motes) {
        ctx.fillStyle = `hsla(${m.hue}, 90%, 70%, 0.3)`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      raf = window.requestAnimationFrame(draw);
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Swirling arcane energy clouds */}
      <div className="aurora-blob left-[-12%] top-[-8%] h-[34rem] w-[34rem] bg-[var(--color-accent)]/20" />
      <div className="aurora-blob right-[-10%] top-[18%] h-[30rem] w-[30rem] bg-[var(--color-accent-2)]/14" style={{ animationDelay: "-5s" }} />
      <div className="aurora-blob bottom-[-10%] left-[28%] h-[32rem] w-[32rem] bg-[var(--color-accent-3)]/16" style={{ animationDelay: "-9s" }} />
      <div className="aurora-blob right-[20%] bottom-[6%] h-[24rem] w-[24rem] bg-[var(--color-gold)]/10" style={{ animationDelay: "-13s" }} />

      {/* Rotating rune circles */}
      <svg className="animate-spin-slow animate-rune-pulse absolute -left-40 top-1/4 h-[40rem] w-[40rem] text-[var(--color-accent)]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 6" />
        <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="0.3" strokeDasharray="10 4" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.3" />
        <polygon points="100,18 168,150 32,150" stroke="currentColor" strokeWidth="0.3" fill="none" />
        <polygon points="100,182 32,50 168,50" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </svg>
      <svg className="animate-spin-slow-rev animate-rune-pulse absolute -right-52 bottom-1/4 h-[44rem] w-[44rem] text-[var(--color-accent-2)]" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 5" />
        <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.3" strokeDasharray="14 3" />
        <circle cx="100" cy="100" r="48" stroke="currentColor" strokeWidth="0.3" />
        <rect x="44" y="44" width="112" height="112" stroke="currentColor" strokeWidth="0.3" transform="rotate(45 100 100)" />
      </svg>

      {/* Drifting magic motes */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
