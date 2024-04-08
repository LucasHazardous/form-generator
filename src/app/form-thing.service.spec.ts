import { TestBed } from '@angular/core/testing';

import { FormThingService } from './form-thing.service';

describe('FormThingService', () => {
  let service: FormThingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormThingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
