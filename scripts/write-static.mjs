// Writes public/sitemap.xml and public/llms.txt from the route list and projects.json. Nothing hand-typed, nothing invented.
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { routes } from './routes.mjs';

const ROOT = join(import.meta.dirname, '..');
const SITE = 'https://untold.works';
const categories = JSON.parse(await readFile(join(ROOT, 'src/data/projects.json'), 'utf-8'));
const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`.replace('xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml"', 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');

const projectPages = {
  'LandingPages.dc.html': '/work/landing-pages',
  'GlasperBlueNote.dc.html': '/work/robert-glasper-blue-note',
  'Project.dc.html': '/work/elena-pinderhughes',
};

const describe = (project) => {
  const facts = project.facts.map((f) => `${f.label}: ${f.value}${f.href && /^https?:/.test(f.href) ? ` (${f.href})` : ''}`).join('; ');
  const page = projectPages[project.projectPage];
  return `- ${project.name}. ${facts}.${page ? ` Project page: ${SITE}${page}` : ''}`;
};

const llms = `# Untold.works

> The portfolio of Joshua Semolik. I work where product, strategy and storytelling meet, and I build the system that keeps the story running.

Joshua Semolik: almost three decades in brand, product and marketing. Storytelling first, AI as the crew. Brand, product and marketing since 1999. Built with AI since 2024. Today Creative Director at Billiard Factory. Based in Houston, working in English and Spanish.

## Pages

- [Home](${SITE}/): Storytelling is the craft. AI is the crew. The four categories of work and the support system behind a story.
${categories.map((c) => `- [${c.name}](${SITE}/${c.slug}): ${c.intro}`).join('\n')}
- [Landing pages](${SITE}/work/landing-pages): Ten campaign pages for Billiard Factory, each one taken from the idea to the lead.
- [Robert Glasper and Blue Note](${SITE}/work/robert-glasper-blue-note): Eight years telling the story around one artist: his records, his residency, his clubs and his festival.
- [Elena Pinderhughes](${SITE}/work/elena-pinderhughes): The debut album site for I Hope You Feel It Too.
- [About](${SITE}/about): Bio, clients since 2024, career 1999 to 2023, earlier film work, education.

## Work
${categories
  .map(
    (c) => `
### ${c.index}. ${c.name} (${c.projects.length + c.music.length} projects)

${c.caption} ${c.intro}

${c.projects.map(describe).join('\n')}${c.music.length ? `\n\nMusic, Robert Glasper and Blue Note:\n\n${c.music.map(describe).join('\n')}` : ''}`,
  )
  .join('\n')}

## Credits

Content Factory was designed and directed by Joshua Semolik and built by Brady Stick. The Labor Day page was built by Brady Stick on Joshua's template, with SEO copy by Zorica. Landing-page ports by Brady Stick. Savor work was hired through IDW Studio. This site was built with Claude.
`;

await writeFile(join(ROOT, 'public/sitemap.xml'), sitemap);
await writeFile(join(ROOT, 'public/llms.txt'), llms);
console.log(`Wrote public/sitemap.xml (${routes.length} urls) and public/llms.txt`);
