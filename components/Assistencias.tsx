'use client';

import { motion } from 'framer-motion';
import {
  Truck,
  KeyRound,
  Fuel,
  BatteryCharging,
  CircleDot,
  Ambulance,
  Car,
  Hotel,
  Bus,
  Wrench,
  Home,
  PawPrint,
  HeartPulse,
  Glasses,
  type LucideIcon,
} from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { ButtonLink } from './ui/Button';
import { ASSISTENCIAS } from '@/lib/site';
import { whatsappLink } from '@/lib/utils';
import { trackWhatsAppClick } from '@/lib/tracking';

const ICONS: Record<string, LucideIcon> = {
  Truck,
  KeyRound,
  Fuel,
  BatteryCharging,
  CircleDot,
  Ambulance,
  Car,
  Hotel,
  Bus,
  Wrench,
  Home,
  PawPrint,
  HeartPulse,
  Glasses,
};

export function Assistencias() {
  return (
    <section id="assistencias" className="section scroll-mt-header">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-deep/30 via-transparent to-brand-deep/30" />
      <div className="container-lp">
        <SectionTitle
          eyebrow="Muito além do rastreador"
          title="14 assistências 24h |inclusas no seu plano|"
          description="Você não fica na mão em nenhuma situação. Reboque, chaveiro, pane, carro reserva e muito mais — é só acionar a central."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ASSISTENCIAS.map((a, i) => {
            const Icon = ICONS[a.icon] ?? Wrench;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: (i % 4) * 0.05 }}
                className="glass group rounded-2xl p-5 transition-all hover:border-brand-accent/40 hover:bg-white/[0.05]"
              >
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-red/20 text-brand-accent ring-1 ring-white/10 transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{a.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {a.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            variant="whatsapp"
            size="lg"
            href={whatsappLink('Quero saber quais assistências 24h estão inclusas no plano.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => trackWhatsAppClick('assistencias', e)}
          >
            Quero proteção com assistência 24h
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
