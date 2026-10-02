// Generates the responsive WebP set in public/images and the manifest in src/data/images.json.
// Usage: node scripts/build-images.mjs <dir with the source jpg/svg files>
import sharp from 'sharp';
import { copyFile, mkdir, readdir, writeFile } from 'fs/promises';
import { join, parse } from 'path';

const [, , srcDir] = process.argv;
if (!srcDir) {
  console.error('Usage: node scripts/build-images.mjs <source dir>');
  process.exit(1);
}
const ROOT = join(import.meta.dirname, '..');
const outDir = join(ROOT, 'public/images');
await mkdir(outDir, { recursive: true });

const files = (await readdir(srcDir)).filter((f) => /\.(jpe?g|png|svg)$/i.test(f)).sort();
const manifest = {};
for (const file of files) {
  const { name, ext } = parse(file);
  if (ext === '.svg') {
    await copyFile(join(srcDir, file), join(outDir, file));
    manifest[file] = { svg: true };
    continue;
  }
  const { width, height } = await sharp(join(srcDir, file)).metadata();
  const widths = width <= 320 ? [160, 320].filter((w) => w <= width) : [...[480, 800, 1200, 1600].filter((w) => w < width), width];
  for (const w of widths) {
    await sharp(join(srcDir, file)).resize({ width: w, withoutEnlargement: true }).webp({ quality: 82, effort: 5 }).toFile(join(outDir, `${name}-${w}.webp`));
  }
  manifest[file] = { base: name, width, height, widths };
  console.log(`${file} ${width}x${height} -> ${widths.join(', ')}`);
}
await writeFile(join(ROOT, 'src/data/images.json'), JSON.stringify(manifest, null, 1) + '\n');
console.log(`${files.length} assets written`);
