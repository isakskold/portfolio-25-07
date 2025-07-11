import {
  navTranslations,
  heroTranslations,
  aboutTranslations,
  projectsTranslations,
  skillsTranslations,
  contactTranslations,
  footerTranslations,
} from "./index";

export type Language = "en" | "sv";

export const translations = {
  en: {
    nav: navTranslations.en,
    hero: heroTranslations.en,
    about: aboutTranslations.en,
    projects: projectsTranslations.en,
    skills: skillsTranslations.en,
    contact: contactTranslations.en,
    footer: footerTranslations.en,
  },
  sv: {
    nav: navTranslations.sv,
    hero: heroTranslations.sv,
    about: aboutTranslations.sv,
    projects: projectsTranslations.sv,
    skills: skillsTranslations.sv,
    contact: contactTranslations.sv,
    footer: footerTranslations.sv,
  },
};

// Server-side language detection
export function detectLanguageFromHeaders(
  acceptLanguage: string | null
): Language {
  if (!acceptLanguage) return "en";

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().toLowerCase());

  // Check for Swedish
  if (languages.some((lang) => lang.startsWith("sv"))) {
    return "sv";
  }

  return "en";
}

// Translation function that works on both server and client
export function getTranslation(
  key: string,
  language: Language
): string | string[] {
  const keys = key.split(".");
  let current: unknown = translations[language];

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = (current as Record<string, unknown>)[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof current === "string" || Array.isArray(current) ? current : key;
}
