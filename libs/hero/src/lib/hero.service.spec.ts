import { TestBed } from '@angular/core/testing';

import { CompanyHeroService } from './hero.service';

describe('company hero Service', () => {
  let service: CompanyHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
