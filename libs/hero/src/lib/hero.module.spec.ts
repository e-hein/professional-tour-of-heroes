import { TestBed } from '@angular/core/testing';
import { itShouldCreateComponent } from '@company/core/testing/testbed';
import { CompanyHeroComponent, CompanyHeroModule } from '../public-api';

describe('company hero module', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ CompanyHeroModule ]
  }).compileComponents());

  itShouldCreateComponent(CompanyHeroComponent);
});
