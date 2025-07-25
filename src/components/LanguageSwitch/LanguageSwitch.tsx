"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition"
    >
      {language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
    </button>
  );
}
