import { TestBed, inject } from '@angular/core/testing';

import { SolicitudService } from './solicitud.service';

describe('SolicitudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolicitudService]
    });
  });

  it('should be created', inject([SolicitudService], (service: SolicitudService) => {
    expect(service).toBeTruthy();
  }));
});
