import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { HeroExamplesComponent, HeroExamplesModule } from '@examples/hero';

describe('company hero examples module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HeroExamplesModule ]
  }).compileComponents());

  itShouldCreateComponent(HeroExamplesComponent);
});
