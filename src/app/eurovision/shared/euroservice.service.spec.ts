import { TestBed } from '@angular/core/testing';

import { EuroserviceService } from './euroservice.service';

describe('EuroserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EuroserviceService = TestBed.get(EuroserviceService);
    expect(service).toBeTruthy();
  });
});
