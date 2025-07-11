"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { IconButton } from "./Button";

const getSections = (): HTMLElement[] => {
  return Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
};

const scrollToNextSection = () => {
  const sections = getSections();
  if (sections.length === 0) return;

  const viewportMiddle = window.scrollY + window.innerHeight / 2;

  let currentIndex = sections.findIndex((section) => {
    const rect = section.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const bottom = top + rect.height;
    return top <= viewportMiddle && bottom >= viewportMiddle;
  });

  // If none found (e.g., top of page), set -1 to scroll to first section
  if (currentIndex === -1) currentIndex = -1;

  const nextIndex = currentIndex + 1;
  if (nextIndex < sections.length) {
    const element = sections[nextIndex];
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const additionalOffset = 32; // Extra padding for visual comfort
    const totalOffset = headerHeight + additionalOffset;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const GlobalScrollButton: React.FC = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = getSections();
      if (sections.length === 0) return;

      const viewportMiddle = window.scrollY + window.innerHeight / 2;

      // Detect if we've passed the start of the last section
      const lastSectionTop =
        sections[sections.length - 1].getBoundingClientRect().top +
        window.scrollY;

      setAtBottom(viewportMiddle >= lastSectionTop - 10); // small buffer
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    if (atBottom) {
      scrollToTop();
    } else {
      scrollToNextSection();
    }
  };

  const Icon = atBottom ? ChevronUp : ChevronDown;

  return (
    <IconButton
      icon={Icon}
      variant="scroll"
      size="lg"
      onClick={handleClick}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label={atBottom ? "Scroll to top" : "Scroll to next section"}
    />
  );
};

export default GlobalScrollButton;
