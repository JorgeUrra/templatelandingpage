type Env = {
  ASSETS: {
    fetch: (request: Request) => Response | Promise<Response>;
  };
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
};

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const DEFAULT_TO_EMAIL = 'jorge.urra.merino@gmail.com';
const DEFAULT_FROM_EMAIL = 'PeumaTek <onboarding@resend.dev>';

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    if (url.pathname.startsWith('/api/')) {
      return json({ ok: false, error: 'Ruta no encontrada.' }, 404);
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleContact(request: Request, env: Env): Promise<Response> {
  const wantsJson = request.headers.get('accept')?.includes('application/json') ?? false;

  try {
    const formData = await request.formData();

    const payload = {
      name: readField(formData, 'nombre', 90),
      phone: readField(formData, 'telefono', 40),
      email: readField(formData, 'email', 120),
      message: readField(formData, 'mensaje', 1600),
      source: readField(formData, 'origen', 80) || 'Formulario principal',
      page: request.headers.get('referer') || new URL(request.url).origin
    };

    const validationError = validatePayload(payload);
    if (validationError) {
      return respond(request, wantsJson, false, validationError);
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('Missing RESEND_API_KEY secret.');
      return respond(request, wantsJson, false, 'config');
    }

    const to = env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const from = env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;
    const subject = `Nueva solicitud PeumaTek: ${payload.name}`;
    const sent = await sendEmail(apiKey, {
      to,
      from,
      replyTo: payload.email || undefined,
      subject,
      text: buildTextEmail(payload),
      html: buildHtmlEmail(payload)
    });

    if (!sent.ok) {
      console.error('Resend error:', sent.status, sent.body);
      return respond(request, wantsJson, false, 'email');
    }

    return respond(request, wantsJson, true, 'ok', payload.name);
  } catch (error) {
    console.error('Contact form error:', error);
    return respond(request, wantsJson, false, 'server');
  }
}

function readField(formData: FormData, key: string, maxLength = 300): string {
  const value = formData.get(key);
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function validatePayload(payload: { name: string; phone: string; email: string; message: string }): string | null {
  if (!payload.name || !payload.phone) {
    return 'validation';
  }

  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return 'email_format';
  }

  return null;
}

async function sendEmail(
  apiKey: string,
  email: { to: string; from: string; replyTo?: string; subject: string; text: string; html: string }
): Promise<{ ok: boolean; status: number; body: string }> {
  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: email.from,
      to: [email.to],
      reply_to: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html
    })
  });

  return {
    ok: response.ok,
    status: response.status,
    body: await response.text()
  };
}

function respond(request: Request, wantsJson: boolean, ok: boolean, reason: string, name = ''): Response {
  if (wantsJson) {
    return json({ ok, reason }, ok ? 200 : 400);
  }

  const url = new URL('/gracias', request.url);
  url.searchParams.set('estado', ok ? 'ok' : 'error');
  url.searchParams.set('motivo', reason);
  if (name) url.searchParams.set('nombre', name);

  return Response.redirect(url.toString(), 303);
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}

function buildTextEmail(payload: { name: string; phone: string; email: string; message: string; source: string; page: string }): string {
  return [
    'Nueva solicitud desde PeumaTek',
    '',
    `Nombre: ${payload.name}`,
    `Telefono: ${payload.phone}`,
    `Correo: ${payload.email || 'No indicado'}`,
    `Origen: ${payload.source}`,
    `Pagina: ${payload.page}`,
    '',
    'Mensaje:',
    payload.message || 'Sin mensaje adicional.'
  ].join('\n');
}

function buildHtmlEmail(payload: { name: string; phone: string; email: string; message: string; source: string; page: string }): string {
  const rows = [
    ['Nombre', payload.name],
    ['Telefono', payload.phone],
    ['Correo', payload.email || 'No indicado'],
    ['Origen', payload.source],
    ['Pagina', payload.page]
  ];

  return `
    <div style="font-family:Inter,Arial,sans-serif;background:#101827;color:#f4f7f8;padding:28px">
      <div style="max-width:640px;margin:0 auto;background:#182336;border:1px solid rgba(63,166,107,.22);border-radius:18px;padding:28px">
        <p style="margin:0 0 10px;color:#3FA66B;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase">Nueva solicitud PeumaTek</p>
        <h1 style="margin:0 0 20px;font-size:28px;line-height:1.15">Nuevo contacto desde el sitio</h1>
        <table style="width:100%;border-collapse:collapse;margin:0 0 22px">
          ${rows.map(([label, value]) => `
            <tr>
              <td style="padding:10px 0;color:#8a9db8;border-top:1px solid rgba(255,255,255,.08);width:120px">${escapeHtml(label)}</td>
              <td style="padding:10px 0;border-top:1px solid rgba(255,255,255,.08)">${escapeHtml(value)}</td>
            </tr>
          `).join('')}
        </table>
        <div style="background:#0c1220;border:1px solid rgba(240,120,32,.22);border-radius:14px;padding:18px">
          <p style="margin:0 0 8px;color:#F07820;font-weight:700">Mensaje</p>
          <p style="margin:0;white-space:pre-wrap;color:#f4f7f8">${escapeHtml(payload.message || 'Sin mensaje adicional.')}</p>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
