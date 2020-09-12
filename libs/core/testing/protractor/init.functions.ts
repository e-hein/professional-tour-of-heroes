import { browser } from 'protractor';

export function navigateToRootPage(): Promise<any> {
  return Promise.resolve(browser.get(browser.baseUrl));
}
