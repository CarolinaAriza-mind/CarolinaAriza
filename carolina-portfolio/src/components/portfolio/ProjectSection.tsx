import { content, Language } from "@/data/portfolio.content";

import { ArrowDownRight, Database, Layers3, Workflow } from "lucide-react";

type ProjectsSectionProps = {
  t: (typeof content)[Language];
  language: Language;
};

const projectIcons = {
  database: Database,
  layers: Layers3,
  workflow: Workflow,
};

export default function ProjectsSection({ t, language }: ProjectsSectionProps) {
  return (
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
          const Icon = projectIcons[project.icon as keyof typeof projectIcons];

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
  );
}
