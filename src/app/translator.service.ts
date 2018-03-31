import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class TranslatorService {

  constructor(private logger: LoggerService) {
  }

  toKotkot(text) {

    this.logger.log(`Translating "${text}".`);

    return text.split(' ')
      .filter(e => e !== '')
      .map(word => word.split('')
        .map(c => c.charCodeAt().toString(2)
          .split('')
          .map(b => parseInt(b) ? 'kot' : 'kodács')
          .join('-')).join(' '));
  }
}
