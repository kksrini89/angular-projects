import { Component, OnInit } from '@angular/core';
import { AngularReactiveSpinnerService } from './angular-reactive-spinner.service';

@Component({
  selector: 'lib-angular-reactive-spinner',
  template: `
    <div *ngIf="spinnerSvc.loading$ | async">
      <p><ngb-progressbar [value]="250"></ngb-progressbar></p>
    </div>
  `,
  styles: [],
})
export class AngularReactiveSpinnerComponent implements OnInit {
  constructor(public spinnerSvc: AngularReactiveSpinnerService) {}

  ngOnInit(): void {}
}
