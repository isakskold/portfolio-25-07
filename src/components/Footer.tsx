"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 bg-[hsl(var(--secondary))] border-t border-[hsl(var(--border))]">
      <div className="container mx-auto text-center text-[hsl(var(--muted-foreground))]">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
