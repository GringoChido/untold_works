import pages from '../../src/data/seo.json' with { type: 'json' };

export const config = { method: 'POST' };

export default function recordPortfolioEvent(request) {
  const url = new URL(request.url);
  if (request.method !== 'POST' || request.headers.get('origin') !== url.origin) {
    return new Response(null, { status: 403 });
  }

  const event = url.searchParams.get('event');
  const page = url.searchParams.get('page') ?? '';
  const project = url.searchParams.get('project') ?? '';
  if (!Object.hasOwn(pages, page) || (project && (!project.startsWith('/work/') || !Object.hasOwn(pages, project)))) {
    return new Response(null, { status: 400 });
  }
  const fromHome = event === 'project_open' && page === '/' && Boolean(project);
  if (!fromHome && event !== 'email_click') return new Response(null, { status: 400 });

  console.info(JSON.stringify({ event, page, project: project || null }));
  return new Response(null, { status: 204 });
}
