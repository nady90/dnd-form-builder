import { clerk, clerkSetup } from "@clerk/testing/playwright";
import { test as setup } from "@playwright/test";
import fs from "fs";
import path from "path";

// Setup must be run serially, this is necessary if Playwright is configured to run fully parallel: https://playwright.dev/docs/test-parallel
setup.describe.configure({ mode: "serial" });

const authFile = path.join(__dirname, ".clerk", "user.json");

setup("global setup", async ({ page }) => {
  await clerkSetup();

  fs.mkdirSync(path.dirname(authFile), { recursive: true });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  page.on("console", (msg) => console.log("PAGE LOG: ", msg.text()));
  page.on("requestfailed", (err) =>
    console.log("REQUEST FAILED: ", err.url, err.failure()),
  );

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

  await page.waitForLoadState("networkidle");
  console.log("After SignIn page URL: ", page.url());

  await page.context().storageState({ path: authFile });
});
