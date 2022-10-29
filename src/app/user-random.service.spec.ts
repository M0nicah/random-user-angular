import { TestBed } from '@angular/core/testing';

import { UserRandomService } from './user-random.service';

describe('UserRandomService', () => {
  let service: UserRandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRandomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
