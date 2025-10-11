"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, Phone, Clock } from "lucide-react";
import { FormEvent } from "react";

export default function ContatoPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    // Por agora, vamos usar mailto
    const mailtoLink = `mailto:contato@jenafreelabs.com?subject=Contato de ${name} - ${company}&body=${encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nEmpresa: ${company}\n\nMensagem:\n${message}`
    )}`;
    window.location.href = mailtoLink;
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
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              Vamos Conversar
            </h1>
            <p className="text-xl md:text-2xl text-slate-600">
              Diagnóstico gratuito em até 48h. Sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Solicitar Diagnóstico
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Nome completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="João Silva"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Email corporativo
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="joao@empresa.com.br"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Empresa
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        placeholder="Empresa LTDA"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-text mb-2"
                      >
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Conte-nos sobre seu desafio de QA..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-lg">
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-2">
                        Resposta Rápida
                      </h3>
                      <p className="text-slate-600">
                        Retornamos em até 48h com um diagnóstico inicial e
                        próximos passos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-2">Email</h3>
                      <p className="text-slate-600">
                        contato@jenafreelabs.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-text mb-2">WhatsApp</h3>
                      <p className="text-slate-600">(11) 99999-9999</p>
                      <p className="text-sm text-slate-500 mt-1">
                        Seg-Sex, 9h às 18h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    O que você receberá:
                  </h3>
                  <ul className="space-y-2 text-sm opacity-90">
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      Análise gratuita do seu cenário atual
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      Recomendações técnicas personalizadas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      Estimativa de esforço e investimento
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-white">✓</span>
                      Próximos passos sugeridos
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


