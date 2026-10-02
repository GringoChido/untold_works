// Anything without a match goes home with a 301. Netlify drops a `/* / 301` rule in
// _redirects as a loop, so the catch-all lives here, after the static files have had their say.

type Context = { next(): Promise<Response> };

export default async (request: Request, context: Context) => {
  const response = await context.next();
  if (response.status !== 404) return response;
  return Response.redirect(new URL('/', request.url), 301);
};
