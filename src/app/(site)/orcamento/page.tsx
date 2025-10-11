"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calculator, Users, Clock, Zap, Shield, Code, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function OrcamentoPage() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const services = [
    {
      id: "automacao",
      title: "Automação de Testes",
      icon: <Code className="text-primary" size={40} />,
      description: "Automatizar testes E2E, API e Mobile com Playwright, Cypress e Appium",
      basePrice: 15000,
      timeFrame: "2-4 meses",
      deliverables: [
        "Suite completa de testes automatizados",
        "Framework POM + DSL",
        "Integração CI/CD",
        "Relatórios automatizados",
      ],
      features: [
        "Zero flakiness",
        "Cobertura 100% das jornadas críticas",
        "Pipeline integrado",
        "Manutenção incluída",
      ],
    },
    {
      id: "performance",
      title: "Testes de Performance",
      icon: <Zap className="text-secondary" size={40} />,
      description: "Testes de carga, stress e soak com k6 + observabilidade",
      basePrice: 12000,
      timeFrame: "1-3 meses",
      deliverables: [
        "Scripts k6 para carga/stress",
        "Thresholds e SLO configurados",
        "Dashboard Grafana",
        "Relatório de performance",
      ],
      features: [
        "Cenários realistas",
        "SLO no CI/CD",
        "Monitoramento contínuo",
        "Otimizações recomendadas",
      ],
    },
    {
      id: "seguranca",
      title: "Segurança & Pentest",
      icon: <Shield className="text-primary" size={40} />,
      description: "SAST/DAST + pentest manual com evidências e PoC",
      basePrice: 18000,
      timeFrame: "1-2 meses",
      deliverables: [
        "Scan completo de vulnerabilidades",
        "Pentest manual + PoC",
        "Relatório executivo",
        "Plano de correção",
      ],
      features: [
        "OWASP Top 10 coberto",
        "Evidências de exploração",
        "Priorização de correções",
        "Treinamento da equipe",
      ],
    },
    {
      id: "squad",
      title: "Squad QA Sob Demanda",
      icon: <Users className="text-secondary" size={40} />,
      description: "Equipe completa de QA para projetos de longo prazo",
      basePrice: 25000,
      timeFrame: "6+ meses",
      deliverables: [
        "QA Lead + 2 Engenheiros",
        "Automação + Performance + Segurança",
        "SLA dedicado",
        "Relatórios mensais",
      ],
      features: [
        "Equipe dedicada",
        "Conhecimento do produto",
        "Escalabilidade",
        "Suporte prioritário",
      ],
    },
  ];

  const calculateCost = (serviceId: string, complexity: string = "medium") => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return null;

    const multipliers = {
      simple: 0.7,
      medium: 1.0,
      complex: 1.5,
      enterprise: 2.0,
    };

    return Math.round(service.basePrice * multipliers[complexity as keyof typeof multipliers]);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setEstimatedCost(calculateCost(serviceId));
  };

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Calculator className="text-primary" size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Simulador de{" "}
              <span className="text-primary">Orçamento</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Transparência total. Descubra o investimento necessário para seu projeto de QA.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculadoras */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Escolha seu Serviço
            </h2>
            <p className="text-lg text-slate-600">
              Preços base para projetos padrão. Valor final varia conforme complexidade.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all hover:shadow-hover ${
                    selectedService === service.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <CardHeader className="text-center">
                    <div className="bg-bgAlt p-4 rounded-lg mb-4 mx-auto w-fit">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-text mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-slate-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex justify-center gap-2 mb-4">
                      <Badge variant="outline">
                        <Clock size={14} className="mr-1" />
                        {service.timeFrame}
                      </Badge>
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      R$ {service.basePrice.toLocaleString()}
                    </div>
                    <p className="text-sm text-slate-500">Preço base</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-text mb-2 text-sm">
                          Entregáveis:
                        </h4>
                        <ul className="space-y-1">
                          {service.deliverables.map((item) => (
                            <li key={item} className="text-xs text-slate-600 flex gap-2">
                              <CheckCircle className="text-primary shrink-0 mt-0.5" size={12} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button 
                      className="w-full mt-4"
                      variant={selectedService === service.id ? "default" : "outline"}
                    >
                      {selectedService === service.id ? "Selecionado" : "Selecionar"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultado da Simulação */}
      {selectedService && estimatedCost && (
        <section className="py-20 bg-bgAlt">
          <div className="container mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-primary">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-text mb-2">
                      Estimativa de Investimento
                    </h3>
                    <p className="text-slate-600">
                      Para {services.find(s => s.id === selectedService)?.title}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        R$ {estimatedCost.toLocaleString()}
                      </div>
                      <p className="text-sm text-slate-600">Investimento estimado</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-secondary mb-2">
                        {services.find(s => s.id === selectedService)?.timeFrame}
                      </div>
                      <p className="text-sm text-slate-600">Prazo de entrega</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        ROI
                      </div>
                      <p className="text-sm text-slate-600">3-6 meses</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href="/contato">
                      <Button size="lg" className="rounded-lg">
                        Solicitar Orçamento Detalhado
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Informações Adicionais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                  <Users className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Consultoria Gratuita
                </h3>
                <p className="text-slate-600">
                  Análise gratuita do seu cenário e proposta personalizada em 48h.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                  <CheckCircle className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Sem Surpresas
                </h3>
                <p className="text-slate-600">
                  Preços fixos, sem custos ocultos. Você sabe exatamente o que está pagando.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-lg mb-4 mx-auto w-fit">
                  <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  ROI Garantido
                </h3>
                <p className="text-slate-600">
                  Projetos com retorno comprovado. ROI positivo em 3-6 meses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para investir em qualidade?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Receba uma proposta detalhada e personalizada para seu projeto.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Calculator className="mr-2" size={20} />
              Solicitar Orçamento Completo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

