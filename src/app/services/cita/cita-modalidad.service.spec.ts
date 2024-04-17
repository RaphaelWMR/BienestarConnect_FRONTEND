import { TestBed } from '@angular/core/testing';

import { CitaModalidadService } from './cita-modalidad.service';

describe('CitaModalidadService', () => {
  let service: CitaModalidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaModalidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
