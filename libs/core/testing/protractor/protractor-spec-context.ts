import { HarnessLoader } from '@angular/cdk/testing';
import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { SharedSpecContext } from '@company/core/testing';
import { checkScreen } from './spec-shot.functions';

export class ProtractorSpecContext implements SharedSpecContext {
  checkScreen = checkScreen;

  before(action: jasmine.ImplementationCallback, timeout?: number): void {
    beforeAll(action, timeout);
  }

  loader(): HarnessLoader {
    return ProtractorHarnessEnvironment.loader();
  }
}
