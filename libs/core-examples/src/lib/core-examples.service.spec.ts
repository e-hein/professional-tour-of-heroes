import { TestBed } from '@angular/core/testing';

import { CoreExamplesService } from './core-examples.service';

describe('CoreExamplesService', () => {
  let service: CoreExamplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreExamplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
