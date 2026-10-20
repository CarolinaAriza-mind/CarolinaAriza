import { content, Language } from "@/data/portfolio.content";

type AboutSectionProps = {
  t: (typeof content)[Language];
};

export default function AboutSection({ t }: AboutSectionProps) {
  return (
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
  );
}
