import { expect, test } from "@playwright/test";

test.describe("contact form flow", () => {
    test("submits successfully with valid payload", async ({ page }) => {
        await page.goto("/");

        const contactSection = page.locator("#contact");
        await contactSection.scrollIntoViewIfNeeded();

        await page.getByLabel("Name").fill("Anubhav Sharma");
        await page.getByLabel("Email").fill("anubhav@example.com");
        await page.getByLabel("Subject").fill("General inquiry");
        await page.getByLabel("Message").fill("I would like to learn more about your UI component library.");
        await page.getByLabel("I agree to be contacted regarding my inquiry.").check();
        await page.getByRole("button", { name: "Send Message" }).click();

        await expect(page.getByText("Your message has been sent successfully.")).toBeVisible();
    });

    test("shows failure and allows retry", async ({ page }) => {
        await page.goto("/");

        const contactSection = page.locator("#contact");
        await contactSection.scrollIntoViewIfNeeded();

        await page.getByLabel("Name").fill("Anubhav Sharma");
        await page.getByLabel("Email").fill("anubhav@example.com");
        await page.getByLabel("Subject").fill("Please fail once");
        await page.getByLabel("Message").fill("This message body is valid and should trigger simulated failure by subject.");
        await page.getByLabel("I agree to be contacted regarding my inquiry.").check();
        await page.getByRole("button", { name: "Send Message" }).click();

        await expect(page.getByText("Failed to send message. Please try again.")).toBeVisible();

        await page.getByLabel("Subject").fill("Recovered submission");
        await page.getByRole("button", { name: "Retry" }).click();

        await expect(page.getByText("Your message has been sent successfully.")).toBeVisible();
    });
});
