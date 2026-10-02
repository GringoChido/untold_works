import raw from './projects.json';
import type { CardColor, Category } from './types';

export type { CardColor, Category, Fact, Project, Visual } from './types';

/** projects.json is the source of truth for every category, project, color, visual and fact row. */
export const categories = raw as unknown as Category[];

export const categoryBySlug = (slug: string): Category => {
  const found = categories.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown category: ${slug}`);
  return found;
};

/** Platforms → Brand and product → Websites → Campaigns → Platforms. */
export const nextCategory = (category: Category): Category =>
  categories[(categories.indexOf(category) + 1) % categories.length];

export const projectCount = (category: Category): number => category.projects.length + category.music.length;

/** The full-screen fill when a card opens. */
export const fillClasses: Record<CardColor, string> = {
  sage: 'bg-sage',
  ochre: 'bg-ochre',
  teal: 'bg-teal',
  burgundy: 'bg-burgundy',
  ink: 'bg-ink',
};

/** A card's background and its text color. Sage and ochre take ink; teal, burgundy and ink take cream. */
export const cardClasses: Record<CardColor, string> = {
  sage: 'bg-sage text-ink',
  ochre: 'bg-ochre text-ink',
  teal: 'bg-teal text-cream',
  burgundy: 'bg-burgundy text-cream',
  ink: 'bg-ink text-cream',
};

const projectPages: Record<string, string> = {
  'LandingPages.dc.html': '/work/landing-pages',
  'GlasperBlueNote.dc.html': '/work/robert-glasper-blue-note',
  'Project.dc.html': '/work/elena-pinderhughes',
};

export const projectRoute = (ref: string | null): string | null => (ref ? (projectPages[ref] ?? null) : null);

export const isExternal = (href: string): boolean => /^https?:\/\//.test(href);

/** Internal fact-row hrefs point at design files; map them to routes. */
export const factHref = (href: string): string => (isExternal(href) ? href : (projectPages[href] ?? href));

export const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const layerChipClasses: Record<CardColor, string> = {
  sage: 'bg-sage text-ink',
  ochre: 'bg-ochre text-ink',
  teal: 'bg-teal text-cream',
  burgundy: 'bg-burgundy text-cream',
  ink: 'border-rule border-cream text-cream',
};
