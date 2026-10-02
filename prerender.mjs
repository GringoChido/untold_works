import { execSync, spawn } from 'child_process';
import { accessSync, constants, existsSync, mkdirSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { routes } from './scripts/routes.mjs';

// Netlify points PUPPETEER_CACHE_DIR at its build cache. Locally that path is not writable,
// so fall back to Puppeteer's default cache. This has to happen before Puppeteer is imported.
const cacheDir = process.env.PUPPETEER_CACHE_DIR;
if (cacheDir) {
  try {
    mkdirSync(cacheDir, { recursive: true });
    accessSync(cacheDir, constants.W_OK);
  } catch {
    delete process.env.PUPPETEER_CACHE_DIR;
  }
}
const puppeteer = (await import('puppeteer')).default;
if (!existsSync(puppeteer.executablePath())) {
  execSync('npx puppeteer browsers install chrome', { stdio: 'inherit', env: process.env });
}

const DIST_DIR = join(import.meta.dirname, 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const CONCURRENCY = 3;

async function waitForServer(url, maxAttempts = 40) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${url} did not start`);
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  try {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 45_000 });
    await page.waitForSelector('#root main', { timeout: 10_000 });
    await new Promise((r) => setTimeout(r, 400));
    const html = await page.content();
    // /platforms -> dist/platforms.html: Netlify serves it at /platforms with no trailing-slash redirect.
    const outPath = route === '/' ? join(DIST_DIR, 'index.html') : join(DIST_DIR, `${route}.html`);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`  ✓ ${route}`);
    return true;
  } catch (err) {
    console.error(`  ✗ ${route}: ${err.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  console.log(`\nPrerendering ${routes.length} routes\n`);
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: import.meta.dirname,
    stdio: 'pipe',
    detached: true,
  });
  let failed = 0;
  try {
    await waitForServer(BASE_URL);
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    for (let i = 0; i < routes.length; i += CONCURRENCY) {
      const batch = routes.slice(i, i + CONCURRENCY);
      const results = await Promise.all(batch.map((route) => renderRoute(browser, route)));
      failed += results.filter((ok) => !ok).length;
    }
    await browser.close();
  } finally {
    try {
      process.kill(-server.pid, 'SIGTERM');
    } catch {}
  }
  if (failed) throw new Error(`${failed} route(s) failed to prerender`);
  console.log(`\nDone, ${routes.length} pages prerendered to dist/\n`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('Prerender failed:', err);
    process.exit(1);
  });
