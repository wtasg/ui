import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Audits', () => {
  test.beforeEach(async ({ page }) => {
    // Increase timeout for server startup
    test.setTimeout(60000);
  });

  test('Showcase App - Homepage should be accessible', async ({ page }) => {
    // Retry logic for dev server
    await expect(async () => {
      await page.goto('http://localhost:5173');
      await expect(page.locator('h1')).toBeVisible();
    }).toPass({ timeout: 15000 });

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  const components = [
    { name: 'Button', id: 'primitives-button--default' },
    { name: 'Accordion', id: 'components-accordion--default' },
    { name: 'Tabs', id: 'components-tabs--default' },
    { name: 'Input', id: 'primitives-input--default' },
  ];

  for (const component of components) {
    test(`Storybook - ${component.name} story should be accessible`, async ({ page }) => {
      const url = `http://localhost:6006/iframe.html?id=${component.id}&viewMode=story`;
      
      await expect(async () => {
        await page.goto(url);
        // Wait for any element to be visible to ensure iframe content is loaded
        await expect(page.locator('body')).toBeVisible();
      }).toPass({ timeout: 15000 });

      const accessibilityScanResults = await new AxeBuilder({ page })
        .disableRules(['landmark-one-main', 'page-has-heading-one', 'region'])
        .analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});
