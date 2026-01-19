import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function Terms() {
  return (
    <>
      <Helmet>
        <title>Termos de Uso | LFT Gestão de Risco</title>
        <meta name="description" content="Termos de uso do site da LFT Gestão de Risco e Planejamento Financeiro" />
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
              Termos de Uso
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Aceitação dos Termos</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ao acessar e usar o site da LFT Gestão de Risco e Planejamento Financeiro, você concorda em cumprir estes termos de uso e todas as leis e regulamentos aplicáveis.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Uso do Site</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Este site é destinado a fornecer informações sobre nossos serviços de gestão de risco e planejamento financeiro. Você concorda em usar o site apenas para fins legais e de acordo com estes termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Propriedade Intelectual</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Todo o conteúdo deste site, incluindo textos, gráficos, logos, imagens e software, é propriedade da LFT Gestão de Risco e Planejamento Financeiro e está protegido por leis de direitos autorais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Limitação de Responsabilidade</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  As informações fornecidas neste site são apenas para fins informativos gerais. Embora nos esforcemos para manter as informações atualizadas e corretas, não fazemos representações ou garantias de qualquer tipo sobre a completude, precisão ou confiabilidade das informações.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Links Externos</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nosso site pode conter links para sites externos que não são fornecidos ou mantidos por nós. Não garantimos a precisão, relevância ou completude de qualquer informação nesses sites externos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Modificações</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Reservamo-nos o direito de revisar estes termos de uso a qualquer momento sem aviso prévio. Ao usar este site, você concorda em estar vinculado à versão atual destes termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Lei Aplicável</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Estes termos são regidos e interpretados de acordo com as leis do Brasil, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais brasileiros.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Contato</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Para perguntas sobre estes termos de uso, entre em contato:
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

export default Terms;