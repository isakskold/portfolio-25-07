import { getTranslation } from "@/lib/translations";
import AboutClient from "./AboutClient";

export default async function AboutServer({ locale }: { locale: string }) {
  const t = (key: string) =>
    getTranslation(`about.${key}`, locale as "en" | "sv") as string;

  const highlights = [
    {
      icon: "Code",
      title: t("highlights.frontend.title"),
      description: t("highlights.frontend.description"),
      color: "text-blue-500",
    },
    {
      icon: "Database",
      title: t("highlights.backend.title"),
      description: t("highlights.backend.description"),
      color: "text-green-500",
    },
    {
      icon: "Cloud",
      title: t("highlights.fullstack.title"),
      description: t("highlights.fullstack.description"),
      color: "text-purple-500",
    },
    {
      icon: "ShieldCheck",
      title: t("highlights.performance.title"),
      description: t("highlights.performance.description"),
      color: "text-red-500",
    },
  ];

  return (
    <AboutClient
      title={t("title")}
      subtitle={t("subtitle")}
      description1={t("description1")}
      description2={t("description2")}
      description3={t("description3")}
      highlights={highlights}
    />
  );
}
