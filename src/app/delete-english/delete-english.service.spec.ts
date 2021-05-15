import { TestBed } from '@angular/core/testing';

import { DeleteEnglishService } from './delete-english.service';

describe('DeleteEnglishService', () => {
  let service: DeleteEnglishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEnglishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
