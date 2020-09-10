import { BaseComponentHarness } from '@company/core/testing';

export class DemoAppComponentHarness extends BaseComponentHarness {
  static hostSelector = 'demo-app-root';

  async getTitleText(): Promise<string> {
    const title = await this.locatorFor('h1')();
    const titleText = await title.text();
    return titleText;
  }
}
