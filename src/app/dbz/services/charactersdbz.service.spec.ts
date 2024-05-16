import { TestBed } from '@angular/core/testing';
import { CharactersDbzService } from './charactersDbz.service';



describe('CharactersdbzService', () => {
  let service: CharactersDbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersDbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
