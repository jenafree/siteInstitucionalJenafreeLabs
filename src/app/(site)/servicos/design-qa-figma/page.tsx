"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, PenTool, Rocket } from "lucide-react";

export default function DesignQaFigmaPage() {
  const deliverables = [
    "Revisão de wireframes e protótipos (Figma)",
    "Testes de acessibilidade (WCAG AA/AAA)",
    "Visual regression testing automatizado",
    "Validação de tokens de design (cores, espaçamentos)",
    "Checklist de consistência visual",
    "Testes em múltiplos browsers e devices",
  ];

  const coverage = [
    "Contraste de cores (WCAG)",
    "Navegação por teclado",
    "Screen readers (NVDA, JAWS)",
    "Responsive design",
    "Touch targets (44x44px)",
    "Zoom até 200%",
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
              Design QA & Figma{" "}
              <span className="text-primary">Review</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Do wireframe ao deploy. Acessibilidade e consistência visual
              garantidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Qualidade Visual + Acessibilidade
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Figma Review
                  </h3>
                  <p className="text-slate-600">
                    Revisamos protótipos antes do dev. Identificamos problemas
                    de UX e acessibilidade cedo.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    WCAG AA/AAA
                  </h3>
                  <p className="text-slate-600">
                    Testes de contraste, navegação por teclado, screen readers.
                    Conformidade garantida.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Visual Regression
                  </h3>
                  <p className="text-slate-600">
                    Testes automatizados que detectam mudanças visuais não
                    intencionais.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Design Tokens
                  </h3>
                  <p className="text-slate-600">
                    Validamos que o código usa os tokens corretos (cores,
                    espaçamentos, tipografia).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Acessibilidade */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <PenTool className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-text mb-4">
                Checklist de Acessibilidade
              </h2>
              <p className="text-slate-600">
                Testamos tudo que importa para inclusão digital
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {coverage.map((item) => (
                <div
                  key={item}
                  className="bg-white px-4 py-3 rounded-lg flex items-center gap-2"
                >
                  <Check className="text-primary shrink-0" size={18} />
                  <span className="text-slate-700">{item}</span>
                </div>
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
            Design que funciona para todos
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Acessibilidade não é opcional. É o básico que todo produto deveria
            ter.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Rocket className="mr-2" size={20} />
              Solicitar Review
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

