"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Props = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export default function Testimonial({ quote, author, role, company }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <p className="text-lg text-text mb-4 italic">&quot;{quote}&quot;</p>
          <div>
            <p className="font-semibold text-text">{author}</p>
            <p className="text-sm text-slate-600">
              {role} • {company}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}


