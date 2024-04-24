import { TestBed } from '@angular/core/testing';

import { AlumnoStatsService } from './alumno-stats.service';

describe('AlumnoStatsService', () => {
  let service: AlumnoStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
