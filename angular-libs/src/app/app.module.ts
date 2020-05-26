import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularReactiveSpinnerModule } from 'angular-reactive-spinner';

import { AppComponent } from './app.component';
import { NgbModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularReactiveSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
