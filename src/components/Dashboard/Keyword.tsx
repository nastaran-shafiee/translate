// src/components/KeywordCard.tsx
import type { Keyword, Language } from "../../types";
import { languageLabels } from "../../context/TranslationContext";
import {
  card,
  deleteButton,
  deleteWrapper,
  label,
  translationInput,
} from "../../styles/dashboard.styles";

type Props = {
  keyword: Keyword;
  languages: Language[];
  updateTranslation: (id: string, lang: Language, value: string) => void;
  deleteKeyword: (id: string) => void;
};

export default function KeywordCard({
  keyword,
  languages,
  updateTranslation,
  deleteKeyword,
}: Props) {
  return (
    <div className={card}>
      <div className={deleteWrapper}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteKeyword(keyword.id);
          }}
          className={deleteButton}
        >
          x
        </button>
      </div>

      <h3 className="text-lg font-bold text-center mb-4 text-blue-200 ">
        {keyword.translations["fa"] ||
          keyword.translations["en"] ||
          "کلمه جدید"}
      </h3>

      <div className="flex flex-col gap-4 mt-10 mb-10">
        {languages.map((lang) => (
          <div key={lang} className="flex flex-col items-center">
            <label className={label(lang)}>{languageLabels[lang]}</label>
            <input
              type="text"
              value={keyword.translations[lang]}
              onChange={(e) => updateTranslation(keyword.id, lang, e.target.value)}
              className={translationInput}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
