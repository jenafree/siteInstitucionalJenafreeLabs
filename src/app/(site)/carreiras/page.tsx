"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, MapPin, Clock, Send, Code, Shield, Zap } from "lucide-react";

export default function CarreirasPage() {
  const vagas = [
    {
      id: "qa-senior",
      titulo: "QA Engineer Sênior",
      tipo: "CLT",
      localizacao: "Remoto",
      nivel: "Sênior",
      area: "QA",
      descricao: "Liderar projetos de automação, criar frameworks e mentorear equipes.",
      responsabilidades: [
        "Desenvolver e manter frameworks de automação (Playwright, Cypress)",
        "Implementar testes de performance com k6",
        "Configurar pipelines CI/CD com quality gates",
        "Mentorear QAs plenos e juniores",
        "Definir estratégias de QA para clientes",
      ],
      requisitos: [
        "5+ anos de experiência em QA",
        "Conhecimento sólido em Playwright/Cypress",
        "Experiência com testes de performance (k6, JMeter)",
        "Conhecimento em CI/CD (GitHub Actions, GitLab)",
        "Experiência com mentoria de equipes",
      ],
      beneficios: [
        "Salário competitivo",
        "Vale refeição/alimentação",
        "Plano de saúde",
        "Horário flexível",
        "Ambiente remoto",
        "Participação nos lucros",
      ],
      badge: "Destaque",
    },
    {
      id: "qa-pleno",
      titulo: "QA Engineer Pleno",
      tipo: "CLT",
      localizacao: "Remoto",
      nivel: "Pleno",
      area: "QA",
      descricao: "Implementar automação de testes e garantir qualidade de software.",
      responsabilidades: [
        "Desenvolver testes automatizados E2E",
        "Executar testes de regressão",
        "Participar de code reviews",
        "Documentar processos de QA",
        "Colaborar com equipes de desenvolvimento",
      ],
      requisitos: [
        "3+ anos de experiência em QA",
        "Conhecimento em automação (Playwright, Cypress, Selenium)",
        "Experiência com APIs e testes de integração",
        "Conhecimento básico em CI/CD",
        "Inglês técnico",
      ],
      beneficios: [
        "Salário competitivo",
        "Vale refeição/alimentação",
        "Plano de saúde",
        "Horário flexível",
        "Ambiente remoto",
      ],
    },
    {
      id: "devops-qa",
      titulo: "DevOps QA Specialist",
      tipo: "CLT",
      localizacao: "Remoto",
      nivel: "Sênior",
      area: "DevOps",
      descricao: "Integrar QA ao pipeline DevOps e otimizar processos de entrega.",
      responsabilidades: [
        "Configurar ambientes de teste automatizados",
        "Implementar quality gates no pipeline",
        "Otimizar performance de testes",
        "Configurar monitoramento de qualidade",
        "Automatizar processos de deploy",
      ],
      requisitos: [
        "4+ anos de experiência em DevOps/QA",
        "Conhecimento em Docker, Kubernetes",
        "Experiência com CI/CD (GitHub Actions, GitLab CI)",
        "Conhecimento em testes de performance",
        "Experiência com monitoramento (Grafana, Prometheus)",
      ],
      beneficios: [
        "Salário competitivo",
        "Vale refeição/alimentação",
        "Plano de saúde",
        "Horário flexível",
        "Ambiente remoto",
        "Participação nos lucros",
      ],
      badge: "Nova",
    },
  ];

  const valores = [
    {
      icon: <Users className="text-primary" size={32} />,
      titulo: "Trabalho Remoto",
      descricao: "Flexibilidade total para trabalhar de onde quiser, com foco em resultados.",
    },
    {
      icon: <Code className="text-secondary" size={32} />,
      titulo: "Stack Moderna",
      descricao: "Trabalhe com as tecnologias mais atuais: Next.js, Playwright, k6, Docker.",
    },
    {
      icon: <Shield className="text-primary" size={32} />,
      titulo: "Qualidade First",
      descricao: "Ambiente onde qualidade é prioridade, não custo. QA tem voz ativa.",
    },
    {
      icon: <Zap className="text-secondary" size={32} />,
      titulo: "Crescimento Rápido",
      descricao: "Oportunidades de liderar projetos, mentorear equipes e crescer rapidamente.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-bgAlt to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Junte-se ao Time{" "}
              <span className="text-primary">Jenafree</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Construa o futuro do QA com tecnologias modernas e impacto real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Por que trabalhar na Jenafree?
            </h2>
            <p className="text-lg text-slate-600">
              Ambiente que valoriza qualidade, inovação e crescimento
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-bgAlt p-6 rounded-lg mb-4">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  {valor.titulo}
                </h3>
                <p className="text-slate-600">{valor.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Vagas Abertas
            </h2>
            <p className="text-lg text-slate-600">
              Oportunidades para fazer a diferença no mercado de QA
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {vagas.map((vaga, index) => (
              <motion.div
                key={vaga.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <CardTitle className="text-2xl text-text mb-2">
                          {vaga.titulo}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="outline">{vaga.tipo}</Badge>
                          <Badge variant="outline">
                            <MapPin size={14} className="mr-1" />
                            {vaga.localizacao}
                          </Badge>
                          <Badge variant="outline">
                            <Clock size={14} className="mr-1" />
                            {vaga.nivel}
                          </Badge>
                          {vaga.badge && (
                            <Badge className="bg-primary">
                              {vaga.badge}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{vaga.descricao}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-text mb-3">
                          Principais Responsabilidades:
                        </h4>
                        <ul className="space-y-2">
                          {vaga.responsabilidades.map((resp) => (
                            <li key={resp} className="text-sm text-slate-700 flex gap-2">
                              <span className="text-primary mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-text mb-3">
                          Requisitos:
                        </h4>
                        <ul className="space-y-2">
                          {vaga.requisitos.map((req) => (
                            <li key={req} className="text-sm text-slate-700 flex gap-2">
                              <span className="text-primary mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold text-text mb-3">
                        Benefícios:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {vaga.beneficios.map((beneficio) => (
                          <Badge key={beneficio} variant="secondary">
                            {beneficio}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <Link href={`/contato?vaga=${vaga.id}`}>
                        <Button className="w-full md:w-auto">
                          <Send className="mr-2" size={18} />
                          Candidatar-se
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não encontrou sua vaga ideal?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estamos sempre em busca de talentos excepcionais. Envie seu currículo!
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Users className="mr-2" size={20} />
              Enviar Currículo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

