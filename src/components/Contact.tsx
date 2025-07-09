"use client";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Laptop,
  Globe,
  CheckCircle,
  ChevronRight,
  Github,
  Linkedin,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Define sections with proper arrays based on language
  const getSections = () => {
    const workArrangementItems =
      language === "sv"
        ? ["Heltidsroller", "Frilans & kontrakt"]
        : ["Full-Time Roles", "Freelance & Contract"];

    const locationItems =
      language === "sv"
        ? ["Distans", "På plats & flytt-vänlig"]
        : ["Remote", "Onsite & Relocation-friendly"];

    const expertiseItems =
      language === "sv"
        ? [
            "Frontend-utveckling (React, Next.js, Vue)",
            "Backend & API:er (REST, GraphQL)",
            "Databaser (SQL, NoSQL)",
            "Moln & infrastruktur (AWS, Docker)",
          ]
        : [
            "Frontend Development (React, Next.js, Vue)",
            "Backend & APIs (REST, GraphQL)",
            "Databases (SQL, NoSQL)",
            "Cloud & Infrastructure (AWS, Docker)",
          ];

    return [
      {
        title: t("contact.workArrangements.title"),
        icon: Briefcase,
        items: workArrangementItems,
      },
      {
        title: t("contact.locationPreference.title"),
        icon: Globe,
        items: locationItems,
      },
      {
        title: t("contact.expertise.title"),
        icon: Laptop,
        items: expertiseItems,
      },
    ];
  };

  const getWhyWorkWithMe = () => {
    return language === "sv"
      ? [
          "5+ års professionell erfarenhet",
          "100+ framgångsrikt levererade projekt",
          "Ren, underhållbar kod",
          "Garanti för leverans i tid",
        ]
      : [
          "5+ years of professional experience",
          "100+ successful projects delivered",
          "Clean, maintainable code",
          "On-time delivery guarantee",
        ];
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
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--interactive))]/10 rounded-lg flex items-center justify-center border border-[hsl(var(--interactive))]/30">
                  <Mail className="w-6 h-6 text-[hsl(var(--interactive))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.email")}</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    hello@developer.com
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {t("contact.emailText")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--interactive))]/10 rounded-lg flex items-center justify-center border border-[hsl(var(--interactive))]/30">
                  <Phone className="w-6 h-6 text-[hsl(var(--interactive))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("contact.phone")}</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {t("contact.phoneText")}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--interactive))]/10 rounded-lg flex items-center justify-center border border-[hsl(var(--interactive))]/30">
                  <MapPin className="w-6 h-6 text-[hsl(var(--interactive))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t("contact.location")}
                  </h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    San Francisco, CA
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {t("contact.locationText")}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--interactive))]"
              >
                <Github />
              </a>
              <a
                href="#"
                className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--interactive))]"
              >
                <Linkedin />
              </a>
            </div>
            <div className="mt-12 p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg border-2 border-[hsl(var(--interactive))]/20">
              <h3 className="text-xl font-bold mb-4">{t("contact.whyWork")}</h3>
              <ul className="space-y-3">
                {whyWorkWithMe.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg h-full flex flex-col justify-center border-2 border-[hsl(var(--interactive))]/20">
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
                          <li key={itemIndex} className="flex items-center">
                            <ChevronRight className="w-5 h-5 mr-2 text-[hsl(var(--primary))] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform cursor-pointer"
        aria-label="Scroll to top"
      >
        <ChevronUp
          size={32}
          className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--interactive))]"
        />
      </button>
    </section>
  );
};

export default Contact;
