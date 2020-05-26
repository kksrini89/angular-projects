import { TestBed } from '@angular/core/testing';

import { AngularReactiveSpinnerService } from './angular-reactive-spinner.service';

describe('AngularReactiveSpinnerService', () => {
  let service: AngularReactiveSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularReactiveSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
