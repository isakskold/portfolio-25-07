"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["about", "projects", "skills", "contact"];
      const offset = 150;

      const currentSection = sections.find((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });

      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = (newLang: "en" | "sv") => {
    setLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          isScrolled ? "bg-[hsl(var(--background))]/80 backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="text-2xl font-bold gradient-text">
            DevPortfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className={`text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "about" ? "nav-link-active" : ""
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#projects"
              className={`text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "projects" ? "nav-link-active" : ""
              }`}
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="#skills"
              className={`text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "skills" ? "nav-link-active" : ""
              }`}
            >
              {t("nav.skills")}
            </Link>
            <Link
              href="#contact"
              className={`text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "contact" ? "nav-link-active" : ""
              }`}
            >
              {t("nav.contact")}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => toggleLanguage("en")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  language === "en"
                    ? "bg-[hsl(var(--interactive))]/20 text-[hsl(var(--interactive))]"
                    : "text-[hsl(var(--foreground))] opacity-60 hover:opacity-100"
                }`}
                aria-label="Switch to English"
              >
                <span className="text-lg">🇺🇸</span>
                <span className="text-sm font-medium">EN</span>
              </button>
              <button
                onClick={() => toggleLanguage("sv")}
                className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${
                  language === "sv"
                    ? "bg-[hsl(var(--interactive))]/20 text-[hsl(var(--interactive))]"
                    : "text-[hsl(var(--foreground))] opacity-60 hover:opacity-100"
                }`}
                aria-label="Switch to Swedish"
              >
                <span className="text-lg">🇸🇪</span>
                <span className="text-sm font-medium">SV</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[hsl(var(--foreground))] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[hsl(var(--background))]/95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto flex flex-col items-center space-y-6 py-8">
            <Link
              href="#about"
              className={`text-2xl text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "about" ? "nav-link-active" : ""
              }`}
              onClick={closeMenu}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#projects"
              className={`text-2xl text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "projects" ? "nav-link-active" : ""
              }`}
              onClick={closeMenu}
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="#skills"
              className={`text-2xl text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "skills" ? "nav-link-active" : ""
              }`}
              onClick={closeMenu}
            >
              {t("nav.skills")}
            </Link>
            <Link
              href="#contact"
              className={`text-2xl text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity ${
                activeSection === "contact" ? "nav-link-active" : ""
              }`}
              onClick={closeMenu}
            >
              {t("nav.contact")}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={() => {
                  toggleLanguage("en");
                  closeMenu();
                }}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  language === "en"
                    ? "bg-[hsl(var(--interactive))]/20 text-[hsl(var(--interactive))]"
                    : "text-[hsl(var(--foreground))] opacity-60 hover:opacity-100"
                }`}
                aria-label="Switch to English"
              >
                <span className="text-2xl">🇺🇸</span>
                <span className="text-base font-semibold">EN</span>
              </button>
              <button
                onClick={() => {
                  toggleLanguage("sv");
                  closeMenu();
                }}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  language === "sv"
                    ? "bg-[hsl(var(--interactive))-/20 text-[hsl(var(--interactive))]"
                    : "text-[hsl(var(--foreground))] opacity-60 hover:opacity-100"
                }`}
                aria-label="Switch to Swedish"
              >
                <span className="text-2xl">🇸🇪</span>
                <span className="text-base font-semibold">SV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
