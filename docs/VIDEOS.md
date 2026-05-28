# Roteiros de Vídeo — LP2 AutoPrime Tech

5 roteiros profissionais: Hero da LP + Meta Ads + Google Ads + Reels/Stories + TikTok.

**Padrões aplicados:**
- Legendas SEMPRE (85% dos vídeos no feed tocam mudos).
- Hook nos primeiros 3 segundos.
- CTA visual + falado a cada 7-10 segundos.
- 9:16 para Stories/Reels/TikTok, 1:1 para feed, 16:9 para Hero/YouTube.

---

## 1. Vídeo Hero — site (autoplay, muted, loop)

**Duração:** 15 segundos
**Formato:** MP4 16:9 (1920×1080), H.264, <2 MB
**Fallback:** WebM AV1
**Comportamento:** autoplay muted loop, com poster image otimizada

### Storyboard

| Tempo | Cena | Visual | Texto na tela |
|---|---|---|---|
| 0-2s | Carro premium em estrada noturna | Drone shot suave | _(nenhum)_ |
| 2-5s | Mockup app mostrando carro em mapa | Zoom-in no smartphone | "Rastreamento em tempo real" |
| 5-8s | Botão BLOQUEAR sendo pressionado | Macro do dedo + brilho vermelho | "Bloqueio remoto" |
| 8-11s | Central de monitoramento | Pan horizontal nos monitores | "Central 24h" |
| 11-14s | Família entrando no carro tranquila | Wide shot warm | "Você dorme tranquilo" |
| 14-15s | Logo AutoPrime Tech + URL | Fade in/out | "lp2.autoprimetech.com.br" |

### Especificações técnicas

```
ffmpeg -i source.mp4 -vcodec libx264 -crf 26 -preset slow \
  -vf "scale=1920:1080,fps=30" -movflags +faststart \
  -an hero-bg.mp4

ffmpeg -i source.mp4 -c:v libsvtav1 -crf 32 -preset 6 \
  -vf "scale=1920:1080" -an hero-bg.webm
```

---

## 2. Meta Ads — Feed (1:1) — "Roubo evitado em 4 minutos"

**Duração:** 30 segundos
**Formato:** MP4 1:1 (1080×1080), legendas burned-in
**Objetivo:** captação de leads via WhatsApp (Mensagens) ou Lead Form
**CTA:** "Enviar mensagem"

### Roteiro

**0-3s — HOOK (essencial)**
- _Visual:_ tela escura, texto vermelho piscando "CARRO ROUBADO 03:47 AM"
- _Áudio:_ batida de coração, sirene ao longe
- _Legenda:_ **"E se acontecesse com você agora?"**

**3-8s — Problema**
- _Visual:_ rapidos cortes — carro sendo abordado, motorista olhando celular
- _Áudio:_ tensão crescente
- _Legenda:_ "A cada 35 segundos um carro é roubado no Brasil."

**8-15s — Solução**
- _Visual:_ alguém pega o celular, abre app AutoPrime, toca BLOQUEAR
- _Áudio:_ "beep" tecnológico, batida calma
- _Legenda:_ "Com 1 toque, seu carro é bloqueado pelo app."

**15-23s — Diferencial + prova**
- _Visual:_ central 24h, pessoa atendendo telefone
- _Áudio:_ "Central 24h, posso ajudar?"
- _Legenda:_ "Central 24h própria. 329 recuperações em 2025."

**23-30s — CTA**
- _Visual:_ logo + número WhatsApp + tela do app
- _Voz:_ "Proteja seu veículo hoje. Chama no WhatsApp."
- _Legenda:_ **"📱 wa.me/5571981627002"** + botão "ENVIAR MENSAGEM"

### Variações a testar
- **A:** Voz masculina grave (autoridade).
- **B:** Voz feminina (confiança/empatia).
- **C:** Sem voz, só legendas + música.

---

## 3. Google Ads YouTube — TrueView In-Stream (skip aos 5s)

**Duração:** 30 segundos (com skip aos 5s)
**Formato:** MP4 16:9 (1920×1080)
**Objetivo:** awareness + conversão de busca remarketing
**CTA visual:** card lateral + companion banner

### Roteiro

**0-5s — UNSKIPPABLE HOOK**
- _Visual:_ close no rosto preocupado de motorista olhando câmera + texto piscando
- _Legenda massiva:_ **"Roubaram seu carro?"**
- _Áudio:_ "Roubaram seu carro? E agora?"

**5-15s — Solução (após o skip)**
- _Visual:_ demonstração do app — alguém clicando "Bloquear" e o motor "morrendo" no carro do bandido
- _Voz:_ "Com a AutoPrime Tech, você bloqueia o motor pelo app em segundos. Central 24h, GPS preciso, app top-rated."

**15-25s — Prova social**
- _Visual:_ rapidos cortes de carros recuperados + depoimentos em texto
- _Legenda:_ "12.000+ veículos protegidos | 329 recuperações em 2025 | 4,9★ no app"
- _Voz:_ "Mais de doze mil veículos protegidos. Trezentos e vinte e nove recuperações só este ano."

**25-30s — CTA forte**
- _Visual:_ logo + 0800 + URL + WhatsApp
- _Voz:_ "AutoPrime Tech. Solicite seu orçamento agora pelo WhatsApp."
- _Legenda:_ "lp2.autoprimetech.com.br · WhatsApp"

### Pacote para YouTube
- **Bumper Ad** (6s) — só hook + logo: "Roubaram seu carro? AutoPrime Tech bloqueia em segundos. Clique."
- **Discovery Ad** (in-feed) — thumbnail forte com texto vermelho "ROUBO EVITADO" + curiosidade.
- **Companion banner** — banner estático com WhatsApp ao lado.

---

## 4. Instagram Reels / Stories — 9:16

**Duração:** 15-20 segundos (Reels), 15s (Stories)
**Formato:** MP4 9:16 (1080×1920)
**Objetivo:** awareness orgânica + impulso de tráfego para LP/WhatsApp

### Roteiro A — "POV Roubo"

**0-2s:** POV de motorista no semáforo + texto: **"3 da manhã. Pararam ao seu lado."**
**2-5s:** Cena de tensão, pessoa pega celular
**5-9s:** Abre app, toca BLOQUEAR — animação satisfatória
**9-12s:** Cena externa — carro do ladrão "morrendo" e ele descendo confuso
**12-15s:** Logo + "Chama no WhatsApp. Link na bio."

**Hashtags:** #rastreador #segurançaveicular #autoprimetech #carros #salvador #rastreadorgps

---

### Roteiro B — "Depoimento Real"

**0-3s:** Cliente real (Carlos do Honda Civic) sorrindo: "Eu já tinha sido roubado uma vez."
**3-10s:** "Quando levaram de novo, a AutoPrime Tech recuperou em 22 minutos."
**10-15s:** Mostra o carro estacionado: "Sem um arranhão."
**15-18s:** Texto final: **"Você quer essa tranquilidade? WhatsApp na bio."**

---

### Roteiro C — Stories (3 quadros)

**Quadro 1 (5s):** Imagem do app aberto + texto "Olha o que esse app faz 👇" + sticker de seta
**Quadro 2 (5s):** Vídeo do botão BLOQUEAR + texto "Em 1 toque, motor desligado" + sticker enquete "Útil ou MUITO útil?"
**Quadro 3 (5s):** CTA com link sticker "Saber mais →" apontando pra LP2 + texto "A partir de R$ 44,90/mês"

---

## 5. TikTok — "Hook de algoritmo"

**Duração:** 21 segundos (sweet spot TikTok)
**Formato:** MP4 9:16
**Objetivo:** viralizar + tráfego pago boost

### Roteiro — "História com plot twist"

**0-3s — HOOK (90% de retenção alvo)**
- Texto piscando: **"Roubaram meu carro EM FRENTE DE CASA"**
- Música: trend trap atual / suspense
- POV câmera de segurança

**3-8s — Build-up**
- "Eles entraram em 4 segundos. Saíram em 8."
- Visual: cena cinemática de ladrão entrando no carro

**8-15s — TWIST**
- Mostra cliente abrindo app no celular, toca BLOQUEAR
- "Mas eles não sabiam disso..." + emoji 🙂
- Visual: carro travando 200m adiante, ladrão saindo correndo

**15-21s — RESOLUÇÃO + CTA**
- Carro voltando seguro pra casa
- Texto: **"AutoPrime Tech. Link na bio."** + "Comente PROTEGER que mando o link"

### Hooks alternativos para A/B
1. "POV: você tem um rastreador e ele acabou de te salvar"
2. "Por que TODOS os Uber motoristas instalaram esse rastreador"
3. "O carro foi roubado às 3am. Recuperado às 3:22am. Eis como:"
4. "Não compre carro novo sem isso instalado primeiro"

---

## 6. Briefing geral para produtora/freelancer

### Identidade
- **Cores:** azul navy (#0066FF), vermelho crimson (#E11D48), preto profundo (#05080F).
- **Tipografia:** sans-serif moderna (Inter, Space Grotesk).
- **Tom:** tecnológico, confiável, próximo, urgência sem sensacionalismo.

### Mood references
- Apple privacy ads (estética premium minimalista)
- Tesla product reveals (tecnologia + emoção)
- Banco Inter campanhas (proximidade + segurança)

### Entregáveis padrão
1. Master 1080p (16:9)
2. Versão 1:1 (Meta feed)
3. Versão 9:16 (Reels/Stories/TikTok)
4. Versão 6s (bumper YouTube)
5. Thumbnail otimizado JPG 1280×720

### Música (livre de direitos)
- Epidemic Sound: categorias "Cinematic Tech", "Corporate Suspense"
- Artlist: filtro "automotive", "technology", "epic"
- Evitar: trap genérico, EDM batido, copyright musical

### Dicas de retenção
- Cortes a cada 1.5-2s mantêm atenção.
- Movimento sempre (zoom, pan, parallax) — câmera estática perde 30% retenção.
- Rosto humano nos primeiros 3s aumenta retenção em 27% (estudo Meta).
- Cor vermelha em pelo menos 1 frame = +12% CTR (estudo Google Ads).
