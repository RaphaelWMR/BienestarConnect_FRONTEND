import { TestBed } from '@angular/core/testing';

import { GetDataAlumnoService } from './get-data-alumno.service';

describe('GetDataAlumnoService', () => {
  let service: GetDataAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
