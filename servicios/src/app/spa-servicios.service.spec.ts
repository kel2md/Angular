import { TestBed } from '@angular/core/testing';

import { SpaServiciosService } from './spa-servicios.service';

describe('SpaServiciosService', () => {
  let service: SpaServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
