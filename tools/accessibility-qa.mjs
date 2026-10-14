import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const browser = await chromium.launch();
const routes = [
  "/",
  "/gioi-thieu",
  "/linh-vuc-hoat-dong",
  "/du-an",
  "/lien-he",
];
const results = [];
for (const width of [390, 1440]) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
  });
  const page = await context.newPage();
  for (const route of routes) {
    await page.goto(`http://127.0.0.1:3000${route}`);
    await page.waitForFunction(() =>
      Boolean(document.querySelector("#__nuxt")?.__vue_app__),
    );
    const report = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    results.push({
      width,
      route,
      violations: report.violations.map((v) => ({
        id: v.id,
        impact: v.impact,
        nodes: v.nodes.map((n) => n.target),
      })),
    });
  }
  await context.close();
}
console.log(JSON.stringify(results, null, 2));
await browser.close();
