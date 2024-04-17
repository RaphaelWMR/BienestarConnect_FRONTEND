import { TestBed } from '@angular/core/testing';

import { CitaTipoService } from './cita-tipo.service';

describe('CitaTipoService', () => {
  let service: CitaTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
