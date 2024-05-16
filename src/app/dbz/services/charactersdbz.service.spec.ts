import { TestBed } from '@angular/core/testing';

import { CharactersdbzService } from './charactersdbz.service';

describe('CharactersdbzService', () => {
  let service: CharactersdbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersdbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
