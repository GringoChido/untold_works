// Writes public/sitemap.xml and public/llms.txt from the route list and projects.json. Nothing hand-typed, nothing invented.
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { routes } from './routes.mjs';

const ROOT = join(import.meta.dirname, '..');
const SITE = 'https://untold.works';
const categories = JSON.parse(await readFile(join(ROOT, 'src/data/projects.json'), 'utf-8'));
const metadata = JSON.parse(await readFile(join(ROOT, 'src/data/seo.json'), 'utf-8'));
const escapeXml = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
if (routes.some((route) => !metadata[route]) || Object.keys(metadata).some((route) => !routes.includes(route))) {
  throw new Error('Every public route must have reviewed page metadata, and metadata must not contain retired routes.');
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE}${route === '/' ? '/' : route}</loc>
    <image:image><image:loc>${escapeXml(SITE + metadata[route].image.src)}</image:loc></image:image>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
// Omit lastmod until actual per-page editorial dates are maintained. A build
// date does not mean that every page's content changed.

const videos = [
  { src: 'cl-bailey-factory-event', poster: 'cl-bailey-waterfront-poster.jpg', title: 'C.L. Bailey Factory Event AI campaign film', description: 'An AI-created campaign film moving through city streets, a newspaper, a train journey and the game room. The advertising scenes are creative visualizations.' },
  { src: 'velocity-ball-launch', poster: 'velocity-ball-launch-poster.webp', title: 'Velocity ball-set reveal', description: 'An imagined product launch with oversized billiard balls rolling from a branded shipping container, exploring scale, anticipation and movement.' },
];
const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  <url><loc>${SITE}/art-of-prompting</loc>
${videos.map((video) => `    <video:video>
      <video:thumbnail_loc>${SITE}/images/${video.poster}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${SITE}/video/${video.src}.mp4</video:content_loc>
    </video:video>`).join('\n')}
  </url>
</urlset>
`;

const describe = (project) => {
  const facts = project.facts.map((f) => `${f.label}: ${f.value}${f.href && /^https?:/.test(f.href) ? ` (${f.href})` : ''}`).join('; ');
  const page = project.projectPage;
  return `- ${project.name}. ${facts}.${page ? ` Project page: ${SITE}${page}` : ''}`;
};

const llms = `# Untold.works

> I’m Joshua Semolik. Untold.works is my independent creative and AI consulting practice.

I help teams tell a brand or product story, build the experience around it and get it out into the world. I also build the tools and sales materials people need to keep the work moving after launch.

Email: joshua@untold.works. Phone: +1 917-665-1221. LinkedIn: https://www.linkedin.com/in/semolik/.

This file is a supplementary content index. The linked pages are the primary source; their visible content, roles and project status take precedence. It is not required for search or AI inclusion.

## Pages

- [Home](${SITE}/): Untold.works offers creative direction and applied AI consulting, from brand and launch work to business workflows.
${categories.map((c) => `- [${c.name}](${SITE}/${c.slug}): ${c.intro}`).join('\n')}
- [Landing pages](${SITE}/work/landing-pages): I connected the sales team to GoHighLevel, then developed ten campaign pages with the team.
- [Billiard Factory + C.L. Bailey](${SITE}/work/billiard-factory-and-c-l-bailey): AI-assisted retail and commerce work across the new Billiard Factory front end, 27 live digital room stories, campaigns, CRM, creative systems and C.L. Bailey. Led the storefront rebuild, Shopify transition and digital Gallery with the team. I lead paid media and search, create the ads and manage the Vibe streaming TV campaign. Shopify checkout launched October 16, 2026. The XoroERP migration continues.
- [Savor](${SITE}/work/savor): Website and content storytelling through IDW Studio; IDW led the wider Chef Series production and post work.
- [Noxguard](${SITE}/work/noxguard): Led the rebrand, website and photo and video campaign, and helped the team organize its marketing work.
- [Second Son Productions and related music work](${SITE}/work/robert-glasper-blue-note): Work with an artist management company and related teams across artist sites, Robert Glasper releases and films, Robtober content, separate Blue Note venue and festival roles, and independent Elena Pinderhughes and Qmillion collaborations.
- [Game Room Furniture Partners](${SITE}/work/game-room-furniture-partners): Billiard Factory’s trade-only showroom at Dallas Market Center, focused on interior designers. Part of the Billiard Factory engagement.
- [Other Projects](${SITE}/work/other-projects): Savor, Noxguard and further independent or agency collaborations, with live and demo status distinguished.
- [Elena Pinderhughes](${SITE}/work/elena-pinderhughes): The debut album site for I Hope You Feel It Too.
- [Lalah Hathaway](${SITE}/work/lalah-hathaway): Made in Chicago connects an immersive artist website with newsletter migration and custom merchandise operations, built with AI around supplied artist media. I developed the digital experience, imported 3,233 historically subscribed contacts and built the merchandise backend and staff tools. The artist site is live; public vinyl and T-shirt checkout awaits launch.
- [The art of prompting](${SITE}/art-of-prompting): An evolving practice of turning ideas and product references into precise prompts, still images, lifestyle scenes, motion, edits and campaign assets. The AI-created C.L. Bailey Factory Event film leads, with an interactive illustrative prompt and supporting work.
- [About](${SITE}/about): Creative leadership, brand storytelling, sales enablement, career and project credits, MIT Sloan executive education, and a working toolkit organized around AI building, creative production, commerce and measurement. Hands-on tools include Claude Code, Codex, Claude Cowork, ChatGPT, Higgsfield and Adobe Premiere; I also coordinate commerce and reporting platforms with client teams.
- [Work Together](${SITE}/work-together): Tell me about your project, timing and budget at joshua@untold.works.
- [For Your Business](${SITE}/for-your-business): Creative direction, digital experiences and practical AI for businesses, from an initial opportunity through launch and ongoing improvements.

## Work
${categories
  .map(
    (c) => `
### ${c.index}. ${c.name} (${c.projects.length + c.music.length} projects)

${c.caption} ${c.intro}

${c.music.length ? `Music and live work:\n\n${c.music.map(describe).join('\n')}\n\nMore campaigns:\n\n` : ''}${c.projects.map(describe).join('\n')}`,
  )
  .join('\n')}

## Credits

I directed the Spring showroom visuals and station plan. The team built the digital Gallery. I designed Content Factory and directed its implementation with the team. I supplied the Labor Day creative direction and page template. The team built the page, wrote the search copy and adapted the other landing pages. Savor work was hired through IDW Studio. This site was built with Claude.
`;

await writeFile(join(ROOT, 'public/sitemap.xml'), sitemap);
await writeFile(join(ROOT, 'public/video-sitemap.xml'), videoSitemap);
await writeFile(join(ROOT, 'public/llms.txt'), llms);
// Generate exact URL aliases from the same route inventory used to build pages.
const legacyRedirects = await readFile(join(ROOT, 'scripts/legacy-redirects.txt'), 'utf-8');
const aliases = routes.flatMap((route) => route === '/' ? ['/index.html / 301!', '/index / 301!'] : [`${route}.html ${route} 301!`, `${route}/ ${route} 301`]);
const copies = ['index', 'brand-and-product', 'platforms', 'websites', 'campaigns'].flatMap((name) => [
  `/${name}%202 ${name === 'index' ? '/' : '/' + name} 301!`,
  `/${name}%202.html ${name === 'index' ? '/' : '/' + name} 301!`,
]);
// Host consolidation must precede path rules: Netlify reads _redirects before
// netlify.toml, and an earlier matching path can shadow a later domain rule.
const hostRedirect = '# Keep the public Netlify alias on the primary domain.\nhttps://untoldworks1.netlify.app/* https://untold.works/:splat 301!\n\n';
await writeFile(join(ROOT, 'public/_redirects'), hostRedirect + legacyRedirects + '\n# Generated canonical aliases. Edit scripts/write-static.mjs.\n' + [...aliases, ...copies].join('\n') + '\n');
console.log(`Wrote sitemap (${routes.length} URLs), video sitemap, llms.txt and canonical redirects`);
