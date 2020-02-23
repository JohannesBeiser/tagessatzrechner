import { TestBed } from '@angular/core/testing';

import { IndexedDBConnectionService } from './indexed-dbconnection.service';

describe('IndexedDBConnectionService', () => {
  let service: IndexedDBConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedDBConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
