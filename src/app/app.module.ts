import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator.component';
import { TranslatorService } from './translator.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [
    TranslatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
