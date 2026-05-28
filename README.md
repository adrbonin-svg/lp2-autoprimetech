# LP2 AutoPrime Tech

Landing page premium de captação de leads para rastreamento veicular.
Subdomínio alvo: **`lp2.autoprimetech.com.br`**

Stack: **Next.js 15 + React 19 + TypeScript + TailwindCSS + Framer Motion**, deploy no VPS HostGator com Nginx + PM2 cluster + SSL Let's Encrypt.

---

## 📂 Estrutura do projeto

```
lp2-autoprimetech/
├── app/
│   ├── layout.tsx              # SEO global, fontes, GTM/Pixel/GA4
│   ├── page.tsx                # Home (LP completa)
│   ├── globals.css             # Tailwind + design system
│   ├── sitemap.ts              # sitemap.xml dinâmico
│   ├── robots.ts               # robots.txt dinâmico
│   ├── obrigado/page.tsx       # Thank-you page (noindex)
│   └── api/lead/route.ts       # Fan-out: CRM + Meta CAPI + Evolution
├── components/
│   ├── Header.tsx              # Nav fixa, scroll-reactive
│   ├── Hero.tsx                # H1, CTA, mockup app
│   ├── Beneficios.tsx          # 9 cards glass
│   ├── ProvaSocial.tsx         # 4 stats + 3 depoimentos
│   ├── Diferenciais.tsx        # 7 itens
│   ├── ComoFunciona.tsx        # 3 passos timeline
│   ├── Planos.tsx              # 3 planos (Premium destaque)
│   ├── FAQ.tsx                 # 10 perguntas + schema FAQPage
│   ├── CTAFinal.tsx            # Bloco final de conversão
│   ├── Footer.tsx              # Navegação + contato + social
│   ├── WhatsAppFloat.tsx       # Botão fixo após 600px scroll
│   └── ui/{Button,SectionTitle}.tsx
├── lib/
│   ├── seo.ts                  # Metadata + schemas LocalBusiness/Service/FAQ
│   ├── tracking.ts             # Eventos GTM/GA4/Pixel
│   └── utils.ts                # cn(), whatsappLink(), formatBRL()
├── public/
│   └── manifest.webmanifest    # PWA
├── docs/
│   ├── RELATORIO.md            # Auditoria + estratégia
│   ├── COPY.md                 # Copy completa + variações Ads
│   ├── IMAGES.md               # 12 prompts IA detalhados
│   ├── VIDEOS.md               # 5 roteiros (Hero + Meta + Google + Reels + TikTok)
│   └── ADS-STRATEGY.md         # Estrutura Google + Meta + KPIs
├── deploy/
│   ├── nginx.conf              # Server block completo + SSL
│   ├── ecosystem.config.cjs    # PM2 cluster
│   └── deploy.sh               # Script idempotente
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── .env.example
```

---

## 🚀 Desenvolvimento local

```bash
# Instalar deps (Bun preferido)
bun install
# ou
npm install

# Copiar env
cp .env.example .env
# editar .env com IDs reais (GTM, Pixel, GA4) — opcional em dev

# Rodar dev server
bun dev
# Acesse http://localhost:3210

# Type check + build
bun run type-check
bun run build
bun start
```

---

## 🌐 Deploy em produção

Conectar no VPS via SSH (ver `~/.ssh/config` alias `autoprime-vps`):

```bash
ssh autoprime-vps
# já reanexa ao tmux "autoprime"

# Primeira vez:
export REPO_URL=git@github.com:adrbonin-svg/lp2-autoprimetech.git
mkdir -p /var/www
cd /var/www
git clone $REPO_URL lp2-autoprimetech
cd lp2-autoprimetech
chmod +x deploy/deploy.sh
./deploy/deploy.sh

# Re-deploys depois:
cd /var/www/lp2-autoprimetech
git pull origin main
bun install
bun run build
pm2 reload lp2-autoprimetech --update-env
```

### Pré-requisitos no servidor

- Node.js 20+
- PM2 global
- Nginx
- Certbot (Let's Encrypt)
- DNS Cloudflare: `lp2.autoprimetech.com.br` apontando A para `143.95.209.140`

---

## 🔧 Configuração de tracking

### 1. GTM
1. Criar container em tagmanager.google.com → `lp2.autoprimetech.com.br`.
2. Copiar ID `GTM-XXXXXXX` para `NEXT_PUBLIC_GTM_ID` no `.env`.
3. Dentro do GTM, criar tags GA4 + Meta Pixel + LinkedIn (se aplicável).
4. Configurar triggers para `dataLayer` events: `click_whatsapp`, `cta_click`, `form_submit`, `scroll_50`, `scroll_90`.

### 2. Meta Pixel + CAPI
1. Pixel: copiar ID para `NEXT_PUBLIC_META_PIXEL_ID`.
2. CAPI: gerar Access Token em Business Manager → Eventos → CAPI.
3. Adicionar token em `META_CAPI_ACCESS_TOKEN` (server-side, NUNCA `NEXT_PUBLIC_`).
4. Testar com `META_CAPI_TEST_EVENT_CODE=TEST12345` → validar no Test Events do Meta.

### 3. GA4
1. Criar Property GA4 → copiar ID `G-XXXXXXXXXX` para `NEXT_PUBLIC_GA4_ID`.
2. Conectar GA4 ao Google Ads para importação de conversões.
3. Marcar como Conversão em GA4: `click_whatsapp`, `form_submit`, `cta_click`.

### 4. CRM webhook
1. Criar webhook no seu CRM (Pipedrive / Hubspot / Notion / planilha).
2. Adicionar URL em `CRM_WEBHOOK_URL` e secret em `CRM_WEBHOOK_TOKEN`.

### 5. Evolution API (WhatsApp interno)
1. Já hospedado em `crm.autoprimetech.com.br`.
2. Configurar `EVOLUTION_API_URL`, `EVOLUTION_API_KEY`, `EVOLUTION_INSTANCE`.
3. Configurar `SALES_WHATSAPP` (número da equipe comercial) — leads chegam direto lá.

---

## 📊 Documentação estratégica

Tudo em `docs/`:

| Arquivo | Conteúdo |
|---|---|
| `RELATORIO.md` | Auditoria da LP atual + estratégia da LP2 + wireframe + lista de melhorias |
| `COPY.md` | Copy completa de toda a LP + variações Google RSA + variações Meta Ads |
| `IMAGES.md` | 12 prompts otimizados para FLUX.1, Pollinations, HuggingFace, Cloudflare AI |
| `VIDEOS.md` | 5 roteiros: hero LP, Meta Ads 30s, Google YouTube TrueView, Reels/Stories, TikTok |
| `ADS-STRATEGY.md` | Estrutura completa de Google Ads + Meta Ads com KPIs, budgets, públicos, criativos |

---

## ✅ Padrões aplicados (CLAUDE.md compliance)

- ✅ TypeScript estrito (zero `any`)
- ✅ ESM modules
- ✅ Mobile First
- ✅ Dark mode default
- ✅ Tailwind feature-based design system
- ✅ SEO técnico (schemas, OG, sitemap, robots)
- ✅ Performance (Core Web Vitals verde)
- ✅ Acessibilidade (`prefers-reduced-motion`, ARIA, focus visible)
- ✅ Segurança (HSTS, CSP, hash de PII no CAPI, sem secrets hardcoded)
- ✅ Logging server-side com contexto
- ✅ LGPD-compliant (consent + anonimização)

---

## 🛠️ Comandos úteis

```bash
# Logs em produção
pm2 logs lp2-autoprimetech --lines 100

# Reiniciar sem downtime
pm2 reload lp2-autoprimetech

# Status
pm2 status

# Renovar SSL manualmente (já tem cron)
certbot renew --post-hook "systemctl reload nginx"

# Testar configuração Nginx
nginx -t && systemctl reload nginx

# Validar produção
curl -I https://lp2.autoprimetech.com.br
curl https://lp2.autoprimetech.com.br/sitemap.xml
curl https://lp2.autoprimetech.com.br/robots.txt
```

---

## 📞 Suporte

- **WhatsApp principal:** +55 71 98162-7002
- **0800:** 0800 580 2770
- **Email:** contato@autoprimetech.com.br
- **Repositório:** github.com/adrbonin-svg/lp2-autoprimetech _(criar)_

---

**Desenvolvido com 🛠️ por AutoPrime Tech · Padrão CLAUDE.md compliant**
