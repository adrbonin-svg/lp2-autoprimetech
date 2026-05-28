'use client';

import { motion } from 'framer-motion';
import { Cpu, Heart, Wrench, Smartphone, Globe2, GraduationCap, Radio } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const DIFFS = [
  {
    icon: Cpu,
    title: 'Tecnologia 4G + GPS de última geração',
    text: 'Chip multioperadora (Vivo, Claro, Tim, Oi) que troca de rede automaticamente. Cobertura mesmo em rodovias.',
  },
  {
    icon: Heart,
    title: 'Atendimento humano, sem robô',
    text: 'Em 30 segundos você fala com uma pessoa treinada. Sem URA infinita, sem cadastro repetido.',
  },
  {
    icon: Wrench,
    title: 'Instalação rápida e profissional',
    text: '30 minutos, técnico certificado, garantia vitalícia da instalação. Vamos até você ou agendamos em loja.',
  },
  {
    icon: Smartphone,
    title: 'App moderno e simples',
    text: 'Nota 4,9 nas lojas. Interface limpa, comandos rápidos, suporte por chat direto no app.',
  },
  {
    icon: Globe2,
    title: 'Cobertura nacional',
    text: 'Sede em Salvador-BA, rede de monitoramento em todo o Brasil. Seu veículo rastreado de qualquer cidade.',
  },
  {
    icon: GraduationCap,
    title: 'Equipe especializada há 12 anos',
    text: 'Time formado em segurança veicular, treinado mensalmente. Não terceirizamos central nem suporte.',
  },
  {
    icon: Radio,
    title: 'Central 24h própria',
    text: 'Monitoramento ativo 24h/7d/365. Domingo, feriado, madrugada — sempre tem alguém atento ao seu veículo.',
  },
];

export function Diferenciais() {
  return (
    <section className="section">
      <div className="container-lp">
        <SectionTitle
          eyebrow="O que nos diferencia"
          title="Por que somos a escolha de |quem não abre mão de segurança|"
          description="Não somos os mais baratos. Somos os mais confiáveis. Veja o que entrega esse padrão."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DIFFS.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative flex gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-all hover:border-brand-red/40"
            >
              <div className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-red/30 to-brand-blue/20">
                <d.icon className="h-5 w-5 text-brand-red-light" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{d.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{d.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
