import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularReactiveSpinnerModule } from 'angular-reactive-spinner';
import { AngularReactiveMessageModule } from 'angular-reactive-message';

import { AppComponent } from './app.component';
import { AngularReactiveMessageService } from 'projects/angular-reactive-message/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularReactiveSpinnerModule,
    AngularReactiveMessageModule
  ],
  providers: [AngularReactiveMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
