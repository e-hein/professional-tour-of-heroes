import { TestBed } from '@angular/core/testing';

import { CompanyCoreService } from './core.service';

describe('company core service', () => {
  let service: CompanyCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
