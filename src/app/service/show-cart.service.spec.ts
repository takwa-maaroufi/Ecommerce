import { TestBed } from '@angular/core/testing';

import { ShowCartService } from './show-cart.service';

describe('ShowCartService', () => {
  let service: ShowCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
