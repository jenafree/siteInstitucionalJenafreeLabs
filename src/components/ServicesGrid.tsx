"use client";
import { ShieldCheck, Workflow, Gauge, Bug, Cable, PenTool, Factory, Globe, Code, Brain, Palette } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  { 
    icon: <Factory className="text-jenafreeBlue" />, 
    title: "QA Factory", 
    subtitle: "Automação de testes e pipelines inteligentes com IA", 
    bullets: ["E2E estável", "IA para otimização", "Relatórios automáticos"], 
    cta: { label: "Ver detalhes", href: "/servicos/automacao-testes" }, 
    badge: "Core" 
  },
  { 
    icon: <Globe className="text-jenafreeBlue" />, 
    title: "Web Studio", 
    subtitle: "Criação de sites, landing pages e blogs sob demanda", 
    bullets: ["Next.js + Tailwind", "SEO otimizado", "Performance 90+"], 
    cta: { label: "Ver detalhes", href: "/servicos/web-studio" } 
  },
  { 
    icon: <Code className="text-jenafreeBlue" />, 
    title: "Software & API Lab", 
    subtitle: "Desenvolvimento de software e integrações REST", 
    bullets: ["APIs escaláveis", "Microserviços", "Documentação automática"], 
    cta: { label: "Ver detalhes", href: "/servicos/software-api" } 
  },
  { 
    icon: <Brain className="text-jenafreeBlue" />, 
    title: "IA & Automation", 
    subtitle: "RPA, chatbots e análise preditiva", 
    bullets: ["Automação inteligente", "Chatbots conversacionais", "Análise de dados"], 
    cta: { label: "Ver detalhes", href: "/servicos/ia-automation" }, 
    badge: "AI" 
  },
  { 
    icon: <Palette className="text-jenafreeBlue" />, 
    title: "AI Design Studio", 
    subtitle: "Protótipos Figma + geração de UI via IA", 
    bullets: ["Design System", "IA para UI", "Prototipagem rápida"], 
    cta: { label: "Ver detalhes", href: "/servicos/design-qa-figma" } 
  },
];

export default function ServicesGrid() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}


