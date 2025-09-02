import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { expect, test } from "@playwright/test";

test("sign up", async ({ page }) => {
  await setupClerkTestingToken({ page });

  await page.goto("http://localhost:3000/dashboard");
  const createFormHeading = page.getByText(/all forms/i);
  expect(createFormHeading).toBeVisible();
});
