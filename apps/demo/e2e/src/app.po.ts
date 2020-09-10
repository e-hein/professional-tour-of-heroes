import { by, element } from 'protractor';

export class AppPage {
  getTitleText(): Promise<string> {
    return element(by.css('demo-app-root .content span')).getText() as Promise<string>;
  }
}
