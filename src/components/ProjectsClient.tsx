"use client";

import React from "react";
import Image from "next/image";
import { Code, Database, Smartphone, ExternalLink, Github } from "lucide-react";
import { LinkButton, TechnologyBadge, FeatureListItem } from "@/components/ui";
import ProjectJsonLd from "./ProjectJsonLd";

export type Project = {
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

interface ProjectsClientProps {
  title: string;
  subtitle: string;
  keyFeatures: string;
  technologies: string;
  codeButton: string;
  projects: Project[];
}

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

const ProjectsClient = ({
  title,
  subtitle,
  keyFeatures,
  technologies,
  codeButton,
  projects,
}: ProjectsClientProps) => {
  return (
    <section
      id="projects"
      className="section-padding bg-[hsl(var(--background))] relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">{title}</h2>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center`}
            >
              <ProjectJsonLd project={project} />
              <div
                className={`relative w-full h-80 ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-xl shadow-lg hover-lift border-2 border-[hsl(var(--interactive))]/20"
                  priority={index === 0}
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-[hsl(var(--primary))]">
                  {getIcon(project.category)}
                  <span className="font-medium">{project.category}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p
                  className="text-base md:text-lg text-[hsl(var(--muted-foreground))] mb-6"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                ></p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{keyFeatures}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm md:text-base">
                    {project.features.map((feature, featureIndex) => (
                      <FeatureListItem key={featureIndex}>
                        {feature}
                      </FeatureListItem>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <TechnologyBadge key={techIndex}>{tech}</TechnologyBadge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <LinkButton href={project.liveUrl} variant="primary" external>
                    <ExternalLink size={18} />
                    {project.buttonText}
                  </LinkButton>
                  {project.showGithub && (
                    <LinkButton
                      href={project.githubUrl}
                      variant="secondary"
                      external
                    >
                      <Github size={18} />
                      {codeButton}
                    </LinkButton>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsClient;
