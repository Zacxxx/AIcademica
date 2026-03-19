import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-core";

const baseUrl = process.env.DECK_BASE_URL ?? "http://127.0.0.1:3000";
const output = process.argv[2] ?? "aicademica-deck.pdf";
const tmp = join(process.cwd(), ".deck-export");
const captures = [
  { file: "slide-01.png", target: null },
  { file: "slide-02.png", target: "#roles" },
  { file: "slide-03.png", target: "#loop" },
  { file: "slide-04.png", target: "#assessment" },
  { file: "slide-05.png", target: "#stack" },
  { file: "slide-06.png", target: "#roadmap" },
];
const screenshots = [];

try {
  mkdirSync(tmp, { recursive: true });

  const browser = await chromium.launch({
    executablePath: "/usr/bin/chromium-browser",
    args: ["--no-sandbox"],
    headless: true,
  });

  try {
    const page = await browser.newPage({
      viewport: { width: 2400, height: 1350 },
      deviceScaleFactor: 1,
    });

    for (const capture of captures) {
      const file = join(tmp, capture.file);
      await page.goto(`${baseUrl}/deck`, { waitUntil: "networkidle" });

      if (capture.target) {
        await page.locator(capture.target).scrollIntoViewIfNeeded();
      } else {
        await page.evaluate(() => window.scrollTo(0, 0));
      }

      await page.waitForTimeout(250);
      await page.screenshot({ path: file, fullPage: false });
      screenshots.push(file);
    }
  } finally {
    await browser.close();
  }

  execFileSync("convert", ["-density", "144", ...screenshots, output], {
    stdio: "inherit",
  });
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
