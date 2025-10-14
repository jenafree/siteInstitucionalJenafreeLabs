"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Gauge, Rocket } from "lucide-react";

export default function PerformancePage() {
  const deliverables = [
    "Testes de carga, stress e soak com k6",
    "Thresholds e SLOs definidos no pipeline",
    "Dashboards Grafana + OpenTelemetry",
    "Análise de p95, p99 e taxa de erro",
    "Relatórios executivos com recomendações",
    "Integração contínua de performance",
  ];

  const metrics = [
    { label: "p95", target: "< 400ms", description: "95% das requests" },
    { label: "Taxa de erro", target: "< 1%", description: "Reliability" },
    { label: "RPS", target: "Customizado", description: "Requests/segundo" },
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
              Testes de Performance{" "}
              <span className="text-primary">com k6</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Carga, stress, soak. Thresholds e SLO no pipeline. Performance que
              você pode medir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Por que Performance com k6?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    JavaScript Nativo
                  </h3>
                  <p className="text-slate-600">
                    Scripts de teste em JS/TS, fácil de escrever e manter. Seu
                    time já conhece a sintaxe.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    SLO no CI/CD
                  </h3>
                  <p className="text-slate-600">
                    Thresholds que quebram o build se performance degradar.
                    Nada passa sem validação.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Observabilidade Real
                  </h3>
                  <p className="text-slate-600">
                    Integração com Grafana, Prometheus e OpenTelemetry. Métricas
                    em tempo real.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Cenários Reais
                  </h3>
                  <p className="text-slate-600">
                    Simulamos carga de Black Friday, picos de acesso e cenários
                    de stress customizados.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Métricas que Monitoramos
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {metrics.map((metric) => (
                <Card key={metric.label}>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      <Gauge className="text-primary" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-text mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-3xl font-bold text-primary mb-2">
                      {metric.target}
                    </p>
                    <p className="text-sm text-slate-600">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-20 bg-white">
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

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sua aplicação aguenta Black Friday?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descubra antes dos seus usuários. Teste de performance gratuito na
            consultoria inicial.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Rocket className="mr-2" size={20} />
              Solicitar Análise
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}


