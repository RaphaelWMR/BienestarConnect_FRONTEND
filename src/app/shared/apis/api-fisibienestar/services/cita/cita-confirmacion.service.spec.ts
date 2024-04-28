import { TestBed } from '@angular/core/testing';

import { CitaConfirmacionService } from './cita-confirmacion.service';

describe('CitaConfirmacionService', () => {
  let service: CitaConfirmacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaConfirmacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
