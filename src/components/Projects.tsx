"use client";

import React from "react";
import {
  Code,
  Database,
  Smartphone,
  ExternalLink,
  Github,
  ChevronDown,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

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

  const scrollToNext = () => {
    document.getElementById("skills")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Define projects with proper feature arrays based on language
  const getProjects = () => {
    const ecommerceFeatures =
      language === "sv"
        ? [
            "Betalningsintegration",
            "Realtidsuppdateringar",
            "Adminpanel",
            "Mobilresponsiv",
          ]
        : [
            "Payment Integration",
            "Real-time Updates",
            "Admin Dashboard",
            "Mobile Responsive",
          ];

    const saasFeatures =
      language === "sv"
        ? [
            "Realtidssamarbete",
            "Filhantering",
            "Avancerad analys",
            "Teamarbetsytor",
          ]
        : [
            "Real-time Collaboration",
            "File Management",
            "Advanced Analytics",
            "Team Workspaces",
          ];

    const dashboardFeatures =
      language === "sv"
        ? [
            "Interaktiva diagram",
            "Realtidsdata",
            "Anpassade rapporter",
            "Dataexport",
          ]
        : [
            "Interactive Charts",
            "Real-time Data",
            "Custom Reports",
            "Data Export",
          ];

    return [
      {
        category: "Full Stack",
        title: t("projects.ecommerce.title"),
        description: t("projects.ecommerce.description"),
        features: ecommerceFeatures,
        technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe"],
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        category: "SaaS",
        title: t("projects.saas.title"),
        description: t("projects.saas.description"),
        features: saasFeatures,
        technologies: ["Next.js", "TypeScript", "Prisma", "tRPC", "Vercel"],
        image:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        githubUrl: "#",
      },
      {
        category: "Data Visualization",
        title: t("projects.dashboard.title"),
        description: t("projects.dashboard.description"),
        features: dashboardFeatures,
        technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Redis"],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        liveUrl: "#",
        githubUrl: "#",
      },
    ];
  };

  const projects = getProjects();

  return (
    <section
      id="projects"
      className="section-padding bg-[hsl(var(--background))]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">
            {t("projects.title")}
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {t("projects.subtitle")}
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

                <p className="text-lg text-[hsl(var(--muted-foreground))] mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    {t("projects.keyFeatures")}
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-[hsl(var(--muted-foreground))]"
                      >
                        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    {t("projects.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] rounded-full text-sm font-medium border border-[hsl(var(--interactive))]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-[hsl(var(--interactive))] text-[hsl(var(--interactive-foreground))] px-6 py-3 rounded-lg font-semibold hover-lift"
                  >
                    <ExternalLink size={18} />
                    {t("projects.liveDemo")}
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 border-2 border-[hsl(var(--interactive))]/30 hover:border-[hsl(var(--interactive))]/60 text-[hsl(var(--foreground))] px-6 py-3 rounded-lg font-semibold hover-lift transition-colors"
                  >
                    <Github size={18} />
                    {t("projects.code")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button
            onClick={scrollToNext}
            className="animate-bounce hover:scale-110 transition-transform cursor-pointer"
            aria-label="Scroll to next section"
          >
            <ChevronDown
              size={32}
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--interactive))]"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
