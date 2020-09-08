import { WebElementPromise } from 'protractor';

export abstract class BaseComponentObject {
  constructor(
    public readonly host: WebElementPromise,
  ) {}

  async isDisplayed(): Promise<boolean> {
    const host = await this.host;
    const isDisplayed = await host.isDisplayed();
    return isDisplayed;
  }

  async text(): Promise<string> {
    const host = await this.host;
    const text = await host.getText();
    return text;
  }
}
