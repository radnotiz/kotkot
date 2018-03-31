import { Component } from '@angular/core';
import { TranslatorService } from './translator.service';

@Component({
  selector: 'translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent {
  values = [];

  constructor(private translator: TranslatorService) {
  }

  onKey(value:string) {
    console.log(value);
    console.log(this.translator.toKotkot(value));
    this.values = this.translator.toKotkot(value);
  }
}
