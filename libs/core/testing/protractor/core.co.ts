import { by, WebElement } from 'protractor';
import { BaseComponentObject } from './base.co';

export class CoreCo extends BaseComponentObject {
  constructor(parent: WebElement) {
    super(parent.findElement(by.css('company-core')));
  }
}
