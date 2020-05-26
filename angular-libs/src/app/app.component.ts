import { Component, OnInit } from '@angular/core';
import { AngularReactiveSpinnerService } from 'angular-reactive-spinner';
import { AngularReactiveMessageService, MessageType } from 'projects/angular-reactive-message/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-libs';
  constructor(public spinnerSvc: AngularReactiveSpinnerService,
              public msgSvc: AngularReactiveMessageService) { }

  ngOnInit() {
    this.spinnerSvc.loadingOn();
    this.msgSvc.showMessage('Wow', MessageType.error);
  }

  showMessage() {
    this.msgSvc.showMessage('Wow', MessageType.error);
  }
}
