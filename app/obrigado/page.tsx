import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { whatsappLink } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Recebemos seu pedido!',
  robots: { index: false, follow: false },
};

export default function Obrigado() {
  return (
    <main className="grid min-h-screen place-items-center px-4 py-20">
      <div className="container-lp max-w-2xl text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-green-400/20 shadow-glow">
          <CheckCircle2 className="h-10 w-10 text-green-400" />
        </div>
        <h1 className="heading-display mt-6 text-4xl text-white sm:text-5xl">
          Recebemos seu pedido!
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
          Nossa equipe vai te chamar no WhatsApp em até 5 minutos durante o
          horário comercial. Fora desse horário, retornaremos no primeiro
          expediente.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink
            variant="whatsapp"
            size="lg"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-5 w-5" /> Abrir WhatsApp agora
          </ButtonLink>
          <ButtonLink variant="secondary" size="lg" href="tel:08005802770">
            <Phone className="h-5 w-5" /> 0800 580 2770
          </ButtonLink>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm text-ink-muted hover:text-white"
        >
          ← Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
