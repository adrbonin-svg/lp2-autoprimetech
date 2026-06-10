'use client';

import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import { SectionTitle } from './ui/SectionTitle';
import { whatsappLink, cn } from '@/lib/utils';
import { trackWhatsAppClick } from '@/lib/tracking';
import { PLANOS } from '@/lib/site';

export function Planos() {
  return (
    <section id="planos" className="section scroll-mt-header">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-deep/30 via-transparent to-brand-deep/30" />
      <div className="container-lp">
        <SectionTitle
          eyebrow="Planos"
          title="Proteção a partir de |R$ 1,67 por dia|"
          description="Sem multa pra cancelar, sem letras miúdas, sem reajuste surpresa. Tudo escrito em contrato."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PLANOS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                'relative flex flex-col rounded-3xl border p-8 transition-all',
                plan.highlight
                  ? 'border-brand-red/50 bg-gradient-to-b from-brand-red/10 via-brand-deep to-brand-deep shadow-glow-red'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/20',
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-gradient-cta px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-glow-red">
                  <Crown className="h-3.5 w-3.5" /> Mais escolhido
                </div>
              )}

              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {plan.name}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-2xl text-ink-soft">R$</span>
                <span className="font-display text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-muted">{plan.unit}</span>
              </div>
              <p className="mt-1 text-xs font-medium text-brand-accent">
                {plan.perDay}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-ink"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <ButtonLink
                variant={plan.highlight ? 'primary' : 'secondary'}
                size="lg"
                href={whatsappLink(`Olá! Quero contratar o plano ${plan.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => trackWhatsAppClick(`plano-${plan.name.toLowerCase()}`, e)}
                className="mt-8 w-full"
              >
                {plan.cta}
              </ButtonLink>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          Instalação grátis em promoção · Planos flexíveis ·
          Homologado Anatel
        </p>
      </div>
    </section>
  );
}
