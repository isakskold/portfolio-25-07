import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
}

interface ButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary" | "icon" | "language" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface LinkButtonProps extends BaseButtonProps {
  variant?: "primary" | "secondary" | "icon" | "language" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  href: string;
  external?: boolean;
}

interface IconButtonProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  variant?: "icon" | "scroll";
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
}

const getVariantClasses = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-[#ff6b00] text-white hover:opacity-90";
    case "secondary":
      return "border-2 border-white/30 text-white hover:bg-white/10";
    case "language":
      return "text-[hsl(var(--foreground))] transition-colors duration-200 hover:bg-white/10";
    case "icon":
      return "text-[hsl(var(--muted-foreground))] hover:text-white";
    case "scroll":
      return "text-[hsl(var(--muted-foreground))] hover:text-white animate-bounce hover:scale-110";
    case "ghost":
      return "text-white hover:bg-white/10 bg-transparent";
    default:
      return "bg-[#ff6b00] text-white hover:opacity-90";
  }
};

const getSizeClasses = (size: string, variant: string) => {
  if (variant === "icon" || variant === "scroll" || size === "icon") {
    return "p-2";
  }

  switch (size) {
    case "sm":
      return "px-4 py-2 text-xs sm:text-sm";
    case "md":
      return "px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base";
    case "lg":
      return "px-6 py-3 text-base sm:text-lg";
    default:
      return "px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base";
  }
};

const baseClasses =
  "font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--interactive))]/50 disabled:opacity-50 disabled:cursor-not-allowed";

// Standard Button Component
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled,
  type = "button",
  ...props
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size, variant);
  const hoverEffect =
    variant === "primary" || variant === "secondary" ? "hover-lift" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Link Button Component (using Next.js Link)
export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  disabled = false,
  ...props
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size, variant);
  const hoverEffect =
    variant === "primary" || (variant === "secondary" && !disabled)
      ? "hover-lift"
      : "";

  const buttonClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${hoverEffect} ${className} inline-flex items-center justify-center gap-2 text-center`;

  if (disabled) {
    return (
      <span className={buttonClasses} {...props}>
        {children}
      </span>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses} {...props}>
      {children}
    </Link>
  );
};

// Icon Button Component
export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  size = "md",
  variant = "icon",
  className = "",
  onClick,
  disabled,
  ...props
}) => {
  const variantClasses = getVariantClasses(variant);
  const hoverEffect =
    variant === "scroll"
      ? "transition-transform cursor-pointer"
      : "transition-colors";

  const iconSize = size === "lg" ? 32 : size === "sm" ? 20 : 24;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variantClasses} ${hoverEffect} ${className} focus:outline-none`}
      {...props}
    >
      <Icon size={iconSize} />
    </button>
  );
};

// Language Button Component (specialized for language toggle)
export const LanguageButton: React.FC<{
  flag: string;
  code: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
  "aria-label"?: string;
}> = ({ flag, code, isActive, onClick, className = "", ...props }) => {
  const activeClasses = isActive
    ? "bg-[hsl(var(--interactive))]/20 text-[hsl(var(--interactive))]"
    : "text-[hsl(var(--foreground))] opacity-60 hover:opacity-100";

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-1 px-2 py-1 rounded transition-colors ${activeClasses} ${className}`}
      {...props}
    >
      <span className="text-lg">{flag}</span>
      {code && <span className="text-sm font-medium">{code}</span>}
    </button>
  );
};

export default Button;
