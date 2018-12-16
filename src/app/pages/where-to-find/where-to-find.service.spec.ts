import { TestBed } from '@angular/core/testing';

import { WhereToFindService } from './where-to-find.service';

describe('WhereToFindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WhereToFindService = TestBed.get(WhereToFindService);
    expect(service).toBeTruthy();
  });
});
