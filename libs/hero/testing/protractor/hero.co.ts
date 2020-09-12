import { BaseComponentObject, CoreCo } from '@company/core/testing/protractor';
import { by, WebElement } from 'protractor';

export class HeroCo extends BaseComponentObject {
  constructor(parent: WebElement) {
    super(parent.findElement(by.css('company-hero')));
  }

  getCoreComponent(): CoreCo {
    return new CoreCo(this.host);
  }
}
