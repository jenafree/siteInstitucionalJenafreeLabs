"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle?: string;
  bullets?: string[];
  cta?: { label: string; href: string };
  badge?: string;
};

export default function ServiceCard({ icon, title, subtitle, bullets = [], cta, badge }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-20%" }} 
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="h-full"
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="group h-full border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all rounded-2xl overflow-hidden">
        <CardContent className="p-6 flex flex-col gap-4 h-full">
          <div className="flex items-start justify-between">
            <div className="text-3xl p-3 bg-jenafreeGray rounded-xl">{icon}</div>
            {badge && (
              <Badge className="rounded-full bg-jenafreeBlue text-white font-poppins font-medium">
                {badge}
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-poppins font-bold text-text">{title}</h3>
          {subtitle && <p className="text-sm text-slate-600 font-inter leading-relaxed">{subtitle}</p>}
          {bullets.length > 0 && (
            <ul className="mt-2 flex flex-col gap-2 flex-grow">
              {bullets.map((b) => (
                <li key={b} className="text-sm text-slate-700 flex gap-2 font-inter">
                  <span className="mt-1.5 size-1.5 rounded-full bg-jenafreeBlue shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <a 
              href={cta.href} 
              className="mt-auto inline-flex items-center justify-center rounded-lg border-2 border-jenafreeBlue px-4 py-3 text-sm font-poppins font-semibold text-jenafreeBlue hover:bg-jenafreeBlue hover:text-white transition-all duration-300"
            >
              {cta.label} →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}


