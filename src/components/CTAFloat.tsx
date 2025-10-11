"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTAFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isClosed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
        setIsClosed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <div className="relative">
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 z-10"
          aria-label="Fechar"
        >
          <X size={12} />
        </button>
        <Link href="/contato">
          <Button
            size="lg"
            className="rounded-full shadow-hover flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Falar com especialista
          </Button>
        </Link>
      </div>
    </div>
  );
}


