import { setDefaultTimeout, After, Before, Status, HookScenarioResult, Given } from 'cucumber';
import { browser } from 'protractor';
import { Client } from '@ng-apimock/protractor-plugin';

declare const ngApimock: Client;

setDefaultTimeout(30 * 1000);

Before(async function before(): Promise<void> {
  await ngApimock.resetMocksToDefault();
});

After(async function after(scenario: HookScenarioResult): Promise<void> {
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();

    this.attach(screenshot, 'image/png');
  }
});

Given(
  'Using {string} for {string} endpoint',
  async function selectScenario(scenario: string, name: string): Promise<void> {
    await ngApimock.selectScenario(name, scenario);
  },
);

Given(
  'Delaying {string} endpoint by {int} ms',
  async function delayResponse(name: string, delay: number): Promise<void> {
    await ngApimock.delayResponse(name, delay);
  },
);
