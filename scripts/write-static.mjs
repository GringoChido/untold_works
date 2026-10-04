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

const describe = (project) => {
  const facts = project.facts.map((f) => `${f.label}: ${f.value}${f.href && /^https?:/.test(f.href) ? ` (${f.href})` : ''}`).join('; ');
  const page = project.projectPage;
  return `- ${project.name}. ${facts}.${page ? ` Project page: ${SITE}${page}` : ''}`;
};

const llms = `# Untold.works

> Untold.works puts AI to work across brands, culture and commerce through creative direction, hands-on building and team adoption.

Joshua Semolik is an AI Transformation Leader working across brand, retail, commerce and creative systems. He builds with AI every day, from websites and tools to image and video production, and teaches teams how to bring it into their work. The portfolio includes current AI builds and the earlier creative work that informs his practice. Individual cases describe roles and collaborators.

## Pages

- [Home](${SITE}/): Introduction to the Untold.works studio, its creative process and applied AI workflow, and three bodies of work: Billiard Factory, Second Son Productions, and Other Projects.
${categories.map((c) => `- [${c.name}](${SITE}/${c.slug}): ${c.intro}`).join('\n')}
- [Landing pages](${SITE}/work/landing-pages): Joshua learned GoHighLevel and connected Billiard Factory's sales team to the CRM before building ten campaign pages designed to connect creative, capture and sales follow-up.
- [Billiard Factory + C.L. Bailey](${SITE}/work/billiard-factory-and-c-l-bailey): AI-assisted retail and commerce work across the new Billiard Factory front end, 27 live digital room stories, campaigns, CRM, creative systems and C.L. Bailey. The existing checkout still uses eSTORIS; Shopify and XoroERP migration and franchise planning continue. Brady Stick and the BF web team implemented the digital Gallery.
- [Savor](${SITE}/work/savor): Website and content storytelling through IDW Studio; IDW led the wider Chef Series production and post work.
- [Noxguard](${SITE}/work/noxguard): Agency brand and marketing collaboration within the Ingenia team; Ingenia credits its agency with strategy, design and build.
- [Second Son Productions and related music work](${SITE}/work/robert-glasper-blue-note): Work with an artist management company and related teams across artist sites, Robert Glasper releases and films, Robtober content, separate Blue Note venue and festival roles, and independent Elena Pinderhughes and Qmillion collaborations.
- [Game Room Furniture Partners](${SITE}/work/game-room-furniture-partners): Billiard Factory’s trade-only showroom at Dallas Market Center, focused on interior designers. Part of the Billiard Factory engagement.
- [Other Projects](${SITE}/work/other-projects): Savor, Noxguard and further independent or agency collaborations, with live and demo status distinguished.
- [Elena Pinderhughes](${SITE}/work/elena-pinderhughes): The debut album site for I Hope You Feel It Too.
- [Lalah Hathaway](${SITE}/work/lalah-hathaway): An interactive website for Made in Chicago, built with AI from a supplied main image, video content and music. Seven room objects open its sections.
- [About](${SITE}/about): AI transformation leadership, daily building, team adoption and teaching, creative production with Higgsfield, MIT Sloan executive education, career and project credits.

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

The Spring digital Gallery was implemented by Brady Stick and the Billiard Factory web team from Joshua's showroom visual and station direction. Content Factory was designed and directed by Joshua Semolik and built by Brady Stick. The Labor Day page was built by Brady Stick on Joshua's template, with SEO copy by Zorica. Landing-page ports by Brady Stick. Savor work was hired through IDW Studio. This site was built with Claude.
`;

await writeFile(join(ROOT, 'public/sitemap.xml'), sitemap);
await writeFile(join(ROOT, 'public/llms.txt'), llms);
console.log(`Wrote public/sitemap.xml (${routes.length} urls) and public/llms.txt`);
