import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyCoreComponent, CompanyCoreModule } from '../public-api';

describe('company core module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyCoreModule ]
  }).compileComponents());

  itShouldCreateComponent(CompanyCoreComponent);
});
