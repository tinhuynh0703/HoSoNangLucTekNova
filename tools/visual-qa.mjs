import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const browser = await chromium.launch();
await mkdir("qa", { recursive: true });
const routes = [
  "/",
  "/gioi-thieu",
  "/linh-vuc-hoat-dong",
  "/du-an",
  "/lien-he",
];
const widths = [360, 390, 768, 1024, 1440, 1920];
const issues = [];
for (const width of widths) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  for (const route of routes) {
    await page.goto(`http://127.0.0.1:3000${route}`);
    await page.waitForFunction(() =>
      Boolean(document.querySelector("#__nuxt")?.__vue_app__),
    );
    const result = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      title: document.title,
    }));
    if (result.scrollWidth > result.viewportWidth + 1)
      issues.push({ width, route, ...result });
    if (
      (width === 390 || width === 1440) &&
      ["/", "/gioi-thieu", "/linh-vuc-hoat-dong", "/du-an"].includes(route)
    ) {
      const label = route === "/" ? "home" : route.slice(1);
      await page.screenshot({
        path: `qa/${label}-${width}.png`,
        fullPage: true,
      });
    }
  }
  await page.close();
}
for (const route of routes) {
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  await page.goto(`http://127.0.0.1:3000${route}`);
  await page.waitForFunction(() =>
    Boolean(document.querySelector("#__nuxt")?.__vue_app__),
  );
  await page.evaluate(() => {
    document.documentElement.style.fontSize = "200%";
  });
  const result = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    viewportWidth: window.innerWidth,
  }));
  if (result.scrollWidth > result.viewportWidth + 1)
    issues.push({ width: 390, zoom: "root font 200%", route, ...result });
  await page.close();
}
console.log(
  JSON.stringify(
    {
      checked: widths.length * routes.length + routes.length,
      overflow: issues,
    },
    null,
    2,
  ),
);
await browser.close();
