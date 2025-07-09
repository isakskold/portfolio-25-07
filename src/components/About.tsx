"use client";

import React from "react";
import { Code, Database, Globe, Zap, ChevronDown } from "lucide-react";

const About = () => {
  const scrollToNext = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Frontend Excellence",
      description: "Modern React, TypeScript, and cutting-edge UI frameworks",
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Backend Mastery",
      description: "Scalable APIs, databases, and cloud infrastructure",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Full Stack Vision",
      description: "End-to-end solutions from concept to deployment",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance Focus",
      description: "Optimized applications that scale and perform",
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-[hsl(var(--secondary))] min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            A passionate full stack developer with 5+ years of experience
            building robust web applications for startups and enterprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-4 text-lg text-[hsl(var(--muted-foreground))]">
            <p>
              I specialize in creating seamless digital experiences that bridge
              the gap between beautiful design and powerful functionality. My
              approach combines technical expertise with business understanding
              to deliver solutions that truly make an impact.
            </p>
            <p>
              From architecting scalable backend systems to crafting intuitive
              user interfaces, I bring a comprehensive skill set that ensures
              your project succeeds at every level.
            </p>
            <p>
              I believe in writing clean, maintainable code and staying current
              with the latest technologies while prioritizing proven, stable
              solutions for production applications.
            </p>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown
          size={32}
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--interactive))]"
        />
      </button>
    </section>
  );
};

export default About;
