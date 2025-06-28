import { useState, useEffect } from "react";
import { useTranslation } from "../context/TranslationContext";
import TranslationFilter from "../components/PublicView/TranslationFilter";
import TranslationCard from "../components/PublicView/TranslationCard";
import { mainTitleClass } from "../styles/publicView.styles";
import type { Language } from "../types";

export default function PublicView() {
  const { keywords, languages } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<Language>("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [fadeSearch, setFadeSearch] = useState(false);

  useEffect(() => {
    setFadeSearch(true);
    const timer = setTimeout(() => setFadeSearch(false), 300); // reset animation after a short delay
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const filteredKeywords = keywords.filter((keyword) =>
    Object.values(keyword.translations).some((translation) =>
      translation.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="mx-auto w-[90%]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-10">
        <h2
          className={`${mainTitleClass} transition-opacity ${fadeSearch ? "opacity-0" : "opacity-100"} duration-300`}
        >
          ترجمه‌ها
        </h2>
        <TranslationFilter
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {filteredKeywords.map((keyword) => (
          <TranslationCard
            key={keyword.id}
            keyword={keyword}
            selectedLanguage={selectedLanguage}
            languages={languages}
            className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            />
        ))}
      </div>
    </div>
  );
}
