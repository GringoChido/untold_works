// Rebuild the furniture examples used on The Art of Prompting.
// Usage: node scripts/build-prompting-images.mjs
// Keep each source frame intact; responsive sizes never crop or enlarge it.
import sharp from 'sharp';
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = join(import.meta.dirname, '..');
const destination = join(root, 'public/images');
const manifestPath = join(root, 'src/data/images.json');
const keys = [
  'prompting-bar-cart-reference.jpg',
  'prompting-bar-cart-lifestyle.jpg',
  'prompting-aberdeen-kitchen.jpg',
  'prompting-astra-bar.jpg',
  'prompting-industrial-shelf.jpg',
];

await mkdir(destination, { recursive: true });
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

for (const key of keys) {
  const source = join(root, 'assets/prompting', key);
  const base = key.replace(/\.jpg$/, '');
  const { width, height } = await sharp(source).metadata();
  if (!width || !height) throw new Error(`Missing image dimensions: ${key}`);
  const maximum = Math.min(width, 1400);
  const widths = [...new Set([480, 768, 1200, maximum].filter((target) => target <= maximum))].sort((a, b) => a - b);

  for (const target of widths) {
    await sharp(source)
      .resize({ width: target, withoutEnlargement: true })
      .webp({ quality: 85, effort: 5 })
      .toFile(join(destination, `${base}-${target}.webp`));
  }

  for (const existing of await readdir(destination)) {
    const match = existing.match(new RegExp(`^${base}-(\\d+)\\.webp$`));
    if (match && !widths.includes(Number(match[1]))) await unlink(join(destination, existing));
  }

  manifest[key] = { base, width, height, widths };
  console.log(`${key}: ${widths.join(', ')}`);
}

const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile(manifestPath, JSON.stringify(sorted, null, 1) + '\n');
