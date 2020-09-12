import { BaseComponentHarness } from '@company/core/testing';

export class DemoAppWelcomePageComponentHarness extends BaseComponentHarness {
  static hostSelector = 'demo-app-welcome-page';

  async getTitleText(): Promise<string> {
    const title = await this.locatorFor('h2')();
    const titleText = await title.text();
    return titleText;
  }
}
