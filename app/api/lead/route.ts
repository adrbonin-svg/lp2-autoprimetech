import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'node:crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  vehicle?: string;
  plan?: string;
  source?: string;
  utm?: Record<string, string>;
  fbp?: string;
  fbc?: string;
};

function sha256(value: string) {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

async function sendToMetaCAPI(lead: LeadPayload, ip: string, userAgent: string) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_ACCESS_TOKEN;
  if (!pixelId || !token) return;

  const payload = {
    data: [
      {
        event_name: 'Lead',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: process.env.NEXT_PUBLIC_SITE_URL,
        user_data: {
          em: lead.email ? [sha256(lead.email)] : undefined,
          ph: [sha256(lead.phone.replace(/\D/g, ''))],
          fn: [sha256(lead.name.split(' ')[0])],
          ct: lead.city ? [sha256(lead.city)] : undefined,
          country: [sha256('br')],
          client_ip_address: ip,
          client_user_agent: userAgent,
          fbp: lead.fbp,
          fbc: lead.fbc,
        },
        custom_data: {
          currency: 'BRL',
          value: 69.9,
          plan: lead.plan,
          vehicle: lead.vehicle,
          source: lead.source,
        },
      },
    ],
    ...(process.env.META_CAPI_TEST_EVENT_CODE && {
      test_event_code: process.env.META_CAPI_TEST_EVENT_CODE,
    }),
  };

  try {
    await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      },
    );
  } catch (err) {
    console.error('[Meta CAPI]', err);
  }
}

async function sendToCRM(lead: LeadPayload) {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.CRM_WEBHOOK_TOKEN && {
          Authorization: `Bearer ${process.env.CRM_WEBHOOK_TOKEN}`,
        }),
      },
      body: JSON.stringify({ ...lead, source: lead.source ?? 'lp2', createdAt: new Date().toISOString() }),
    });
  } catch (err) {
    console.error('[CRM webhook]', err);
  }
}

async function notifyEvolutionAPI(lead: LeadPayload) {
  const url = process.env.EVOLUTION_API_URL;
  const key = process.env.EVOLUTION_API_KEY;
  const instance = process.env.EVOLUTION_INSTANCE;
  const sales = process.env.SALES_WHATSAPP;
  if (!url || !key || !instance || !sales) return;

  const text = `*Novo lead LP2*\n\n*Nome:* ${lead.name}\n*Telefone:* ${lead.phone}${
    lead.email ? `\n*Email:* ${lead.email}` : ''
  }${lead.vehicle ? `\n*Veiculo:* ${lead.vehicle}` : ''}${
    lead.plan ? `\n*Plano:* ${lead.plan}` : ''
  }${lead.city ? `\n*Cidade:* ${lead.city}` : ''}\n*Origem:* ${lead.source ?? 'lp2'}`;

  try {
    await fetch(`${url}/message/sendText/${instance}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: key },
      body: JSON.stringify({ number: sales, text }),
    });
  } catch (err) {
    console.error('[Evolution]', err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const lead = (await request.json()) as LeadPayload;

    if (!lead.name?.trim() || !lead.phone?.trim()) {
      return NextResponse.json(
        { error: 'Nome e telefone são obrigatórios' },
        { status: 400 },
      );
    }

    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      '';
    const userAgent = request.headers.get('user-agent') ?? '';

    // Fan-out paralelo
    await Promise.allSettled([
      sendToCRM(lead),
      sendToMetaCAPI(lead, ip, userAgent),
      notifyEvolutionAPI(lead),
    ]);

    return NextResponse.json({ ok: true, redirect: '/obrigado' });
  } catch (err) {
    console.error('[lead]', err);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}
