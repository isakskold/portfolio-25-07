import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "skill" | "technology" | "feature";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "default":
      return "bg-[#232323] text-white/70 border border-[#333333]/30";
    case "skill":
      return "bg-[#232323] text-white/70 border border-[#333333]/30 group-hover:bg-[#282828]";
    case "technology":
      return "bg-[#232323] text-white/70 border border-[#ff6b00]/30";
    case "feature":
      return "bg-transparent text-white/70";
    default:
      return "bg-[#232323] text-white/70 border border-[#333333]/30";
  }
};

const getSizeClasses = (size: string) => {
  switch (size) {
    case "sm":
      return "px-2 py-1 text-xs";
    case "md":
      return "px-3 py-1 text-sm";
    case "lg":
      return "px-4 py-2 text-base";
    default:
      return "px-3 py-1 text-sm";
  }
};

const baseClasses = "rounded-full font-medium transition-colors";

// Standard Badge Component
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  return (
    <span
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
    >
      {children}
    </span>
  );
};

// Feature Badge Component (with bullet point)
export const FeatureBadge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`flex items-center text-[hsl(var(--muted-foreground))] ${className}`}
    >
      <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3 flex-shrink-0"></div>
      {children}
    </div>
  );
};

// Skill Badge Component (for skills list)
export const SkillBadge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <Badge variant="skill" className={`text-center ${className}`}>
      {children}
    </Badge>
  );
};

// Technology Badge Component (for project technologies)
export const TechnologyBadge: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <Badge variant="technology" className={className}>
      {children}
    </Badge>
  );
};

export default Badge;
