import { BaseComponentObject } from '@company/core/testing/protractor';
import { HeroCo } from '@company/hero/testing/protractor';
import { browser, by, element } from 'protractor';

export class AppPage extends BaseComponentObject {
  constructor() {
    super(browser.findElement(by.css('app-root')));
  }

  getTitleText(): Promise<string> {
    return Promise.resolve(element(by.css('h1')).getText());
  }

  getHeroComponent(): HeroCo {
    return new HeroCo(this.host);
  }
}
