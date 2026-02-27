import { execSync, spawn } from 'child_process';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import puppeteer from 'puppeteer';

const DIST_DIR = join(import.meta.dirname, 'dist');
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const CONCURRENCY = 4;

const routes = [
  '/',
  '/about',
  '/contact',
  '/portfolio',
  '/blog',
  '/workshops',
  '/solutions/professional-services',
  '/solutions/small-business',
  '/solutions/enterprise',
  '/analog',
  '/slides',
  // Portfolio projects
  '/portfolio/spotify-whatsapp-publishing',
  '/portfolio/black-radio-experience',
  '/portfolio/omi-lead-intake-qualification',
  '/portfolio/billiard-factory-retail-architecture',
  '/portfolio/noxguard-brand-rebrand',
  // Blog posts
  '/blog/ai-tools-every-small-business-should-know-2026',
  '/blog/how-to-use-chatgpt-for-customer-service',
  '/blog/ai-content-strategy-what-to-automate-what-to-keep-human',
  '/blog/your-website-is-not-a-brochure-its-a-business-system',
  '/blog/headless-cms-explained-for-business-owners',
  '/blog/bilingual-websites-why-translation-plugins-fail',
  '/blog/run-your-business-from-your-phone-the-real-guide',
  '/blog/why-your-website-must-be-fast-on-3g',
  '/blog/san-miguel-de-allende-digital-presence-guide-2026',
  '/blog/how-sma-restaurants-can-capture-tourist-traffic-online',
  '/blog/case-study-boutique-hotel-booking-system',
  '/blog/case-study-law-firm-client-intake-automation',
  '/blog/case-study-ecommerce-brand-migration-shopify-to-custom',
  '/blog/the-professional-services-website-playbook',
  '/blog/retail-and-hospitality-digital-survival-guide',
];

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error(`Server at ${url} did not start within ${maxAttempts * 500}ms`);
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;

  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30_000 });
    await page.waitForSelector('#root > *', { timeout: 10_000 });
    // Small delay for any post-mount effects (meta tags, dynamic content)
    await new Promise((r) => setTimeout(r, 500));

    const html = await page.content();

    // Determine output path
    const outPath =
      route === '/'
        ? join(DIST_DIR, 'index.html')
        : join(DIST_DIR, route, 'index.html');

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');

    console.log(`  ✓ ${route}`);
  } catch (err) {
    console.error(`  ✗ ${route} — ${err.message}`);
  } finally {
    await page.close();
  }
}

async function processInBatches(browser, items, batchSize) {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(batch.map((route) => renderRoute(browser, route)));
  }
}

async function main() {
  console.log(`\nPrerendering ${routes.length} routes...\n`);

  // Start vite preview server
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT)], {
    cwd: import.meta.dirname,
    stdio: 'pipe',
  });

  try {
    await waitForServer(BASE_URL);
    console.log(`Preview server running at ${BASE_URL}\n`);

    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    await processInBatches(browser, routes, CONCURRENCY);

    await browser.close();
    console.log(`\nDone — ${routes.length} pages prerendered to dist/\n`);
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
