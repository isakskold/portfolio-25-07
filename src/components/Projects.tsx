"use client";

import React from "react";
import { Code, Database, Smartphone, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LinkButton, TechnologyBadge, FeatureListItem } from "@/components/ui";
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

const getIcon = (category: string) => {
  switch (category) {
    case "Full Stack":
      return <Code className="w-5 h-5" />;
    case "SaaS":
      return <Database className="w-5 h-5" />;
    case "Data Visualization":
      return <Smartphone className="w-5 h-5" />;
    default:
      return <Code className="w-5 h-5" />;
  }
};

const Projects = () => {
  const { t, language } = useLanguage();

  // Define projects with proper feature arrays based on language
  const getProjects = (): Project[] => {
    const featuresMap = projectsTranslations[language];

    return [
      {
        category: "Full Stack",
        title: t("projects.ecommerce.title") as string,
        description: t("projects.ecommerce.description") as string,
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
        title: t("projects.cms.title") as string,
        description: t("projects.cms.description") as string,
        features: featuresMap.cms.features,
        technologies: ["Next.js", "TypeScript", "AWS", "Authentication", "API"],
        image:
          "https://private-user-images.githubusercontent.com/149143560/437310239-2bd3972f-f6b2-44e6-b0a9-686013902477.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIyNTE0NTIsIm5iZiI6MTc1MjI1MTE1MiwicGF0aCI6Ii8xNDkxNDM1NjAvNDM3MzEwMjM5LTJiZDM5NzJmLWY2YjItNDRlNi1iMGE5LTY4NjAxMzkwMjQ3Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcxMVQxNjI1NTJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kM2U4YWVkMjJhM2JlZjc0ZDYwM2E5ZmYzNzkyYzMyZjQ4MWE3ZmRmMjNhYWNmYzU4ZjU0YTY4MzUxNzcyYWE0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.u5_Oq7NG7HDfkHvF7eJWIvOroYL6u8r4CMB1l6o-9IQ",
        liveUrl: "https://cms-ten-snowy.vercel.app/",
        githubUrl: featuresMap.cms.githubUrl,
        buttonText: featuresMap.cms.buttonText,
        showGithub: featuresMap.cms.showGithub,
      },
      {
        category: "SaaS",
        title: t("projects.dashboard.title") as string,
        description: t("projects.dashboard.description") as string,
        features: featuresMap.dashboard.features,
        technologies: [
          "AWS Amplify",
          "RBAC",
          "TypeScript",
          "GraphQL",
          "TailwindCSS",
        ],
        image: "/pngs/oppi.png",
        liveUrl: "https://opi-early-reg.vercel.app/",
        githubUrl: featuresMap.dashboard.githubUrl,
        buttonText: featuresMap.dashboard.buttonText,
        showGithub: featuresMap.dashboard.showGithub,
      },
    ];
  };

  const projects = getProjects();

  return (
    <section
      id="projects"
      className="section-padding bg-[hsl(var(--background))] min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">
            {t("projects.title") as string}
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {t("projects.subtitle") as string}
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center`}
            >
              <div
                className={`w-full h-80 ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg hover-lift border-2 border-[hsl(var(--interactive))]/20"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-[hsl(var(--primary))]">
                  {getIcon(project.category)}
                  <span className="font-medium">{project.category}</span>
                </div>

                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                <p
                  className="text-lg text-[hsl(var(--muted-foreground))] mb-6"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    {t("projects.keyFeatures") as string}
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <FeatureListItem key={featureIndex}>
                        {feature}
                      </FeatureListItem>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    {t("projects.technologies") as string}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <TechnologyBadge key={techIndex}>{tech}</TechnologyBadge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <LinkButton href={project.liveUrl} variant="primary" external>
                    <ExternalLink size={18} className="mr-2" />
                    {project.buttonText}
                  </LinkButton>
                  {project.showGithub && (
                    <LinkButton
                      href={project.githubUrl}
                      variant="secondary"
                      external
                    >
                      <Github size={18} className="mr-2" />
                      {t("projects.code") as string}
                    </LinkButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
