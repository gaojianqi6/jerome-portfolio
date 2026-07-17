import { expect, test } from "@playwright/test";

test("defaults to English and remembers an explicit Chinese preference", async ({ page, context }) => {
  await context.clearCookies();
  await page.goto("/");
  await expect(page).toHaveURL(/\/en$/);

  await page.goto("/zh");
  await expect(page.getByRole("heading", { name: "Node.js 全栈工程师。" })).toBeVisible();
  await page.goto("/");
  await expect(page).toHaveURL(/\/zh$/);
});

test("opens the Carsome case study internally and its real site externally", async ({ page }) => {
  await page.goto("/en");
  await page.getByRole("link", { name: /Carsome/ }).first().click();
  await expect(page).toHaveURL(/\/en\/projects\/carsome$/);
  await expect(page.getByRole("heading", { level: 1, name: "Carsome Platform and Inventory Operations" })).toBeVisible();
  await page.waitForFunction(() => Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0));

  const external = page.getByRole("link", { name: /Visit Carsome/ });
  await expect(external).toHaveAttribute("href", "https://carsome.my");
  await expect(external).toHaveAttribute("target", "_blank");
});

test("preserves the project route when switching language", async ({ page }) => {
  await page.goto("/en/projects/pintec");
  await page.getByRole("link", { name: "中文" }).click();
  await expect(page).toHaveURL(/\/zh\/projects\/pintec$/);
  await expect(page.getByRole("heading", { level: 1, name: "玄极智能投顾" })).toBeVisible();
});

test("publishes About, Contact, and the real CV", async ({ page, request }) => {
  await page.goto("/en/about");
  await expect(page.getByRole("heading", { name: /Backend depth/ })).toBeVisible();
  await page.goto("/en/contact");
  const englishCv = page.getByRole("link", { name: /Download CV/ });
  await expect(englishCv).toHaveAttribute("href", "/files/cv.pdf");
  await expect(englishCv).toHaveAttribute("download", "Jerome-Gao-CV.pdf");
  const englishDownloadPromise = page.waitForEvent("download");
  await englishCv.click();
  expect((await englishDownloadPromise).suggestedFilename()).toBe("Jerome-Gao-CV.pdf");

  const response = await request.get("/files/cv.pdf");
  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("application/pdf");

  await page.goto("/zh/contact");
  const chineseCv = page.getByRole("link", { name: /下载 CV/ });
  await expect(chineseCv).toHaveAttribute("href", "/files/cv-CN.pdf");
  await expect(chineseCv).toHaveAttribute("download", "Jerome-Gao-CV-CN.pdf");
  const chineseDownloadPromise = page.waitForEvent("download");
  await chineseCv.click();
  expect((await chineseDownloadPromise).suggestedFilename()).toBe("Jerome-Gao-CV-CN.pdf");
  expect((await request.get("/files/cv-CN.pdf")).ok()).toBeTruthy();
});

test("supports keyboard focus and does not overflow horizontally", async ({ page }) => {
  await page.goto("/en/projects");
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus")).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test("returns a localized project 404", async ({ page }) => {
  const response = await page.goto("/zh/projects/not-a-project");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "这个地址还没有完成的页面。" })).toBeVisible();
});
