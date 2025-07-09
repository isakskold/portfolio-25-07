"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center section-padding">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="block text-[hsl(var(--foreground))]">
            Full Stack
          </span>
          <span className="gradient-text">Developer</span>
        </h1>
        <p className="text-xl text-[hsl(var(--muted-foreground))] mb-8 max-w-3xl mx-auto">
          I craft exceptional digital experiences through clean code, thoughtful
          design, and scalable architecture. Specializing in modern web
          technologies and enterprise solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 bg-[hsl(var(--interactive))] text-[hsl(var(--interactive-foreground))] font-semibold rounded-lg hover-lift shadow-lg"
          >
            View My Work
          </Link>
          <Link
            href="#" // Add link to resume here
            className="px-8 py-3 border-2 border-[hsl(var(--interactive))]/30 hover:border-[hsl(var(--interactive))]/60 text-[hsl(var(--foreground))] font-semibold rounded-lg hover-lift transition-colors"
          >
            Download Resume
          </Link>
        </div>
        <div className="flex justify-center space-x-6">
          <Link
            href="#"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
          >
            <Github size={24} />
          </Link>
          <Link
            href="#"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="#"
            className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
          >
            <Mail size={24} />
          </Link>
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

export default Hero;
