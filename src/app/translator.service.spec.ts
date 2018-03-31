import { TestBed, inject } from '@angular/core/testing';

import { TranslatorService } from './translator.service';

describe('TranslatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslatorService]
    });
  });

  it('should be created', inject([TranslatorService], (service:TranslatorService) => {
    expect(service).toBeTruthy();
  }));

  it('should not translate whitespaces', inject([TranslatorService], (service:TranslatorService) => {
    expect(service.toKotkot(' al  ma   ')).toEqual([
      'kot-kot-kodács-kodács-kodács-kodács-kot kot-kot-kodács-kot-kot-kodács-kodács',
      'kot-kot-kodács-kot-kot-kodács-kot kot-kot-kodács-kodács-kodács-kodács-kot' ]);
  }));

  it('should translate ingyen soer properly', inject([TranslatorService], (service:TranslatorService) => {
    expect(service.toKotkot('ingyen soer')).toEqual([
      'kot-kot-kodács-kot-kodács-kodács-kot kot-kot-kodács-kot-kot-kot-kodács kot-kot-kodács-kodács-kot-kot-kot kot-kot-kot-kot-kodács-kodács-kot kot-kot-kodács-kodács-kot-kodács-kot kot-kot-kodács-kot-kot-kot-kodács',
      'kot-kot-kot-kodács-kodács-kot-kot kot-kot-kodács-kot-kot-kot-kot kot-kot-kodács-kodács-kot-kodács-kot kot-kot-kot-kodács-kodács-kot-kodács'
    ]);
  }));
});
