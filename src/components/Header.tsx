"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-lg text-[hsl(var(--foreground))] opacity-80 hover:opacity-100 transition-opacity"
            >
              Contact
            </Link>
          </nav>
          {/* Mobile menu can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
