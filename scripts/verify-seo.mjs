// Fail the release if crawlable HTML, identities, links or assets regress.
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { join } from 'node:path';
import { routes } from './routes.mjs';

const root = join(import.meta.dirname, '..');
const dist = join(root, 'dist');
const origin = 'https://untold.works';
const seo = JSON.parse(await readFile(join(root, 'src/data/seo.json'), 'utf8'));
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], decode(m[2])]));
const pages = new Map();
const assets = new Set();
const titles = new Set();
const descriptions = new Set();

for (const route of routes) {
  const html = await readFile(join(dist, route === '/' ? 'index.html' : route + '.html'), 'utf8');
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  const metas = [...html.matchAll(/<meta\s[^>]*>/g)].map((m) => attrs(m[0]));
  const meta = (key) => metas.filter((m) => m.name === key || m.property === key);
  assert.equal(title, seo[route].title, `${route}: reviewed title`);
  assert(!titles.has(title), `${route}: duplicate title`); titles.add(title);
  const description = meta('description');
  assert.equal(description.length, 1, `${route}: description count`);
  assert.equal(description[0].content, seo[route].description, `${route}: reviewed description`);
  assert(!descriptions.has(description[0].content), `${route}: duplicate description`); descriptions.add(description[0].content);
  assert(description[0].content.length >= 50 && description[0].content.length <= 180, `${route}: description needs review`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${route}: one main heading`);
  assert(html.includes('<main'), `${route}: static main content`);
  assert(!html.includes('Loading page…'), `${route}: loading state was saved`);
  assert(!/noindex|nosnippet/.test(meta('robots')[0]?.content ?? ''), `${route}: indexable`);
  assert(meta('robots')[0]?.content.includes('max-image-preview:large'), `${route}: image preview permission`);
  const links = [...html.matchAll(/<link\s[^>]*>/g)].map((m) => attrs(m[0]));
  assert.deepEqual(links.filter((l) => l.rel === 'canonical').map((l) => l.href), [origin + route], `${route}: canonical`);
  assert.equal(meta('og:url')[0]?.content, origin + route, `${route}: OG URL`);
  for (const key of ['og:title', 'twitter:title']) assert.equal(meta(key)[0]?.content, title, `${route}: ${key}`);
  for (const key of ['og:description', 'twitter:description']) assert.equal(meta(key)[0]?.content, description[0].content, `${route}: ${key}`);
  for (const key of ['og:image', 'twitter:image']) assert.equal(meta(key)[0]?.content, origin + seo[route].image.src, `${route}: ${key}`);
  const scripts = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const nodes = scripts.flatMap((s) => s['@graph'] ?? [s]);
  for (const type of ['Person', 'Organization', 'WebSite', seo[route].type]) assert(nodes.some((n) => n['@type'] === type), `${route}: missing ${type}`);
  assert.equal(nodes.filter((n) => n['@type'] === 'Person').length, 1, `${route}: duplicate identity`);
  assert.equal(nodes.find((n) => n['@type'] === 'Person').name, 'Joshua Semolik');
  if (route !== '/') {
    const breadcrumb = nodes.find((n) => n['@type'] === 'BreadcrumbList');
    assert(breadcrumb?.itemListElement.length >= 2, `${route}: breadcrumbs`);
    breadcrumb.itemListElement.forEach((item, index) => {
      assert.equal(item.position, index + 1); assert(item.name); assert(item.item.startsWith(origin + '/'));
    });
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate HTML IDs`);
  const anchors = [...html.matchAll(/<a\b[^>]*>/g)].map((m) => attrs(m[0])).filter((a) => a.href).map((a) => new URL(a.href, origin + route));
  pages.set(route, { html, ids: new Set(ids), anchors });
  for (const match of html.matchAll(/<(?:img|source|video|script|link)\b[^>]*>/g)) {
    const a = attrs(match[0]);
    if (match[0].startsWith('<img')) assert('alt' in a, `${route}: image missing alt`);
    for (const url of [a.src, a.poster, ...(a.srcset ? a.srcset.split(',').map((part) => part.trim().split(/\s+/)[0]) : []), ...(a.rel === 'stylesheet' || a.rel === 'modulepreload' ? [a.href] : [])]) {
      if (url?.startsWith('/')) assets.add(url);
    }
  }
  assets.add(seo[route].image.src);
}

const inbound = new Map(routes.map((r) => [r, new Set()]));
for (const [route, page] of pages) {
  for (const link of page.anchors) {
    if (link.origin !== origin) continue;
    const path = link.pathname;
    if (path.startsWith('/images/') && path.endsWith('.webp')) {
      assets.add(path);
      continue;
    }
    if (path.endsWith('.pdf')) {
      const pdf = await readFile(join(dist, path));
      assert(pdf.subarray(0, 5).toString() === '%PDF-', `${route}: ${path} must be a real PDF`);
      continue;
    }
    assert(pages.has(path), `${route}: link to noncanonical or missing page ${path}`);
    if (link.hash) assert(pages.get(path).ids.has(decodeURIComponent(link.hash.slice(1))), `${route}: missing fragment ${link.href}`);
    if (path !== route) inbound.get(path).add(route);
  }
}
for (const [route, parents] of inbound) assert(parents.size, `${route}: orphan page`);
for (const asset of assets) await access(join(dist, asset));
const allowed = new Set([...routes.map((r) => r === '/' ? 'index.html' : r.slice(1) + '.html'), '404.html']);
for (const file of await readdir(dist, { recursive: true })) {
  if (file.endsWith('.html')) assert(allowed.has(file), `Unexpected indexable HTML: ${file}`);
}
const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8');
assert.deepEqual([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]).sort(), routes.map((r) => origin + r).sort());
assert(!sitemap.includes('<lastmod>'), 'Do not invent page modification dates');
const videos = await readFile(join(dist, 'video-sitemap.xml'), 'utf8');
for (const match of videos.matchAll(/<video:(?:content|thumbnail)_loc>(.*?)<\/video:(?:content|thumbnail)_loc>/g)) await access(join(dist, new URL(match[1]).pathname));
const redirects = await readFile(join(dist, '_redirects'), 'utf8');
for (const line of redirects.split('\n').filter((line) => line.trim() && !line.startsWith('#'))) {
  const [from, to, status] = line.trim().split(/\s+/);
  if (status?.endsWith('!')) assert(from.replace(/\/$/, '') !== to.replace(/\/$/, ''), `Forced redirect loop after Netlify slash normalization: ${line}`);
  if (to.startsWith('/')) {
    const destination = new URL(to, origin).pathname;
    assert(routes.includes(destination) || destination === '/llms.txt', `Redirect target is not a published page: ${line}`);
  }
}
const depth = new Map([['/', 0]]);
for (const [route, value] of depth) for (const a of pages.get(route).anchors) if (a.origin === origin && pages.has(a.pathname) && !depth.has(a.pathname)) depth.set(a.pathname, value + 1);
assert.equal(depth.size, routes.length, 'Every page must be reachable from home');
console.log(`✓ ${routes.length} static pages: unique metadata, canonical URLs, identity and breadcrumb data, valid internal links and fragments`);
console.log(`✓ ${assets.size} local asset references; exact sitemap coverage; video sitemap; no orphan pages or stray HTML`);
console.log(`✓ Every page is within ${Math.max(...depth.values())} links of the homepage`);
