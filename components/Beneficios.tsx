'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Lock,
  Bell,
  Smartphone,
  History,
  Fence,
  Headphones,
  Activity,
  Zap,
} from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';

const BENEFITS = [
  {
    icon: MapPin,
    title: 'Rastreamento 24h em tempo real',
    description:
      'Veja onde seu veículo está agora — a cada 10 segundos, com precisão GPS de 3 metros.',
  },
  {
    icon: Lock,
    title: 'Bloqueio remoto pelo app',
    description:
      'Em caso de roubo, bloqueie o veículo direto do celular com confirmação biométrica.',
  },
  {
    icon: Bell,
    title: 'Alertas instantâneos',
    description:
      'Receba notificação na hora: ignição, excesso de velocidade, saída de cerca, bateria baixa.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativo iOS + Android',
    description:
      'App nota 4,9 com mapa em tempo real, histórico, comandos e suporte direto no chat.',
  },
  {
    icon: History,
    title: 'Histórico de rotas (90 dias)',
    description:
      'Toda viagem fica registrada. Saiba quem usou, por onde passou, em que horário, por quanto tempo.',
  },
  {
    icon: Fence,
    title: 'Cerca eletrônica ilimitada',
    description:
      'Defina áreas no mapa e receba alerta automático se o veículo entrar ou sair.',
  },
  {
    icon: Headphones,
    title: 'Central 24h especializada',
    description:
      'Atendimento humano em até 30 segundos. Sem robôs, sem espera. Domingo, feriado, madrugada.',
  },
  {
    icon: Activity,
    title: 'Monitoramento de motor',
    description:
      'Telemetria de RPM, voltagem e temperatura. Detecta tentativa de adulteração no equipamento.',
  },
  {
    icon: Zap,
    title: 'Instalação em 30 minutos',
    description:
      'Equipe técnica vai até você ou agenda em loja parceira. Sem furar fios visíveis, sem marca.',
  },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="section scroll-mt-header">
      <div className="container-lp">
        <SectionTitle
          eyebrow="Por que AutoPrime Tech"
          title="Tudo que você precisa para |proteger seu veículo|"
          description="Tecnologia premium, central 24h e app simples. Sem letras miúdas, sem fidelidade abusiva."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group glass relative p-7 transition-all hover:border-brand-blue/40 hover:bg-white/[0.05]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/30 to-brand-red/20 transition-transform group-hover:scale-110">
                <benefit.icon className="h-6 w-6 text-brand-accent" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
