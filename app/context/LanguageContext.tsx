"use client";

import { createContext, useContext } from "react";

type Lang = "en" | "ar";

interface LangContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LangContextProps | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};
