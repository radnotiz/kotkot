import { TestBed, inject } from '@angular/core/testing';

import { TranslatorService } from './translator.service';
import { LoggerService } from './logger.service';

describe('TranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslatorService, LoggerService]
    });
  });

  it('should be created', inject([TranslatorService], (service:TranslatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should translate ingyen soer properly', inject([TranslatorService], (service:TranslatorService) => {
    expect(service.toKotkot('ingyen soer')).toEqual([
      'kot-kot-kodács-kot-kodács-kodács-kot kot-kot-kodács-kot-kot-kot-kodács kot-kot-kodács-kodács-kot-kot-kot kot-kot-kot-kot-kodács-kodács-kot kot-kot-kodács-kodács-kot-kodács-kot kot-kot-kodács-kot-kot-kot-kodács',
      'kot-kot-kot-kodács-kodács-kot-kot kot-kot-kodács-kot-kot-kot-kot kot-kot-kodács-kodács-kot-kodács-kot kot-kot-kot-kodács-kodács-kot-kodács'
    ]);
  }))
});
