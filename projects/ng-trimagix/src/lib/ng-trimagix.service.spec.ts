import { TestBed } from '@angular/core/testing';

import { NgTrimagixService } from './ng-trimagix.service';

describe('NgTrimagixService', () => {
  let service: NgTrimagixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTrimagixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
