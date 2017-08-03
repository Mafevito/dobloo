import { TestBed, inject } from '@angular/core/testing';

import { SolicitudeService } from './solicitude.service';

describe('SolicitudeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudeService]
    });
  });

  it('should be created', inject([SolicitudeService], (service: SolicitudeService) => {
    expect(service).toBeTruthy();
  }));
});
