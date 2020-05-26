import { TestBed } from '@angular/core/testing';

import { AngularReactiveMessageService } from './angular-reactive-message.service';

describe('AngularReactiveMessageService', () => {
  let service: AngularReactiveMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularReactiveMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
