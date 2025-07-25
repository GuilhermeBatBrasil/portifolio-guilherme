import { useLanguage } from "@/context/LanguageContext";
import BrazilFlag from "../../../public/flags/br.png";
import UsaFlag from "../../../public/flags/us.png";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div
      className="relative w-15 h-7.5 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer"
      onClick={toggleLanguage}
      style={{ fontFamily: 'Segoe UI Emoji, Apple Color Emoji, Noto Color Emoji, sans-serif' }}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300
          ${language === "en" ? "translate-x-7.5" : "translate-x-0"}
        `}
      />
      <div className={`absolute text-xs ${language === "pt" ? "left-1.5" : "right-1.5"}`}>
        <img src={language === "pt" ? BrazilFlag.src : UsaFlag.src} alt="flag" className="w-5 h-5" />
      </div>
    </div>
  );
}