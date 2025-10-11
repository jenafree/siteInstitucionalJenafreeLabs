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
    <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 0.35, ease: "easeOut" }} className="h-full">
      <Card className="group h-full border hover:shadow-xl transition-all rounded-lg">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <div className="text-3xl">{icon}</div>
            {badge && <Badge className="rounded-full">{badge}</Badge>}
          </div>
          <h3 className="text-xl font-semibold text-text">{title}</h3>
          {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
          {bullets.length > 0 && (
            <ul className="mt-2 flex flex-col gap-2">
              {bullets.map((b) => (
                <li key={b} className="text-sm text-slate-700 flex gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-slate-400/80 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          )}
          {cta && (
            <a href={cta.href} className="mt-4 inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium border-slate-300 bg-white hover:bg-slate-50">
              {cta.label} →
            </a>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}


