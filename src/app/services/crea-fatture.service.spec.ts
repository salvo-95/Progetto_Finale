import { TestBed } from '@angular/core/testing';

import { CreaFattureService } from './crea-fatture.service';

describe('CreaFattureService', () => {
  let service: CreaFattureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreaFattureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
