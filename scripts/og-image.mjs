// Renders the social preview in the same quiet editorial system as the site.
import puppeteer from 'puppeteer';
import { join } from 'path';

const out = join(import.meta.dirname, '..', 'public/images/og.png');
const html = [
  '<!doctype html><html><head><meta charset="utf-8">',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&display=swap">',
  '<style>',
  'body{margin:0;width:1200px;height:630px;background:#20231f;color:#f2efe9;font-family:Archivo,Arial,sans-serif;overflow:hidden}',
  '.top{position:absolute;left:64px;right:64px;top:39px;display:flex;justify-content:space-between;align-items:baseline}',
  '.brand{font-size:31px;font-weight:600;letter-spacing:-.055em}',
  '.meta{font-size:14px;font-weight:500}',
  '.rule{position:absolute;left:64px;right:64px;top:90px;border-top:1px solid #b9c5b5}',
  '.label{position:absolute;left:64px;top:153px;font-size:14px;font-weight:600;letter-spacing:.14em;text-transform:uppercase}',
  '.label b{color:#b85a3b;margin:0 13px}',
  '.title{position:absolute;left:64px;top:211px;font-size:88px;font-weight:600;line-height:1.02;letter-spacing:-.065em}',
  '.title em{font-style:normal;font-size:88px;font-weight:400;letter-spacing:-.065em}',
  '.bottom{position:absolute;left:0;right:0;bottom:0;height:112px;background:#2d332b;border-top:1px solid #b9c5b5}',
  '.bottom-inner{margin:0 64px;height:100%;display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:500}',
  '.categories{font-size:13px;letter-spacing:.04em}',
  '</style></head><body>',
  '<div class="top"><span class="brand">untold.works</span><span class="meta">AI transformation & creative direction</span></div>',
  '<div class="rule"></div>',
  '<div class="label">Untold.works <b>/</b> Brand · Culture · Commerce</div>',
  '<div class="title">AI transformation.<br><em>Creative direction.</em></div>',
  '<div class="bottom"><div class="bottom-inner"><span>Billiard Factory &nbsp;·&nbsp; Second Son Productions &nbsp;·&nbsp; Other Projects</span><span class="categories">Applied AI</span></div></div>',
  '</body></html>',
].join('');

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('wrote ' + out);
