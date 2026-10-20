import { content, Language } from "@/data/portfolio.content";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { SlSocialLinkedin } from "react-icons/sl";

type ContactSectionProps = {
  t: (typeof content)[Language];
};

export default function ContactSection({ t }: ContactSectionProps) {
  return (
    <section className="contact-section section-shell" id="contact">
      <div className="contact-glow" />

      <p className="eyebrow">{t.contactLabel}</p>
      <h2>{t.contactTitle}</h2>
      <p className="contact-description">{t.contactText}</p>

      <a
        className="button-primary contact-button"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=carolinaarizat93@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
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
  );
}
