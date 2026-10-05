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

// Home introduces the studio and its process, then three bodies of work.
const homeHtml = await pageHtml('/');
const home = decode(homeHtml);
if (/Film unavailable|Film could not load/.test(home)) fail('home: a transient media error was saved into the prerendered page');
[
  'Creative direction.',
  'AI transformation.',
  'Untold.works is Joshua Semolik’s working studio',
  'Human direction.',
  'AI in the making.',
  'Billiard Factory',
  'Second Son Productions',
  'Other Projects',
  'a franchise model is in consultant review',
  'About the studio',
].forEach((phrase) => expectIn(home, phrase, 'home'));
const leadRoutes = ['/work/billiard-factory-and-c-l-bailey', '/work/robert-glasper-blue-note', '/work/other-projects'];
const leadPositions = leadRoutes.map((route) => homeHtml.indexOf('href="' + route + '"'));
if (leadPositions.some((at) => at < 0) || leadPositions.some((at, index) => index > 0 && at <= leadPositions[index - 1])) {
  fail('home: lead engagement links are missing or out of order');
}
const pathPositions = ['#billiard-factory', '#second-son', '#other-projects'].map((route) => homeHtml.indexOf('href="' + route + '"'));
if (pathPositions.some((at) => at < 0) || pathPositions.some((at, index) => index > 0 && at <= pathPositions[index - 1])) fail('home: three body-of-work anchors missing or out of order');
if (homeHtml.indexOf('id="ai"') >= homeHtml.indexOf('id="work"')) fail('home: applied AI should be part of the introduction');

const bf = await pageText('/work/billiard-factory-and-c-l-bailey');
['Game Room Furniture Partners', 'trade-only showroom', 'interior designers'].forEach((phrase) => expectIn(bf, phrase, 'Billiard Factory trade showroom'));
['27 room stories', '34 coded stations', 'physical redesign', 'Brady Stick', 'GoHighLevel', 'headless Shopify Plus', 'checkout still runs through eSTORIS', 'franchise planning with consultants'].forEach((phrase) => expectIn(bf, phrase, 'Billiard Factory engagement'));
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
expectIn(homeHtml.slice(homeBfStart, homeMusicStart), 'href="/work/game-room-furniture-partners"', 'homepage Billiard Factory work');
if (homeHtml.slice(homeHtml.indexOf('id="other-projects"')).includes('/work/game-room-furniture-partners')) fail('home: trade showroom is incorrectly listed under other projects');
for (const category of categories) {
  const otherHtml = await pageHtml('/work/other-projects');
  if (!otherHtml.includes('href="/' + category.slug + '"')) fail('other projects: missing capability index link to ' + category.slug);
}
const savor = await pageText('/work/savor');
['IDW Studio', 'website and content storytelling', 'Chef Series'].forEach((phrase) => expectIn(savor, phrase, 'Savor case'));
const lalah = await pageText('/work/lalah-hathaway');
['main image, video content and music', 'Seven destinations', 'Hover and keyboard focus'].forEach((phrase) => expectIn(lalah, phrase, 'Lalah case'));

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
const approvedVideos = new Set(['cl-bailey-factory-event.mp4', 'cl-bailey-factory-event-mobile.mp4', 'bf-storefront.mp4', 'bf-storefront-mobile.mp4', 'glasper-r-r-now.mp4', 'glasper-r-r-now-mobile.mp4', 'robert-glasper-birthday.mp4', 'robert-glasper-birthday-mobile.mp4', 'black-radio-experience-recap.mp4', 'black-radio-experience-recap-mobile.mp4', 'savor-food.mp4', 'savor-food-mobile.mp4', 'velocity-pro-brady.mp4', 'velocity-pro-brady-mobile.mp4', 'velocity-ball-launch.mp4', 'velocity-ball-launch-mobile.mp4'].map((name) => join(DIST, 'video', name)));
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
for (const route of [...projectRoutes, '/work/billiard-factory-and-c-l-bailey', '/work/robert-glasper-blue-note', '/work/other-projects']) {
  if (!sitemap.includes(route)) fail(route + ': missing from sitemap');
}

if (failures.length) {
  console.error('\n' + failures.length + ' problem(s):\n' + failures.map((failure) => '  ✗ ' + failure).join('\n'));
  process.exit(1);
}
console.log('✓ ' + projectRoutes.size + ' project routes remain reachable; lead engagements and supporting hierarchy pass; approved portfolio films only; no banned claims or WebGL');
