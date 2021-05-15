import { TestBed } from '@angular/core/testing';

import { AddWordEnglishService } from './add-word-english.service';

describe('AddWordEnglishService', () => {
  let service: AddWordEnglishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWordEnglishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
