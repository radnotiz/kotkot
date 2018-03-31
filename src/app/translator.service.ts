import { Injectable } from '@angular/core';

@Injectable()
export class TranslatorService {

  toKotkot(text) {

    return text.split(' ')
      .filter(e => e !== '')
      .map(word => word.split('')
        .map(c => c.charCodeAt().toString(2)
          .split('')
          .map(b => parseInt(b) ? 'kot' : 'kodács')
          .join('-')).join(' '));
  }
}
