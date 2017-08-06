import { TestBed, inject } from '@angular/core/testing';

import { ProfileDetailsService } from './profile-details.service';

describe('ProfileDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileDetailsService]
    });
  });

  it('should be created', inject([ProfileDetailsService], (service: ProfileDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
