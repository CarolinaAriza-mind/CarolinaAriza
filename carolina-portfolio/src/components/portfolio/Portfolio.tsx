"use client";

import { useState } from "react";

import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import FocusSection from "@/components/portfolio/FocusSection";

import TechStackSection from "@/components/portfolio/TechStackSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import { content, Language } from "@/data/portfolio.content";
import ProjectsSection from "./ProjectSection";

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = content[language];

  return (
    <main>
      <Header
        language={language}
        setLanguage={setLanguage}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
      />

      <Hero t={t} />

      <FocusSection t={t} />

      <ProjectsSection t={t} language={language} />

      <TechStackSection t={t} />

      <AboutSection t={t} />

      <ContactSection t={t} />

      <Footer t={t} />
    </main>
  );
}
