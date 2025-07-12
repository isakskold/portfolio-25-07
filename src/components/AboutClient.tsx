"use client";

import React from "react";
import { Code, Database, Cloud, ShieldCheck } from "lucide-react";
import { IconCard } from "@/components/ui";

interface Highlight {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface AboutClientProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  description3: string;
  highlights: Highlight[];
}

const AboutClient = ({
  title,
  subtitle,
  description1,
  description2,
  description3,
  highlights,
}: AboutClientProps) => {
  const iconMap: { [key: string]: React.ElementType } = {
    Code,
    Database,
    Cloud,
    ShieldCheck,
  };

  return (
    <section
      id="about"
      className="section-padding bg-[hsl(var(--secondary))] relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="font-bold mb-4 text-responsive-h2">{title}</h2>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-fluid items-start">
          <div className="lg:col-span-2 space-y-4 text-base md:text-lg text-[hsl(var(--muted-foreground))]">
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-fluid">
            {highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <IconCard
                  key={index}
                  icon={
                    IconComponent ? (
                      <IconComponent className={`w-8 h-8 ${item.color}`} />
                    ) : null
                  }
                  title={item.title}
                  description={item.description}
                  variant="interactive"
                  hover={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClient;
