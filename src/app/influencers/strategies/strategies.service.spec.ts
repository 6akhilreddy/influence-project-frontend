import { TestBed } from '@angular/core/testing';

import { StrategiesService } from './strategies.service';

describe('StrategiesService', () => {
  let service: StrategiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrategiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
