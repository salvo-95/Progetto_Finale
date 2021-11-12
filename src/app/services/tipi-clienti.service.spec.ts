import { TestBed } from '@angular/core/testing';

import { TipiClientiService } from './tipi-clienti.service';

describe('TipiClientiService', () => {
  let service: TipiClientiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipiClientiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
