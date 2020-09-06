import { by, element } from 'protractor';

export class AppPage {
  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }
}
