import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator.component';
import { TranslatorService } from './translator.service';
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TranslatorService,
    LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
