import { BaseComponentHarness } from '@company/core/testing';
import { DemoNavigationComponentHarness } from './demo-navigation.component-harness';

export class DemoAppComponentHarness extends BaseComponentHarness {
  static hostSelector = 'demo-app-root';

  async getTitleText(): Promise<string> {
    const title = await this.locatorFor('h1')();
    const titleText = await title.text();
    return titleText;
  }

  async getNavigation(): Promise<DemoNavigationComponentHarness> {
    return await this.locatorFor(DemoNavigationComponentHarness)();
  }
}
