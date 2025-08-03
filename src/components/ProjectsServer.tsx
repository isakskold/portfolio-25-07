import { getTranslation } from "@/lib/translations";
import ProjectsClient from "./ProjectsClient";
import { projectsTranslations } from "@/lib/projects";

type Project = {
  category: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  buttonText: string;
  showGithub: boolean;
};

export default async function ProjectsServer({ locale }: { locale: string }) {
  const t = (key: string) =>
    getTranslation(`projects.${key}`, locale as "en" | "sv");

  const getProjects = (): Project[] => {
    const lang = locale as "en" | "sv";
    const featuresMap = projectsTranslations[lang];

    return [
      {
        category: "Full Stack",
        title: t("ecommerce.title") as string,
        description: t("ecommerce.description") as string,
        features: featuresMap.ecommerce.features,
        technologies: ["Next.js", "Supabase", "PostgreSQL", "Vercel", "Prisma"],
        image: "/pngs/pizzaApp.png",
        liveUrl:
          "https://digital-payment-saas-git-general-demo-isaks-projects-7661787e.vercel.app/",
        githubUrl: featuresMap.ecommerce.githubUrl,
        buttonText: featuresMap.ecommerce.buttonText,
        showGithub: featuresMap.ecommerce.showGithub,
      },
      {
        category: "CMS",
        title: t("cms.title") as string,
        description: t("cms.description") as string,
        features: featuresMap.cms.features,
        technologies: ["Next.js", "TypeScript", "AWS", "Authentication", "API"],
        image: "/pngs/CMS.png",
        liveUrl: "https://cms-ten-snowy.vercel.app/",
        githubUrl: featuresMap.cms.githubUrl,
        buttonText: featuresMap.cms.buttonText,
        showGithub: featuresMap.cms.showGithub,
      },
      {
        category: "Content Creator",
        title: t("dashboard.title") as string,
        description: t("dashboard.description") as string,
        features: featuresMap.dashboard.features,
        technologies: [
          "Next.js",
          "TypeScript",
          "Netlify",
          "Decap CMS",
          "TailwindCSS",
        ],
        image: "/pngs/gz000.png",
        liveUrl: "https://groundzero000.netlify.app/",
        githubUrl: featuresMap.dashboard.githubUrl,
        buttonText: featuresMap.dashboard.buttonText,
        showGithub: featuresMap.dashboard.showGithub,
      },
    ];
  };

  const projects = getProjects();

  return (
    <ProjectsClient
      title={t("title") as string}
      subtitle={t("subtitle") as string}
      keyFeatures={t("keyFeatures") as string}
      technologies={t("technologies") as string}
      codeButton={t("code") as string}
      projects={projects}
    />
  );
}
