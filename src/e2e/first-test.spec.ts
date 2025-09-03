import { setupClerkTestingToken } from "@clerk/testing/playwright";
import { expect, test } from "@playwright/test";

test("sign up", async ({ page }) => {
  await setupClerkTestingToken({ page });

  await page.goto("http://localhost:3000/dashboard");
  const createFormHeading = page.getByText(/all forms/i);
  await expect(createFormHeading).toBeVisible();
});

test.describe("Dashboard Tests", () => {
  test("Create a new form", async ({ page }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();
  });

  test("Create a new form and go to its builder page", async ({ page }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const fieldsTab = page.getByText(/fields/i).first();
    await expect(fieldsTab).toBeVisible();
  });
});

test.describe("Dnd basic functionality", () => {
  test("Drag a simple textfield on the canvas", async ({ page }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const fieldsTab = page.getByText(/fields/i).first();
    await expect(fieldsTab).toBeVisible();

    const dragInstruction = page.getByText(
      /Drag elements from the sidebar to add/i,
    );
    await expect(dragInstruction).toBeVisible();

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    await textField.hover();
    await page.mouse.down();

    // You need to move the mouse to a random location to "cancel" the mouse down
    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    await expect(dragInstruction).not.toBeVisible();

    const textFieldLabel = page.getByText(/label here/i);
    await expect(textFieldLabel).toBeVisible();
  });

  test("When hovering on the element, an overlay should appear for instructions", async ({
    page,
  }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const fieldsTab = page.getByText(/fields/i).first();
    await expect(fieldsTab).toBeVisible();

    const dragInstruction = page.getByText(
      /Drag elements from the sidebar to add/i,
    );
    await expect(dragInstruction).toBeVisible();

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    await textField.hover();
    await page.mouse.down();

    // You need to move the mouse to a random location to "cancel" the mouse down
    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    await expect(dragInstruction).not.toBeVisible();

    const textFieldLabel = page.getByText(/label here/i);
    await expect(textFieldLabel).toBeVisible();

    await textFieldLabel.hover();
    await page.pause();
    await expect(
      page.getByText(/Click for properties or drag to move/i),
    ).toBeVisible();
  });

  test("When clicking on the element, the sidebar should show the editable form", async ({
    page,
  }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const fieldsTab = page.getByText(/fields/i).first();
    await expect(fieldsTab).toBeVisible();

    const dragInstruction = page.getByText(
      /Drag elements from the sidebar to add/i,
    );
    await expect(dragInstruction).toBeVisible();

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    await textField.hover();
    await page.mouse.down();

    // You need to move the mouse to a random location to "cancel" the mouse down
    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    await expect(dragInstruction).not.toBeVisible();

    const textFieldLabel = page.getByText(/label here/i);
    await expect(textFieldLabel).toBeVisible();

    await textFieldLabel.click();

    await expect(page.getByText(/required/i)).toBeVisible();
  });

  test("When clicking on the X in the sidebar, the editable form should disappear", async ({
    page,
  }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const fieldsTab = page.getByText(/fields/i).first();
    await expect(fieldsTab).toBeVisible();

    const dragInstruction = page.getByText(
      /Drag elements from the sidebar to add/i,
    );
    await expect(dragInstruction).toBeVisible();

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    await textField.hover();
    await page.mouse.down();

    // You need to move the mouse to a random location to "cancel" the mouse down
    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    await expect(dragInstruction).not.toBeVisible();

    const textFieldLabel = page.getByText(/label here/i);
    await expect(textFieldLabel).toBeVisible();

    await textFieldLabel.click();

    await expect(page.getByText(/required/i)).toBeVisible();

    const closeBtn = page.getByTestId("sidebar-close-svg");
    await expect(closeBtn).toBeVisible();
    await closeBtn.click();

    await expect(
      page.getByText(/Click on an element to select/i),
    ).toBeVisible();

    await expect(page.getByText(/required/i)).not.toBeVisible();
  });
});

test.describe("dnd complex cases", () => {
  test("Drag two textfields on the canvas", async ({ page }) => {
    await setupClerkTestingToken({ page });

    await page.goto("http://localhost:3000/dashboard");

    const createFormBtn = await page.getByText(/start from scratch/i);
    await expect(createFormBtn).toBeVisible();
    await createFormBtn.click();

    const nameInput = await page.getByLabel("name");
    await expect(nameInput).toBeVisible();

    const descriptionInput = await page.getByLabel("description");
    await expect(descriptionInput).toBeVisible();

    const newFormName = "new form title" + Date.now();
    await nameInput.fill(newFormName);

    const newFormDescription = "description" + Date.now();
    await descriptionInput.fill(newFormDescription);

    const saveBtn = await page.getByRole("button", { name: "save" });
    await expect(saveBtn).toBeVisible();

    await saveBtn.click();

    await page.waitForLoadState("networkidle");

    await page.reload();

    await expect(page.getByText(newFormName)).toBeVisible();
    await expect(page.getByText(newFormDescription)).toBeVisible();

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const dragInstruction = page.getByText(
      /Drag elements from the sidebar to add/i,
    );
    await expect(dragInstruction).toBeVisible();

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    await textField.hover();
    await page.mouse.down();

    // You need to move the mouse to a random location to "cancel" the mouse down
    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    await expect(dragInstruction).not.toBeVisible();

    await textField.hover();
    await page.mouse.down();

    // You need to move the mouse to a random location to "cancel" the mouse down
    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i).all();
    await expect(textFieldLabel.length).toBe(2);
  });

  test("Edit a textfield", () => {});

  test("Edit a textfield then add another field on the builder", () => {});

  test("Edit a textfield then add another field on the builder then change the order", () => {});

  test("Edit a textfield then add another field on the first textfield to the top of it", () => {});

  test("Edit a textfield then add another field on the first textfield to the bottom of it", () => {});

  test("Edit a textfield then add another field on the first textfield to the bottom of it then edit it then add one in between", () => {});
});
