import { test, expect } from "@playwright/test";

test.describe("showcase app smoke", () => {
    test("application startup and shell render", async ({ page }) => {
        await page.goto("/");

        await expect(page.getByRole("heading", { name: "A Beautiful Component Library" })).toBeVisible();
        await expect(page.getByRole("button", { name: "Get Started" })).toBeVisible();
    });

    test("basic UI functionality: tabs switch content", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("tab", { name: "Code" }).click();
        await expect(page.getByText("<Tabs defaultValue=\"preview\">", { exact: false })).toBeVisible();

        await page.getByRole("tab", { name: "Docs" }).click();
        await expect(page.getByText("Tabs documentation goes here.")).toBeVisible();
    });

    test("landing CTA buttons navigate to target sections", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Explore Components" }).click();
        await expect(page.locator("#components")).toBeInViewport();

        await page.getByRole("button", { name: "View Source" }).click();
        await expect(page.locator("#interactive-components")).toBeInViewport();
    });

    test("core flow: open and close dialog", async ({ page }) => {
        await page.goto("/");

        await page.getByRole("button", { name: "Open Dialog" }).click();
        await expect(page.getByRole("heading", { name: "Example Dialog" })).toBeVisible();

        await page.getByRole("button", { name: "Cancel" }).click();
        await expect(page.getByRole("heading", { name: "Example Dialog" })).not.toBeVisible();
    });
});
