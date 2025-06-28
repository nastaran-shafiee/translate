// src/components/TranslationCard.tsx

import { languageLabels } from "../../context/TranslationContext";
import { cardClass, cardTitleClass, getLabelColor } from "../../styles/publicView.styles";
import type { Keyword, Language } from "../../types";


type Props = {
  keyword: Keyword;
  selectedLanguage: Language;
  languages: Language[];
  className?: string;
};

export default function TranslationCard({ keyword, selectedLanguage, languages , className}: Props) {
  return (
    <div className={`${cardClass} ${className}`}>
      <h3 className={cardTitleClass}>
        {keyword.translations[selectedLanguage] || "No translation available"}
      </h3>
      <div className="flex flex-col gap-4">
        {languages.map((lang) => (
          <div key={lang} className="text-sm">
            <span className="text-gray-400">{languageLabels[lang]}: </span>
            <span className={getLabelColor(lang)}>
              {keyword.translations[lang] || "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
