import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Jenafree Labs - Como coletamos, usamos e protegemos seus dados pessoais.",
};

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Última atualização:</strong> 14 de janeiro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações Gerais</h2>
            <p className="mb-4">
              A Jenafree Labs ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade 
              e segurança dos dados pessoais de nossos clientes e visitantes. Esta Política de Privacidade 
              descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Dados Coletados</h2>
            <p className="mb-4">Coletamos os seguintes tipos de dados:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Dados de contato:</strong> Nome, e-mail, telefone, empresa</li>
              <li><strong>Dados de navegação:</strong> IP, cookies, páginas visitadas</li>
              <li><strong>Dados de comunicação:</strong> Mensagens enviadas via formulários</li>
              <li><strong>Dados de uso:</strong> Informações sobre como você usa nosso site</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Finalidade do Tratamento</h2>
            <p className="mb-4">Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Responder suas solicitações e fornecer suporte</li>
              <li>Enviar informações sobre nossos serviços</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Cumprir obrigações legais</li>
              <li>Realizar análises e pesquisas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Base Legal</h2>
            <p className="mb-4">
              O tratamento dos seus dados pessoais é baseado em:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Consentimento:</strong> Quando você nos fornece dados voluntariamente</li>
              <li><strong>Legítimo interesse:</strong> Para melhorar nossos serviços</li>
              <li><strong>Execução de contrato:</strong> Para prestação de serviços</li>
              <li><strong>Cumprimento de obrigação legal:</strong> Quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seus Direitos</h2>
            <p className="mb-4">Você tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acesso aos seus dados pessoais</li>
              <li>Correção de dados incorretos</li>
              <li>Exclusão dos seus dados</li>
              <li>Portabilidade dos dados</li>
              <li>Oposição ao tratamento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Compartilhamento de Dados</h2>
            <p className="mb-4">
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, 
              exceto quando necessário para:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Prestação de serviços contratados</li>
              <li>Cumprimento de obrigações legais</li>
              <li>Proteção de direitos e segurança</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Segurança</h2>
            <p className="mb-4">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas 
              para proteger seus dados pessoais contra acesso não autorizado, alteração, 
              divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Retenção de Dados</h2>
            <p className="mb-4">
              Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir 
              as finalidades descritas nesta política ou conforme exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
            <p className="mb-4">
              Utilizamos cookies para melhorar sua experiência em nosso site. 
              Você pode configurar seu navegador para recusar cookies, mas isso 
              pode afetar a funcionalidade do site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contato</h2>
            <p className="mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
              entre em contato conosco:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p><strong>E-mail:</strong> privacidade@jenafreelabs.com</p>
              <p><strong>Telefone:</strong> (11) 99999-9999</p>
              <p><strong>Endereço:</strong> São Paulo, SP, Brasil</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Alterações</h2>
            <p className="mb-4">
              Esta Política de Privacidade pode ser atualizada periodicamente. 
              Recomendamos que você revise esta página regularmente para se manter 
              informado sobre nossas práticas de privacidade.
            </p>
          </section>
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/contato">Falar com DPO</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
