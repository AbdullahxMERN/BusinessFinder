import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Server-side only — never exposed to the browser
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export async function POST(request) {
  try {
    const { query } = await request.json();

    if (!query || !query.trim()) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    if (!N8N_WEBHOOK_URL) {
      console.error('[Error] N8N_WEBHOOK_URL is missing in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: N8N_WEBHOOK_URL is not set.' },
        { status: 500 }
      );
    }

    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query: query.trim() }),
    });

    if (!n8nResponse.ok) {
      const errText = await n8nResponse.text();
      console.error('n8n error:', n8nResponse.status, errText);
      return NextResponse.json(
        { error: `n8n returned status ${n8nResponse.status}` },
        { status: 502 }
      );
    }

    const data = await n8nResponse.json();
    return NextResponse.json(data);

  } catch (err) {
    console.error('Proxy error:', err.message);
    return NextResponse.json(
      { error: 'Failed to reach n8n endpoint' },
      { status: 500 }
    );
  }
}
