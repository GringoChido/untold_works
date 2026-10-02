// Acceptance check on the prerendered build: every card matches projects.json, nothing banned survives, no three.js or video.
import { readdir, readFile, stat } from 'fs/promises';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const categories = JSON.parse(await readFile(join(ROOT, 'src/data/projects.json'), 'utf-8'));
const failures = [];
const fail = (msg) => failures.push(msg);

const decode = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');

const pageText = async (route) => decode(await readFile(join(DIST, route === '/' ? '' : route, 'index.html'), 'utf-8'));

const expectIn = (text, needle, where) => {
  if (!text.includes(needle)) fail(`${where}: missing "${needle}"`);
};

// 1. Every card on every category page matches projects.json, in order.
for (const category of categories) {
  const text = await pageText(`/${category.slug}`);
  expectIn(text, `${category.index} / 04`, category.slug);
  expectIn(text, `${category.projects.length + category.music.length} projects`, category.slug);
  expectIn(text, category.caption, category.slug);
  expectIn(text, category.intro, category.slug);
  category.layers.forEach((layer) => expectIn(text, layer, category.slug));

  let cursor = 0;
  for (const project of [...category.projects, ...category.music]) {
    const at = text.indexOf(project.name, cursor);
    if (at < 0) {
      fail(`${category.slug}: card "${project.name}" not found in order`);
      continue;
    }
    cursor = at;
    for (const fact of project.facts) {
      expectIn(text, fact.label, `${category.slug} / ${project.name}`);
      expectIn(text, fact.value, `${category.slug} / ${project.name}`);
    }
    const v = project.visual;
    if (v.tag) expectIn(text, v.tag, `${category.slug} / ${project.name} tag`);
    if (v.type === 'type') {
      expectIn(text, v.big, `${category.slug} / ${project.name}`);
      expectIn(text, v.small, `${category.slug} / ${project.name}`);
    }
    if (v.type === 'flow' || v.type === 'engine-room-diagram') {
      v.nodes.forEach((node) => expectIn(text, node.replace(/ \(.*\)$/, ''), `${category.slug} / ${project.name}`));
    }
    if (v.type === 'image') {
      const html = await readFile(join(DIST, category.slug, 'index.html'), 'utf-8');
      if (!html.includes(`alt="${v.alt.replace(/"/g, '&quot;').replace(/'/g, '&#x27;')}"`) && !html.includes(`alt="${v.alt}"`)) {
        fail(`${category.slug} / ${project.name}: alt text missing`);
      }
    }
  }
}

// 2. Home: the eight layers and the four cards.
const home = await pageText('/');
['Storytelling', 'is the craft.', 'AI', 'is the crew.', 'Brand, product and marketing since 1999', 'Built with AI since 2024'].forEach((s) => expectIn(home, s, 'home'));
['The story', 'Channels', 'Publishing', 'Brand', 'Product and place', 'Operations', 'Command', 'Scale', 'Flagged off'].forEach((s) => expectIn(home, s, 'home layers'));
['Platforms', 'Brand and product', 'Websites', 'Campaigns'].forEach((s) => expectIn(home, `Open ${s} →`, 'home cards'));

// 3. Banned phrases, anywhere in dist.
const banned = [
  /98%/, /4\.2[x×]/, /6 production AI/i, /15 hrs/i, /15 hours/i, /20% sales/i, /4,000 SKU/i, /\+35%/, /35% efficiency/i,
  /8 direct reports/i, /30%/, /tripled/i, /31%/, /\$40K/i, /40K\/month/i, /ROAS/, /300% /, /franchise/i, /royalt/i, /\bFDD\b/,
  /Counter Cultures/i, /Spotify/i, /Emerald Cup/i, /Superfly/i, /30 years/i, /\bdead\b/i, /\bsmall\b/i,
];
const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir)) {
    const p = join(dir, entry);
    if ((await stat(p)).isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
};
const files = await walk(DIST);
for (const file of files) {
  if (/\.(mp4|webm|mov)$/i.test(file)) fail(`video file in dist: ${file}`);
  if (!/\.(html|txt|xml|js)$/.test(file)) continue; // copy lives in html and text, never css
  const raw = await readFile(file, 'utf-8');
  const text = file.endsWith('.html') ? decode(raw) : raw;
  if (/\.js$/.test(file)) {
    if (/WebGLRenderer|THREE\.|three\.module/.test(raw)) fail(`three.js or WebGL in bundle: ${file}`);
    continue;
  }
  banned.forEach((re) => {
    const m = text.match(re);
    if (m) fail(`banned phrase "${m[0]}" in ${file.replace(DIST, 'dist')}`);
  });
}

// 4. Sitemap lists only the new routes.
const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf-8');
if (/\/(blog|portfolio|solutions|network-systems)\b/.test(sitemap)) fail('old routes in sitemap');

if (failures.length) {
  console.error(`\n${failures.length} problem(s):\n` + failures.map((f) => `  ✗ ${f}`).join('\n'));
  process.exit(1);
}
console.log(`✓ ${categories.reduce((n, c) => n + c.projects.length + c.music.length, 0)} cards match projects.json, home copy present, nothing banned, no video, no WebGL`);
