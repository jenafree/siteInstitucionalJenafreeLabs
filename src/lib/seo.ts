import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Jenafree Labs | A Era Pós-Outsourcing",
    template: "%s | Jenafree Labs",
  },
  description:
    "QA sob demanda, automação e performance com IA. Sem squads fixas, só resultado. Diagnóstico gratuito em 48h.",
  keywords: [
    "QA",
    "Quality Assurance",
    "Automação de Testes",
    "Performance",
    "Segurança",
    "DevOps",
    "CI/CD",
    "Testes Automatizados",
    "Playwright",
    "Cypress",
    "k6",
    "Inteligência Artificial",
    "IA",
    "Automação Inteligente",
    "Outsourcing",
    "Software sob Demanda",
  ],
  authors: [{ name: "Jenafree Labs" }],
  creator: "Jenafree Labs",
  publisher: "Jenafree Labs",
  metadataBase: new URL("https://jenafree.github.io/siteInstitucionalJenafreeLabs"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jenafree.github.io/siteInstitucionalJenafreeLabs",
    title: "Jenafree Labs — A Era Pós-Outsourcing",
    description:
      "Qualidade como estratégia. Automação como cultura. Diagnóstico gratuito em 48h.",
    siteName: "Jenafree Labs",
    images: [
      {
        url: "/static/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jenafree Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenafree Labs — A Era Pós-Outsourcing",
    description:
      "Qualidade como estratégia. Automação como cultura. Diagnóstico gratuito em 48h.",
    images: ["/static/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


