import { BaseComponentHarness, CoreComponentHarness } from '@company/core/testing';

export class CoreExamplesComponentHarness extends BaseComponentHarness {
  static hostSelector = 'core-examples';

  async getCoreComponent(): Promise<CoreComponentHarness> {
    return await this.locatorFor(CoreComponentHarness)();
  }
}
