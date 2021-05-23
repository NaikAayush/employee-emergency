import { TestBed } from '@angular/core/testing';

import { PathfindingService } from './pathfinding.service';

describe('PathfindingService', () => {
  let service: PathfindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathfindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
