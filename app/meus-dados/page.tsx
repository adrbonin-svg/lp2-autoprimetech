import type { Metadata } from 'next';
import Link from 'next/link';
import GerenciarCookies from '@/components/GerenciarCookies';

export const metadata: Metadata = {
  title: 'Meus Dados — Direitos LGPD | AutoPrime Tech',
  description:
    'Exerça seus direitos de titular de dados (Art. 18 da LGPD): acesso, correção, eliminação, portabilidade e revogação de consentimento.',
  robots: { index: true, follow: true },
};

const DPO_EMAIL = 'lgpd@autoprimetech.com.br';
const WHATSAPP = '5571981627002';

const direitos: [string, string][] = [
  ['Confirmação e acesso', 'Saber se tratamos seus dados e obter uma cópia.'],
  ['Correção', 'Atualizar dados incompletos, inexatos ou desatualizados.'],
  ['Anonimização ou eliminação', 'Excluir dados desnecessários ou tratados em desconformidade.'],
  ['Portabilidade', 'Receber seus dados em formato estruturado.'],
  ['Revogação do consentimento', 'Retirar a autorização para cookies a qualquer momento.'],
  ['Oposição', 'Opor-se a tratamentos baseados em legítimo interesse.'],
];

export default function MeusDados() {
  const assunto = encodeURIComponent('Solicitação LGPD — exercício de direitos');
  const corpo = encodeURIComponent(
    'Olá, sou titular de dados e gostaria de exercer o(s) seguinte(s) direito(s):\n\n[ ] Acesso\n[ ] Correção\n[ ] Eliminação\n[ ] Portabilidade\n[ ] Revogação de consentimento\n\nNome:\nTelefone usado no contato:\n',
  );

  return (
    <section className="mx-auto max-w-3xl px-4 pb-20 pt-20 sm:px-6">
      <Link href="/" className="text-sm text-blue-400 underline">
        ← Voltar ao site
      </Link>
      <h1 className="mb-2 mt-6 text-3xl font-bold text-white">Meus Dados</h1>
      <p className="mb-10 text-[15px] leading-relaxed text-gray-300">
        A LGPD garante a você o controle sobre seus dados. Gerencie suas
        preferências de cookies e solicite o exercício dos seus direitos.
      </p>

      <div className="mb-10 rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">
        <h2 className="mb-2 text-lg font-semibold text-white">
          Preferências de cookies
        </h2>
        <p className="mb-4 text-sm text-gray-400">
          Reabra o painel para aceitar ou recusar cookies de análise e marketing.
        </p>
        <GerenciarCookies />
      </div>

      <h2 className="mb-4 text-xl font-semibold text-white">
        Seus direitos (Art. 18 da LGPD)
      </h2>
      <ul className="mb-10 space-y-3">
        {direitos.map(([titulo, desc]) => (
          <li key={titulo} className="rounded-xl border border-gray-800 bg-gray-900/40 p-4">
            <strong className="text-white">{titulo}</strong>
            <span className="mt-1 block text-sm text-gray-400">{desc}</span>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 text-xl font-semibold text-white">Como solicitar</h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${DPO_EMAIL}?subject=${assunto}&body=${corpo}`}
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:brightness-110"
        >
          Solicitar por e-mail
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, gostaria de exercer meus direitos LGPD.')}`}
          className="flex-1 rounded-xl border border-gray-700 px-5 py-3 text-center text-sm font-semibold text-gray-200 transition hover:bg-white/5"
        >
          Solicitar por WhatsApp
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        Encarregado (DPO):{' '}
        <a href={`mailto:${DPO_EMAIL}`} className="text-blue-400 underline">
          {DPO_EMAIL}
        </a>
      </p>
    </section>
  );
}
