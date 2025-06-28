// src/context/TranslationContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

import { nanoid } from "nanoid";
import type { Keyword, Language, TranslationContextType } from "../types";
import { initialKeywords } from "../utils/initialKeyword";





const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const languageLabels: Record<Language, string> = {
  en: "انگلیسی",
  fa: "فارسی",
  ar: "عربی",
};

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [keywords, setKeywords] = useState<Keyword[]>(() => {
    const saved = localStorage.getItem("translations");
    if (saved) {
      return JSON.parse(saved);
    } else {
      // فقط بار اول اطلاعات اولیه رو ذخیره کن
      localStorage.setItem("translations", JSON.stringify(initialKeywords));
      return initialKeywords;
    }
  });

  const languages: Language[] = ["en", "fa", "ar"];

  // همیشه بعد از تغییرات، localStorage رو به‌روز کن
  useEffect(() => {
    localStorage.setItem("translations", JSON.stringify(keywords));
  }, [keywords]);

  const addKeyword = (keyword: string, translations: Record<Language, string>) => {
    const newKeyword: Keyword = {
      id: nanoid(),
      order: keywords.length,
      translations,
    };
    const updated = [...keywords, newKeyword];
    setKeywords(updated);
  };
  

  const updateTranslation = (id: string, language: Language, translation: string) => {
    const updated = keywords.map((keyword) =>
      keyword.id === id
        ? {
            ...keyword,
            translations: {
              ...keyword.translations,
              [language]: translation,
            },
          }
        : keyword
    );
    setKeywords(updated);
  };

  const reorderKeywords = (newOrder: Keyword[]) => {
    const updated = newOrder.map((keyword, index) => ({
      ...keyword,
      order: index,
    }));
    setKeywords(updated);
  };

  const deleteKeyword = (id: string) => {
    const updated = keywords.filter((keyword) => keyword.id !== id);
    setKeywords(updated);
  };

  return (
    <TranslationContext.Provider
      value={{
        keywords,
        languages,
        addKeyword,
        updateTranslation,
        reorderKeywords,
        deleteKeyword,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
