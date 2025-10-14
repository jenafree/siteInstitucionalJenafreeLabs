"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ShieldCheck, Rocket } from "lucide-react";

export default function SegurancaPage() {
  const deliverables = [
    "SAST (análise estática de código)",
    "DAST (testes dinâmicos em runtime)",
    "Scan de secrets e credenciais expostas",
    "SCA (análise de dependências vulneráveis)",
    "Pentest com evidências e PoC",
    "Relatório executivo com priorização",
  ];

  const coverage = [
    "OWASP Top 10",
    "Injection (SQL, XSS, LDAP)",
    "Autenticação quebrada",
    "Exposição de dados sensíveis",
    "XXE e deserialização",
    "Configurações inseguras",
    "Broken Access Control",
    "CSRF e SSRF",
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
              Segurança & Pentest{" "}
              <span className="text-primary">de Verdade</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              SAST/DAST/Secrets/SCA + pentest com evidências. OWASP Top 10
              coberto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text mb-8 text-center">
              Segurança em Múltiplas Camadas
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    SAST + DAST
                  </h3>
                  <p className="text-slate-600">
                    Análise estática no código-fonte e testes dinâmicos em
                    runtime. Cobertura completa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Pentest Real
                  </h3>
                  <p className="text-slate-600">
                    Engenheiros de segurança testam manualmente, com PoC e
                    evidências. Não é só scan automático.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    Secrets Scanning
                  </h3>
                  <p className="text-slate-600">
                    Detectamos API keys, tokens e credenciais expostas no
                    código, commits e logs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-text mb-2">
                    SCA (Dependências)
                  </h3>
                  <p className="text-slate-600">
                    Auditoria de bibliotecas de terceiros. CVE tracking e patch
                    recommendations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* OWASP Top 10 */}
      <section className="py-20 bg-bgAlt">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <ShieldCheck className="text-primary" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-text mb-4">
                Cobertura OWASP Top 10
              </h2>
              <p className="text-slate-600">
                Testamos todas as vulnerabilidades críticas do ranking
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
            Não espere sofrer um ataque
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Receba um audit de segurança gratuito na consultoria inicial.
          </p>
          <Link href="/contato">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-lg text-lg px-8"
            >
              <Rocket className="mr-2" size={20} />
              Solicitar Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}


