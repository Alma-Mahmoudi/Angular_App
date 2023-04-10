import { TestBed } from '@angular/core/testing';

import { SujetGuard } from './sujet.guard';

describe('SujetGuard', () => {
  let guard: SujetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SujetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
