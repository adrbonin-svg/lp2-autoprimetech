import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-brand-black pt-16 pb-8">
      <div className="container-lp">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-cta text-white">
                AP
              </span>
              AutoPrime <span className="text-brand-red">Tech</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-ink-soft">
              Rastreamento veicular premium com central 24h, bloqueio remoto e app em tempo real.
              Mais de 12.000 veículos protegidos em todo o Brasil.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/autoprimetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink transition-colors hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/autoprimetech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-ink transition-colors hover:bg-white/10 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-ink-soft">
              <li><a href="#beneficios" className="hover:text-white">Benefícios</a></li>
              <li><a href="#planos" className="hover:text-white">Planos</a></li>
              <li><a href="#como-funciona" className="hover:text-white">Como funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-white">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li>
                <a href="tel:08005802770" className="flex items-start gap-2 hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" />
                  <span>0800 580 2770<br /><span className="text-xs text-ink-muted">Central 24h</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:contato@autoprimetech.com.br" className="flex items-start gap-2 hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
                  contato@autoprimetech.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>Salvador, BA<br /><span className="text-xs text-ink-muted">Atendimento nacional</span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AutoPrime Tech. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="/politica-de-privacidade" className="hover:text-white">Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-white">Termos</a>
            <a href="/lgpd" className="hover:text-white">LGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
