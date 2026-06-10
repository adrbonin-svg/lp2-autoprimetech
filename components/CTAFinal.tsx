'use client';

import { motion } from 'framer-motion';
import { Phone, Shield, Clock, CheckCircle2 } from 'lucide-react';
import { LeadForm } from './LeadForm';
import { trackEvent } from '@/lib/tracking';
import { SITE } from '@/lib/site';

export function CTAFinal() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 scroll-mt-header sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30 mask-radial" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-cta opacity-20 blur-[150px]" />

      <div className="container-lp">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy de urgência */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="badge mx-auto mb-6 lg:mx-0">
              <Clock className="h-3.5 w-3.5 text-brand-red" />
              Resposta em até 1 minuto · 24h
            </div>

            <h2 className="heading-display text-4xl text-white sm:text-5xl">
              Não espere o pior <span className="text-gradient">acontecer</span>.
              Proteja seu veículo <span className="text-gradient">hoje</span>.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-soft lg:mx-0">
              A cada 35 segundos um veículo é roubado no Brasil. Com a AutoPrime
              Tech você dorme tranquilo: rastreado, bloqueável e monitorado 24h —
              por menos de R$ 1,67 por dia.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ink-soft lg:justify-start">
              {[
                { icon: Shield, text: 'Planos flexíveis' },
                { icon: CheckCircle2, text: 'Instalação em 1h' },
                { icon: Clock, text: 'Pronto em 30 min' },
                { icon: CheckCircle2, text: 'Cancelamento livre' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-green-400" />
                  {item.text}
                </div>
              ))}
            </div>

            <a
              href={`tel:${SITE.phone0800}`}
              onClick={() => trackEvent('click_phone', { source: 'cta-final' })}
              className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-brand-accent"
            >
              <Phone className="h-5 w-5 text-brand-accent" />
              {SITE.phone0800Display}
            </a>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <LeadForm source="cta-final-form" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
