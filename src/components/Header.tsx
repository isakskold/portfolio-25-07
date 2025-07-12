"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button, IconButton } from "@/components/ui";
import ReactCountryFlag from "react-country-flag";

function debounce<F extends (...args: any[]) => any>(
  func: F,
  wait: number
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<F>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [currentHash, setCurrentHash] = useState("");
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, []);

  const getLocalizedPath = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "sv") {
      segments[0] = locale;
    } else {
      segments.unshift(locale);
    }
    return `/${segments.join("/")}${currentHash}`;
  };

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const handleHomeClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (["/en", "/sv"].includes(pathname)) {
      e.preventDefault();
      if (window.location.hash) {
        router.replace(pathname, { scroll: false });
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (typeof document !== "undefined") {
        const headerEl = document.querySelector("header");
        if (headerEl) {
          const height = headerEl.getBoundingClientRect().height;
          document.documentElement.style.setProperty(
            "--header-height",
            `${height}px`
          );
        }
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    const debouncedUpdateUrl = debounce((hash) => {
      setCurrentHash(hash);
      router.replace(hash || pathname, { scroll: false });
    }, 150);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["about", "projects", "contact"];
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

      if (currentSection) {
        debouncedUpdateUrl(`#${currentSection}`);
      } else if (window.scrollY < 400) {
        // Only remove hash if we are at the top of the page
        debouncedUpdateUrl("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, router]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          onClick={handleHomeClick}
          className="text-2xl font-bold gradient-text"
        >
          Isak Sköld
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-[hsl(var(--interactive))]"
                  : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--interactive))]"
              }`}
            >
              {link.label as string}
            </a>
          ))}
          {/* Language Toggle */}
          <div className="flex items-center space-x-2 group">
            <Link href={getLocalizedPath("en")} passHref>
              <Button
                variant="language"
                size="sm"
                aria-label="Switch to English"
                className={`hover:bg-[hsl(var(--interactive))]/40 ${
                  language === "en"
                    ? "bg-[hsl(var(--interactive))]/30 group-hover:[&:not(:hover)]:bg-[hsl(var(--interactive))]/10"
                    : ""
                }`}
              >
                <ReactCountryFlag
                  countryCode="GB"
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                />
              </Button>
            </Link>
            <Link href={getLocalizedPath("sv")} passHref>
              <Button
                variant="language"
                size="sm"
                aria-label="Switch to Swedish"
                className={`hover:bg-[hsl(var(--interactive))]/40 ${
                  language === "sv"
                    ? "bg-[hsl(var(--interactive))]/30 group-hover:[&:not(:hover)]:bg-[hsl(var(--interactive))]/10"
                    : ""
                }`}
              >
                <ReactCountryFlag
                  countryCode="SE"
                  svg
                  style={{ width: "1.5em", height: "1.5em" }}
                />
              </Button>
            </Link>
          </div>
        </nav>
        <div className="md:hidden">
          <IconButton icon={Menu} onClick={toggleMenu} aria-label="Open menu" />
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        ></div>
      )}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-background z-50 p-6 flex flex-col shadow-2xl">
          <button onClick={closeMenu} className="self-end p-2 text-2xl">
            <X />
          </button>
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-2xl font-medium text-[hsl(var(--foreground))] transition-colors duration-300 hover:text-[hsl(var(--primary))]"
              >
                {link.label as string}
              </a>
            ))}
            {/* Mobile Language Toggle */}
            <div className="flex items-center gap-4 pt-4 group">
              <Link href={getLocalizedPath("en")} passHref>
                <Button
                  variant="language"
                  size="sm"
                  onClick={closeMenu}
                  aria-label="Switch to English"
                  className={`hover:bg-[hsl(var(--interactive))]/40 ${
                    language === "en"
                      ? "bg-[hsl(var(--interactive))]/30 group-hover:[&:not(:hover)]:bg-[hsl(var(--interactive))]/10"
                      : ""
                  }`}
                >
                  <ReactCountryFlag
                    countryCode="GB"
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                </Button>
              </Link>
              <Link href={getLocalizedPath("sv")} passHref>
                <Button
                  variant="language"
                  size="sm"
                  onClick={closeMenu}
                  aria-label="Switch to Swedish"
                  className={`hover:bg-[hsl(var(--interactive))]/40 ${
                    language === "sv"
                      ? "bg-[hsl(var(--interactive))]/30 group-hover:[&:not(:hover)]:bg-[hsl(var(--interactive))]/10"
                      : ""
                  }`}
                >
                  <ReactCountryFlag
                    countryCode="SE"
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                  />
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
