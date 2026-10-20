import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carolina Ariza | Full Stack Developer",
  description:
    "Portfolio de Carolina Ariza, desarrolladora Full Stack con enfoque en backend, APIs y aplicaciones web.",
  applicationName: "Carolina Ariza Portfolio",
  openGraph: {
    title: "Carolina Ariza | Full Stack Developer",
    description:
      "Desarrollo soluciones digitales con foco en backend, arquitectura y experiencia de usuario.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
