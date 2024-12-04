import { TestBed } from '@angular/core/testing';

import { AuthenguardService } from './authenguard.service';

describe('AuthenguardService', () => {
  let service: AuthenguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
