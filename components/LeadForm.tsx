'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { trackLeadWithDedup, getFacebookCookies } from '@/lib/tracking';
import { whatsappLinkWithLeadRef } from '@/lib/utils';
import { SITE } from '@/lib/site';

// ═══════════════════════════════════════════════════════════════════════════
//  LeadForm — captura inline de alta conversão
//  ─────────────────────────────────────────────────────────────────────────
//  Captura o lead MESMO se a pessoa não finalizar no WhatsApp (melhor pra
//  remarketing). Fluxo: valida → dispara Lead c/ dedup CAPI → POST /api/lead
//  (CRM + Meta CAPI server + Evolution avisa o comercial) → abre WhatsApp já
//  preenchido com [ref:lead_xxx]. Degrada gracioso: se a API falhar, ainda
//  abre o WhatsApp.
// ═══════════════════════════════════════════════════════════════════════════

const VEICULOS = ['Carro', 'Moto', 'Caminhão', 'Frota (2+ veículos)'] as const;

export function LeadForm({
  source = 'lead-form',
  compact = false,
}: {
  source?: string;
  compact?: boolean;
}) {
  const [form, setForm] = useState({ nome: '', telefone: '', veiculo: 'Carro' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    // 1) Dispara Lead no browser com event_id pra dedup CAPI.
    const eventId = trackLeadWithDedup(source, {
      type: 'whatsapp',
      veiculo: form.veiculo,
    });

    const msg =
      `Olá! Quero um orçamento de rastreador AutoPrime Tech.\n` +
      `Nome: ${form.nome || '—'}\n` +
      `WhatsApp: ${form.telefone || '—'}\n` +
      `Veículo: ${form.veiculo}`;
    const waHref = whatsappLinkWithLeadRef(msg, eventId);

    // 2) Persiste o lead no servidor (CRM + CAPI + Evolution) — não bloqueia o WhatsApp.
    try {
      const { fbp, fbc } = getFacebookCookies();
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nome,
          phone: form.telefone,
          vehicle: form.veiculo,
          source,
          fbp: fbp ?? undefined,
          fbc: fbc ?? undefined,
        }),
      });
    } catch {
      // segue mesmo se falhar — o WhatsApp é o caminho garantido
    }

    setLoading(false);
    setDone(true);
    window.open(waHref, '_blank', 'noopener,noreferrer');
  };

  if (done) {
    return (
      <div className="glass-strong rounded-2xl p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-400" />
        <h3 className="font-display text-xl font-bold text-white">
          Tudo certo, {form.nome.split(' ')[0] || 'tudo certo'}!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          Estamos te levando ao WhatsApp. Se não abrir,{' '}
          <a
            href={whatsappLinkWithLeadRef(
              `Olá! Quero um orçamento de rastreador (${form.veiculo}).`,
              null,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-400 underline"
          >
            clique aqui
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? 'space-y-3'
          : 'glass-strong space-y-3 rounded-2xl p-5 shadow-premium sm:p-6'
      }
    >
      {!compact && (
        <div className="mb-1">
          <p className="font-display text-lg font-bold text-white">
            Cotação grátis em 1 minuto
          </p>
          <p className="text-sm text-ink-muted">
            Sem compromisso. Receba o melhor plano para o seu veículo.
          </p>
        </div>
      )}

      <input
        required
        value={form.nome}
        onChange={update('nome')}
        placeholder="Seu nome"
        autoComplete="name"
        className="w-full rounded-xl border border-white/10 bg-brand-black/60 px-4 py-3.5 text-sm text-white placeholder-ink-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      />
      <input
        required
        type="tel"
        inputMode="tel"
        value={form.telefone}
        onChange={update('telefone')}
        placeholder="WhatsApp com DDD"
        autoComplete="tel"
        className="w-full rounded-xl border border-white/10 bg-brand-black/60 px-4 py-3.5 text-sm text-white placeholder-ink-muted focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      />
      <select
        value={form.veiculo}
        onChange={update('veiculo')}
        aria-label="Tipo de veículo"
        className="w-full rounded-xl border border-white/10 bg-brand-black/60 px-4 py-3.5 text-sm text-white focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
      >
        {VEICULOS.map((v) => (
          <option key={v}>{v}</option>
        ))}
      </select>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full text-base"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Enviando…
          </>
        ) : (
          'Quero minha cotação grátis →'
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink-muted">
        <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
        Seus dados estão seguros · resposta na hora · sem spam
      </p>
    </form>
  );
}
