import { Given, Then, When } from 'cucumber';
import { browser } from 'protractor';
import { AppPage } from '../page-objects/app.po';

const page = new AppPage();

Given('I go to {string}', async (site: string) => {
  await page.navigateTo(site);
});

When('I click the home button', async () => {
  await page.getHomeButton().click();
});

When('I define the {string} icon baseline', async (name: string) => {
  await browser.imageComparison.saveElement(page.getIconByClass(name), name);
});

Then('I should see {string} in the page', async (text: string) => {
  expect(await page.getPageMessage().getText()).toBe(text);
});

Then('I should see the rocket icon', async () => {
  expect(await page.getIconByClass('rocket').isDisplayed()).toBe(true);
});

Then('the {string} icon matches the baseline', async (name: string) => {
  expect(await browser.imageComparison.checkElement(page.getIconByClass(name), name)).toBe(0);
});
