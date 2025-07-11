"use client";

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
import { useLanguage } from "@/hooks/useLanguage";
import { Card, IconText, FeatureListItem } from "@/components/ui";

const Contact = () => {
  const { t } = useLanguage();

  // Define sections using translation data
  const getSections = () => {
    return [
      {
        title: t("contact.workArrangements.title") as string,
        icon: Briefcase,
        items: t("contact.workArrangements.items") as string[],
      },
      {
        title: t("contact.locationPreference.title") as string,
        icon: Globe,
        items: t("contact.locationPreference.items") as string[],
      },
      {
        title: t("contact.expertise.title") as string,
        icon: Laptop,
        items: t("contact.expertise.items") as string[],
      },
    ];
  };

  const getWhyWorkWithMe = () => {
    return t("contact.whyWorkItems") as string[];
  };

  const sections = getSections();
  const whyWorkWithMe = getWhyWorkWithMe();

  return (
    <section
      id="contact"
      className="section-padding bg-[hsl(var(--secondary))] min-h-screen flex flex-col justify-center relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-responsive-h2">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            {t("contact.subtitle")}
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
                    title={t("contact.email") as string}
                    subtitle="isaksfrontend@gmail.com"
                    description={t("contact.emailText") as string}
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
                    title={t("contact.linkedin") as string}
                    subtitle="LinkedIn Profile"
                    description={t("contact.linkedinText") as string}
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
                    title={t("contact.github") as string}
                    subtitle="GitHub Profile"
                    description={t("contact.githubText") as string}
                  />
                </div>
              </a>
            </div>

            <Card variant="interactive" className="mt-12" padding="lg">
              <h3 className="text-xl font-bold mb-4">{t("contact.whyWork")}</h3>
              <ul className="space-y-3">
                {whyWorkWithMe.map((item, index) => (
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
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <div
                      className={`flex-shrink-0 ${
                        index % 2 !== 0 ? "md:order-last" : ""
                      }`}
                    >
                      <section.icon className="w-20 h-20 text-[hsl(var(--interactive))]" />
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
                          <FeatureListItem key={itemIndex} icon={ChevronRight}>
                            {item}
                          </FeatureListItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Removed individual ScrollUpButton */}
    </section>
  );
};

export default Contact;
