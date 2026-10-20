"use client";

import { content, Language } from "@/data/portfolio.content";
import { Globe2, Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type HeaderProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  t: (typeof content)[Language];
};

const sectionIds = ["home", "projects", "about", "contact"];

export default function Header({
  language,
  setLanguage,
  menuOpen,
  setMenuOpen,
  t,
}: HeaderProps) {
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a
        href="#home"
        className="brand"
        aria-label="Carolina Ariza — Home"
        onClick={closeMenu}
      >
        <span className="brand-mark">C.</span>
        <span className="brand-name">CAROLINA ARIZA</span>
        <span className="brand-divider" />
        <span className="brand-role">DEVELOPER</span>
      </a>

      <button
        className="mobile-menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="portfolio-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <nav
        id="portfolio-navigation"
        className={`main-nav ${menuOpen ? "is-open" : ""}`}
      >
        {t.nav.map((label, index) => (
          <a key={label} href={`#${sectionIds[index]}`} onClick={closeMenu}>
            {label}
          </a>
        ))}

        <button
          className="language-toggle"
          onClick={() =>
            setLanguage((current) => (current === "es" ? "en" : "es"))
          }
          aria-label="Change language"
        >
          <Globe2 size={15} />
          <span>{language.toUpperCase()}</span>
        </button>
      </nav>
    </header>
  );
}
