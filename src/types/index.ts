// types/index.ts
export type LanguageCode = "en" | "fa" | "es";
interface TranslationItem {
  id: string;
  keyword: string;
  translations: {
    [key: string]: string;
  };
}

export interface TranslationState {
  items: TranslationItem[];
  currentLang: LanguageCode;
  languages: LanguageCode[];
}
export type Language = "en" | "fa" | "ar";

export interface Translation {
  [key: string]: string;
}

export interface Keyword {
  id: string;
  order: number;
  translations: {
    [key in Language]: string;
  };
}

 export interface TranslationContextType {
  keywords: Keyword[];
  languages: Language[];
  addKeyword: (keyword: string, translations: Record<Language, string>) => void;
  updateTranslation: (id: string, lang: Language, value: string) => void;
  reorderKeywords: (keywords: Keyword[]) => void;
  deleteKeyword: (id: string) => void;
}
export interface SortableItemProps {
  id: string;
  children: React.ReactNode;
}
