"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  Mail,
  Menu,
  X,
  Terminal,
  Workflow,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

type Language = "es" | "en";

const content = {
  es: {
    availability: "Disponible para nuevos proyectos",
    nav: ["Inicio", "Proyectos", "Sobre mí", "Contacto"],
    eyebrow: "DESARROLLADORA DE SOFTWARE · ARGENTINA",
    titleStart: "Construyo",
    titleGradient: "soluciones",
    titleEnd: "digitales.",
    intro:
      "Soy Carolina, desarrolladora Full Stack con enfoque en backend. Transformo problemas reales en aplicaciones web funcionales, mantenibles y pensadas para las personas.",
    work: "Explorar proyectos",
    contact: "Hablemos",
    scroll: "DESLIZÁ PARA EXPLORAR",
    focus: "MI ENFOQUE",
    focusTitle: "Más que escribir código.",
    focusText:
      "Me interesa entender el problema, diseñar una solución coherente y construirla con una base técnica sólida. Trabajo tanto en la lógica del servidor como en la experiencia que recibe cada usuario.",
    skills: [
      {
        title: "Backend & APIs",
        text: "Lógica de negocio, autenticación, APIs REST y modelado de datos.",
      },
      {
        title: "Frontend",
        text: "Interfaces responsive, componentes reutilizables y experiencia de usuario.",
      },
      {
        title: "Integración",
        text: "Bases de datos, servicios externos e integración de APIs de modelos de IA.",
      },
    ],
    projectsLabel: "TRABAJO SELECCIONADO / 01—03",
    projectsTitle: "Proyectos con propósito.",
    projectsText:
      "Cada proyecto representa un problema, decisiones técnicas y aprendizaje aplicado.",
    projects: [
      {
        number: "01",
        name: "Canarias Equipamientos",
        category: "PLATAFORMA DE GESTIÓN COMERCIAL",
        description:
          "Aplicación para gestionar procesos comerciales, ventas, validaciones, entregas y cobranzas con distintos roles de usuario.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
        type: "Backend + Frontend",
        icon: "database",
      },
      {
        number: "02",
        name: "Si Chef!",
        category: "APLICACIÓN WEB GASTRONÓMICA",
        description:
          "Proyecto Full Stack enfocado en una experiencia gastronómica digital, con funcionalidades de aplicación y lógica de servidor.",
        stack: ["React", "Node.js", "API REST"],
        type: "Full Stack",
        icon: "layers",
      },
      {
        number: "03",
        name: "SUP · Soft Skills Lab",
        category: "EDUCACIÓN Y COLABORACIÓN",
        description:
          "Plataforma de actividades para acompañar el aprendizaje y fortalecer las habilidades de comunicación y trabajo en equipo.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        type: "Frontend",
        icon: "workflow",
      },
    ],
    details: "Ver proyecto",
    stackLabel: "HERRAMIENTAS QUE UTILIZO",
    stackTitle: "Tecnología con intención.",
    stackText:
      "Elijo herramientas según las necesidades del proyecto, buscando claridad, mantenibilidad y una buena experiencia.",
    stackGroups: [
      {
        title: "Frontend",
        items: "React · Next.js · TypeScript · Tailwind CSS",
      },
      { title: "Backend", items: "Node.js · NestJS · Express · REST APIs" },
      { title: "Datos", items: "PostgreSQL · TypeORM · SQL" },
      {
        title: "Calidad y herramientas",
        items: "Git · GitHub · Jest · Swagger · Docker",
      },
    ],
    aboutLabel: "UN POCO SOBRE MÍ",
    aboutTitle: "Curiosidad, criterio y evolución constante.",
    aboutText:
      "Mi camino en tecnología se construye haciendo: desarrollando proyectos, colaborando con equipos y aprendiendo a tomar mejores decisiones técnicas. También acompaño a estudiantes en su formación IT, una experiencia que fortalece mi comunicación y mi forma de trabajar con otras personas.",
    aboutNote: "Actualmente continúo formándome en Bioingeniería.",
    contactLabel: "¿TENÉS UNA IDEA?",
    contactTitle: "Hagamos que suceda.",
    contactText:
      "Estoy abierta a oportunidades laborales, colaboraciones y proyectos freelance donde la tecnología pueda resolver un problema concreto.",
    email: "Escribime",
    footer: "Diseñado y desarrollado con intención.",
    top: "Volver arriba",
  },
  en: {
    availability: "Available for new projects",
    nav: ["Home", "Projects", "About", "Contact"],
    eyebrow: "SOFTWARE DEVELOPER · ARGENTINA",
    titleStart: "I build",
    titleGradient: "digital",
    titleEnd: "solutions.",
    intro:
      "I'm Carolina, a Full Stack Developer focused on backend engineering. I turn real-world problems into functional, maintainable web applications designed for people.",
    work: "Explore projects",
    contact: "Let's talk",
    scroll: "SCROLL TO EXPLORE",
    focus: "MY APPROACH",
    focusTitle: "More than writing code.",
    focusText:
      "I care about understanding the problem, designing a coherent solution, and building it on a solid technical foundation. I work across server-side logic and the experience delivered to each user.",
    skills: [
      {
        title: "Backend & APIs",
        text: "Business logic, authentication, REST APIs, and data modeling.",
      },
      {
        title: "Frontend",
        text: "Responsive interfaces, reusable components, and user experience.",
      },
      {
        title: "Integration",
        text: "Databases, external services, and AI model API integrations.",
      },
    ],
    projectsLabel: "SELECTED WORK / 01—03",
    projectsTitle: "Projects with purpose.",
    projectsText:
      "Each project represents a problem, technical decisions, and applied learning.",
    projects: [
      {
        number: "01",
        name: "Canarias Equipamientos",
        category: "BUSINESS MANAGEMENT PLATFORM",
        description:
          "An application for managing business processes, sales, approvals, deliveries, and collections across multiple user roles.",
        stack: ["Next.js", "NestJS", "PostgreSQL", "TypeORM"],
        type: "Backend + Frontend",
        icon: "database",
      },
      {
        number: "02",
        name: "Si Chef!",
        category: "FOOD & GASTRONOMY WEB APP",
        description:
          "A Full Stack project focused on a digital culinary experience, application features, and server-side logic.",
        stack: ["React", "Node.js", "REST API"],
        type: "Full Stack",
        icon: "layers",
      },
      {
        number: "03",
        name: "SUP · Soft Skills Lab",
        category: "EDUCATION & COLLABORATION",
        description:
          "An activity platform designed to support learning and strengthen communication and teamwork skills.",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        type: "Frontend",
        icon: "workflow",
      },
    ],
    details: "View project",
    stackLabel: "TOOLS I WORK WITH",
    stackTitle: "Technology with intention.",
    stackText:
      "I choose tools based on project needs, prioritizing clarity, maintainability, and a good user experience.",
    stackGroups: [
      {
        title: "Frontend",
        items: "React · Next.js · TypeScript · Tailwind CSS",
      },
      { title: "Backend", items: "Node.js · NestJS · Express · REST APIs" },
      { title: "Data", items: "PostgreSQL · TypeORM · SQL" },
      {
        title: "Quality & tools",
        items: "Git · GitHub · Jest · Swagger · Docker",
      },
    ],
    aboutLabel: "A LITTLE ABOUT ME",
    aboutTitle: "Curiosity, good judgment, and continuous growth.",
    aboutText:
      "My journey in tech is built through practice: developing projects, collaborating with teams, and learning to make better technical decisions. I also support students in their IT education, strengthening my communication and collaboration skills.",
    aboutNote: "I am currently continuing my studies in Bioengineering.",
    contactLabel: "HAVE AN IDEA?",
    contactTitle: "Let's make it happen.",
    contactText:
      "I'm open to job opportunities, collaborations, and freelance projects where technology can solve a real problem.",
    email: "Get in touch",
    footer: "Designed and developed with intention.",
    top: "Back to top",
  },
};

const projectIcons = {
  database: Database,
  layers: Layers3,
  workflow: Workflow,
};

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  const sectionIds = ["home", "projects", "about", "contact"];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
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

      <section className="hero section-shell" id="home">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            {t.availability}
          </div>

          <p className="eyebrow">
            <span className="eyebrow-line" />
            {t.eyebrow}
          </p>

          <h1>
            {t.titleStart}
            <br />
            <span className="gradient-text">{t.titleGradient}</span>
            <br />
            {t.titleEnd}
          </h1>

          <p className="hero-description">{t.intro}</p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              {t.work}
              <ArrowUpRight size={17} />
            </a>
            <a className="button-secondary" href="#contact">
              {t.contact}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <span>01 / 04</span>
            <span className="hero-meta-line" />
            <span>{t.scroll}</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Decorative code panel">
          <div className="visual-orb orb-one" />
          <div className="visual-orb orb-two" />

          <div className="code-window">
            <div className="code-window-bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="code-filename">
                <Code2 size={13} /> developer.ts
              </span>
              <span className="code-language">TS</span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span> developer = {"{"}
              </p>
              <p className="code-indent">
                <span className="code-blue">name</span>:{" "}
                <span className="code-green">Carolina Ariza</span>,
              </p>
              <p className="code-indent">
                <span className="code-blue">focus</span>: [
              </p>
              <p className="code-indent code-indent-double">
                <span className="code-green">Full Stack</span>,
              </p>
              <p className="code-indent code-indent-double">
                <span className="code-green">Backend</span>,
              </p>
              <p className="code-indent">],</p>
              <p className="code-indent">
                <span className="code-blue">mindset</span>:{" "}
                <span className="code-green">Keep building</span>,
              </p>
              <p>{"};"}</p>
              <p className="code-spacer" />
              <p>
                <span className="code-comment">
                  Turning ideas into useful software
                </span>
              </p>
              <p>
                <span className="code-purple">export default</span> developer;
                <span className="code-cursor" />
              </p>
            </div>

            <div className="code-window-footer">
              <span>
                <span className="status-dot" /> TypeScript
              </span>
              <span>UTF-8</span>
              <span>Ln 18, Col 24</span>
            </div>
          </div>

          <div className="floating-tag tag-backend">
            <Database size={15} />
            <span>Backend first</span>
          </div>
          <div className="floating-tag tag-stack">
            <Terminal size={15} />
            <span>Build · Learn · Improve</span>
          </div>
          <span className="visual-index">CA—001</span>
        </div>

        <a href="#focus" className="hero-scroll" aria-label="Scroll down">
          <ArrowDown size={17} />
        </a>
      </section>

      <section className="focus-section section-shell" id="focus">
        <div className="section-heading">
          <p className="eyebrow">{t.focus}</p>
          <h2>{t.focusTitle}</h2>
          <p className="section-description">{t.focusText}</p>
        </div>

        <div className="focus-grid">
          {t.skills.map((skill, index) => {
            const Icon = [Database, Code2, Workflow][index];

            return (
              <article className="focus-card" key={skill.title}>
                <div className="focus-card-top">
                  <span className="card-index">0{index + 1}</span>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3>{skill.title}</h3>
                <p>{skill.text}</p>
                <div className="card-bottom-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-topline">
          <p className="eyebrow">{t.projectsLabel}</p>
          <span className="section-counter">SELECTED / 2026</span>
        </div>

        <div className="projects-heading">
          <h2>{t.projectsTitle}</h2>
          <p className="section-description">{t.projectsText}</p>
        </div>

        <div className="projects-list">
          {t.projects.map((project) => {
            const Icon =
              projectIcons[project.icon as keyof typeof projectIcons];

            return (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-preview">
                  <div className="preview-grid" />
                  <div className="preview-window">
                    <div className="preview-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="preview-content">
                      <div className="preview-sidebar">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="preview-main">
                        <div className="preview-heading-line" />
                        <div className="preview-stats">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="preview-chart">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="preview-icon">
                    <Icon size={23} />
                  </div>
                </div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <div className="project-bottom">
                    <span>{project.type}</span>
                    <span className="project-status">
                      {t.details} <ArrowDownRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="projects-note">
          {language === "es"
            ? "Los detalles, repositorios y demos se incorporarán una vez verificados."
            : "Project details, repositories, and demos will be added once verified."}
        </p>
      </section>

      <section className="stack-section section-shell" id="stack">
        <div className="stack-intro">
          <p className="eyebrow">{t.stackLabel}</p>
          <h2>{t.stackTitle}</h2>
          <p className="section-description">{t.stackText}</p>
        </div>

        <div className="stack-list">
          {t.stackGroups.map((group, index) => (
            <div className="stack-row" key={group.title}>
              <span className="stack-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
              <ArrowUpRight size={17} className="stack-arrow" />
            </div>
          ))}
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-mark" aria-hidden="true">
          CA.
        </div>
        <div className="about-content">
          <p className="eyebrow">{t.aboutLabel}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="about-description">{t.aboutText}</p>
          <p className="about-note">
            <span className="about-note-line" />
            {t.aboutNote}
          </p>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-glow" />
        <p className="eyebrow">{t.contactLabel}</p>
        <h2>{t.contactTitle}</h2>
        <p className="contact-description">{t.contactText}</p>

        <a className="button-primary contact-button" href="mailto:TU_EMAIL">
          <Mail size={17} />
          {t.email}
          <ArrowUpRight size={17} />
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/CarolinaAriza-mind"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size={17} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a
            href="https://www.linkedin.com/in/carolina-ariza-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <SlSocialLinkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a href="#home" className="footer-brand">
          CA.
        </a>
        <p>© 2026 Carolina Ariza</p>
        <p>{t.footer}</p>
        <a href="#home" className="footer-top">
          {t.top} <ArrowUpRight size={14} />
        </a>
      </footer>
    </main>
  );
}
