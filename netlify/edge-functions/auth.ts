// Basic auth for the preview. Any username, the password from SITE_PASSWORD.
// Fails closed: with no SITE_PASSWORD set, nothing is served. Declared in netlify.toml.

declare const Netlify: { env: { get(name: string): string | undefined } };

type Context = { next(): Promise<Response> };

export default async (request: Request, context: Context) => {
  const expected = Netlify.env.get('SITE_PASSWORD');
  const header = request.headers.get('authorization') ?? '';

  if (expected && header.startsWith('Basic ')) {
    const decoded = atob(header.slice(6));
    const password = decoded.slice(decoded.indexOf(':') + 1);
    if (password === expected) return context.next();
  }

  return new Response(expected ? 'Authentication required' : 'Preview locked: SITE_PASSWORD is not set', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Untold.works preview", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
};
