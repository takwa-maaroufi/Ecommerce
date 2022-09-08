import { TestBed } from '@angular/core/testing';

import { WishItemService } from './wish-item.service';

describe('WishItemService', () => {
  let service: WishItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
