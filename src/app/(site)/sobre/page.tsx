"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, Heart, Rocket } from "lucide-react";

export default function SobrePage() {
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
              Sobre a Jenafree Labs
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Somos um time de especialistas em QA que acredita em entregar
              qualidade sem atravessadores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-text mb-4">Missão</h2>
              <p className="text-slate-600">
                Democratizar o acesso a QA de qualidade, tornando automação e
                performance acessíveis para empresas de todos os tamanhos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-4">
                <Eye className="text-secondary" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-text mb-4">Visão</h2>
              <p className="text-slate-600">
                Ser referência em QA sob demanda no Brasil, reconhecidos pela
                transparência, entrega técnica e preço justo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-text mb-4">Valores</h2>
              <p className="text-slate-600">
                Transparência, excelência técnica, ética, foco no cliente e
                melhoria contínua.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Nossa História
              </h2>
              <div className="text-lg text-slate-700 space-y-4 text-left">
                <p>
                  A Jenafree Labs nasceu da frustração de ver consultorias vendendo
                  QA pleno como sênior, cobrando o dobro do valor real. Empresas
                  pagando caro por profissionais com nível inflacionado.
                </p>
                <p>
                  Decidimos fazer diferente: montar squads sob demanda, com
                  engenheiros sêniores, pagamento justo, e foco total em
                  entregas concretas — pipelines, testes automatizados,
                  dashboards e código funcionando.
                </p>
                <p>
                  Hoje, atendemos fintechs, e-commerces e SaaS B2B que buscam
                  qualidade de verdade, com transparência total: você conhece
                  quem vai trabalhar no seu projeto e paga pelo nível real.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              QA sob demanda. Transparência total.
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Automação, performance e segurança com preço justo e entrega sênior.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-lg text-lg px-8"
              >
                <Rocket className="mr-2" size={20} />
                Solicitar Diagnóstico
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


