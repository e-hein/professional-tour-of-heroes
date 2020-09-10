import { SharedSpecContext } from '@company/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture } from '@angular/core/testing';

export class TestbedSpecContext implements SharedSpecContext {
  constructor(
    private fixture: () => ComponentFixture<any>,
  ) {}

  checkScreen(ident: string): Promise<number> {
    console.warn(`did not check screen '${ident}' in TestbedSpecContext`);
    return Promise.resolve(0);
  }

  before(action: jasmine.ImplementationCallback, timeout?: number): void {
    beforeEach(action, timeout);
  }

  loader(): HarnessLoader {
    return TestbedHarnessEnvironment.loader(this.fixture());
  }
}
