import { TestBed } from '@angular/core/testing';

import { InglesService } from './ingles.service';

describe('InglesService', () => {
  let service: InglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
