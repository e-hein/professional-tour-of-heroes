import { BaseComponentHarness } from '@company/core/testing';
import { HeroEditorComponentHarness } from './hero-editor.component-harness';

export class HeroComponentHarness extends BaseComponentHarness {
  static hostSelector = 'company-hero';

  async getHeroEditor(): Promise<HeroEditorComponentHarness> {
    return await this.locatorFor(HeroEditorComponentHarness)();
  }

  async isDisplayed(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
