// ═══════════════════════════════════════════════════════════════════════════
//  Dados centrais da LP2 AutoPrime Tech (fonte única de verdade)
//  ─────────────────────────────────────────────────────────────────────────
//  Contatos reais, planos, assistências, depoimentos, números e FAQ.
//  Não espalhar números/preços pelo código — sempre importar daqui.
// ═══════════════════════════════════════════════════════════════════════════

export const SITE = {
  brand: "AutoPrime Tech",
  whatsapp: "5571981627002",
  whatsappDisplay: "(71) 98162-7002",
  phone0800: "08005802770",
  phone0800Display: "0800 580 2770",
  phoneFixo: "557130353270",
  phoneFixoDisplay: "(71) 3035-3270",
  email: "contato@autoprimetech.com.br",
  address: "R. Dr. Gerino de Souza Filho, 453A — Itinga, Lauro de Freitas/BA",
  since: 2017,
  url: "https://lp2.autoprimetech.com.br",
} as const;

// Números de prova social (ajustáveis num só lugar).
export const STATS = [
  { value: "+12.000", label: "Veículos protegidos" },
  { value: "90%+", label: "Taxa de recuperação" },
  { value: "24/7", label: "Central humana" },
  { value: "<5min", label: "Tempo de resposta" },
] as const;

// Hook principal — R$ 1,67/dia (ângulo campeão do Google Ads da lp2).
export const HOOK = {
  perDay: "R$ 1,67",
  perMonth: "R$ 49,90",
} as const;

// 14 assistências 24h (engenharia reversa do template APVS rebrandado).
export const ASSISTENCIAS = [
  { icon: "Truck", title: "Reboque 24h", desc: "Guincho até 200km em caso de pane ou sinistro." },
  { icon: "KeyRound", title: "Chaveiro", desc: "Abertura e confecção de chave emergencial." },
  { icon: "Fuel", title: "Pane seca", desc: "Combustível suficiente para chegar ao posto." },
  { icon: "BatteryCharging", title: "Carga de bateria", desc: "Auxílio quando a bateria descarrega." },
  { icon: "CircleDot", title: "Troca de pneu", desc: "Socorro para troca de pneu furado." },
  { icon: "Ambulance", title: "Assistência médica", desc: "Apoio emergencial em caso de acidente." },
  { icon: "Car", title: "Carro reserva", desc: "Veículo substituto enquanto o seu é reparado." },
  { icon: "Hotel", title: "Hospedagem", desc: "Estadia se o veículo parar longe de casa." },
  { icon: "Bus", title: "Táxi / transporte", desc: "Retorno garantido após uma pane." },
  { icon: "Wrench", title: "Mecânico no local", desc: "Reparo emergencial onde você estiver." },
  { icon: "Home", title: "Assistência residencial", desc: "Chaveiro, encanador e eletricista em casa." },
  { icon: "PawPrint", title: "Assistência pet", desc: "Socorro veterinário para seu animal." },
  { icon: "HeartPulse", title: "Auxílio funeral", desc: "Amparo à família em momento difícil." },
  { icon: "Glasses", title: "Vidros e faróis", desc: "Reparo de vidros, faróis e lanternas." },
] as const;

// Benefícios principais (proteção + tecnologia).
export const BENEFICIOS = [
  {
    icon: "MapPin",
    title: "Rastreamento em tempo real",
    desc: "Veja a localização exata do seu veículo no app, a qualquer hora, com atualização ao vivo.",
  },
  {
    icon: "Lock",
    title: "Bloqueio remoto",
    desc: "Em caso de roubo, a central bloqueia o veículo à distância e aciona a recuperação.",
  },
  {
    icon: "Radio",
    title: "Central 24h humana",
    desc: "Atendimento real, todos os dias. Em emergência você fala com gente — não com robô.",
  },
  {
    icon: "Fence",
    title: "Cerca virtual",
    desc: "Receba alerta na hora se o veículo sair da área que você definiu.",
  },
  {
    icon: "Bell",
    title: "Alertas inteligentes",
    desc: "Ignição, excesso de velocidade, bateria e movimentação suspeita no seu celular.",
  },
  {
    icon: "FileBarChart",
    title: "Relatórios e histórico",
    desc: "Trajetos, paradas e velocidade — ideal para controle pessoal ou de frota.",
  },
] as const;

// Planos reais (alinhados ao autoprimesat.com.br + ângulo R$1,67/dia).
export const PLANOS = [
  {
    name: "Essencial",
    tagline: "Proteção que cabe no bolso",
    price: "49,90",
    unit: "/mês",
    perDay: "≈ R$ 1,67/dia",
    features: [
      "Rastreamento 24h em tempo real",
      "App iOS + Android",
      "Histórico de 30 dias",
      "Alerta de ignição e bateria",
      "Central 24h via WhatsApp",
    ],
    cta: "Quero o Essencial",
    highlight: false,
  },
  {
    name: "Premium",
    tagline: "O mais escolhido — proteção completa",
    price: "83,90",
    unit: "/mês",
    perDay: "≈ R$ 2,80/dia",
    features: [
      "Tudo do Essencial",
      "Bloqueio remoto pelo app",
      "Cerca virtual ilimitada",
      "Recuperação assistida pela central",
      "Assistência 24h (reboque, chaveiro e mais)",
      "Histórico de 90 dias",
      "Suporte prioritário",
    ],
    cta: "Quero o Premium",
    highlight: true,
  },
  {
    name: "Frota",
    tagline: "Para empresas e gestores",
    price: "199,90",
    unit: "/veículo",
    perDay: "Sob medida",
    features: [
      "Tudo do Premium",
      "Painel multi-veículo 100% web",
      "Relatórios gerenciais e telemetria",
      "Corte de gastos e controle de rota",
      "API e integrações",
      "Gerente de conta dedicado",
    ],
    cta: "Falar com consultor",
    highlight: false,
  },
] as const;

export const DEPOIMENTOS = [
  {
    name: "Marcos A.",
    role: "Salvador/BA",
    text: "Tentaram levar meu carro no estacionamento. A central bloqueou na hora e a polícia recuperou em 40 minutos. Vale cada centavo.",
    stars: 5,
  },
  {
    name: "Cláudia R.",
    role: "Lauro de Freitas/BA",
    text: "Moro sozinha e fico mais tranquila vendo o carro no app. O atendimento é de gente de verdade, super atenciosa.",
    stars: 5,
  },
  {
    name: "Transportes Lima",
    role: "Frota com 18 veículos",
    text: "Cortamos 22% de combustível só controlando rota e velocidade. O painel da frota mudou nossa operação.",
    stars: 5,
  },
  {
    name: "Roberto S.",
    role: "Aracaju/SE",
    text: "Instalação rápida e atendimento nota 10. Já indiquei pra família toda. Suporte responde na hora pelo WhatsApp.",
    stars: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    q: "Tem fidelidade ou multa para cancelar?",
    a: "Não. Você cancela quando quiser, sem multa e sem letras miúdas. Tudo registrado em contrato.",
  },
  {
    q: "Quanto custa a instalação?",
    a: "A instalação é gratuita em promoção e feita por técnico credenciado, com cobertura nacional.",
  },
  {
    q: "O rastreador funciona em todo o Brasil?",
    a: "Sim. Usamos chips multioperadora 4G/2G, garantindo sinal mesmo em áreas de cobertura difícil.",
  },
  {
    q: "Funciona para moto e caminhão também?",
    a: "Sim. Atendemos carros, motos, caminhões e frotas. O plano e o equipamento são adequados ao seu veículo.",
  },
  {
    q: "Como funciona a recuperação em caso de roubo?",
    a: "A central 24h bloqueia o veículo remotamente, localiza em tempo real e apoia a ação policial até a recuperação.",
  },
  {
    q: "Os equipamentos são homologados?",
    a: "Sim, todos os equipamentos são homologados pela Anatel. Trabalhamos no mercado desde 2017.",
  },
] as const;
