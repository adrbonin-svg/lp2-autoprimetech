'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ButtonLink } from './ui/Button';
import { cn, whatsappLink } from '@/lib/utils';
import { trackWhatsAppClick } from '@/lib/tracking';

const NAV = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#planos', label: 'Planos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Clientes' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-brand-black/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="container-lp flex h-16 items-center justify-between sm:h-20">
        <a href="#hero" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-cta text-white shadow-glow-red">
            AP
          </span>
          <span>
            AutoPrime <span className="text-brand-red">Tech</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:08005802770"
            className="flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-white"
          >
            <Phone className="h-4 w-4" /> 0800 580 2770
          </a>
          <ButtonLink
            variant="whatsapp"
            size="sm"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('header')}
          >
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="container-lp border-t border-white/10 bg-brand-black/95 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <ButtonLink
              variant="whatsapp"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('header-mobile')}
            >
              Falar no WhatsApp
            </ButtonLink>
            <ButtonLink variant="secondary" href="tel:08005802770">
              <Phone className="h-4 w-4" /> 0800 580 2770
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
