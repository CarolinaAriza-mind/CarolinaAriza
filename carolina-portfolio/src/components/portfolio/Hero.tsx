import { content, Language } from "@/data/portfolio.content";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Terminal,
} from "lucide-react";

type HeroProps = {
  t: (typeof content)[Language];
};

export default function Hero({ t }: HeroProps) {
  return (
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
  );
}
