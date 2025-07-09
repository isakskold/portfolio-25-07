"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { Language, getTranslation } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Get stored language from localStorage (client-side only)
const getStoredLanguage = (): Language | null => {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem("preferred-language");
  if (stored === "en" || stored === "sv") {
    return stored as Language;
  }

  return null;
};

export const LanguageProvider = ({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) => {
  // Start with server-detected language
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated and check localStorage
    setIsHydrated(true);
    const storedLang = getStoredLanguage();
    if (storedLang && storedLang !== initialLanguage) {
      setLanguageState(storedLang);
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", lang);
    }
  };

  const t = (key: string): string => {
    // Always return translated text, never placeholder keys
    return getTranslation(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
