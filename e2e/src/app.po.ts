import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getListGroupItems() {
    return element.all(by.css('.list-group-item'));
  }
}
