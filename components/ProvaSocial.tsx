'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, ShieldCheck, Users, Car } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const STATS = [
  { icon: Car, value: '12.847', label: 'Veículos protegidos' },
  { icon: ShieldCheck, value: '329', label: 'Recuperações em 2025' },
  { icon: TrendingUp, value: 'R$ 3,2M', label: 'Em prejuízo evitado' },
  { icon: Users, value: '4,9/5', label: '847 avaliações' },
];

const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo',
    role: 'Proprietário · Honda Civic',
    text: 'Tentaram levar meu carro às 3h da manhã. Em 4 minutos a central já tinha bloqueado, e em 22 minutos a polícia estava no local. Recuperaram tudo sem um arranhão.',
    rating: 5,
  },
  {
    name: 'Renata Almeida',
    role: 'Gestora de frota · 18 veículos',
    text: 'Reduzi 42% dos custos com combustível só identificando rotas erradas e horas extras irreais. O painel é o melhor que já testei em 10 anos no setor.',
    rating: 5,
  },
  {
    name: 'João Marcos',
    role: 'Motorista por app · Salvador',
    text: 'Trabalho de madrugada e a tranquilidade que o rastreador me dá não tem preço. Quando precisei de suporte às 2h, atenderam em 15 segundos.',
    rating: 5,
  },
];

export function ProvaSocial() {
  return (
    <section id="depoimentos" className="section scroll-mt-header">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-brand-deep/40 to-transparent" />
      <div className="container-lp">
        <SectionTitle
          eyebrow="Mais de 12 mil clientes"
          title="Resultados reais de quem |confia na AutoPrime|"
          description="Veículos recuperados, frotas econômicas, famílias dormindo tranquilas."
        />

        {/* Estatísticas */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong p-6 text-center"
            >
              <stat.icon className="mx-auto h-7 w-7 text-brand-accent" />
              <p className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ink-muted sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass relative flex flex-col p-7"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-red/40" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-ink">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-cta font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-ink-muted">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
