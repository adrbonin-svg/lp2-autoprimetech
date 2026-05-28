# Estratégia de Google Ads + Meta Ads — LP2 AutoPrime Tech

Estratégia completa de tráfego pago para conversão em WhatsApp e captação de leads qualificados.

---

## PARTE 1 — GOOGLE ADS

### 1.1 Estrutura de conta recomendada

```
Conta MCC AutoPrime Tech
└── Conta: lp2.autoprimetech.com.br
    ├── Campanha 1: SEARCH - Bottom Funnel (alta intenção)
    │   ├── Grupo: Rastreador Veicular
    │   ├── Grupo: Rastreador GPS Carro
    │   ├── Grupo: Bloqueador Veicular
    │   └── Grupo: Rastreador 4G
    ├── Campanha 2: SEARCH - Mid Funnel (comparativo)
    │   ├── Grupo: Melhor rastreador
    │   ├── Grupo: Qual rastreador comprar
    │   └── Grupo: Rastreador com app
    ├── Campanha 3: SEARCH - Local Salvador
    │   ├── Grupo: Rastreador Salvador
    │   ├── Grupo: Rastreador Bahia
    │   └── Grupo: Empresa rastreamento Salvador
    ├── Campanha 4: SEARCH - Frota / B2B
    │   ├── Grupo: Gestão de frota
    │   ├── Grupo: Rastreador para empresa
    │   └── Grupo: Telemetria veicular
    ├── Campanha 5: PMAX (Performance Max)
    │   └── Audience signals: lookalike CRM + LP2 visitors
    ├── Campanha 6: REMARKETING (Display + RLSA)
    │   └── Visitantes 30 dias sem conversão
    └── Campanha 7: YOUTUBE (TrueView + Bumper)
        ├── Grupo: In-stream 30s
        └── Grupo: Bumper 6s
```

### 1.2 Palavras-chave bottom funnel (compradores prontos)

#### Match: [exata]
- [rastreador veicular]
- [rastreador para carro]
- [rastreador gps]
- [rastreador veicular preço]
- [bloqueador veicular]
- [comprar rastreador veicular]
- [contratar rastreamento veicular]
- [empresa de rastreamento veicular]

#### Match: "frase"
- "rastreador veicular salvador"
- "rastreador veicular bahia"
- "rastreador veicular com bloqueio"
- "rastreador veicular com app"
- "rastreador veicular instalação"
- "quanto custa rastreador veicular"
- "melhor rastreador veicular"

#### Match: ampla modificada (para Smart Bidding)
- rastreador veicular barato
- rastreador veicular profissional
- rastreador veicular sem fidelidade
- rastreador 4g com bloqueio
- rastreador para moto

### 1.3 Negativas críticas (adicionar em todas campanhas)

```
roubo de carro
carro roubado encontrar
como rastrear celular
rastreador celular
rastreador android
rastreador iphone
namorada
namorado
traição
empresa de táxi
trabalho carteira assinada
vagas emprego
arduino
diy rastreador
gratuito
gratis
download
apk
free
grátis
```

### 1.4 Estrutura de RSA (Responsive Search Ad)

**Headlines (15):**
```
1. Rastreador Veicular 24h
2. Rastreador GPS com Bloqueio
3. Rastreador 4G Profissional
4. Proteja Seu Carro Agora
5. Central 24h | App + GPS
6. A Partir de R$ 44,90/mês
7. Bloqueio Remoto pelo App
8. AutoPrime Tech Oficial
9. Sem Fidelidade | Cancele Já
10. Instalação em 30 Minutos
11. +12.000 Veículos Protegidos
12. Cerca Eletrônica Ilimitada
13. App Nota 4,9 ★ Top Rated
14. Frota | Reduza Até 42%
15. Falar no WhatsApp Agora
```

**Descriptions (4):**
```
1. Rastreamento em tempo real, bloqueio remoto pelo app e central 24h. Solicite orçamento.
2. Tecnologia 4G, app top-rated, atendimento humano. Sem fidelidade. R$ 44,90/mês.
3. +12.000 veículos protegidos. 329 recuperações em 2025. Instalação em 30 minutos.
4. Plano frota com telemetria, relatórios e gestor dedicado. Solicite uma demo gratuita.
```

**Pinning estratégico:**
- Headline 1 (`Rastreador Veicular 24h`) → Posição 1 (relevância garantida).
- Headline 8 (`AutoPrime Tech Oficial`) → Posição 2 (brand).
- Demais soltas para o algoritmo combinar.

### 1.5 Extensões obrigatórias

| Tipo | Conteúdo |
|---|---|
| **Sitelink** | Planos R$44,90 → `#planos` |
| **Sitelink** | Como Funciona → `#como-funciona` |
| **Sitelink** | Depoimentos → `#depoimentos` |
| **Sitelink** | FAQ → `#faq` |
| **Sitelink** | Frota → `#planos` (deep com utm) |
| **Sitelink** | WhatsApp → `wa.me/5571981627002` |
| **Callout** | ✓ Central 24h |
| **Callout** | ✓ Sem fidelidade |
| **Callout** | ✓ Instalação 30min |
| **Callout** | ✓ App nota 4,9 |
| **Callout** | ✓ Cobertura nacional |
| **Snippet** | Tipo: Modelos · Essencial, Premium, Frota |
| **Lead form** | Headline + 3 campos + pré-qualificação |
| **Chamada** | 08005802770 (mobile only) |
| **Localização** | Endereço Salvador-BA |

### 1.6 Lances e orçamentos

| Campanha | Estratégia | Budget diário | CPA alvo |
|---|---|---|---|
| Search Bottom Funnel | tCPA (após 30 conversões) | R$ 150 | R$ 25 |
| Search Mid Funnel | Maximize Conversões | R$ 80 | — |
| Search Local Salvador | tCPA | R$ 100 | R$ 18 |
| Search Frota B2B | Maximize Valor de Conversão | R$ 60 | R$ 80 |
| PMax | tCPA | R$ 120 | R$ 30 |
| Remarketing | tCPA | R$ 40 | R$ 12 |
| YouTube | Max conversions | R$ 60 | — |

**Budget total inicial:** R$ 610/dia (≈ R$ 18.300/mês).
**Meta inicial:** 30-50 leads qualificados/dia, CPL médio R$ 18-25.

### 1.7 Quality Score — checklist técnico

- ✅ LP carrega em <2s (LCP <1.8s no PageSpeed).
- ✅ Headline da LP contém keyword principal.
- ✅ H1 e título da página alinhados ao termo do anúncio.
- ✅ CTA dominante e claro acima da dobra.
- ✅ Telefone clicável (mobile) acima da dobra.
- ✅ Política de privacidade e termos acessíveis.
- ✅ HTTPS válido + SSL Let's Encrypt.
- ✅ Schema.org `LocalBusiness` para Google Ads Local.
- ✅ Sitelinks aproveitando âncoras `#`.

**Score esperado:** 8-10 em todos grupos.

### 1.8 Conversões a criar no Google Ads

| Nome | Tipo | Valor |
|---|---|---|
| `WhatsApp Click` | Importada do GA4 via `click_whatsapp` | R$ 30 |
| `Form Submit` | Importada do GA4 via `form_submit` | R$ 50 |
| `Phone Call` | Conversão de chamada Google | R$ 40 |
| `Plan View 30s+` | Engajamento `scroll_90` | R$ 5 (smart bidding signal) |

---

## PARTE 2 — META ADS (Facebook + Instagram)

### 2.1 Estrutura de conta

```
Conta Business Manager AutoPrime Tech
└── Conta de anúncios: AutoPrime LP2
    ├── Campanha 1: AQUISIÇÃO - Mensagens (WhatsApp)
    │   ├── ABO se >5 conjuntos | CBO se <5
    │   └── Conjuntos por persona
    ├── Campanha 2: AQUISIÇÃO - Tráfego (LP)
    │   └── Para públicos frios B2C
    ├── Campanha 3: CONVERSÃO - Lead via formulário Meta
    │   └── Lead Ad nativo + sync CRM
    ├── Campanha 4: LOOKALIKE (LAL 1-3%)
    │   └── Baseado em CRM de clientes
    ├── Campanha 5: REMARKETING - 30 dias
    │   ├── Visitou LP2 sem clicar WhatsApp
    │   └── Engajou Instagram/Facebook
    ├── Campanha 6: REELS / STORIES (separar p/ otimização)
    └── Campanha 7: B2B FROTA - Salvador empresas
```

### 2.2 Públicos (de frio a quente)

#### FRIOS — Aquisição

**Conjunto A — Salvador-BA + RMS**
- Localização: Salvador, Lauro de Freitas, Camaçari, Simões Filho (raio 30km).
- Idade: 25-55.
- Interesses: Carros, Veículos, Segurança automotiva, Concessionária, Honda, Toyota, Volkswagen, Chevrolet.
- Comportamentos: Donos de pequenas empresas, Donos de veículos premium.

**Conjunto B — Motoristas de App**
- Brasil inteiro.
- Idade: 22-50.
- Interesses: Uber, 99, InDriver, motorista app, motorista de aplicativo.
- Comportamentos: Trabalhador autônomo, viaja com frequência.

**Conjunto C — Pais/Famílias**
- Salvador-BA + capitais Nordeste.
- Idade: 35-60.
- Interesses: Família, filhos jovens, escola particular, viagens em família.
- Por que: persona "proteger esposa/filha que dirige sozinha".

**Conjunto D — B2B Frotas**
- Salvador-BA + capitais.
- Idade: 30-65.
- Interesses: Logística, gestão de frotas, transportadora, e-commerce, delivery.
- Cargos: Gerente, Diretor, Sócio-proprietário, Coordenador de logística.

#### MORNOS — Engajamento

**Conjunto E — Engajou conta IG (90 dias)**
- Curtiu/comentou/salvou posts orgânicos.

**Conjunto F — Visitou vídeo (75%+ ThruPlay)**
- Quem assistiu 75% ou mais de qualquer vídeo nos últimos 30d.

#### QUENTES — Remarketing

**Conjunto G — Visitou LP2 (Pixel + CAPI)**
- Últimos 30 dias, excluir convertidos.

**Conjunto H — Adicionou contato no WhatsApp**
- Clicou no botão WhatsApp mas não converteu em cliente.

#### LOOKALIKES (com CAPI rodando)

**LAL 1-3% Clientes** — base CSV/CRM dos últimos 12 meses.
**LAL 1-3% Leads CAPI** — quem chegou no WhatsApp via LP2.
**LAL 1-3% ThruPlay 75%** — alta intenção de vídeo.

### 2.3 Estrutura de anúncios (Carousel + Reels + Imagem)

#### Padrão "1 conjunto = 3 criativos"

| Tipo | Formato | Quando usar |
|---|---|---|
| **Imagem estática** | 1:1 com headline forte | Aquisição B2C |
| **Carrossel 5 cards** | 1:1 ou 4:5 | Educação dos diferenciais |
| **Reels/Stories vídeo** | 9:16 | Reels + Stories placement |
| **Vídeo feed** | 1:1 ou 4:5 | Newsfeed Facebook |
| **Lead Ad nativo** | Form Meta | Quando WhatsApp não cabe |

(Roteiros detalhados em `docs/VIDEOS.md`.)

### 2.4 Otimização e métricas-alvo

| Métrica | Aceitável | Bom | Ótimo |
|---|---|---|---|
| **CPC** | <R$ 2,00 | <R$ 1,20 | <R$ 0,80 |
| **CTR (link)** | >1,5% | >2,5% | >4% |
| **CPM** | <R$ 25 | <R$ 18 | <R$ 12 |
| **CPL (WhatsApp)** | <R$ 25 | <R$ 18 | <R$ 12 |
| **Engagement Rate** | >3% | >6% | >10% |
| **Frequency** | <2,5 | <2,0 | <1,5 |
| **ThruPlay (vídeo)** | >40% | >55% | >70% |

### 2.5 Conversion API (CAPI) — diferencial crítico

Implementado em `app/api/lead/route.ts`:
- ✅ Hash SHA-256 de email/telefone/nome/cidade.
- ✅ IP do cliente + User Agent enviados.
- ✅ `fbp` e `fbc` para deduplicação com Pixel.
- ✅ Event ID único para dedupe.
- ✅ Test Event Code configurável via env.

**Como ativar:**
1. Business Manager → Eventos → CAPI → Gerar Access Token.
2. Adicionar token em `META_CAPI_ACCESS_TOKEN`.
3. Testar com `META_CAPI_TEST_EVENT_CODE=TEST12345`.
4. Validar no Events Manager → Test Events.
5. Após 24h validando, remover test code.

### 2.6 Budget inicial sugerido

| Campanha | Estratégia | Budget diário |
|---|---|---|
| Aquisição Mensagens (WhatsApp) | CBO | R$ 80 |
| Aquisição Tráfego LP | CBO | R$ 40 |
| Lead Form Meta | CBO | R$ 50 |
| Lookalike | CBO | R$ 60 |
| Remarketing 30d | ABO | R$ 30 |
| Reels/Stories | CBO | R$ 50 |
| Frota B2B Salvador | ABO | R$ 40 |

**Budget total inicial:** R$ 350/dia (≈ R$ 10.500/mês).
**Meta:** CPL <R$ 18 médio, 20-30 leads/dia.

### 2.7 Cronograma de teste 30 dias

| Semana | Foco |
|---|---|
| 1 | Setup CAPI + Pixel, 3 criativos por conjunto, observar |
| 2 | Identificar criativos vencedores (CTR + CPL), pausar perdedores |
| 3 | Escalar conjuntos vencedores +50%, criar LAL com dados frescos |
| 4 | Otimização final, escalar CBO, expandir geo para outras capitais |

---

## PARTE 3 — INTEGRAÇÃO CROSS-CHANNEL

### 3.1 UTM parameters padrão

```
?utm_source={google|meta|tiktok|email}
&utm_medium={cpc|cpm|reel|story|email}
&utm_campaign={nome-campanha}
&utm_content={criativo-id}
&utm_term={keyword}
```

Exemplos:
- Google Search: `?utm_source=google&utm_medium=cpc&utm_campaign=bottom-funnel&utm_term=rastreador-veicular`
- Meta Reels: `?utm_source=meta&utm_medium=reel&utm_campaign=aquisicao-msg&utm_content=hook-roubo-v2`

### 3.2 Atribuição

- **Modelo:** Data-driven (Google Ads + GA4).
- **Janela:** 30 dias clique, 1 dia view (Meta padrão).
- **Validação cruzada:** GA4 vs Meta Events Manager vs Google Ads = nunca diferença >10%.

### 3.3 Dashboard recomendado (Looker Studio)

Conectar:
1. Google Ads
2. Meta Ads (via Supermetrics ou Funnel.io)
3. GA4
4. CRM (Pipedrive/Hubspot via API)
5. Evolution API (WhatsApp interno) para CTR pós-clique

Métricas no dashboard:
- CPL por canal/campanha/criativo
- ROAS por canal (revenue do CRM ÷ spend)
- Funil: impressão → clique → WhatsApp → lead qualificado → venda
- Heatmap de horários com melhor conversão
- Top 10 criativos por CTR e CPL

---

## PARTE 4 — KPIs E ROI

### Meta de leads
- **30 dias:** 600 leads (média 20/dia).
- **90 dias:** 2.500 leads (média 28/dia).
- **CPL médio alvo:** R$ 22.

### Meta de conversão
- **Lead → Cliente:** 25% (taxa do setor: 18-30%).
- **CAC (Custo de Aquisição):** R$ 88 médio.
- **LTV:** R$ 1.677 (R$ 69,90 × 24 meses médio).
- **LTV/CAC alvo:** >19x.

### Meta de ROAS
- **Mês 1:** ROAS 4x (curva de aprendizado).
- **Mês 3:** ROAS 7x (modelos treinados, lookalike maduro).
- **Mês 6:** ROAS 10x+ (com CRO da LP otimizado por dados).
