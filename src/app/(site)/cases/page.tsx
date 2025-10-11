"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";

export default function CasesPage() {
  const cases = [
    {
      icon: <TrendingUp className="text-primary" size={40} />,
      title: "Fintech reduz bugs em produção em 70%",
      company: "Fintech B2B (anônimo)",
      challenge:
        "Alta taxa de bugs críticos em produção, impactando confiança dos clientes e gerando retrabalho constante.",
      solution:
        "Implementamos suite completa de testes E2E com Playwright, cobrindo 100% das jornadas críticas. Adicionamos testes de integração para APIs e configuramos quality gates no CI/CD.",
      results: [
        "70% de redução em bugs críticos",
        "Deploy 3x mais rápido (de 4h para 1h20min)",
        "100% de cobertura das jornadas core",
        "ROI positivo em 3 meses",
      ],
      stack: "Playwright, GitHub Actions, TypeScript, POM/DSL",
      duration: "3 meses",
      badge: "Automação",
    },
    {
      icon: <Zap className="text-secondary" size={40} />,
      title: "E-commerce melhora performance em 40%",
      company: "E-commerce de Moda",
      challenge:
        "Página de checkout lenta (p95 > 2s), causando abandono de carrinho e perda de conversão em campanhas.",
      solution:
        "Realizamos testes de carga com k6, identificamos gargalos no backend (N+1 queries) e frontend (bundle size). Otimizamos queries, implementamos cache e reduzi bundle JS.",
      results: [
        "p95: 800ms → 280ms (65% de melhoria)",
        "Taxa de erro: 3% → 0.4%",
        "Conversão aumentou 12%",
        "Infra escalável para Black Friday",
      ],
      stack: "k6, Grafana, CloudFlare, Redis",
      duration: "2 meses",
      badge: "Performance",
    },
    {
      icon: <Shield className="text-primary" size={40} />,
      title: "SaaS B2B automatiza 100% dos testes críticos",
      company: "SaaS de Gestão",
      challenge:
        "Testes manuais custando 80h/sprint, releases lentas e equipe de QA sobrecarregada.",
      solution:
        "Criamos framework de automação com Cypress + MSW para mocks, treinamos o time em boas práticas e configuramos pipeline com preview deploys automáticos.",
      results: [
        "100% de automação das jornadas críticas",
        "Tempo de QA: 80h → 8h por sprint",
        "Deploy confiável 3x por dia",
        "Time de QA focado em testes exploratórios",
      ],
      stack: "Cypress, MSW, GitLab CI, Vercel",
      duration: "4 meses",
      badge: "CI/CD",
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
              Casos de{" "}
              <span className="text-primary">Sucesso</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Resultados reais, entregas concretas. Veja como transformamos QA
              em empresas como a sua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {cases.map((caseItem, index) => (
              <motion.div
                key={caseItem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3">
                      {/* Side Bar */}
                      <div className="bg-bgAlt p-8 flex flex-col items-center justify-center text-center">
                        <div className="mb-4">{caseItem.icon}</div>
                        <Badge className="mb-4">{caseItem.badge}</Badge>
                        <h3 className="text-2xl font-bold text-text mb-2">
                          {caseItem.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-4">
                          {caseItem.company}
                        </p>
                        <div className="text-sm text-slate-500">
                          <p>Duração: {caseItem.duration}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 p-8">
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-text mb-2">
                              Desafio
                            </h4>
                            <p className="text-slate-600">
                              {caseItem.challenge}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-text mb-2">
                              Solução
                            </h4>
                            <p className="text-slate-600">
                              {caseItem.solution}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-text mb-3">
                              Resultados
                            </h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {caseItem.results.map((result) => (
                                <li
                                  key={result}
                                  className="flex items-start gap-2 text-slate-700"
                                >
                                  <span className="text-primary mt-1">✓</span>
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t">
                            <p className="text-sm text-slate-500">
                              <strong>Stack:</strong> {caseItem.stack}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas Agregadas */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">
              Resultados Consolidados
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "50+", label: "Projetos Entregues" },
                { value: "70%", label: "Média de Redução de Bugs" },
                { value: "3x", label: "Velocidade de Deploy" },
                { value: "< 3 meses", label: "ROI Médio" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-card"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu case pode ser o próximo
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Diagnóstico gratuito em até 48h. Descubra o potencial do seu QA.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              Solicitar Diagnóstico
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

