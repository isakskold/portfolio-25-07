import { getTranslation } from "@/lib/translations";
import HeroClient from "./HeroClient";

export default async function HeroServer({ locale }: { locale: string }) {
  // Get translations on the server side
  const title = getTranslation("hero.title", locale as "en" | "sv") as string;
  const subtitle = getTranslation(
    "hero.subtitle",
    locale as "en" | "sv"
  ) as string;
  const description = getTranslation(
    "hero.description",
    locale as "en" | "sv"
  ) as string;
  const viewWork = getTranslation(
    "hero.viewWork",
    locale as "en" | "sv"
  ) as string;
  const downloadResume = getTranslation(
    "hero.downloadResume",
    locale as "en" | "sv"
  ) as string;

  const socialLinks = [
    { icon: "Github", href: "https://github.com/isakskold", label: "GitHub" },
    {
      icon: "Linkedin",
      href: "https://www.linkedin.com/in/isak-sk%C3%B6ld-3b7a0b28a/",
      label: "LinkedIn",
    },
    { icon: "Mail", href: "mailto:isaksfrontend@gmail.com", label: "Email" },
  ];

  return (
    <HeroClient
      title={title}
      subtitle={subtitle}
      description={description}
      viewWork={viewWork}
      downloadResume={downloadResume}
      socialLinks={socialLinks}
    />
  );
}
