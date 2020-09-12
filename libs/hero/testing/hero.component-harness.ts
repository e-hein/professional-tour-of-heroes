import { BaseComponentHarness } from '@company/core/testing';

export class HeroComponentHarness extends BaseComponentHarness {
  static hostSelector = 'company-hero';

  async getHeroEditor(): Promise<any> {
    throw new Error('not implemented yet');
  }

  async isDisplayed(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
