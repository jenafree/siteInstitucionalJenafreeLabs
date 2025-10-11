"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Users } from "lucide-react";

export default function ManifestoPage() {
  const principles = [
    {
      title: "Transparência Total",
      description:
        "Contratos claros, preços fixos, sem surpresas. Você sabe exatamente o que está pagando e o que vai receber.",
    },
    {
      title: "Código, Não Slides",
      description:
        "Nosso portfólio são pipelines funcionando, testes automatizados e dashboards em produção.",
    },
    {
      title: "Investimento Justo",
      description:
        "Você paga pelo nível real do profissional. Pleno é pleno, sênior é sênior. Sem inflação de preços.",
    },
    {
      title: "Qualidade como Estratégia",
      description:
        "QA não é custo, é investimento. Prevenimos bugs ao invés de só corrigir.",
    },
    {
      title: "Automação como Cultura",
      description:
        "Testes manuais são exceção, não regra. Automatizamos tudo que é repetível.",
    },
    {
      title: "DevOps de Verdade",
      description:
        "CI/CD não é buzzword. É o jeito que trabalhamos, todo dia, todo deploy.",
    },
    {
      title: "Transparência de Níveis",
      description:
        "Você conhece quem vai trabalhar no seu projeto. CV, experiência e nível real, sem maquiagem.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blackish to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nosso Jeito Jenafree de Fazer QA
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Qualidade como estratégia. Automação como cultura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Frases Animadas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl text-text font-medium italic border-l-4 border-primary pl-6"
            >
              &quot;Nascemos da frustração de ver consultorias vendendo QA pleno como sênior, cobrando o dobro.&quot;
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl md:text-3xl text-text font-medium italic border-l-4 border-secondary pl-6"
            >
              &quot;Decidimos fazer diferente: transparência total, preço justo, nível real do profissional.&quot;
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl text-primary font-bold italic border-l-4 border-primary pl-6"
            >
              &quot;Qualidade como Estratégia. Automação como Cultura.&quot;
            </motion.div>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nossos Princípios
            </h2>
            <p className="text-lg text-slate-600">
              O que nos guia em cada projeto
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-xl font-semibold text-text mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Junte-se a Nós
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Seja como cliente ou como talento, queremos pessoas que acreditam
              em qualidade de verdade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="rounded-lg">
                  <Rocket className="mr-2" size={20} />
                  Solicitar Diagnóstico
                </Button>
              </Link>
              <Link href="/carreiras">
                <Button size="lg" variant="outline" className="rounded-lg">
                  <Users className="mr-2" size={20} />
                  Trabalhe Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


