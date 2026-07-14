"use client";

import { MessagesSquare, Mail } from "lucide-react";
import { SiLine } from "react-icons/si";
import { useLanguage } from "@/lib/language-context";
import { footer, profile } from "@/lib/content";

export default function Footer() {
  const { lang } = useLanguage();

  const socials = [
    { icon: MessagesSquare, href: profile.chatwork, label: "Chatwork" },
    { icon: SiLine, href: profile.line, label: "LINE" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <a href="#home" className="text-lg font-bold tracking-tight">
              {profile.name[lang]}
              <span className="text-[var(--color-accent)]">.</span>
            </a>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{footer.tagline[lang]}</p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-fg)]"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-muted)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name[lang]}. {footer.rights[lang]}
          </p>
          <p>{footer.builtWith[lang]}</p>
        </div>
      </div>
    </footer>
  );
}
