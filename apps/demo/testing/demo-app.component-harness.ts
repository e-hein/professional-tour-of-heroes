import { BaseComponentHarness } from '@company/core/testing';

export class DemoAppComponentHarness extends BaseComponentHarness {
  static hostSelector = 'demo-app-root';

  async getTitleText(): Promise<string> {
    const title = await this.locatorFor('.content span')();
    const titleText = await title.text();
    return titleText;
  }
}
