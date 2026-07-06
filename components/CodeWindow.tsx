"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/** A stylized, animated code-editor mock used as the hero visual. */
const lines: { tokens: { t: string; c?: string }[]; indent?: number }[] = [
  { tokens: [{ t: "const", c: "kw" }, { t: " engineer", c: "var" }, { t: ": ", c: "" }, { t: "Engineer", c: "type" }, { t: " = {", c: "" }] },
  { indent: 1, tokens: [{ t: "name", c: "key" }, { t: ": ", c: "" }, { t: '"Hiromu Takahashi"', c: "str" }, { t: ",", c: "" }] },
  { indent: 1, tokens: [{ t: "role", c: "key" }, { t: ": ", c: "" }, { t: '"Freelance Software Engineer"', c: "str" }, { t: ",", c: "" }] },
  { indent: 1, tokens: [{ t: "location", c: "key" }, { t: ": ", c: "" }, { t: '"Japan"', c: "str" }, { t: ",", c: "" }] },
  { indent: 1, tokens: [{ t: "experience", c: "key" }, { t: ": ", c: "" }, { t: "8", c: "num" }, { t: ", ", c: "" }, { t: "// years", c: "cm" }] },
  { indent: 1, tokens: [{ t: "stack", c: "key" }, { t: ": [", c: "" }, { t: '"React"', c: "str" }, { t: ", ", c: "" }, { t: '"Go"', c: "str" }, { t: ", ", c: "" }, { t: '"AWS"', c: "str" }, { t: ", ", c: "" }, { t: '"LLM"', c: "str" }, { t: "],", c: "" }] },
  { indent: 1, tokens: [{ t: "available", c: "key" }, { t: ": ", c: "" }, { t: "true", c: "bool" }, { t: ",", c: "" }] },
  { tokens: [{ t: "};", c: "" }] },
];

const colorOf: Record<string, string> = {
  kw: "text-[var(--color-accent-3)]",
  var: "text-[var(--color-fg)]",
  type: "text-[var(--color-gold)]",
  key: "text-[var(--color-accent-2)]",
  str: "text-emerald-300",
  num: "text-[var(--color-gold)]",
  bool: "text-[var(--color-accent-3)]",
  cm: "text-[var(--color-muted)] italic",
  "": "text-[var(--color-muted)]",
};

export default function CodeWindow() {
  const [typed, setTyped] = useState("");
  const full = "$ hire(engineer)  →  let's build together";

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ transformPerspective: 1000 }}
      className="ring-gradient w-full rounded-2xl glass-strong shadow-2xl shadow-black/50"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">engineer.ts</span>
        <span className="ml-auto font-mono text-[10px] text-[var(--color-accent-2)]">TypeScript</span>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
            className="flex gap-4 whitespace-pre"
          >
            <span className="select-none text-right text-[var(--color-muted)]/40" style={{ width: "1.5rem" }}>
              {i + 1}
            </span>
            <span>
              {"  ".repeat(line.indent ?? 0)}
              {line.tokens.map((tok, j) => (
                <span key={j} className={colorOf[tok.c ?? ""]}>
                  {tok.t}
                </span>
              ))}
            </span>
          </motion.div>
        ))}

        {/* Terminal line with typing effect */}
        <div className="mt-5 border-t border-white/10 pt-4 text-[var(--color-accent-2)]">
          {typed}
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[var(--color-accent-2)]" />
        </div>
      </div>
    </motion.div>
  );
}
