import React from "react";
import { LucideIcon } from "lucide-react";

interface IconTextProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

interface FeatureListItemProps {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

// Basic IconText component for contact info sections
export const IconText: React.FC<IconTextProps> = ({
  icon: Icon,
  title,
  subtitle,
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
        {subtitle && (
          <p className="text-[hsl(var(--muted-foreground))]">{subtitle}</p>
        )}
        {description && (
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

// Feature list item with optional icon or bullet point
export const FeatureListItem: React.FC<FeatureListItemProps> = ({
  icon: Icon,
  children,
  className = "",
}) => {
  return (
    <li className={`flex items-center ${className}`}>
      {Icon ? (
        <Icon className="w-5 h-5 mr-3 text-[hsl(var(--interactive))] flex-shrink-0" />
      ) : (
        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3 flex-shrink-0"></div>
      )}
      <span>{children}</span>
    </li>
  );
};

// Social media links component
export const SocialLinks: React.FC<{
  links: Array<{
    icon: LucideIcon;
    href: string;
    label: string;
  }>;
  className?: string;
}> = ({ links, className = "" }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--interactive))]"
          aria-label={link.label}
        >
          <link.icon size={20} className="sm:w-6 sm:h-6" />
        </a>
      ))}
    </div>
  );
};

export default IconText;
