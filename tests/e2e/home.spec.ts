import { expect, test } from "@playwright/test";

test("renders the Chinese home page", async ({ page }) => {
  await page.goto("/zh");
  await expect(page.getByRole("heading", { name: "Node.js 全栈工程师。" })).toBeVisible();
  await expect(page.getByRole("link", { name: /看项目/ })).toBeVisible();
});
