import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade | LFT Gestão de Risco</title>
        <meta name="description" content="Política de privacidade da LFT Gestão de Risco e Planejamento Financeiro" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para home
          </Link>

          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Política de Privacidade
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Informações Coletadas</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A LFT Gestão de Risco e Planejamento Financeiro coleta informações fornecidas voluntariamente por você através de nossos formulários de contato, incluindo nome, e-mail, telefone e mensagens.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Uso das Informações</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  As informações coletadas são utilizadas exclusivamente para:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                  <li>Responder suas solicitações de contato</li>
                  <li>Fornecer informações sobre nossos serviços</li>
                  <li>Agendar consultas</li>
                  <li>Melhorar nossos serviços</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Compartilhamento de Dados</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestação de serviços ou quando exigido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Segurança</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Seus Direitos</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco através do e-mail Diretoria@grupolft.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Cookies</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Utilizamos cookies apenas para armazenar preferências de tema (modo claro/escuro). Você pode desabilitar cookies nas configurações do seu navegador.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Contato</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Para dúvidas sobre esta política de privacidade, entre em contato:
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  E-mail: Diretoria@grupolft.com<br />
                  Telefone: +55 32 9821-1234<br />
                  Endereço: R. Vig. Varela, 1012 - Nova Rio Branco, Visc. do Rio Branco - MG, 36520-000
                </p>
              </section>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
                Última atualização: 19 de janeiro de 2026
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;