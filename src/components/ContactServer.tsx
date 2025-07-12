import { getTranslation } from "@/lib/translations";
import ContactClient from "./ContactClient";

export default async function ContactServer({ locale }: { locale: string }) {
  const t = (key: string) =>
    getTranslation(`contact.${key}`, locale as "en" | "sv");

  const sections = [
    {
      title: t("workArrangements.title") as string,
      icon: "Briefcase",
      items: t("workArrangements.items") as string[],
    },
    {
      title: t("locationPreference.title") as string,
      icon: "Globe",
      items: t("locationPreference.items") as string[],
    },
    {
      title: t("expertise.title") as string,
      icon: "Laptop",
      items: t("expertise.items") as string[],
    },
  ];

  const whyWorkWithMe = t("whyWorkItems") as string[];

  return (
    <ContactClient
      title={t("title") as string}
      subtitle={t("subtitle") as string}
      email={t("email") as string}
      emailText={t("emailText") as string}
      linkedin={t("linkedin") as string}
      linkedinText={t("linkedinText") as string}
      github={t("github") as string}
      githubText={t("githubText") as string}
      whyWork={t("whyWork") as string}
      whyWorkItems={whyWorkWithMe}
      sections={sections}
    />
  );
}
