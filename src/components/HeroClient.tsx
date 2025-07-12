"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { LinkButton, SocialLinks, Tooltip } from "@/components/ui";

interface SocialLinkProps {
  icon: string;
  href: string;
  label: string;
}

interface HeroClientProps {
  title: string;
  subtitle: string;
  description: string;
  viewWork: string;
  downloadResume: string;
  socialLinks: SocialLinkProps[];
}

const HeroClient = ({
  title,
  subtitle,
  description,
  viewWork,
  downloadResume,
  socialLinks,
}: HeroClientProps) => {
  // Convert string icon names to actual icon components
  const iconMap = {
    Github,
    Linkedin,
    Mail,
  };

  const mappedSocialLinks = socialLinks.map((link) => ({
    ...link,
    icon: iconMap[link.icon as keyof typeof iconMap],
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div className="container mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="font-bold text-responsive-h1">
            <span className="block text-[hsl(var(--foreground))]">{title}</span>
            <span className="gradient-text">{subtitle}</span>
          </h1>

          <p className="text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto leading-relaxed text-responsive-p">
            {description}
          </p>

          <div className="flex flex-row gap-2 sm:gap-3 justify-center items-center">
            <LinkButton href="#projects" variant="primary" size="md">
              {viewWork}
            </LinkButton>
            <Tooltip content="Coming soon" position="top">
              <LinkButton
                href="#" // Add link to resume here
                variant="secondary"
                size="md"
                disabled={true}
              >
                {downloadResume}
              </LinkButton>
            </Tooltip>
          </div>

          <div>
            <SocialLinks
              links={mappedSocialLinks}
              className="justify-center space-x-8"
            />
          </div>

          {/* Portrait Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden border-4 border-[hsl(var(--interactive))]/30 shadow-2xl hover-lift"
                style={{
                  width: "clamp(8rem, 25vw, 14rem)",
                  height: "clamp(8rem, 25vw, 14rem)",
                }}
              >
                <Image
                  src="/pngs/profilePic.jpg"
                  alt="Developer Portrait"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    backfaceVisibility: "hidden",
                    transform: "scale(1.2)",
                  }}
                  quality={95}
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[hsl(var(--interactive))]/20 animate-pulse"></div>
              {/* Background glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[hsl(var(--interactive))]/20 to-[hsl(var(--primary))]/20 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroClient;
