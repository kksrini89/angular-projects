import { Component, OnInit } from '@angular/core';
import { AngularReactiveSpinnerService } from 'angular-reactive-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-libs';
  constructor(public spinnerSvc: AngularReactiveSpinnerService) { }

  ngOnInit() {
    this.spinnerSvc.loadingOn();
  }
}
