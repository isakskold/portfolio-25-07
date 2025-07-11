"use client";

import React from "react";
import { Code, Database, Cloud, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { IconCard } from "@/components/ui";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: t("about.highlights.frontend.title") as string,
      description: t("about.highlights.frontend.description") as string,
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: t("about.highlights.backend.title") as string,
      description: t("about.highlights.backend.description") as string,
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: t("about.highlights.fullstack.title") as string,
      description: t("about.highlights.fullstack.description") as string,
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
      title: t("about.highlights.performance.title") as string,
      description: t("about.highlights.performance.description") as string,
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-[hsl(var(--secondary))] min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-24">
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
              <IconCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="interactive"
                hover={true}
              />
            ))}
          </div>
        </div>

        {/* Removed individual scroll button */}
      </div>
    </section>
  );
};

export default About;
