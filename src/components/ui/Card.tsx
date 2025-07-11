import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "interactive" | "secondary";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "interactive" | "secondary";
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  description?: string;
  className?: string;
}

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "default":
      return "bg-[hsl(var(--card))] border border-[hsl(var(--border))]";
    case "interactive":
      return "bg-[hsl(var(--card))] border-2 border-[hsl(var(--interactive))]/20 hover:border-[hsl(var(--interactive))]/40";
    case "secondary":
      return "bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]/30";
    default:
      return "bg-[hsl(var(--card))] border border-[hsl(var(--border))]";
  }
};

const getPaddingClasses = (padding: string) => {
  switch (padding) {
    case "sm":
      return "p-4";
    case "md":
      return "p-6";
    case "lg":
      return "p-6 md:p-8";
    default:
      return "p-6";
  }
};

const baseClasses = "rounded-xl shadow-lg transition-all duration-300";

// Basic Card Component
export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  variant = "default",
  hover = false,
  padding = "md",
}) => {
  const variantClasses = getVariantClasses(variant);
  const paddingClasses = getPaddingClasses(padding);
  const hoverClasses = hover ? "hover-lift transition-colors" : "";

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${paddingClasses} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
};

// Icon Card Component (for About highlights, etc.)
export const IconCard: React.FC<IconCardProps> = ({
  icon,
  title,
  description,
  className = "",
  variant = "interactive",
  hover = true,
  padding = "md",
}) => {
  return (
    <Card
      variant={variant}
      hover={hover}
      padding={padding}
      className={className}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-[hsl(var(--muted-foreground))]">{description}</p>
      )}
    </Card>
  );
};

// Contact Card Component (for contact info)
export const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  value,
  description,
  className = "",
}) => {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--interactive))]/10 rounded-lg flex items-center justify-center border border-[hsl(var(--interactive))]/30">
        <Icon className="w-6 h-6 text-[hsl(var(--interactive))]" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-[hsl(var(--muted-foreground))]">{value}</p>
        {description && (
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// Skills Card Component (for expandable skill categories)
export const SkillsCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isExpandable?: boolean;
  onToggle?: () => void;
  className?: string;
}> = ({
  title,
  icon,
  children,
  isExpandable = false,
  onToggle,
  className = "",
}) => {
  const Component = isExpandable ? "button" : "div";

  return (
    <Component
      onClick={isExpandable ? onToggle : undefined}
      className={`group w-full p-6 md:p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg border-2 transition-all duration-800 ease-out text-left flex flex-col ${
        isExpandable
          ? "border-[hsl(var(--interactive))]/30 hover:border-[hsl(var(--interactive))]/60 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          : "border-[hsl(var(--border))] cursor-default"
      } ${className}`}
    >
      <div className="flex items-center justify-between mb-6 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div>{icon}</div>
          <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        </div>
        {isExpandable && (
          <div className="text-[hsl(var(--interactive))] transition-transform duration-800 ease-out group-hover:scale-110">
            {/* ChevronDown icon would be passed as children or handled by parent */}
          </div>
        )}
      </div>
      {children}
    </Component>
  );
};

export default Card;
