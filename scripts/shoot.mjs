import { chromium } from "playwright";

const URL = "http://localhost:3100";
const browser = await chromium.launch();

// Reliably trigger every scroll-reveal: kill smooth-scroll, step through the
// page with real awaits so the IntersectionObserver fires at each stop.
async function revealAll(page) {
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto";
  });
  const height = await page.evaluate(() => document.body.scrollHeight);
  const vh = await page.evaluate(() => window.innerHeight);
  for (let y = 0; y < height; y += Math.floor(vh * 0.6)) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(160);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

async function shoot(width, height, name) {
  const page = await browser.newPage({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await revealAll(page);
  await page.screenshot({ path: `design/_render_${name}_full.png`, fullPage: true });
  await page.close();
}

await shoot(1440, 1000, "desktop");
await shoot(820, 1180, "tablet");
await shoot(390, 844, "mobile");

await browser.close();
console.log("screenshots done");
