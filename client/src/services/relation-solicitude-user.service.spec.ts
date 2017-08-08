import { TestBed, inject } from '@angular/core/testing';

import { RelationSolicitudeUserService } from './relation-solicitude-user.service';

describe('RelationSolicitudeUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelationSolicitudeUserService]
    });
  });

  it('should be created', inject([RelationSolicitudeUserService], (service: RelationSolicitudeUserService) => {
    expect(service).toBeTruthy();
  }));
});
