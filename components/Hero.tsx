'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Smartphone, Star } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import { whatsappLink } from '@/lib/utils';
import { trackWhatsAppClick, trackEvent } from '@/lib/tracking';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Background efeitos */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-40 mask-radial" />
      <div className="absolute right-0 top-20 -z-10 h-96 w-96 rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="absolute left-0 top-40 -z-10 h-96 w-96 rounded-full bg-brand-blue/30 blur-[120px]" />

      <div className="container-lp">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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

            <h1 className="heading-display text-4xl text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Seu carro <span className="text-gradient">rastreado</span>,
              <br className="hidden sm:block" /> bloqueado e <span className="text-gradient">protegido</span> 24h
            </h1>

            <p className="mt-6 text-lg text-ink-soft sm:text-xl">
              Rastreamento em tempo real, bloqueio remoto pelo app e central
              especializada. <strong className="text-white">Mais de 12.000 veículos</strong> já protegidos
              pela AutoPrime Tech.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <ButtonLink
                variant="whatsapp"
                size="lg"
                href={whatsappLink('Olá! Vim pelo site e quero proteger meu veículo agora.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero-primary')}
              >
                Quero proteger meu veículo
              </ButtonLink>
              <ButtonLink
                variant="secondary"
                size="lg"
                href="#planos"
                onClick={() => trackEvent('cta_click', { source: 'hero-secondary' })}
              >
                Ver planos a partir de R$ 44,90
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-muted lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span>
                  <strong className="text-white">4,9/5</strong> · 847 avaliações
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-400" />
                Instalação garantida
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-blue-light" />
                Cobertura nacional
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong relative aspect-[4/5] overflow-hidden rounded-3xl shadow-premium sm:aspect-square lg:aspect-[4/5]">
              {/* Mockup app + mapa fake */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/30 via-brand-deep to-brand-black">
                <div className="absolute inset-4 rounded-2xl border border-white/10 bg-brand-midnight/80 p-5 backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs font-medium text-white">Honda Civic · ABC-1234</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-ink-muted">
                      AO VIVO
                    </span>
                  </div>
                  <div className="relative mt-4 h-48 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-red/10 grid-bg">
                    <div className="absolute left-1/3 top-1/2 -translate-y-1/2">
                      <span className="absolute -inset-3 animate-ping rounded-full bg-brand-red/40" />
                      <span className="relative grid h-6 w-6 place-items-center rounded-full bg-brand-red text-white">
                        <MapPin className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                      <p className="text-white font-semibold">62km/h</p>
                      <p className="text-ink-muted text-[10px]">Velocidade</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                      <p className="text-white font-semibold">Ligado</p>
                      <p className="text-ink-muted text-[10px]">Ignição</p>
                    </div>
                    <div className="rounded-lg border border-green-400/40 bg-green-400/10 p-2">
                      <p className="text-green-400 font-semibold">Seguro</p>
                      <p className="text-ink-muted text-[10px]">Status</p>
                    </div>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-gradient-cta py-2.5 text-sm font-semibold text-white shadow-glow-red">
                    Bloquear veículo
                  </button>
                </div>
              </div>
            </div>

            {/* Card flutuante */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-4 glass rounded-2xl p-4 shadow-premium sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-green-400/20">
                  <Smartphone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">App nota 4,9 ★</p>
                  <p className="text-xs text-ink-muted">App Store + Play Store</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-premium sm:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-red/20">
                  <ShieldCheck className="h-5 w-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">+R$ 3,2M</p>
                  <p className="text-xs text-ink-muted">Em veículos recuperados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
