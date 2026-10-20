import { content, Language } from "@/data/portfolio.content";
import { Code2, Database, Workflow } from "lucide-react";

type FocusSectionProps = {
  t: (typeof content)[Language];
};

const skillIcons = [Database, Code2, Workflow];

export default function FocusSection({ t }: FocusSectionProps) {
  return (
    <section className="focus-section section-shell" id="focus">
      <div className="section-heading">
        <p className="eyebrow">{t.focus}</p>
        <h2>{t.focusTitle}</h2>
        <p className="section-description">{t.focusText}</p>
      </div>

      <div className="focus-grid">
        {t.skills.map((skill, index) => {
          const Icon = skillIcons[index] ?? Code2;

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
  );
}
