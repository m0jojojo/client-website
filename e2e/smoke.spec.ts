import { expect, test } from "@playwright/test";

test("home page renders brand name and WhatsApp link", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/The Block Bagru/);
  await expect(
    page.getByRole("heading", { level: 1, name: "The Block Bagru" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
    "href",
    /^https:\/\/wa\.me\/918813835525/,
  );
});
