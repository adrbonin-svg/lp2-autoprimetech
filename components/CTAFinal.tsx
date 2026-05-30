'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import { whatsappLink } from '@/lib/utils';
import { trackWhatsAppClick, trackEvent } from '@/lib/tracking';

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30 mask-radial" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-cta opacity-20 blur-[150px]" />

      <div className="container-lp">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="badge mx-auto mb-6">
            <Clock className="h-3.5 w-3.5 text-brand-red" />
            Resposta em até 1 minuto · 24h
          </div>

          <h2 className="heading-display text-4xl text-white sm:text-5xl lg:text-6xl">
            Não espere o pior <span className="text-gradient">acontecer</span>.
            <br className="hidden sm:block" /> Proteja seu veículo <span className="text-gradient">hoje</span>.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft sm:text-xl">
            A cada 35 segundos um veículo é roubado no Brasil. Com a AutoPrime Tech,
            você dorme tranquilo sabendo que seu carro está rastreado, bloqueável e monitorado 24h.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ButtonLink
              variant="whatsapp"
              size="xl"
              href={whatsappLink('Quero proteger meu veículo agora. Pode me passar um orçamento?')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => trackWhatsAppClick('cta-final', e)}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento agora
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              size="xl"
              href="tel:08005802770"
              onClick={() => trackEvent('click_phone', { source: 'cta-final' })}
              className="w-full sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              0800 580 2770
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            {[
              { icon: Shield, text: 'Sem fidelidade' },
              { icon: CheckCircle2, text: 'Instalação garantida' },
              { icon: Clock, text: 'Pronto em 30 min' },
              { icon: CheckCircle2, text: 'Cancelamento livre' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-green-400" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
