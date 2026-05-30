'use client';

// ═══════════════════════════════════════════════════════════════════════════
//  Tracking — Meta Pixel + Google Tag + GA4
//  ─────────────────────────────────────────────────────────────────────────
//  Pontos-chave (atualizado 2026-05-30):
//   - Eventos Lead disparam fbq('track','Lead',...) COM eventID consistente
//     pra dedup browser × CAPI server-side no MetaCapiObserver do CRM.
//   - eventID é embutido na mensagem do WhatsApp como [ref:lead_xxx] pra
//     que o webhook do Evolution propague pro lead recém-criado no CRM.
//   - Lê cookies _fbc / _fbp pra serem enviados no link WhatsApp também.
// ═══════════════════════════════════════════════════════════════════════════

type EventName =
  | 'page_view'
  | 'lead'
  | 'click_whatsapp'
  | 'click_phone'
  | 'form_submit'
  | 'scroll_50'
  | 'scroll_90'
  | 'video_play'
  | 'cta_click';

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const LEAD_EVENT_ID_KEY = 'autoprime_last_lead_event_id';

/**
 * Gera event_id único pra um evento Lead. Formato: lead_<timestamp>_<random>
 */
export function generateLeadEventId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Persiste o event_id no localStorage pra ser recuperado depois.
 * Backend CRM usa esse ID via [ref:...] na mensagem WhatsApp pra deduplicar.
 */
function persistLeadEventId(eventId: string): void {
  try {
    localStorage.setItem(LEAD_EVENT_ID_KEY, eventId);
    sessionStorage.setItem(LEAD_EVENT_ID_KEY, eventId);
  } catch {
    // Privacy mode / quota — falha silenciosa
  }
}

/**
 * Recupera o último event_id de Lead gerado. Útil pra montar link WhatsApp.
 */
export function getLastLeadEventId(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(LEAD_EVENT_ID_KEY)
      || sessionStorage.getItem(LEAD_EVENT_ID_KEY);
  } catch {
    return null;
  }
}

/**
 * Lê cookie pelo nome. Usado pra capturar _fbc / _fbp.
 */
function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : null;
}

/**
 * Cookies Facebook usados pra atribuição precisa (devem ser enviados ao CAPI).
 */
export function getFacebookCookies(): { fbc: string | null; fbp: string | null } {
  return {
    fbc: readCookie('_fbc'),
    fbp: readCookie('_fbp'),
  };
}

export function trackEvent(name: EventName, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  // GTM dataLayer
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, ...params });

  // GA4 direto
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    const fbMap: Record<EventName, string | null> = {
      lead: 'Lead',
      click_whatsapp: 'Contact',
      form_submit: 'Lead',
      cta_click: 'InitiateCheckout',
      page_view: 'PageView',
      click_phone: 'Contact',
      scroll_50: null,
      scroll_90: null,
      video_play: 'ViewContent',
    };
    const fbEvent = fbMap[name];
    if (fbEvent) window.fbq('track', fbEvent, params);
  }
}

/**
 * Dispara Lead event COM event_id pra dedup browser × CAPI server.
 * Retorna o event_id gerado pra ser embutido na mensagem WhatsApp.
 */
export function trackLeadWithDedup(source: string, extra: EventParams = {}): string {
  const eventId = generateLeadEventId();
  persistLeadEventId(eventId);

  const params = { source, ...extra };

  // GTM dataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: 'lead', ...params, event_id: eventId });

    // GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { ...params, event_id: eventId });
    }

    // Meta Pixel com eventID — Meta CAPI dedup chave
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', params, { eventID: eventId });
    }
  }

  return eventId;
}

/**
 * Handler universal pra todos os CTAs WhatsApp.
 *
 * Quando chamado SEM event: comportamento antigo (dispara Lead+Contact pixel).
 * Quando chamado COM event: também injeta [ref:lead_xxx] na URL antes do navigate
 *                           pra que o backend (Evolution→CRM) propague pro
 *                           lead recém-criado e Meta CAPI deduplique server-side.
 */
export function trackWhatsAppClick(
  source: string,
  event?: { currentTarget?: { href?: string } | null }
): string {
  trackEvent('click_whatsapp', { source, channel: 'whatsapp' });
  const eventId = trackLeadWithDedup(source, { type: 'whatsapp' });

  // Se chamado com event do React (onClick), tenta injetar [ref:event_id] no href
  if (event?.currentTarget && typeof event.currentTarget === 'object') {
    try {
      const el = event.currentTarget as HTMLAnchorElement & { href?: string };
      const originalHref = el.href || '';
      if (originalHref.includes('wa.me/') && !originalHref.includes('[ref:')) {
        // Append [ref:event_id] ao text= existente
        const url = new URL(originalHref);
        const currentText = url.searchParams.get('text') || '';
        url.searchParams.set('text', `${currentText}  [ref:${eventId}]`);
        el.href = url.toString();
      }
    } catch {
      // URL inválida — segue sem modificar
    }
  }

  return eventId;
}
