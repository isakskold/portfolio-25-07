"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Code, Database, Cloud } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Skills = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number[]>([]);
  const [animatingOut, setAnimatingOut] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  const scrollToNext = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const skillCategories = [
    {
      title: t("skills.frontend"),
      icon: <Code className="w-8 h-8 text-[hsl(var(--interactive))]" />,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Vue.js",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: t("skills.backend"),
      icon: <Database className="w-8 h-8 text-[hsl(var(--interactive))]" />,
      skills: [
        "Node.js",
        "Python",
        "PostgreSQL",
        "MongoDB",
        "GraphQL",
        "Express.js",
        "FastAPI",
      ],
    },
    {
      title: t("skills.tools"),
      icon: <Cloud className="w-8 h-8 text-[hsl(var(--interactive))]" />,
      skills: [
        "AWS",
        "Docker",
        "Git",
        "CI/CD",
        "Kubernetes",
        "Vercel",
        "Figma",
      ],
    },
  ];

  // Calculate heights
  const maxSkills = Math.max(
    ...skillCategories.map((cat) => cat.skills.length)
  );
  const headerHeight = 96;
  const skillItemHeight = 56;
  const indicatorHeight = 48;
  const padding = 64;
  const maxCardHeight =
    headerHeight + maxSkills * skillItemHeight + indicatorHeight + padding;

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const isCurrentlyExpanded = prev.includes(index);

      if (isCurrentlyExpanded) {
        setAnimatingOut((current) => [...current, index]);
        setTimeout(() => {
          setAnimatingOut((current) => current.filter((i) => i !== index));
        }, 800);
      }

      return isCurrentlyExpanded
        ? prev.filter((item) => item !== index)
        : [...prev, index];
    });
  };

  return (
    <section
      id="skills"
      className="section-padding min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">
            {t("skills.title")}
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-fluid">
          {skillCategories.map((category, categoryIndex) => {
            const isExpanded = expanded.includes(categoryIndex);
            const isAnimatingOut = animatingOut.includes(categoryIndex);
            const hasMoreSkills = category.skills.length > 3;

            const skillsToShow =
              isExpanded || isAnimatingOut
                ? category.skills
                : category.skills.slice(0, 3);

            return (
              <div
                key={categoryIndex}
                className={`flex ${
                  isDesktop
                    ? "items-center justify-center"
                    : "items-start justify-center"
                }`}
                style={{
                  minHeight: isDesktop ? `${maxCardHeight}px` : "auto",
                }}
              >
                <button
                  onClick={() => hasMoreSkills && toggleExpand(categoryIndex)}
                  className={`group w-full p-6 md:p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg border-2 transition-all duration-800 ease-out text-left flex flex-col ${
                    hasMoreSkills
                      ? "border-[hsl(var(--interactive))]/30 hover:border-[hsl(var(--interactive))]/60 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
                      : "border-[hsl(var(--border))] cursor-default"
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 flex-shrink-0">
                    <div className="flex items-center gap-4">
                      <div>{category.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold">
                        {category.title}
                      </h3>
                    </div>
                    {hasMoreSkills && (
                      <ChevronDown
                        className={`w-5 h-5 text-[hsl(var(--interactive))] transition-transform duration-800 ease-out ${
                          isExpanded ? "rotate-180" : ""
                        } group-hover:scale-110`}
                      />
                    )}
                  </div>

                  {/* Skills List with Smooth Height Transition */}
                  <div className="overflow-hidden">
                    <div
                      className="transition-all duration-800 ease-out"
                      style={{
                        maxHeight: isExpanded
                          ? `${category.skills.length * 56}px`
                          : `${Math.min(3, category.skills.length) * 56}px`,
                      }}
                    >
                      <div className="space-y-3">
                        {skillsToShow.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="px-4 py-2 bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] rounded-full text-sm font-medium text-center border border-[hsl(var(--border))]/30 transition-colors group-hover:bg-[hsl(var(--secondary))]/80"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="overflow-hidden">
                    <div
                      className="transition-all duration-600 ease-out"
                      style={{
                        maxHeight:
                          hasMoreSkills && !isExpanded ? "32px" : "0px",
                        opacity: hasMoreSkills && !isExpanded ? 1 : 0,
                      }}
                    >
                      <div className="mt-4 text-center">
                        <span className="text-sm text-[hsl(var(--interactive))] font-medium">
                          +{category.skills.length - 3} {t("skills.more")}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
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

export default Skills;
