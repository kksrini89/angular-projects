import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularReactiveMessageComponent } from './angular-reactive-message.component';
import { AngularReactiveMessageService } from './angular-reactive-message.service';



@NgModule({
  declarations: [AngularReactiveMessageComponent],
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  providers: [AngularReactiveMessageService],
  exports: [AngularReactiveMessageComponent]
})
export class AngularReactiveMessageModule { }
