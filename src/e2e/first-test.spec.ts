import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { expect, test } from "@playwright/test";

test("sign up", async ({ page }) => {
  await setupClerkTestingToken({ page });

  await page.goto("http://localhost:3000/dashboard");
  await page.screenshot({ path: "debug-dashboard.png", fullPage: true });
  const createFormHeading = page.getByText(/all forms/i);
  expect(createFormHeading).toBeVisible();
});
