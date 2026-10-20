import { content, Language } from "@/data/portfolio.content";
import { ArrowUpRight } from "lucide-react";

type TechStackSectionProps = {
  t: (typeof content)[Language];
};

export default function TechStackSection({ t }: TechStackSectionProps) {
  return (
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
  );
}
