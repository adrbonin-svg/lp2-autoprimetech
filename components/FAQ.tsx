'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from './ui/SectionTitle';
import { faqSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';

export const FAQ_ITEMS = [
  {
    question: 'Quanto custa um rastreador veicular da AutoPrime Tech?',
    answer:
      'Nossos planos começam em R$ 44,90 por mês no plano Essencial. O plano Premium, mais escolhido, custa R$ 69,90/mês e inclui bloqueio remoto, cerca eletrônica e recuperação assistida. Para frotas, o plano dedicado é R$ 199,90 por veículo. Não há fidelidade obrigatória nem reajuste surpresa.',
  },
  {
    question: 'O rastreador funciona em qualquer carro ou moto?',
    answer:
      'Sim. Nosso equipamento é compatível com 100% dos veículos a combustão e elétricos, do popular ao premium, carros, motos, caminhões e máquinas. A instalação é discreta, sem cortar fios visíveis, e dura cerca de 30 minutos.',
  },
  {
    question: 'Como funciona o bloqueio remoto pelo aplicativo?',
    answer:
      'Em caso de roubo, você abre o app, confirma sua identidade biométrica (Face ID ou digital) e clica em "Bloquear veículo". O comando é enviado em segundos via 4G. O motor é desligado de forma segura — o veículo perde a partida na próxima parada, sem riscos em movimento.',
  },
  {
    question: 'O rastreador continua funcionando se o ladrão arrancar a bateria?',
    answer:
      'Sim. Nosso equipamento tem bateria interna de backup que mantém o sinal por até 48 horas mesmo desconectado. Além disso, o sistema envia alerta imediato à central no momento da desconexão.',
  },
  {
    question: 'Quanto tempo demora para instalar?',
    answer:
      'A instalação completa leva cerca de 30 minutos. Em Salvador e Região Metropolitana, nosso técnico vai até você sem custo adicional. Em outras cidades, agendamos em uma das nossas lojas parceiras credenciadas.',
  },
  {
    question: 'O aplicativo funciona em iPhone e Android?',
    answer:
      'Sim, temos app nativo para iOS e Android, com nota média 4,9. Ele tem mapa em tempo real, histórico de rotas, comandos remotos, alertas push e chat direto com a central 24h.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim, sem multa e sem burocracia. Não trabalhamos com fidelidade obrigatória. Você pode cancelar pelo próprio app ou pelo WhatsApp da central, e o serviço encerra no fim do ciclo vigente.',
  },
  {
    question: 'A AutoPrime Tech atende fora de Salvador?',
    answer:
      'Sim. Nossa central de monitoramento opera 24h cobrindo todo o Brasil. Para instalação, temos lojas parceiras credenciadas em todas as capitais e principais cidades do interior. Fale com nosso especialista para agendar na sua região.',
  },
  {
    question: 'O que acontece se meu veículo for roubado?',
    answer:
      'Você liga 0800 580 2770 (ou aciona pelo app). Em até 1 minuto, nossa central confirma o sinistro e inicia o protocolo: 1) rastreamento intensivo a cada 5 segundos; 2) bloqueio remoto se autorizado; 3) acionamento da polícia da região; 4) coordenação com viatura até a recuperação. Em 2025 recuperamos 329 veículos com taxa de sucesso de 87%.',
  },
  {
    question: 'O chip do rastreador é multioperadora?',
    answer:
      'Sim. Usamos chip M2M multioperadora (Vivo, Claro, Tim, Oi) que troca de rede automaticamente em busca do melhor sinal. Isso garante cobertura mesmo em rodovias e regiões com sinal fraco de uma única operadora.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section scroll-mt-header">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ_ITEMS)) }}
      />
      <div className="container-lp">
        <SectionTitle
          eyebrow="Dúvidas frequentes"
          title="Tudo que você precisa saber |antes de contratar|"
          description="Não achou sua dúvida aqui? Fale com a gente no WhatsApp em até 1 minuto."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                className={cn(
                  'overflow-hidden rounded-2xl border transition-all',
                  isOpen
                    ? 'border-brand-blue/40 bg-white/[0.05]'
                    : 'border-white/10 bg-white/[0.02]',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-ink-muted transition-transform',
                      isOpen && 'rotate-180 text-brand-accent',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-white/5 px-6 py-5 text-ink-soft">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
