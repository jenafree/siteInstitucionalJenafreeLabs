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
      <section className="bg-gradient-to-br from-jenafreeBlue via-jenafreeBlueLight to-purple-800 py-20 md:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center text-white"
          >
            {/* Logo fade-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <img
                src="/jenafree-logo.svg"
                alt="Jenafree Labs"
                className="h-16 w-auto mx-auto opacity-90"
              />
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Squads são o passado.{" "}
              <span className="text-yellow-300">Automação inteligente é o futuro.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-inter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Com IA, entregamos QA, automação e software sob demanda — sem squads fixas e sem custo invisível.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/contato">
                <Button size="lg" className="rounded-lg text-lg px-8 bg-white text-jenafreeBlue hover:bg-white/90 font-poppins font-semibold shadow-lg hover:shadow-xl transition-all">
                  <Rocket className="mr-2" size={20} />
                  Solicitar Diagnóstico
                </Button>
              </Link>
              <Link href="/manifesto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg text-lg px-8 border-white text-white hover:bg-white hover:text-jenafreeBlue font-poppins font-semibold"
                >
                  <Eye className="mr-2" size={20} />
                  Conheça o Manifesto
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto IA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-12">
                A Era Pós-Outsourcing
              </h2>
              
              {/* Citação centralizada */}
              <motion.blockquote 
                className="text-2xl md:text-3xl font-inter font-semibold text-jenafreeBlue mb-8 italic leading-relaxed"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                &ldquo;A IA não substituiu pessoas. Substituiu desperdício.&rdquo;
              </motion.blockquote>
              
              {/* Layout em colunas */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 text-left"
                >
                  <h3 className="text-xl font-poppins font-semibold text-text">Tecnologia sob demanda</h3>
                  <p className="text-slate-600 font-inter">
                    Não vendemos horas. Vendemos resultados. Automação inteligente que entrega qualidade real, 
                    sem custos ocultos ou squads desnecessárias.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4 text-left"
                >
                  <h3 className="text-xl font-poppins font-semibold text-text">Verdade em cada entrega</h3>
                  <p className="text-slate-600 font-inter">
                    Transparência total. Você conhece quem trabalha no seu projeto, 
                    o nível real de cada profissional e o valor exato do que está pagando.
                  </p>
                </motion.div>
              </div>
              
              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="/manifesto"
                  className="inline-flex items-center bg-jenafreeBlue text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-jenafreeBlueLight transition-colors shadow-lg hover:shadow-xl"
                >
                  Ler Manifesto Completo (PDF)
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-jenafreeGray">
        <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-text mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-inter">
            Não somos mais uma consultoria. Somos o framework que substitui todas elas.
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
      <section className="py-20 bg-gradient-to-r from-jenafreeBlue to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Tecnologia sob demanda. Verdade em cada entrega.
            </h2>
            <p className="text-xl mb-8 opacity-90 font-inter">
              Diagnóstico gratuito em até 48h. Sem compromisso.
            </p>
            <Link href="/contato">
              <Button
                size="lg"
                className="rounded-lg text-lg px-8 bg-white text-jenafreeBlue hover:bg-white/90 font-poppins font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <Rocket className="mr-2" size={20} />
                Falar com Especialista
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


