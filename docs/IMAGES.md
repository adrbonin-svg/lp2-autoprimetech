# Prompts de Imagens IA — LP2 AutoPrime Tech

Prompts otimizados para Cloudflare Workers AI, HuggingFace (FLUX.1, SDXL), Pollinations e Google Imagen.

**Estilo geral:** cinematic, premium, dark mode, paleta azul/vermelho/preto, mood "tecnologia de ponta + segurança automotiva".

**Resolução alvo:** 2400×1600 para hero, 1200×800 para cards.

---

## 1. Hero — Mockup do app sobre carro premium

**Uso:** seção Hero principal (lado direito do H1).

**Prompt FLUX.1/SDXL:**
```
Cinematic dark automotive scene, premium black sedan from rear-three-quarter view on wet asphalt at night, glowing blue holographic GPS tracker hovering above the car, vibrant red brake lights, light blue volumetric fog, deep navy and crimson color palette, hyperrealistic detail, 8K, octane render, premium tech advertising aesthetic, professional automotive photography, depth of field, lens flare, no text, no logos
```

**Prompt Pollinations (URL):**
```
https://image.pollinations.ai/prompt/Cinematic%20dark%20premium%20black%20sedan%20night%20holographic%20GPS%20tracker%20blue%20red%20glow%208K%20automotive%20advertising?width=2400&height=1600&model=flux&nologo=true
```

---

## 2. Smartphone com app — interface de rastreamento

**Uso:** prova social, seção "como funciona", cards de benefícios.

**Prompt:**
```
Modern iPhone 15 Pro held vertical in dark studio environment, screen showing premium vehicle tracking app interface with real-time map, blue route line, red car pin marker, glassmorphism UI cards with white text on dark background, dramatic side lighting, navy blue and crimson accent colors, hyperrealistic, 4K, product photography, soft shadow, no real brand logos
```

---

## 3. Central de monitoramento 24h

**Uso:** seção Diferenciais ("Central 24h própria").

**Prompt:**
```
High-tech security operations center at night, multiple curved monitors showing GPS tracking dashboards with maps and vehicle data, two operators wearing headsets working, blue and red ambient lighting, dark walls with subtle LED strips, cinematic depth of field, professional corporate photography, atmosphere of focus and reliability, 8K detail, no text on screens
```

---

## 4. Carro em mapa GPS — tracking visual

**Uso:** background do mockup do hero, cards.

**Prompt:**
```
Top-down isometric view of luxury black SUV on dark navy 3D map with glowing blue route lines, red destination pin pulsing, holographic radar circle around the vehicle, neon cyan grid pattern, dramatic dark blue gradient background, 3D render style, futuristic tech aesthetic, premium quality, 4K
```

---

## 5. Equipe de instalação técnica

**Uso:** seção "Como funciona" passo 2, depoimentos.

**Prompt:**
```
Professional automotive technician in dark navy uniform installing GPS tracker inside premium car dashboard, modern garage with LED lighting, focused expression, clean tools, blue and red ambient accent lights, cinematic photography, shallow depth of field, 4K, premium automotive service aesthetic, no visible brand logos
```

---

## 6. Frota empresarial — vista aérea

**Uso:** seção Planos (card Frota), B2B targeting.

**Prompt:**
```
Aerial drone shot of corporate fleet parking lot at dusk, 12 identical white delivery vans arranged in two rows, soft blue twilight sky, warm lights from buildings, professional logistics aesthetic, deep blues and warm contrast, photorealistic 4K, cinematic, no visible brand logos or text
```

---

## 7. Motorista feliz dentro do carro

**Uso:** prova social, depoimentos.

**Prompt:**
```
Brazilian middle-aged man smiling confidently while sitting in driver seat of premium sedan at night, soft warm interior lighting, holding smartphone with tracking app visible on screen, urban background lights bokeh through window, navy blue and warm orange color grading, cinematic portrait, shallow depth of field, hyperrealistic, professional advertising photography
```

---

## 8. Bloqueio remoto — visualização conceitual

**Uso:** card "Bloqueio remoto pelo app".

**Prompt:**
```
Conceptual close-up of finger pressing red glowing button on dark smartphone screen with shield icon and lock symbol, blue holographic particles emanating from screen, ultra macro lens, dramatic backlight, navy and red color scheme, premium tech advertising aesthetic, photorealistic 4K, depth of field, no text
```

---

## 9. Mapa com cerca eletrônica

**Uso:** card "Cerca eletrônica ilimitada".

**Prompt:**
```
Modern map interface showing geofence boundaries as glowing blue circular zones over dark Brazilian city map, vehicle icons inside zones, red alert highlights for boundary crossings, neon blue grid pattern, futuristic UI design, 3D render style, dark navy background, 4K detail, professional dashboard aesthetic
```

---

## 10. Suporte por chat — atendimento humano

**Uso:** card "Central 24h especializada".

**Prompt:**
```
Friendly Brazilian female customer service agent wearing wireless headset, sitting at modern desk with curved monitor, warm smile, professional navy blue uniform, soft studio lighting, blurred high-tech office background with blue accent LEDs, photorealistic portrait, premium corporate photography, 4K, shallow depth of field
```

---

## 11. OG Image (1200×630) — para social sharing

**Uso:** Open Graph + Twitter Card.

**Prompt:**
```
Wide cinematic composition: premium black SUV from front view on left side, glowing blue and red tracking visualization overlay on right side with text space, dark navy background with subtle grid pattern, dramatic side lighting, premium automotive tech advertising banner aesthetic, 16:9 ratio, hyperrealistic, professional, leave 30 percent right space empty for text overlay
```

(Aplicar overlay com Photoshop/Figma: "AutoPrime Tech — Rastreamento 24h" + logo + CTA)

---

## 12. Favicon / Logo mark

**Uso:** favicon 512×512, app icon, manifest.

**Prompt para logo (refinar manualmente):**
```
Minimalist tech logo combining letter A and P in single stroke, navy blue gradient to crimson red, geometric shield outline, modern automotive technology brand mark, flat design, scalable vector aesthetic, white background for icon use, premium professional
```

---

## Workflow recomendado

1. **Gerar via Pollinations grátis** (rápido, sem API key) → validação de composição.
2. **Refinar via FLUX.1 (HuggingFace router)** → qualidade hero/social.
3. **Upscale via Real-ESRGAN** se precisar 4K.
4. **Otimizar para web** com `sharp` ou `squoosh` → AVIF + WebP fallback.
5. **Subir em** `/public/images/` ou CDN (Cloudflare R2 recomendado).

### Endpoints úteis (do projeto autoprimetech `/social-ia/ia-criativa`)

- Cloudflare: `https://api.cloudflare.com/client/v4/accounts/{ACCOUNT}/ai/run/@cf/black-forest-labs/flux-1-schnell`
- HuggingFace router: `https://router.huggingface.co/...`
- Pollinations: `https://image.pollinations.ai/prompt/...`

### Especificações finais

| Imagem | Resolução | Formato | Peso máx |
|---|---|---|---|
| Hero | 2400×1600 | WebP/AVIF | 200 KB |
| Card | 1200×800 | WebP | 80 KB |
| Depoimento avatar | 200×200 | WebP | 15 KB |
| OG image | 1200×630 | JPG | 250 KB |
| Favicon | 512×512 | PNG | 30 KB |
| Logo | SVG | SVG | 5 KB |
