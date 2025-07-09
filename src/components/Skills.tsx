"use client";

import React, { useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ChevronDown } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
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
    title: "Backend",
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
    title: "Tools & Cloud",
    skills: ["AWS", "Docker", "Git", "CI/CD", "Kubernetes", "Vercel", "Figma"],
  },
];

const Skills = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpanded((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            with modern web technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold text-center mb-4">
                {category.title}
              </h3>
              {isDesktop ? (
                <div className="h-64 overflow-hidden relative">
                  <div
                    className={`animate-scroll ${
                      categoryIndex === 1 ? "animate-scroll-reverse" : ""
                    }`}
                    style={
                      {
                        "--animation-duration": `${
                          category.skills.length * 3
                        }s`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="pb-3">
                      <ul className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="w-fit mx-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pb-3" aria-hidden="true">
                      <ul className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <li
                            key={skillIndex}
                            className="w-fit mx-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <ul className="space-y-3 text-center">
                    {(expanded.includes(categoryIndex)
                      ? category.skills
                      : category.skills.slice(0, 3)
                    ).map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="inline-block mx-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {category.skills.length > 3 && (
                    <button
                      onClick={() => toggleExpand(categoryIndex)}
                      className="mt-4 mx-auto flex items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))]"
                    >
                      {expanded.includes(categoryIndex)
                        ? "Show Less"
                        : "Show More"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expanded.includes(categoryIndex) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
