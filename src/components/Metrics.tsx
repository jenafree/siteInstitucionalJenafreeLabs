"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "99.9%", label: "Uptime médio" },
  { value: "< 2h", label: "Tempo de resposta" },
  { value: "50+", label: "Projetos entregues" },
  { value: "100%", label: "Clientes satisfeitos" },
];

export default function Metrics() {
  return (
    <section className="bg-bgAlt py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-text">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



