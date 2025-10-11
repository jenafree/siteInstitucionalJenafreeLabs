"use client";

import { Button } from "@/components/ui/button";
import ServicesGrid from "@/components/ServicesGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Rocket } from "lucide-react";

export default function ServicosPage() {
  const plans = [
    {
      name: "Essencial",
      price: "R$ 8.000",
      period: "/mês",
      description: "Para startups e pequenas equipes",
      features: [
        "Automação E2E (Web ou API)",
        "Até 50 testes automatizados",
        "Relatórios por PR",
        "Suporte por Slack",
        "1 QA Pleno dedicado",
      ],
      highlight: false,
    },
    {
      name: "Avançado",
      price: "R$ 15.000",
      period: "/mês",
      description: "Para empresas em crescimento",
      features: [
        "Automação E2E completa",
        "Testes de Performance (k6)",
        "CI/CD integrado",
        "Até 200 testes automatizados",
        "2 QAs (1 Sênior + 1 Pleno)",
        "Review semanal de métricas",
      ],
      highlight: true,
    },
    {
      name: "Elite",
      price: "Customizado",
      period: "",
      description: "Para operações enterprise",
      features: [
        "Squad completo sob demanda",
        "Automação + Performance + Segurança",
        "Observabilidade e SLO/SLI",
        "Testes ilimitados",
        "QA Lead + Engenheiros",
        "SLA dedicado",
        "Treinamento do time",
      ],
      highlight: false,
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
              Qualidade é o que fazemos.{" "}
              <span className="text-primary">Automação é como entregamos.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Serviços de QA sob demanda, sem atravessadores, com preço justo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
            De automação a segurança, cobrimos todas as frentes de qualidade.
          </p>
        </div>
        <ServicesGrid />
      </section>

      {/* Planos */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Planos e Preços
            </h2>
            <p className="text-lg text-slate-600">
              Transparência desde o primeiro contato
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`h-full ${
                    plan.highlight
                      ? "border-primary border-2 shadow-hover"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {plan.highlight && (
                      <Badge className="mb-4">Mais Popular</Badge>
                    )}
                    <h3 className="text-2xl font-bold text-text mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-slate-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-primary">
                        {plan.price}
                      </span>
                      <span className="text-slate-600">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="text-primary shrink-0 mt-0.5" size={20} />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contato">
                      <Button
                        className="w-full rounded-lg"
                        variant={plan.highlight ? "default" : "outline"}
                      >
                        Solicitar Proposta
                      </Button>
                    </Link>
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
            Não encontrou o que procura?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Montamos um plano customizado para o seu desafio específico.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Rocket className="mr-2" size={20} />
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

