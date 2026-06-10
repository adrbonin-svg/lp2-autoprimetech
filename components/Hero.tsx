'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Star, BadgeCheck } from 'lucide-react';
import { LeadForm } from './LeadForm';
import { SITE, HOOK, STATS } from '@/lib/site';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40 mask-radial" />
      <div className="absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-brand-blue/30 blur-[120px]" />

      <div className="container-lp">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Coluna esquerda: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="badge mx-auto mb-6 lg:mx-0">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              Central 24h operando agora · Salvador-BA
            </div>

            <h1 className="heading-display text-4xl text-white sm:text-5xl lg:text-6xl">
              Proteja seu veículo 24h por{' '}
              <span className="text-gradient">{HOOK.perDay} por dia</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl lg:mx-0 mx-auto">
              Rastreamento em tempo real, bloqueio remoto e central humana 24h
              com assistência completa.{' '}
              <strong className="text-white">
                Mais de 12.000 veículos já protegidos
              </strong>{' '}
              pela AutoPrime Tech.
            </p>

            {/* Selos rápidos */}
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-ink-soft lg:justify-start">
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-400" /> Planos flexíveis
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-400" /> Instalação grátis
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-green-400" /> Homologado Anatel
              </li>
            </ul>

            {/* Prova rápida */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <span>
                  <strong className="text-white">4,9/5</strong> · 847 avaliações
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-400" /> Desde{' '}
                {SITE.since}
              </div>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0 mx-auto">
              {STATS.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-2xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-ink-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coluna direita: formulário */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="cotacao"
            className="scroll-mt-header"
          >
            <LeadForm source="hero-form" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
