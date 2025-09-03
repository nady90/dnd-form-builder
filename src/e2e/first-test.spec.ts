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

  test("Edit a textfield", async ({ page }) => {
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

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    // First textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i);
    textFieldLabel.click();

    const labelInput = await page.locator("input[value='label here']");
    await expect(labelInput).toBeVisible();
    console.log("🚀 ~ labelInput:", labelInput);
    await labelInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("One");
    await page.keyboard.press("Tab");

    await expect(page.getByLabel("One")).toBeVisible();
  });

  test("Edit a textfield then add another field on the builder", async ({
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

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    // First textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i);
    textFieldLabel.click();

    const labelInput = await page.locator("input[value='label here']");
    await expect(labelInput).toBeVisible();
    await labelInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("One");

    // Second textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    await expect(page.getByLabel("One")).toBeVisible();
    await expect(page.getByLabel("label here")).toBeVisible();

    const designer = await page.getByTestId("builder");
    const designerLabels = await designer.locator("label").elementHandles();
    expect(await designerLabels[0].innerText()).toBe("One");
    expect(await designerLabels[1].innerText()).toBe("label here");
  });

  test("Edit a textfield then add another field on the builder then change the order", async ({
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

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    // First textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i);
    textFieldLabel.click();

    const labelInput = await page.locator("input[value='label here']");
    await expect(labelInput).toBeVisible();
    await labelInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("One");

    // Second textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const oneLabel = page.getByLabel("One");
    await expect(oneLabel).toBeVisible();
    await expect(page.getByLabel("label here")).toBeVisible();

    const designer = await page.getByTestId("builder");
    const designerLabelsLocators = await designer.locator("label").all();
    let designerLabelsElements = await designer
      .locator("label")
      .elementHandles();
    expect(await designerLabelsElements[0].innerText()).toBe("One");
    expect(await designerLabelsElements[1].innerText()).toBe("label here");

    await designerLabelsLocators[1].hover();

    await page.mouse.down();

    await page.mouse.move(1, 1);

    await designerLabelsLocators[0].hover();

    await page.mouse.up();

    designerLabelsElements = await designer.locator("label").elementHandles();

    expect(await designerLabelsElements[0].innerText()).toBe("label here");
    expect(await designerLabelsElements[1].innerText()).toBe("One");
  });

  test("Edit a textfield then add another field on the first textfield to the top of it", async ({
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

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    // First textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i);
    textFieldLabel.click();

    const labelInput = await page.locator("input[value='label here']");
    await expect(labelInput).toBeVisible();
    await labelInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("One");
    await page.keyboard.press("Tab");

    const oneLabel = await page.getByLabel("One");
    await expect(oneLabel).toBeVisible();

    // Second textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    const topHalf = await page.getByTestId("top-half-div");
    await expect(topHalf).toBeVisible();
    await topHalf.hover();
    await page.mouse.up();

    const designer = await page.getByTestId("builder");
    const designerLabelsElements = await designer
      .locator("label")
      .elementHandles();
    expect(await designerLabelsElements[0].innerText()).toBe("label here");
    expect(await designerLabelsElements[1].innerText()).toBe("One");
  });

  test("Edit a textfield then add another field on the first textfield to the bottom of it", async ({
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

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    // First textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i);
    textFieldLabel.click();

    const labelInput = await page.locator("input[value='label here']");
    await expect(labelInput).toBeVisible();
    await labelInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("One");
    await page.keyboard.press("Tab");

    const oneLabel = await page.getByLabel("One");
    await expect(oneLabel).toBeVisible();

    // Second textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    const bottomHalf = await page.getByTestId("bottom-half-div");
    await expect(bottomHalf).toBeVisible();
    await bottomHalf.hover();
    await page.mouse.up();

    const designer = await page.getByTestId("builder");
    const designerLabelsElements = await designer
      .locator("label")
      .elementHandles();
    expect(await designerLabelsElements[0].innerText()).toBe("One");
    expect(await designerLabelsElements[1].innerText()).toBe("label here");
  });

  test("Edit a textfield then add another field on the first textfield to the bottom of it then edit it then add one in between", async ({
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

    const finishFormLinks = await page.getByText(/finish the form/i).all();
    const lastLink = finishFormLinks[finishFormLinks.length - 1];
    await lastLink.click();
    await page.waitForLoadState("networkidle");

    const textField = page.getByRole("button", { name: /textfield/i });
    await expect(textField).toBeVisible();

    const builder = page.getByTestId("builder");
    await expect(builder).toBeVisible();

    await textField.waitFor({ state: "visible" });
    await builder.waitFor({ state: "visible" });

    // First textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    await builder.hover();
    await page.mouse.up();

    const textFieldLabel = await page.getByText(/label here/i);
    textFieldLabel.click();

    const labelInput = await page.locator("input[value='label here']");
    await expect(labelInput).toBeVisible();
    await labelInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("Top");
    await page.keyboard.press("Tab");

    const topLabel = await page.getByLabel("Top");
    await expect(topLabel).toBeVisible();

    // Second textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    const bottomHalf = await page.getByTestId("bottom-half-div");
    await expect(bottomHalf).toBeVisible();
    await bottomHalf.hover();
    await page.mouse.up();

    const designer = await page.getByTestId("builder");
    let designerLabelsElements = await designer
      .locator("label")
      .elementHandles();
    expect(await designerLabelsElements[0].innerText()).toBe("Top");
    expect(await designerLabelsElements[1].innerText()).toBe("label here");

    await designerLabelsElements[1].click();

    const secondTextFieldInput = await page.locator(
      "input[value='label here']",
    );
    await expect(secondTextFieldInput).toBeVisible();
    await secondTextFieldInput.click();

    await page.keyboard.press("Control+A");
    await page.keyboard.type("Bottom");
    await page.keyboard.press("Tab");

    // Third textfield
    await textField.hover();
    await page.mouse.down();

    await page.mouse.move(1, 1);

    const firstBottomHalf = await page.getByTestId("bottom-half-div").all();
    await expect(firstBottomHalf[0]).toBeVisible();
    await firstBottomHalf[0].hover();
    await page.mouse.up();

    designerLabelsElements = await designer.locator("label").elementHandles();
    expect(await designerLabelsElements[0].innerText()).toBe("Top");
    expect(await designerLabelsElements[1].innerText()).toBe("label here");
    expect(await designerLabelsElements[2].innerText()).toBe("Bottom");
  });
});
