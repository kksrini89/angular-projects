import { Component } from '@angular/core';
import { AngularReactiveMessageService } from './angular-reactive-message.service';

@Component({
  selector: 'lib-angular-reactive-message',
  template: `
  <ng-container *ngIf="(msgSvc.message$ | async) as msg">
    <ngb-alert [type]="msg.type" dismissible="true">{{ msg.message }}</ngb-alert>
  </ng-container>
  `,
  styles: [
  ]
})
export class AngularReactiveMessageComponent {

  constructor(public msgSvc: AngularReactiveMessageService) { }

}
