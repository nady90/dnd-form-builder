import { clerk, clerkSetup } from "@clerk/testing/playwright";
import { test as setup } from "@playwright/test";
import path from "path";

// Setup must be run serially, this is necessary if Playwright is configured to run fully parallel: https://playwright.dev/docs/test-parallel
setup.describe.configure({ mode: "serial" });

setup("global setup", async ({}) => {
  await clerkSetup();
});

const authFile = path.join(__dirname, "../e2e/.clerk/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("localhost:3000");
  await clerk.signIn({
    page,
    signInParams: {
      strategy: "password",
      identifier:
        process.env.E2E_CLERK_USER_USERNAME ||
        process.env.E2E_CLERK_USER_EMAIL!,
      password: process.env.E2E_CLERK_USER_PASSWORD!,
    },
  });
  await page.context().storageState({ path: authFile });
});
