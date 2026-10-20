import { content, Language } from "@/data/portfolio.content";
import { ArrowUpRight } from "lucide-react";

type FooterProps = {
  t: (typeof content)[Language];
};

export default function Footer({ t }: FooterProps) {
  return (
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
  );
}
