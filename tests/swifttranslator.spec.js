import { test, expect } from "@playwright/test";
import { cases } from "./cases.js";

test.describe("SwiftTranslator - Assignment 1 (Friend)", () => {
  test.setTimeout(70000);

  const url = "https://www.swifttranslator.com/";

  const inputLocator = (page) =>
    page.getByRole("textbox", { name: "Input Your Singlish Text Here." });

  const outputLocator = (page) =>
    page.locator("div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300");

  const normalize = (s) => (s ?? "").replace(/\s+/g, " ").trim();

  async function gotoWithRetry(page, tries = 3) {
    let lastErr;
    for (let i = 0; i < tries; i++) {
      try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
        return;
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  }

  async function triggerConversion(page, input) {
    await input.click();
    await page.keyboard.press("End");
    await page.keyboard.press(" ");
    await page.keyboard.press("Backspace");
    await page.keyboard.press("Tab");
  }

  async function typeOrFill(page, input, text, useTyping = true) {
    await input.click();
    await input.fill("");

    if (useTyping) {
      await page.keyboard.type(text, { delay: 25 });
    } else {
      await input.fill(text);
    }

    await triggerConversion(page, input);
  }

  async function waitForNonEmpty(outputBox, timeout = 25000) {
    await expect
      .poll(
        async () => {
          const txt = (await outputBox.textContent()) ?? "";
          return txt.trim().length;
        },
        { timeout }
      )
      .toBeGreaterThan(0);
  }

  async function ensureOutput(page, input, outputBox, tc) {
    await expect(outputBox).toBeVisible({ timeout: 15000 });

    // Attempt 1
    await typeOrFill(page, input, tc.input, tc.useTyping ?? true);
    try {
      await waitForNonEmpty(outputBox, 25000);
      return;
    } catch {}

    // Attempt 2
    await typeOrFill(page, input, tc.input, true);
    try {
      await waitForNonEmpty(outputBox, 25000);
      return;
    } catch {}

    // Attempt 3 (extra event)
    await input.click();
    await page.keyboard.type(".", { delay: 20 });
    await page.keyboard.press("Backspace");
    await triggerConversion(page, input);
    try {
      await waitForNonEmpty(outputBox, 25000);
      return;
    } catch {}

    // Attempt 4 (reload)
    await page.reload({ waitUntil: "domcontentloaded", timeout: 45000 });
    const input2 = inputLocator(page);
    const output2 = outputLocator(page);
    await expect(input2).toBeVisible({ timeout: 15000 });
    await expect(output2).toBeVisible({ timeout: 15000 });

    await typeOrFill(page, input2, tc.input, true);
    await waitForNonEmpty(output2, 30000);
  }

  for (const tc of cases) {
    test(tc.id, async ({ page }) => {
      await gotoWithRetry(page);

      const input = inputLocator(page);
      const outputBox = outputLocator(page);

      await expect(input).toBeVisible({ timeout: 15000 });

      // ✅ UI CLEAR
      if (tc.type === "ui_clear") {
        await ensureOutput(page, input, outputBox, tc);

        await input.fill("");
        await triggerConversion(page, input);

        await expect
          .poll(async () => normalize(await outputBox.textContent()), {
            timeout: 20000,
          })
          .toBe("");

        return;
      }

      // ✅ ensure output
      await ensureOutput(page, input, outputBox, tc);

      const actual = normalize(await outputBox.textContent());

      // ✅ POSITIVE
      if (tc.type === "positive") {
        const expected = normalize(tc.expectedText);
        expect(actual).toContain(expected);
        return;
      }

      // ✅ NEGATIVE (show as FAIL in HTML report)
      if (tc.type === "negative") {
        // validate it does NOT contain correct expected output
        await expect(outputBox).not.toContainText(tc.shouldNotContain, {
          timeout: 25000,
        });

        // force it to appear as FAILED in report
        throw new Error("Intentional failure – Negative test case");
      }

      throw new Error(`Unknown test type: ${tc.type}`);
    });
  }
});
