"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-start text-center"
      style={{
        padding:
          "clamp(6rem, 15vw, 10rem) clamp(1rem, 5vw, 2.5rem) clamp(3rem, 8vw, 5rem)",
      }}
    >
      <div className="container mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className="font-bold text-responsive-h1"
            style={{ marginBottom: "clamp(2rem, 5vw, 3rem)" }}
          >
            <span className="block text-[hsl(var(--foreground))]">
              {t("hero.title")}
            </span>
            <span className="gradient-text">{t("hero.subtitle")}</span>
          </h1>
          <p
            className="text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto px-4 leading-relaxed text-responsive-p"
            style={{ marginBottom: "clamp(2.5rem, 7vw, 4rem)" }}
          >
            {t("hero.description")}
          </p>
          <div
            className="flex flex-row gap-2 sm:gap-3 justify-center items-center px-4"
            style={{ marginBottom: "clamp(2.5rem, 7vw, 4rem)" }}
          >
            <Link
              href="#projects"
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[hsl(var(--interactive))] text-[hsl(var(--interactive-foreground))] font-semibold rounded-lg hover-lift shadow-lg text-center text-xs sm:text-sm md:text-base"
            >
              {t("hero.viewWork")}
            </Link>
            <Link
              href="#" // Add link to resume here
              className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-[hsl(var(--interactive))]/30 hover:border-[hsl(var(--interactive))]/60 text-[hsl(var(--foreground))] font-semibold rounded-lg hover-lift transition-colors text-center text-xs sm:text-sm md:text-base"
            >
              {t("hero.downloadResume")}
            </Link>
          </div>
          <div
            className="flex justify-center space-x-8"
            style={{ marginBottom: "clamp(3rem, 8vw, 5rem)" }}
          >
            <Link
              href="#"
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="#"
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </Link>
            <Link
              href="#"
              className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </Link>
          </div>

          {/* Portrait Section */}
          <div
            className="flex justify-center"
            style={{ marginBottom: "clamp(3rem, 8vw, 5rem)" }}
          >
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden border-4 border-[hsl(var(--interactive))]/30 shadow-2xl hover-lift"
                style={{
                  width: "clamp(10rem, 30vw, 18rem)",
                  height: "clamp(10rem, 30vw, 18rem)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=800&q=80"
                  alt="Developer Portrait"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 hover:scale-110"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[hsl(var(--interactive))]/20 animate-pulse"></div>
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[hsl(var(--interactive))]/20 to-[hsl(var(--primary))]/20 blur-xl -z-10"></div>
            </div>
          </div>

          <button
            onClick={scrollToNext}
            className="mt-12 animate-bounce hover:scale-110 transition-transform cursor-pointer"
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

export default Hero;
