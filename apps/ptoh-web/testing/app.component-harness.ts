import { BaseComponentHarness } from '@company/core/testing';
import { HeroComponentHarness } from '@company/hero/testing';

export class AppHarness extends BaseComponentHarness {
  static hostSelector = 'app-root';

  async isDisplayed(): Promise<boolean> {
    const host = await this.host();
    if (!host.matchesSelector(AppHarness.hostSelector)) {
      throw new Error('host is not a core component!');
    }
    return super.isDisplayed();
  }

  async getTitleText(): Promise<string> {
    const title = await this.locatorFor('h1')();
    const titleText = await title.text();
    return titleText;
  }

  async getHeroComponent(): Promise<HeroComponentHarness> {
    return await this.locatorFor(HeroComponentHarness)();
  }
}
