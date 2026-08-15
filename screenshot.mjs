import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const url = process.argv[2] || 'http://localhost:4321';
const outDir = 'temporary screenshots';
await mkdir(outDir, { recursive: true });

const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const targets = [
  { name: 'desktop', viewport: { width: 1440, height: 900 } },
  { name: 'mobile', viewport: { width: 390, height: 844 } },
];

const browser = await chromium.launch();
for (const { name, viewport } of targets) {
  const page = await browser.newPage({ viewport, reducedMotion: 'reduce' });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const path = `${outDir}/${stamp}-${name}.png`;
  await page.screenshot({ path, fullPage: true });
  console.log(`Saved ${path}`);
  await page.close();
}
await browser.close();
