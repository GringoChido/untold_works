import { execSync, spawn } from 'child_process';
import { accessSync, constants, existsSync, mkdirSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { tmpdir } from 'os';
import { routes } from './scripts/routes.mjs';

// Netlify's build cache may be unavailable when the CLI runs locally. Use a
// writable temporary cache rather than Puppeteer's default home cache.
const cacheDir = process.env.PUPPETEER_CACHE_DIR || join(tmpdir(), 'untold-puppeteer');
try {
  mkdirSync(cacheDir, { recursive: true });
  accessSync(cacheDir, constants.W_OK);
  process.env.PUPPETEER_CACHE_DIR = cacheDir;
} catch {
  const fallbackCache = join(tmpdir(), 'untold-puppeteer');
  mkdirSync(fallbackCache, { recursive: true });
  process.env.PUPPETEER_CACHE_DIR = fallbackCache;
}
const puppeteer = (await import('puppeteer')).default;
if (!existsSync(await puppeteer.executablePath())) {
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
  // Keep media in its initial poster state in the HTML that React hydrates.
  await page.evaluateOnNewDocument(() => { window.__UNTOLD_PRERENDER__ = true; });
  try {
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle0', timeout: 45_000 });
    await page.waitForSelector('#root main', { timeout: 10_000 });
    await new Promise((r) => setTimeout(r, 400));
    // page.content() serializes adjacent React text nodes as one text run. Hydration
    // needs the same comment separators that renderToString would emit between them.
    await page.evaluate(() => {
      const root = document.getElementById('root');
      if (!root) return;
      for (const parent of [root, ...root.querySelectorAll('*')]) {
        for (let node = parent.firstChild; node;) {
          const next = node.nextSibling;
          if (node.nodeType === Node.TEXT_NODE && next?.nodeType === Node.TEXT_NODE) {
            parent.insertBefore(document.createComment(' '), next);
          }
          node = next;
        }
      }
    });
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
