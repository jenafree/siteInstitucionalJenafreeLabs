"use client";
import { ShieldCheck, Workflow, Gauge, Bug, Cable, PenTool } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  { icon: <Workflow />, title: "Automação Web/API/Mobile", subtitle: "Playwright, Cypress, Appium. POM/DSL e flakiness control.", bullets: ["E2E estável", "Mocks/fixtures", "Relatórios por PR"], cta: { label: "Ver detalhes", href: "/servicos/automacao-testes" }, badge: "Core" },
  { icon: <Gauge />, title: "Performance (k6)", subtitle: "Carga, stress, soak. Thresholds e SLO no pipeline.", bullets: ["p95 < 400ms", "Erro < 1%", "Grafana/OTel"], cta: { label: "Ver detalhes", href: "/servicos/performance" } },
  { icon: <ShieldCheck />, title: "Segurança & Pentest", subtitle: "SAST/DAST/Secrets/SCA + pentest com evidências.", bullets: ["OWASP Top 10", "Relatório executivo", "Correções priorizadas"], cta: { label: "Ver detalhes", href: "/servicos/seguranca" }, badge: "Security" },
  { icon: <Cable />, title: "CI/CD & DevEx", subtitle: "Quality gates, ambientes efêmeros, canary/rollback.", bullets: ["GH Actions/GitLab", "Vercel/Cloudflare", "Trunk-based"], cta: { label: "Ver detalhes", href: "/servicos/ci-cd" } },
  { icon: <PenTool />, title: "Design QA & Figma", subtitle: "Do wireframe ao deploy. Acessibilidade e consistência visual.", bullets: ["WCAG", "Visual regression", "Tokens de design"], cta: { label: "Ver detalhes", href: "/servicos/design-qa-figma" } },
  { icon: <Bug />, title: "Observabilidade & Qualidade Operacional", subtitle: "SLO/SLI por jornada. Synthetic + RUM.", bullets: ["OpenTelemetry", "Alertas úteis", "ROI de QA"], cta: { label: "Ver detalhes", href: "/servicos" } },
];

export default function ServicesGrid() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}


