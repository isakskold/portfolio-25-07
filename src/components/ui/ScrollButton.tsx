import React from "react";
import { IconButton } from "./Button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ScrollButtonProps {
  direction?: "down" | "up";
  targetId?: string;
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction = "down",
  targetId,
  onClick,
  className = "",
  "aria-label": ariaLabel,
}) => {
  const Icon = direction === "down" ? ChevronDown : ChevronUp;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (targetId) {
      if (targetId === "top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0;
          const additionalOffset = 32; // Extra padding for visual comfort
          const totalOffset = headerHeight + additionalOffset;

          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - totalOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    }
  };

  const defaultAriaLabel =
    direction === "down" ? "Scroll to next section" : "Scroll to top";

  return (
    <IconButton
      icon={Icon}
      size="lg"
      variant="scroll"
      onClick={handleClick}
      aria-label={ariaLabel || defaultAriaLabel}
      className={className}
    />
  );
};

// Convenience components for common patterns
export const ScrollDownButton: React.FC<{
  targetId: string;
  className?: string;
}> = ({ targetId, className = "" }) => (
  <ScrollButton direction="down" targetId={targetId} className={className} />
);

export const ScrollUpButton: React.FC<{
  className?: string;
}> = ({ className = "" }) => (
  <ScrollButton direction="up" targetId="top" className={className} />
);

export default ScrollButton;
