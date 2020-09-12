import { SharedSpecContext } from '@company/core/testing';
import { checkScreen } from './spec-shot.functions';

export class ProtractorSpecContext implements SharedSpecContext {
  checkScreen = checkScreen;

  before(action: jasmine.ImplementationCallback, timeout?: number): void {
    beforeAll(action, timeout);
  }
}
