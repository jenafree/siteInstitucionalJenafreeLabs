"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar CTA após 300px de scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold">
              Diagnóstico gratuito em 48h
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              asChild 
              variant="secondary" 
              size="sm"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <a 
                href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um diagnóstico gratuito de QA."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Agora
              </a>
            </Button>
            
            <Button
              onClick={() => setIsVisible(false)}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
