import { TestBed } from '@angular/core/testing';

import { HeroExamplesService } from './hero-examples.service';

describe('HeroExamplesService', () => {
  let service: HeroExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
