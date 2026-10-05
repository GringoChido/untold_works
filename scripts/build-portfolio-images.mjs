// Rebuild the homepage portfolio photographs without changing their sources.
// Usage: node scripts/build-portfolio-images.mjs
import sharp from 'sharp';
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const destination = join(root, 'public/images');
const manifestPath = join(root, 'src/data/images.json');
const images = [
  {
    source: 'assets/music/robert-glasper-blue-note-at-sea-john-abbott.jpg',
    key: 'robert-glasper-blue-note-at-sea-john-abbott.jpg',
    base: 'robert-glasper-blue-note-at-sea-john-abbott',
    maxWidth: 1600,
  },
  {
    source: 'assets/home/angelica-street-walking.png',
    key: 'angelica-street-walking.png',
    base: 'angelica-street-walking',
    maxWidth: 2102,
  },
];

await mkdir(destination, { recursive: true });
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

for (const { source, key, base, maxWidth } of images) {
  const sourcePath = join(root, source);
  const { width, height } = await sharp(sourcePath).metadata();
  if (!width || !height) throw new Error(`Missing image dimensions: ${source}`);
  const maximum = Math.min(width, maxWidth);
  const widths = [...new Set([480, 800, 1200, 1600, maximum].filter((target) => target <= maximum))].sort((a, b) => a - b);

  for (const target of widths) {
    await sharp(sourcePath)
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(join(destination, `${base}-${target}.webp`));
  }

  // Remove only obsolete sizes belonging to this script's own photographs.
  for (const existing of await readdir(destination)) {
    const match = existing.match(new RegExp(`^${base}-(\\d+)\\.webp$`));
    if (match && !widths.includes(Number(match[1]))) await unlink(join(destination, existing));
  }

  manifest[key] = { base, width, height, widths };
  console.log(`${source} → ${base}: ${widths.join(', ')}`);
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(manifestPath, JSON.stringify(sorted, null, 1) + '\n');
