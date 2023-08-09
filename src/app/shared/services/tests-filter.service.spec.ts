import { TestBed } from '@angular/core/testing';

import { TestsFilterService } from './tests-filter.service';

describe('TestsFilterService', () => {
  let service: TestsFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
