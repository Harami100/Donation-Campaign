import { TestBed } from '@angular/core/testing';

import { UserRequirementService } from './user-requirement.service';

describe('UserRequirementService', () => {
  let service: UserRequirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRequirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
