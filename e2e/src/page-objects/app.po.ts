import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(site: string): Promise<void> {
    return browser.get(site) as Promise<void>;
  }

  getHomeButton(): ElementFinder {
    return element(by.css('app-root .toolbar img'));
  }

  getPageMessage(): ElementFinder {
    return element(by.css('.card.highlight-card.card-small span'));
  }

  getIconByClass(className: string): ElementFinder {
    return element(by.className(className));
  }
}
