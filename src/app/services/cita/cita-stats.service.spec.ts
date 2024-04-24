import { TestBed } from '@angular/core/testing';

import { CitaStatsService } from './cita-stats.service';

describe('CitaStatsService', () => {
  let service: CitaStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
