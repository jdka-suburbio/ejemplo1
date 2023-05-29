import { TestBed } from '@angular/core/testing';

import { InicioFireBaseService } from './inicio-fire-base.service';

describe('InicioFireBaseService', () => {
  let service: InicioFireBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioFireBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
