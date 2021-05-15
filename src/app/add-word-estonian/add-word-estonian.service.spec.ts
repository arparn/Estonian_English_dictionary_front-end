import { TestBed } from '@angular/core/testing';

import { AddWordEstonianService } from './add-word-estonian.service';

describe('AddWordEstonianService', () => {
  let service: AddWordEstonianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWordEstonianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
