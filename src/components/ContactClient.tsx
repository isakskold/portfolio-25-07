"use client";

import React from "react";
import {
  Mail,
  Briefcase,
  Laptop,
  Globe,
  CheckCircle,
  ChevronRight,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Card, IconText, FeatureListItem } from "@/components/ui";

interface Section {
  title: string;
  icon: string;
  items: string[];
}

interface ContactClientProps {
  title: string;
  subtitle: string;
  email: string;
  emailText: string;
  linkedin: string;
  linkedinText: string;
  github: string;
  githubText: string;
  whyWork: string;
  whyWorkItems: string[];
  sections: Section[];
}

const ContactClient = ({
  title,
  subtitle,
  email,
  emailText,
  linkedin,
  linkedinText,
  github,
  githubText,
  whyWork,
  whyWorkItems,
  sections,
}: ContactClientProps) => {
  const iconMap: { [key: string]: React.ElementType } = {
    Briefcase,
    Globe,
    Laptop,
  };

  return (
    <section
      id="contact"
      className="section-padding bg-[hsl(var(--secondary))] min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">{title}</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <a href="mailto:isaksfrontend@gmail.com" className="block">
                <div className="p-4 rounded-xl border-2 border-[hsl(var(--interactive))]/20 bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--interactive))]/40 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer relative group">
                  <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-60 group-hover:text-[hsl(var(--interactive))] group-hover:opacity-100 transition-all duration-300" />
                  <IconText
                    icon={Mail}
                    title={email}
                    subtitle="isaksfrontend@gmail.com"
                    description={emailText}
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/isak-sk%C3%B6ld-3b7a0b28a/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-4 rounded-xl border-2 border-[hsl(var(--interactive))]/20 bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--interactive))]/40 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer relative group">
                  <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-60 group-hover:text-[hsl(var(--interactive))] group-hover:opacity-100 transition-all duration-300" />
                  <IconText
                    icon={Linkedin}
                    title={linkedin}
                    subtitle="LinkedIn Profile"
                    description={linkedinText}
                  />
                </div>
              </a>
              <a
                href="https://github.com/isakskold"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="p-4 rounded-xl border-2 border-[hsl(var(--interactive))]/20 bg-[hsl(var(--card))] hover:bg-[hsl(var(--muted))] hover:border-[hsl(var(--interactive))]/40 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer relative group">
                  <ExternalLink className="absolute top-3 right-3 w-4 h-4 text-[hsl(var(--muted-foreground))] opacity-60 group-hover:text-[hsl(var(--interactive))] group-hover:opacity-100 transition-all duration-300" />
                  <IconText
                    icon={Github}
                    title={github}
                    subtitle="GitHub Profile"
                    description={githubText}
                  />
                </div>
              </a>
            </div>

            <Card variant="interactive" className="mt-12" padding="lg">
              <h3 className="text-xl font-bold mb-4">{whyWork}</h3>
              <ul className="space-y-3">
                {whyWorkItems.map((item, index) => (
                  <FeatureListItem
                    key={index}
                    icon={CheckCircle}
                    className="text-green-500"
                  >
                    {item}
                  </FeatureListItem>
                ))}
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card
              variant="interactive"
              className="h-full flex flex-col justify-center"
              padding="lg"
            >
              <div className="space-y-12">
                {sections.map((section, index) => {
                  const IconComponent = iconMap[section.icon];
                  return (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-center gap-8"
                    >
                      <div
                        className={`flex-shrink-0 ${
                          index % 2 !== 0 ? "md:order-last" : ""
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent className="w-20 h-20 text-[hsl(var(--interactive))]" />
                        )}
                      </div>
                      <div
                        className={`flex-grow text-center ${
                          index % 2 !== 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <h4 className="text-2xl font-bold mb-3">
                          {section.title}
                        </h4>
                        <ul
                          className={`space-y-2 ${
                            index % 2 !== 0 ? "inline-block text-left" : ""
                          }`}
                        >
                          {section.items.map((item, itemIndex) => (
                            <FeatureListItem
                              key={itemIndex}
                              icon={ChevronRight}
                            >
                              {item}
                            </FeatureListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactClient;
