"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const getServices = () => {
    return language === "sv"
      ? [
          "Webbutveckling",
          "API-utveckling",
          "Databasdesign",
          "Teknisk rådgivning",
        ]
      : [
          "Web Development",
          "API Development",
          "Database Design",
          "Technical Consulting",
        ];
  };

  const services = getServices();

  return (
    <footer className="bg-[#0A101E] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              {t("footer.brand")}
            </a>
            <p className="text-slate-400 max-w-xs">{t("footer.description")}</p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.brand")}.{" "}
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
