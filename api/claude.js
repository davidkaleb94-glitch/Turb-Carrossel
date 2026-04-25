export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  try {
    const body = await req.text();
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01'
      },
      body
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
