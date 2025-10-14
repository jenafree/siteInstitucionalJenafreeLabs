"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Code, Rocket } from "lucide-react";

export default function AutomacaoTestesPage() {
  const deliverables = [
    "Suite completa de testes E2E estáveis",
    "Page Object Model (POM) com DSL customizado",
    "Controle de flakiness e retry inteligente",
    "Mocks e fixtures para testes rápidos",
    "Relatórios HTML/Allure por PR",
    "Integração com CI/CD (GitHub Actions/GitLab)",
  ];

  const stack = [
    "Playwright",
    "Cypress",
    "Appium",
    "Jest/Vitest",
    "Testing Library",
    "MSW (Mock Service Worker)",
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
              Automação de Testes{" "}
              <span className="text-primary">Web, API e Mobile</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Testes E2E estáveis, rápidos e confiáveis. Sem flakiness, sem
              surpresas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Por que Automação com Jenafree?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Zero Flakiness
                  </h3>
                  <p className="text-slate-600">
                    Aplicamos retry inteligente, waits explícitos e controle de
                    estado para garantir testes 100% confiáveis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    POM + DSL
                  </h3>
                  <p className="text-slate-600">
                    Page Object Model com Domain Specific Language para testes
                    legíveis e manuteníveis.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    CI/CD Nativo
                  </h3>
                  <p className="text-slate-600">
                    Testes rodando automaticamente em cada PR, com relatórios
                    visuais e feedback rápido.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Cobertura Real
                  </h3>
                  <p className="text-slate-600">
                    Testamos jornadas críticas de verdade, não apenas happy
                    paths. Edge cases inclusos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              O que você recebe
            </h2>
            <Card>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Code className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-text mb-6">
              Nossa Stack de Automação
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {stack.map((tech) => (
                <div
                  key={tech}
                  className="bg-bgAlt px-6 py-3 rounded-lg text-text font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para automatizar seu QA?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Receba uma análise gratuita do seu cenário e uma proposta
            personalizada.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Rocket className="mr-2" size={20} />
              Solicitar Proposta
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}


