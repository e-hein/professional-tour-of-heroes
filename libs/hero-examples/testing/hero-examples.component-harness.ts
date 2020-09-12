import { BaseComponentHarness } from '@company/core/testing';
import { HeroComponentHarness } from '@company/hero/testing';

export class HeroExamplesComponentHarness extends BaseComponentHarness {
  static hostSelector = 'hero-examples';

  async getHeroComponent(): Promise<HeroComponentHarness> {
    return await this.locatorFor(HeroComponentHarness)();
  }
}
