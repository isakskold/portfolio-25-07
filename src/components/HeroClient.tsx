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
      className="relative flex flex-col items-center justify-center text-center px-4"
    >
      <div className="container mx-auto">
        <div className="relative z-10 max-w-4xl mx-auto space-y-4 sm:space-y-6">
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
                href="#"
                variant="secondary"
                size="md"
                disabled={true}
              >
                {downloadResume}
              </LinkButton>
            </Tooltip>
          </div>

          <div className="mt-2 sm:mt-4">
            <SocialLinks
              links={mappedSocialLinks}
              className="justify-center space-x-5 sm:space-x-8"
            />
          </div>

          {/* Portrait Section */}
          <div className="flex justify-center mt-4">
            <div className="relative">
              <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] xl:w-[340px] xl:h-[340px] rounded-2xl overflow-hidden border-4 border-[hsl(var(--interactive))]/30 shadow-2xl hover-lift">
                <Image
                  src="/pngs/profilePic.jpg"
                  alt="Isak Sköld - Full Stack Developer"
                  fill
                  sizes="(max-width: 639px) 200px, (max-width: 767px) 220px, (max-width: 1023px) 260px, (max-width: 1279px) 300px, 340px"
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  style={{
                    imageRendering: "-webkit-optimize-contrast",
                    backfaceVisibility: "hidden",
                    transform: "scale(1.1)",
                  }}
                  quality={95}
                  priority
                  itemProp="image"
                  itemScope
                  itemType="https://schema.org/ImageObject"
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
