'use client';

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

export function trackWhatsAppClick(source: string) {
  trackEvent('click_whatsapp', { source, channel: 'whatsapp' });
  trackEvent('lead', { source, type: 'whatsapp' });
}
