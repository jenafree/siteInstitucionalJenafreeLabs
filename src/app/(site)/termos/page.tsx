import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da Jenafree Labs - Condições gerais para uso dos serviços e site.",
};

export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Última atualização:</strong> 14 de janeiro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar e utilizar o site da Jenafree Labs ("Site"), você concorda em cumprir 
              e estar vinculado a estes Termos de Uso ("Termos"). Se você não concorda com 
              qualquer parte destes termos, não deve usar nosso Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Descrição dos Serviços</h2>
            <p className="mb-4">
              A Jenafree Labs oferece serviços de Quality Assurance (QA), automação de testes, 
              testes de performance, segurança e DevOps sob demanda. Nossos serviços incluem:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Automação de testes com Playwright, Cypress e Appium</li>
              <li>Testes de performance com k6</li>
              <li>Testes de segurança e pentest</li>
              <li>Implementação de CI/CD e DevOps</li>
              <li>Design QA e validação de Figma</li>
              <li>Consultoria em qualidade de software</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Uso Aceitável</h2>
            <p className="mb-4">Você concorda em usar nosso Site apenas para fins legítimos e não:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violar qualquer lei ou regulamento aplicável</li>
              <li>Transmitir conteúdo ilegal, prejudicial ou ofensivo</li>
              <li>Interferir no funcionamento do Site</li>
              <li>Tentar obter acesso não autorizado a sistemas</li>
              <li>Usar o Site para spam ou atividades comerciais não autorizadas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
            <p className="mb-4">
              Todo o conteúdo do Site, incluindo textos, gráficos, logos, imagens, 
              software e outros materiais, é propriedade da Jenafree Labs e está 
              protegido por leis de direitos autorais e outras leis de propriedade intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
            <p className="mb-4">
              O Site é fornecido "como está" e "conforme disponível". A Jenafree Labs 
              não garante que o Site estará sempre disponível, livre de erros ou 
              atenderá às suas necessidades específicas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Isenção de Garantias</h2>
            <p className="mb-4">
              Não oferecemos garantias expressas ou implícitas sobre:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Disponibilidade contínua do Site</li>
              <li>Ausência de erros ou vírus</li>
              <li>Precisão das informações fornecidas</li>
              <li>Resultados de qualquer ação tomada com base nas informações do Site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Links para Terceiros</h2>
            <p className="mb-4">
              Nosso Site pode conter links para sites de terceiros. Não somos responsáveis 
              pelo conteúdo ou práticas de privacidade desses sites externos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Modificações</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. 
              As modificações entrarão em vigor imediatamente após a publicação no Site. 
              Seu uso continuado do Site constitui aceitação dos termos modificados.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Rescisão</h2>
            <p className="mb-4">
              Podemos suspender ou encerrar seu acesso ao Site a qualquer momento, 
              sem aviso prévio, por qualquer motivo, incluindo violação destes Termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Lei Aplicável</h2>
            <p className="mb-4">
              Estes Termos são regidos pelas leis brasileiras. Qualquer disputa será 
              resolvida nos tribunais competentes de São Paulo, SP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contato</h2>
            <p className="mb-4">
              Para questões sobre estes Termos de Uso, entre em contato:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>E-mail:</strong> legal@jenafreelabs.com</p>
              <p><strong>Telefone:</strong> (11) 99999-9999</p>
              <p><strong>Endereço:</strong> São Paulo, SP, Brasil</p>
            </div>
          </section>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/contato">Falar com Jurídico</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
