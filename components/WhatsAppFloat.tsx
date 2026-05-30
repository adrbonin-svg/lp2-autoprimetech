'use client';

import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/utils';
import { trackWhatsAppClick } from '@/lib/tracking';

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={whatsappLink('Olá! Vim pela LP, pode me passar um orçamento?')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => trackWhatsAppClick('float', e)}
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#1FBA57] sm:bottom-8 sm:right-8 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <span className="relative">
        <span className="absolute -inset-2 animate-ping rounded-full bg-[#25D366]/40" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm sm:inline">Fale conosco</span>
    </a>
  );
}
