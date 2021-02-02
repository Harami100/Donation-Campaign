import { TestBed } from '@angular/core/testing';

import { NgoRequirementService } from './ngo-requirement.service';

describe('NgoRequirementService', () => {
  let service: NgoRequirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoRequirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
