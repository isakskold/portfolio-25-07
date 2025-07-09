"use client";

import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Laptop,
  Globe,
  Server,
  Database,
  Layout,
  CheckCircle,
  ChevronRight,
  Github,
  Linkedin,
} from "lucide-react";

const sections = [
  {
    title: "Work Arrangements",
    icon: Briefcase,
    items: ["Full-Time Roles", "Freelance & Contract"],
  },
  {
    title: "Location Preference",
    icon: Globe,
    items: ["Remote", "Onsite & Relocation-friendly"],
  },
  {
    title: "Areas of Expertise",
    icon: Laptop,
    items: [
      "Frontend Development (React, Next.js, Vue)",
      "Backend & APIs (REST, GraphQL)",
      "Databases (SQL, NoSQL)",
      "Cloud & Infrastructure (AWS, Docker)",
    ],
  },
];

const whyWorkWithMe = [
  "5+ years of professional experience",
  "100+ successful projects delivered",
  "Clean, maintainable code",
  "On-time delivery guarantee",
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-[hsl(var(--secondary))]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your
            project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    hello@developer.com
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Drop me a line anytime
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Available Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-[hsl(var(--muted-foreground))]">
                    San Francisco, CA
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Open to remote opportunities
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex space-x-4">
              <a
                href="#"
                className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
              >
                <Github />
              </a>
              <a
                href="#"
                className="text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--primary))]"
              >
                <Linkedin />
              </a>
            </div>
            <div className="mt-12 p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
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
            <div className="p-8 bg-[hsl(var(--card))] rounded-xl shadow-lg h-full flex flex-col justify-center">
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
                      <section.icon className="w-20 h-20 text-[hsl(var(--primary))]" />
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
    </section>
  );
};

export default Contact;
