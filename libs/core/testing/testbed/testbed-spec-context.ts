import { SharedSpecContext } from '@company/core/testing';

export class TestbedSpecContext implements SharedSpecContext {
  checkScreen(ident: string): Promise<number> {
    console.warn(`did not check screen '${ident}' in TestbedSpecContext`);
    return Promise.resolve(0);
  }

  before(action: jasmine.ImplementationCallback, timeout?: number): void {
    beforeEach(action, timeout);
  }
}
