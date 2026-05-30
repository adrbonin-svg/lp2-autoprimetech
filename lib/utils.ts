import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5571981627002';

export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  'Olá! Vim pela LP e quero um orçamento de rastreador veicular.';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lp2.autoprimetech.com.br';

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

/**
 * Versão dinâmica do whatsappLink — embute event_id de Lead persistido
 * pra que o backend (Evolution → CRM) propague pro campo meta_event_id
 * do lead criado, permitindo Meta CAPI deduplicar com o Pixel browser.
 *
 * Padrão do ref: " [ref:lead_xxx]" no final da mensagem.
 * Quando o Evolution receber a mensagem, parser do CRM extrai e salva.
 *
 * @param message corpo da mensagem (sem o ref)
 * @param eventId event_id gerado pelo trackLeadWithDedup()
 */
export function whatsappLinkWithLeadRef(message: string | undefined, eventId: string | null): string {
  const body = message ?? WHATSAPP_MESSAGE;
  const final = eventId ? `${body}  [ref:${eventId}]` : body;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(final)}`;
}

export function formatBRL(value: number) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
}
