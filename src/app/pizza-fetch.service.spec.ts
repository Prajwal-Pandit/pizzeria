import { TestBed } from '@angular/core/testing';

import { PizzaFetchService } from './pizza-fetch.service';

describe('PizzaFetchService', () => {
  let service: PizzaFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
