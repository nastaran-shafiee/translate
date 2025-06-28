// src/components/AddKeywordForm.tsx
import { useState } from "react";
import type { Language } from "../../types";
import { input, addButton, form } from "../../styles/dashboard.styles";

type Props = {
  languages: Language[];
  addKeyword: (word: string, translations: Record<Language, string>) => void;
};

export default function AddKeywordForm({ languages, addKeyword }: Props) {
  const [newKeyword, setNewKeyword] = useState("");
  const [newTranslations, setNewTranslations] = useState<{
    [lang: string]: string;
  }>({});

  const handleTranslationChange = (lang: Language, value: string) => {
    setNewTranslations((prev) => ({ ...prev, [lang]: value }));
  };

  const handleAddKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;

    const translations: Record<Language, string> = languages.reduce(
      (acc, lang) => {
        acc[lang] = newTranslations[lang]?.trim() || "";
        return acc;
      },
      {} as Record<Language, string>
    );

    addKeyword(newKeyword.trim(), translations);
    setNewKeyword("");
    setNewTranslations({});
  };

  return (
    <form onSubmit={handleAddKeyword} className={form}>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          placeholder="کلمه جدید"
          className={input}
        />
        {languages.map((lang) => (
          <input
            key={lang}
            type="text"
            value={newTranslations[lang] || ""}
            onChange={(e) => handleTranslationChange(lang, e.target.value)}
            placeholder={`ترجمه (${lang.toUpperCase()})`}
            className={input}
          />
        ))}
        <button type="submit" className={addButton}>
          افزودن
        </button>
      </div>
    </form>
  );
}
