import { TestBed } from '@angular/core/testing';

import { TrilaterationService } from './trilateration.service';

describe('TrilaterationService', () => {
  let service: TrilaterationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrilaterationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
