import { TestBed } from '@angular/core/testing';

import { EstonianEnglishService } from './estonian-english.service';

describe('EstonianEnglishService', () => {
  let service: EstonianEnglishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstonianEnglishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
