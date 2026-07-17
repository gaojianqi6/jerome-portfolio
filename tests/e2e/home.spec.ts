import { expect, test } from "@playwright/test";

test("renders the Chinese home page", async ({ page }) => {
  await page.goto("/zh");
  await expect(page.getByRole("heading", { name: "让全栈能力被看见。" })).toBeVisible();
  await expect(page.getByRole("link", { name: /查看项目/ })).toBeVisible();
});
