// src/components/TranslationFilter.tsx

import { languageLabels } from "../../context/TranslationContext";
import { inputClass } from "../../styles/publicView.styles";
import type { Language } from "../../types";

type Props = {
  selectedLanguage: Language;
  setSelectedLanguage: (lang: Language) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export default function TranslationFilter({
  selectedLanguage,
  setSelectedLanguage,
  searchTerm,
  setSearchTerm,
}: Props) {
  const languages: Language[] = ["en", "fa", "ar"];

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="جستجوی ترجمه"
        className={inputClass}
      />
      <div className="relative inline-block w-48">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value as Language)}
          className="w-full appearance-none bg-gray-800 border border-gray-600 text-white py-2 px-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {languageLabels[lang]}
            </option>
          ))}
        </select>

        {/* فلش سفارشی */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
