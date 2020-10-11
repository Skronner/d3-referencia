import { TestBed } from '@angular/core/testing';

import { DadosJsonService } from './dados-json.service';

describe('DadosJsonService', () => {
  let service: DadosJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
