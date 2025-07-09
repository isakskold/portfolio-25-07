"use client";

import React from "react";
import { Code, Database, Globe, Zap, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: t("about.highlights.frontend.title"),
      description: t("about.highlights.frontend.description"),
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: t("about.highlights.backend.title"),
      description: t("about.highlights.backend.description"),
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: t("about.highlights.fullstack.title"),
      description: t("about.highlights.fullstack.description"),
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: t("about.highlights.performance.title"),
      description: t("about.highlights.performance.description"),
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-[hsl(var(--secondary))] min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">
            {t("about.title")}
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-fluid items-start">
          <div className="lg:col-span-2 space-y-4 text-lg text-[hsl(var(--muted-foreground))]">
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
            <p>{t("about.description3")}</p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-fluid">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-[hsl(var(--card))] rounded-xl hover-lift border-2 border-[hsl(var(--interactive))]/20 hover:border-[hsl(var(--interactive))]/40 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-[hsl(var(--muted-foreground))]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
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

export default About;
