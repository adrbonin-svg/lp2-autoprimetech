'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, Smartphone } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { ButtonLink } from './ui/Button';
import { whatsappLink } from '@/lib/utils';
import { trackWhatsAppClick } from '@/lib/tracking';

const STEPS = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Fale com um especialista',
    text: 'Clique no botão do WhatsApp e em até 1 minuto você fala com nossa equipe. Sem formulário longo, sem espera.',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Agende sua instalação',
    text: 'Escolha o melhor horário. O técnico vai até você (em Salvador) ou agenda na loja parceira mais próxima.',
  },
  {
    number: '03',
    icon: Smartphone,
    title: 'Monitore pelo aplicativo',
    text: 'Em 30 minutos seu veículo está rastreado. Baixe o app, faça login e pronto: segurança 24h na palma da mão.',
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="section scroll-mt-header">
      <div className="container-lp">
        <SectionTitle
          eyebrow="Simples e rápido"
          title="Em 3 passos seu veículo |está protegido|"
          description="Do primeiro contato à instalação completa em menos de 24 horas em Salvador e região."
        />

        <div className="relative mt-16">
          {/* Linha conectora */}
          <div className="absolute left-1/2 top-12 hidden h-[2px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-24 w-24 place-items-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-cta blur-xl opacity-50" />
                  <div className="relative grid h-24 w-24 place-items-center rounded-full border-2 border-white/10 bg-brand-deep">
                    <step.icon className="h-10 w-10 text-brand-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 grid h-9 w-9 place-items-center rounded-full bg-gradient-cta font-display text-sm font-bold text-white shadow-glow-red">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-ink-soft">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <ButtonLink
            variant="whatsapp"
            size="lg"
            href={whatsappLink('Quero começar! Me explica como funciona.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('como-funciona')}
          >
            Começar agora pelo WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
