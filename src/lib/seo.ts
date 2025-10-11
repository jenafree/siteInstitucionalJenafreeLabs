import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Jenafree Labs | QA sob Demanda para B2B",
    template: "%s | Jenafree Labs",
  },
  description:
    "Squads de QA sob demanda. Automação, performance e segurança com preço justo e entrega sênior. Transparência total.",
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
  ],
  authors: [{ name: "Jenafree Labs" }],
  creator: "Jenafree Labs",
  publisher: "Jenafree Labs",
  metadataBase: new URL("https://jenafreelabs.com"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jenafreelabs.com",
    title: "Jenafree Labs | QA sob Demanda para B2B",
    description:
      "Squads de QA sob demanda. Automação, performance e segurança com preço justo e entrega sênior. Transparência total.",
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
    title: "Jenafree Labs | QA sob Demanda para B2B",
    description:
      "Squads de QA sob demanda. Automação, performance e segurança com preço justo e entrega sênior. Transparência total.",
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


