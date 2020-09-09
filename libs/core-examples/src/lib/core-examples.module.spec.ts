import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CoreExamplesComponent } from './core-examples.component';
import { CoreExamplesModule } from './core-examples.module';

describe('company core examples module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CoreExamplesModule ]
  }).compileComponents());

  itShouldCreateComponent(CoreExamplesComponent);
});
