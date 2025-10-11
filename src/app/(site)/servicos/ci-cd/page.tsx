"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Cable, Rocket } from "lucide-react";

export default function CiCdPage() {
  const deliverables = [
    "Quality gates configurados no pipeline",
    "Ambientes efêmeros por PR (preview deploy)",
    "Estratégias de deploy (canary, blue-green, rollback)",
    "Integração com GitHub Actions / GitLab CI",
    "Deploy automatizado em Vercel / CloudFlare",
    "Trunk-based development e feature flags",
  ];

  const platforms = [
    "GitHub Actions",
    "GitLab CI/CD",
    "Vercel",
    "CloudFlare Pages",
    "AWS CodePipeline",
    "Azure DevOps",
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
              CI/CD & DevEx{" "}
              <span className="text-primary">de Verdade</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Quality gates, ambientes efêmeros e deploy confiável. DevOps além
              do buzzword.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              CI/CD que Funciona
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Quality Gates
                  </h3>
                  <p className="text-slate-600">
                    Testes automatizados, linting, security scan. Nada passa sem
                    aprovação.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Preview Deploys
                  </h3>
                  <p className="text-slate-600">
                    Ambiente efêmero por PR. Review visual antes do merge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Deploy Strategies
                  </h3>
                  <p className="text-slate-600">
                    Canary, blue-green, rollback automático. Deploy sem medo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Trunk-Based
                  </h3>
                  <p className="text-slate-600">
                    Feature flags, small commits, deploys frequentes. Fluxo
                    moderno.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Plataformas */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Cable className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-text mb-6">
              Plataformas Suportadas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <Card key={platform}>
                  <CardContent className="p-4 text-center">
                    <span className="font-medium text-text">{platform}</span>
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
            Deploy com confiança, todos os dias
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Transforme seu pipeline em uma máquina de entregar valor.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Rocket className="mr-2" size={20} />
              Solicitar Consultoria
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

