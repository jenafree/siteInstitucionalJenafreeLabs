import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins" 
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Jenafree Labs",
    "url": "https://jenafree.github.io/siteInstitucionalJenafreeLabs/",
    "logo": "https://jenafree.github.io/siteInstitucionalJenafreeLabs/assets/brand/jenafree-mark.svg",
    "description": "QA sob demanda, automação e performance com IA. Sem squads fixas, só resultado.",
    "foundingDate": "2024",
    "sameAs": [
      "https://www.linkedin.com/in/nof-54422094a"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    }
  };

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}


