// Acceptance check on the prerendered build: selected cases lead, every project remains reachable, and unsupported claims stay out.
import { readdir, readFile, stat } from 'fs/promises';
import { join } from 'path';
import { routes } from './routes.mjs';

const ROOT = join(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const categories = JSON.parse(await readFile(join(ROOT, 'src/data/projects.json'), 'utf-8'));
const editorial = JSON.parse(await readFile(join(ROOT, 'src/data/editorial.json'), 'utf-8'));
const projectRoutes = new Set();
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

const pageFile = (route) => (route === '/' ? join(DIST, 'index.html') : join(DIST, route + '.html'));
const pageHtml = async (route) => readFile(pageFile(route), 'utf-8');
const pageText = async (route) => decode(await pageHtml(route));
const expectIn = (text, needle, where) => {
  if (!text.includes(needle)) fail(where + ': missing "' + needle + '"');
};
const orderedLinks = (html, projects, where) => {
  let cursor = 0;
  for (const project of projects) {
    const at = html.indexOf('href="' + project.projectPage + '"', cursor);
    if (at < 0) fail(where + ': missing or out-of-order link for ' + project.name);
    else cursor = at + 1;
  }
};

// Every card route is unique and prerendered. The selected grid carries full facts;
// supporting pieces live in a compact linked record beneath it.
for (const category of categories) {
  const route = '/' + category.slug;
  const html = await pageHtml(route);
  const text = decode(html);
  const config = editorial[category.slug];
  const all = [...category.music, ...category.projects];
  if (!config) {
    fail(category.slug + ': missing editorial selection');
    continue;
  }
  const selectedRoutes = new Set(config.featured);
  const selected = all.filter((project) => selectedRoutes.has(project.projectPage));
  const supporting = all.filter((project) => !selectedRoutes.has(project.projectPage));
  if (selected.length !== selectedRoutes.size) fail(category.slug + ': featured route missing from projects.json');
  expectIn(text, category.index + ' / 04', category.slug);
  expectIn(text, all.length + ' project records', category.slug);
  expectIn(text, category.caption, category.slug);
  expectIn(text, category.intro, category.slug);
  category.layers.forEach((layer) => expectIn(text, layer, category.slug));

  const selectedStart = html.indexOf('aria-labelledby="category-evidence-title"');
  const supportingStart = html.indexOf('aria-labelledby="category-more-title"');
  if (selectedStart < 0 || supportingStart <= selectedStart) fail(category.slug + ': missing selected/supporting hierarchy');
  const selectedHtml = html.slice(selectedStart, supportingStart);
  const supportingHtml = html.slice(supportingStart);
  orderedLinks(selectedHtml, selected, category.slug + ' selected');
  orderedLinks(supportingHtml, supporting, category.slug + ' supporting');

  for (const engagement of config.engagements) {
    if (!html.includes('href="' + engagement.to + '"')) fail(category.slug + ': missing engagement link ' + engagement.to);
  }

  for (const project of all) {
    if (!project.projectPage?.startsWith('/work/')) fail(category.slug + ' / ' + project.name + ': missing project route');
    if (projectRoutes.has(project.projectPage)) fail(category.slug + ' / ' + project.name + ': duplicate project route');
    projectRoutes.add(project.projectPage);
    try {
      const detail = await pageText(project.projectPage);
      expectIn(detail, project.name, category.slug + ' / ' + project.name + ' detail');
    } catch {
      fail(category.slug + ' / ' + project.name + ': detail page not prerendered');
    }
    const area = selectedRoutes.has(project.projectPage) ? selectedHtml : supportingHtml;
    expectIn(decode(area), project.name, category.slug + ' / ' + project.name);
    if (project.visual.tag) expectIn(decode(area), project.visual.tag, category.slug + ' / ' + project.name + ' tag');
    if (selectedRoutes.has(project.projectPage)) {
      for (const fact of project.facts) {
        expectIn(decode(area), fact.label, category.slug + ' / ' + project.name);
        expectIn(decode(area), fact.value, category.slug + ' / ' + project.name);
      }
      if (project.visual.type === 'image') expectIn(area, 'alt=', category.slug + ' / ' + project.name + ' image');
    }
  }
}

// Consulting entry points and selected engagements precede the process section.
const homeHtml = await pageHtml('/');
const home = decode(homeHtml);
if (/Film unavailable|Film could not load/.test(home)) fail('home: transient media error');
['Show them', 'your budget', 'Ways to work together', 'Billiard Factory', 'Robert Glasper', 'Blue Note', 'Lalah Hathaway', 'Shopify', 'Tools & platforms', 'Engine Room'].forEach((phrase) => expectIn(home, phrase, 'home'));
for (const route of ['/work/billiard-factory-and-c-l-bailey', '/work/robert-glasper-blue-note', '/work/lalah-hathaway', '/work/engine-room', '/work/other-projects', '/Joshua-Semolik-Resume.pdf']) expectIn(homeHtml, 'href="' + route + '"', 'homepage proof and resume');
if (homeHtml.indexOf('id="work"') >= homeHtml.indexOf('id="ai"')) fail('home: selected work must precede process');
expectIn(homeHtml, 'href="/art-of-prompting"', 'home creative production link');
const consulting = await pageHtml('/work-together');
for (const needle of ['id="contact"', 'id="where-i-can-help"', 'mailto:', 'tel:', 'href="/work/lalah-hathaway"', 'href="/work/engine-room"']) expectIn(consulting, needle, 'consulting page');

// The collection is reachable from the homepage and retains both films as full,
// user-controlled playback rather than introducing ambient, silent previews.
const creativeHtml = await pageHtml('/art-of-prompting');
if (/Film unavailable|Film could not load/.test(decode(creativeHtml))) fail('art of prompting: a transient media error was saved into the prerendered page');
expectIn(decode(creativeHtml), 'The art of prompting.', 'creative practice page title');
const creativePlayers = [...creativeHtml.matchAll(/<video\b([^>]*)>([\s\S]*?)<\/video>/g)];
if (!creativePlayers[0]?.[2].includes('/video/cl-bailey-factory-event.mp4')) fail('art of prompting: C.L. Bailey must be the opening film');
for (const film of ['cl-bailey-factory-event', 'velocity-ball-launch']) {
  const player = creativePlayers.find((match) => match[2].includes(`/video/${film}.mp4`));
  if (!player) {
    fail('art of prompting: missing film ' + film);
    continue;
  }
  expectIn(player[2], `/video/${film}-mobile.mp4`, 'art of prompting responsive film ' + film);
  if (!/(?:^|\s)controls(?:\s|=|$)/.test(player[1])) fail('art of prompting: native controls missing for ' + film);
  if (/(?:^|\s)(?:autoplay|muted|loop)(?:\s|=|$)/.test(player[1])) fail('art of prompting: ' + film + ' must play on request with sound');
}

const bf = await pageText('/work/billiard-factory-and-c-l-bailey');
expectIn(await pageHtml('/work/billiard-factory-and-c-l-bailey'), 'href="/work/game-room-furniture-partners"', 'trade showroom detail link');
['interior designers', '34 showroom stations', '27 room concepts', 'physical redesign', 'headless Shopify Plus', 'checkout launched October 16, 2026', 'franchise planning', 'Xorosoft', 'Holiday Gift Guide', 'Black Friday Gift Guide'].forEach((phrase) => expectIn(bf, phrase, 'Billiard Factory engagement'));
expectIn(await pageText('/work/landing-pages'), 'GoHighLevel', 'sales handoff');
const music = await pageText('/work/robert-glasper-blue-note');
['Second Son Productions', 'Other artist collaborations', 'Blue Note London', 'Rob Jones', 'Todd Cooper', 'Code Derivation', 'Black Radio Experience'].forEach((phrase) => expectIn(music, phrase, 'music engagement'));
const other = await pageText('/work/other-projects');
['Savor', 'Noxguard', 'Demo'].forEach((phrase) => expectIn(other, phrase, 'other projects'));
if (other.includes('Game Room Furniture Partners')) fail('other projects: Billiard Factory’s trade showroom is incorrectly classified');
const grfp = await pageHtml('/work/game-room-furniture-partners');
['Billiard Factory', 'trade-only showroom', 'interior designers'].forEach((phrase) => expectIn(decode(grfp), phrase, 'trade showroom case'));
expectIn(grfp, 'href="/work/billiard-factory-and-c-l-bailey"', 'trade showroom parent link');
const homeBfStart = homeHtml.indexOf('id="billiard-factory"');
const homeMusicStart = homeHtml.indexOf('id="second-son"');
expectIn(homeHtml.slice(homeBfStart, homeMusicStart), 'href="/work/off-storis"', 'homepage ecommerce story');
if (homeHtml.slice(homeHtml.indexOf('id="other-projects"')).includes('/work/game-room-furniture-partners')) fail('home: trade showroom is incorrectly listed under other projects');
for (const category of categories) {
  const otherHtml = await pageHtml('/work/other-projects');
  if (!otherHtml.includes('href="/' + category.slug + '"')) fail('other projects: missing capability index link to ' + category.slug);
}
const savor = await pageText('/work/savor');
['IDW Studio', 'Website and content storytelling', 'Chef Series'].forEach((phrase) => expectIn(savor, phrase, 'Savor case'));
const lalah = await pageText('/work/lalah-hathaway');
['original media, room concept and creative feedback', 'historically subscribed contacts', 'public vinyl and T-shirt checkout remains closed'].forEach((phrase) => expectIn(lalah, phrase, 'Lalah case'));

// Keep previously rejected claims and unrelated media dependencies out of the release.
const banned = [
  /98%/, /4\.2[x×]/, /6 production AI/i, /15 hrs/i, /15 hours/i, /20% sales/i, /4,000 SKU/i, /\+35%/, /35% efficiency/i,
  /8 direct reports/i, /30%/, /tripled/i, /31%/, /\$40K/i, /40K\/month/i, /ROAS/, /300% /, /royalt/i, /\bFDD\b/,
  /Counter Cultures/i, /Spotify/i, /Emerald Cup/i, /Superfly/i, /30 years/i, /\bdead\b/, /\bsmall\b/i, /about 70 dealers/i,
  /Sante Peptides/i, /Rivero Studio/i,
];
const walk = async (dir) => {
  const out = [];
  for (const entry of await readdir(dir)) {
    const path = join(dir, entry);
    if ((await stat(path)).isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
};
// Homepage and case films selected from the user's supplied and verified sources.
const approvedVideos = new Set(['cl-bailey-factory-event.mp4', 'cl-bailey-factory-event-mobile.mp4', 'bf-storefront.mp4', 'bf-storefront-mobile.mp4', 'glasper-r-r-now.mp4', 'glasper-r-r-now-mobile.mp4', 'robert-glasper-birthday.mp4', 'robert-glasper-birthday-mobile.mp4', 'black-radio-experience-recap.mp4', 'black-radio-experience-recap-mobile.mp4', 'savor-food.mp4', 'savor-food-mobile.mp4', 'velocity-ball-launch.mp4', 'velocity-ball-launch-mobile.mp4'].map((name) => join(DIST, 'video', name)));
const approvedHtml = new Set([...routes.map((route) => pageFile(route)), join(DIST, '404.html')]);
for (const file of await walk(DIST)) {
  if (file.endsWith('.html') && !approvedHtml.has(file)) fail('unexpected HTML page in dist: ' + file.replace(DIST, 'dist'));
  if (/\.(mp4|webm|mov)$/i.test(file) && !approvedVideos.has(file)) fail('unapproved video file in dist: ' + file);
  if (!/\.(html|txt|xml|js)$/.test(file)) continue;
  const raw = await readFile(file, 'utf-8');
  const text = file.endsWith('.html') ? decode(raw) : raw;
  if (/\.js$/.test(file)) {
    if (/WebGLRenderer|THREE\.|three\.module/.test(raw)) fail('three.js or WebGL in bundle: ' + file);
    continue;
  }
  banned.forEach((pattern) => {
    const match = text.match(pattern);
    if (match) fail('banned phrase "' + match[0] + '" in ' + file.replace(DIST, 'dist'));
  });
}

const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf-8');
if (/\/(blog|portfolio|solutions|network-systems)\b/.test(sitemap)) fail('old routes in sitemap');
for (const route of [...projectRoutes, '/work/billiard-factory-and-c-l-bailey', '/work/robert-glasper-blue-note', '/work/other-projects', '/art-of-prompting']) {
  if (!sitemap.includes(route)) fail(route + ': missing from sitemap');
}
expectIn(await readFile(join(DIST, 'llms.txt'), 'utf-8'), 'https://untold.works/art-of-prompting', 'llms art of prompting page');

if (failures.length) {
  console.error('\n' + failures.length + ' problem(s):\n' + failures.map((failure) => '  ✗ ' + failure).join('\n'));
  process.exit(1);
}
console.log('✓ ' + projectRoutes.size + ' project routes remain reachable; Human Direction links to the art of prompting; approved films retain native playback; no banned claims or WebGL');
