import type { Metadata } from 'next';
import Link from 'next/link';
import GerenciarCookies from '@/components/GerenciarCookies';

export const metadata: Metadata = {
  title: 'Política de Privacidade — AutoPrime Tech',
  description:
    'Como a AutoPrime Tech coleta, usa, compartilha e protege seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).',
  robots: { index: true, follow: true },
};

const ATUALIZADO_EM = '6 de junho de 2026';
const DPO_EMAIL = 'lgpd@autoprimetech.com.br';

export default function PoliticaPrivacidade() {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-20 sm:px-6">
      <Link href="/" className="text-sm text-blue-400 underline">
        ← Voltar ao site
      </Link>
      <h1 className="mb-2 mt-6 text-3xl font-bold text-white">
        Política de Privacidade
      </h1>
      <p className="mb-10 text-sm text-gray-400">
        Última atualização: {ATUALIZADO_EM}
      </p>

      <div className="space-y-8 text-[15px] leading-relaxed text-gray-300 [&_a]:text-blue-400 [&_a]:underline [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1">
        <p>
          Esta Política descreve como a <strong>AutoPrime Tech</strong> trata os
          dados pessoais coletados em nossos sites e landing pages, em
          conformidade com a{' '}
          <strong>Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018)</strong>.
          Você pode escolher quais categorias de cookies aceitar a qualquer momento.
        </p>

        <div>
          <h2>1. Controlador e Encarregado (DPO)</h2>
          <p>
            A AutoPrime Tech é a controladora dos seus dados. Contato do
            Encarregado:{' '}
            <a href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </div>

        <div>
          <h2>2. Dados que coletamos</h2>
          <ul>
            <li>
              <strong>Fornecidos por você:</strong> nome, telefone/WhatsApp e
              informações enviadas ao solicitar cotação ou contato.
            </li>
            <li>
              <strong>De navegação:</strong> páginas, origem do tráfego,
              dispositivo e identificadores de cookies — coletados{' '}
              <strong>apenas mediante consentimento</strong>.
            </li>
          </ul>
        </div>

        <div>
          <h2>3. Finalidades e bases legais</h2>
          <p>
            Atendimento e propostas (execução de procedimentos preliminares a
            contrato, Art. 7º, V); medição de audiência e marketing
            (consentimento, Art. 7º, I); segurança e prevenção a fraudes
            (legítimo interesse, Art. 7º, IX).
          </p>
        </div>

        <div>
          <h2>4. Cookies (Google Consent Mode v2)</h2>
          <p>
            Por padrão, nenhum cookie de análise ou marketing é ativado até você
            consentir. Categorias:
          </p>
          <ul>
            <li><strong>Necessários</strong> — essenciais; sempre ativos.</li>
            <li><strong>Análise</strong> — Google Analytics 4, Microsoft Clarity.</li>
            <li><strong>Marketing</strong> — Meta Pixel, Google Ads / GTM.</li>
          </ul>
          <div className="mt-4">
            <GerenciarCookies />
          </div>
        </div>

        <div>
          <h2>5. Compartilhamento e retenção</h2>
          <p>
            Compartilhamos dados apenas com operadores que viabilizam os serviços
            (Google, Meta, Microsoft) e com nossa equipe comercial. Não vendemos
            dados. Cookies de consentimento expiram em até 1 ano.
          </p>
        </div>

        <div>
          <h2>6. Seus direitos (Art. 18 da LGPD)</h2>
          <p>
            Confirmação, acesso, correção, anonimização, portabilidade,
            eliminação e revogação do consentimento. Exerça em{' '}
            <Link href="/meus-dados">Meus Dados</Link> ou por{' '}
            <a href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
