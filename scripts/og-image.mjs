// Renders public/images/og.png (1200x630) with the site's own type and colors.
import puppeteer from 'puppeteer';
import { join } from 'path';

const out = join(import.meta.dirname, '..', 'public/images/og.png');
const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&display=swap">
<style>
body{margin:0;width:1200px;height:630px;background:#F5F3EF;color:#141210;font-family:Archivo,sans-serif;position:relative;overflow:hidden}
.rail{position:absolute;top:0;right:0;bottom:0;width:56px;background:#FF4D17}
.wrap{position:absolute;left:72px;top:0;bottom:72px;right:128px;display:flex;flex-direction:column;justify-content:center;gap:30px}
.lbl{font-stretch:62%;font-weight:600;font-size:24px;letter-spacing:.12em;text-transform:uppercase}
.mast{font-weight:900;font-stretch:125%;font-size:112px;line-height:.86;letter-spacing:-.035em}
.voice{font-style:italic;font-weight:300;font-size:42px;line-height:1.15}
.bar{position:absolute;left:0;right:56px;bottom:0;background:#141210;color:#FF4D17;display:flex;justify-content:space-between;padding:20px 72px;font-stretch:62%;font-weight:600;font-size:22px;letter-spacing:.12em;text-transform:uppercase}
</style></head><body>
<div class="wrap"><span class="lbl">The portfolio of Joshua Semolik</span><div class="mast">Untold.works</div><div class="voice">Storytelling is the craft. AI is the crew.</div></div>
<div class="bar"><span>Untold.works</span><span>I call the shot before I take it.</span></div>
<div class="rail"></div></body></html>`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log(`wrote ${out}`);
