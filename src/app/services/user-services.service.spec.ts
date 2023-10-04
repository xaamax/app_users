/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserServices } from './user-services.service';

describe('Service: UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServices]
    });
  });

  it('should ...', inject([UserServices], (service: UserServices) => {
    expect(service).toBeTruthy();
  }));
});
