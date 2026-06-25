"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Lang } from "./content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

// The site is Japanese-only. The provider keeps the same shape so existing
// components keep working, but the language is fixed to "ja".
const value: LanguageContextValue = {
  lang: "ja",
  setLang: () => {},
  toggle: () => {},
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
