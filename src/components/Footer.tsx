import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blackish text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4">
              Jenafree <span className="text-primary">Labs</span>
            </div>
            <p className="text-sm text-gray-400">
              QA sob demanda. Sem atravessadores.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicos/automacao-testes" className="text-gray-400 hover:text-primary transition-colors">
                  Automação de Testes
                </Link>
              </li>
              <li>
                <Link href="/servicos/performance" className="text-gray-400 hover:text-primary transition-colors">
                  Performance
                </Link>
              </li>
              <li>
                <Link href="/servicos/seguranca" className="text-gray-400 hover:text-primary transition-colors">
                  Segurança
                </Link>
              </li>
              <li>
                <Link href="/servicos/ci-cd" className="text-gray-400 hover:text-primary transition-colors">
                  CI/CD
                </Link>
              </li>
              <li>
                <Link href="/servicos/design-qa-figma" className="text-gray-400 hover:text-primary transition-colors">
                  Design QA
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-gray-400 hover:text-primary transition-colors">
                  Manifesto
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-gray-400 hover:text-primary transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-gray-400 hover:text-primary transition-colors">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contato@jenafreelabs.com</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li className="pt-4">
                <Link href="/contato" className="text-primary hover:text-secondary transition-colors font-medium">
                  Falar com especialista →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Jenafree Labs. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


