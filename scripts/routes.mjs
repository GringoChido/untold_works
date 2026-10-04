/** Every route on the site. Cards in projects.json supply their own detail routes. */
import { readFileSync } from 'fs';
import { join } from 'path';

const categories = JSON.parse(readFileSync(join(import.meta.dirname, '..', 'src/data/projects.json'), 'utf-8'));
const projectRoutes = categories.flatMap((category) =>
  [...category.music, ...category.projects].map((project) => project.projectPage),
);
if (projectRoutes.some((route) => typeof route !== 'string' || !route.startsWith('/work/')) ||
    new Set(projectRoutes).size !== projectRoutes.length) {
  throw new Error('Each project card needs a unique /work/ route.');
}

export const routes = [
  '/',
  ...categories.map((category) => '/' + category.slug),
  ...projectRoutes,
  '/work/billiard-factory-and-c-l-bailey',
  // This editorial overview groups several music projects; each card also has its own page.
  '/work/robert-glasper-blue-note',
  '/work/other-projects',
  '/about',
];
