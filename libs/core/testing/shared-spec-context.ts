import { HarnessLoader } from '@angular/cdk/testing';

export interface SharedSpecContext {
  checkScreen(ident: string): Promise<number>;
  before(action: jasmine.ImplementationCallback, timeout?: number): void;
  loader(): HarnessLoader;
}
