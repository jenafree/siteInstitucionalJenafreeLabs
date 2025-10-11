"use client";

import { Button } from "@/components/ui/button";
import ServicesGrid from "@/components/ServicesGrid";
import Metrics from "@/components/Metrics";
import PostCard from "@/components/PostCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Eye, Rocket } from "lucide-react";

export default function HomePage() {
  const blogPosts = [
    {
      title: "QA sob Demanda: corte custos sem cortar qualidade",
      description: "Reduza custos sem perder qualidade. Descubra como o modelo de QA sob demanda muda o jogo.",
      date: "2025-10-07",
      slug: "qa-sob-demanda",
      tags: ["qa", "outsourcing", "b2b"],
    },
    {
      title: "Playwright + POM + DSL: a stack definitiva de automação",
      description: "Como estruturamos testes E2E escaláveis usando Page Object Model e Domain Specific Language.",
      date: "2025-10-06",
      slug: "playwright-pom-dsl",
      tags: ["automação", "playwright", "arquitetura"],
    },
    {
      title: "k6 na prática: performance testing no CI/CD",
      description: "Implemente testes de performance no seu pipeline e defina SLOs reais para sua aplicação.",
      date: "2025-10-05",
      slug: "k6-na-pratica",
      tags: ["performance", "k6", "devops"],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-bgAlt to-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Squads de QA sob demanda.{" "}
              <span className="text-primary">Transparência total.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Automação, performance e segurança com preço justo e entrega sênior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="rounded-lg text-lg px-8">
                  <Rocket className="mr-2" size={20} />
                  Solicitar Diagnóstico Gratuito
                </Button>
              </Link>
              <Link href="/manifesto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg text-lg px-8"
                >
                  <Eye className="mr-2" size={20} />
                  Ler Manifesto
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Qualidade é o que fazemos. Automação é como entregamos.
          </p>
        </div>
        <ServicesGrid />
      </section>

      {/* Metrics */}
      <Metrics />

      {/* Manifesto Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-8">
                Nosso Jeito Jenafree de Fazer QA
              </h2>
              <div className="space-y-6 text-xl text-slate-700">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="italic"
                >
                  &quot;Enquanto o cliente paga caro... nós entregamos qualidade acessível.&quot;
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="italic"
                >
                  &quot;Enquanto consultorias vendem PowerPoint... nós entregamos pipeline.&quot;
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="italic font-semibold text-primary"
                >
                  &quot;Qualidade como Estratégia. Automação como Cultura.&quot;
                </motion.p>
              </div>
              <div className="mt-8">
                <Link
                  href="/manifesto"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors text-lg font-medium"
                >
                  Ler Manifesto Completo
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cases Teaser */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Casos de Sucesso
            </h2>
            <p className="text-lg text-slate-600">
              Resultados reais, entregas concretas
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Fintech reduz bugs em 70%",
                result: "70% menos bugs em produção",
                stack: "Playwright + k6 + GitHub Actions",
              },
              {
                title: "E-commerce ganha 40% de performance",
                result: "p95 de 800ms → 280ms",
                stack: "k6 + Grafana + CloudFlare",
              },
              {
                title: "SaaS B2B automatiza 100% dos testes críticos",
                result: "Deploy confiável 3x por dia",
                stack: "Cypress + GitLab CI + Vercel",
              },
            ].map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card"
              >
                <h3 className="text-xl font-semibold text-text mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-primary font-bold mb-2">{caseItem.result}</p>
                <p className="text-sm text-slate-600">{caseItem.stack}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/cases">
              <Button variant="outline" size="lg" className="rounded-lg">
                Ver Todos os Cases
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Blog
            </h2>
            <p className="text-lg text-slate-600">
              Insights e boas práticas em QA
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-lg">
                Ver Todos os Posts
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu QA?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Diagnóstico gratuito em até 48h. Sem compromisso.
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


