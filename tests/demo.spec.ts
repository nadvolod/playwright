import test, { expect } from "@playwright/test";

test("page opens", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});

test("login to Swag Labs", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Fill in the username
  await page.getByRole("textbox", { name: "Username" }).fill("standard_user");

  // Fill in the password
  await page.getByRole("textbox", { name: "Password" }).fill("secret_sauce");

  // Click the login button
  await page.getByRole("button", { name: "Login" }).click();

  // Assert that login was successful, e.g., by checking if a specific element is visible
  await expect(page.locator('[data-test="title"]')).toBeVisible();
});
