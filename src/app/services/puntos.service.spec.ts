import { TestBed, inject } from '@angular/core/testing';

import { PuntosService } from './puntos.service';

describe('PuntosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntosService]
    });
  });

  it('should be created', inject([PuntosService], (service: PuntosService) => {
    expect(service).toBeTruthy();
  }));
});
