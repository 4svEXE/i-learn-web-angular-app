import { TestBed } from '@angular/core/testing';

import { SelectFractionService } from './select-fraction.service';

describe('SelectFractionService', () => {
  let service: SelectFractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectFractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
