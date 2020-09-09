import { CoreComponentHarness, BaseComponentHarness } from '@company/core/testing';

export class HeroComponentHarness extends BaseComponentHarness {
  static hostSelector = 'company-hero';

  async getCoreComponent(): Promise<CoreComponentHarness> {
    return await this.locatorFor(CoreComponentHarness)();
  }
}
