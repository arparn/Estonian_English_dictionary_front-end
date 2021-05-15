import { TestBed } from '@angular/core/testing';

import { DeleteEstonianService } from './delete-estonian.service';

describe('DeleteEstoniamService', () => {
  let service: DeleteEstonianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteEstonianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
