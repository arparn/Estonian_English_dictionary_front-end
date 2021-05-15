import { TestBed } from '@angular/core/testing';

import { EnglishEstonianService } from './english-estonian.service';

describe('EnglishEstonianService', () => {
  let service: EnglishEstonianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnglishEstonianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
