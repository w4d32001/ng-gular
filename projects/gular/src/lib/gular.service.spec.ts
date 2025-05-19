import { TestBed } from '@angular/core/testing';

import { GularService } from './gular.service';

describe('GularService', () => {
  let service: GularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
