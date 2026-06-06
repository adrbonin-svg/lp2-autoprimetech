'use client';

declare global {
  interface Window {
    AutoPrimeConsent?: {
      open: () => void;
      get: () => { analytics: boolean; marketing: boolean; decided: boolean };
      reset: () => void;
    };
  }
}

/**
 * Botão que reabre o painel de consentimento LGPD (lgpd.js).
 */
export default function GerenciarCookies() {
  function abrir() {
    if (typeof window !== 'undefined' && window.AutoPrimeConsent) {
      window.AutoPrimeConsent.open();
    }
  }

  return (
    <button
      type="button"
      onClick={abrir}
      className="rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20"
    >
      Gerenciar cookies
    </button>
  );
}
