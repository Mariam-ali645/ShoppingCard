import { TestBed } from '@angular/core/testing';

import { CustomerauthenticationService } from './customerauthentication.service';

describe('CustomerauthenticationService', () => {
  let service: CustomerauthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerauthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
