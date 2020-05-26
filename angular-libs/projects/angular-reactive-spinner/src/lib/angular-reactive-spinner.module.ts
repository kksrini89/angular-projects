import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularReactiveSpinnerComponent } from './angular-reactive-spinner.component';
import { AngularReactiveSpinnerService } from './angular-reactive-spinner.service';

@NgModule({
  declarations: [AngularReactiveSpinnerComponent],
  imports: [CommonModule, NgbProgressbarModule],
  providers: [AngularReactiveSpinnerService],
  exports: [AngularReactiveSpinnerComponent],
})
export class AngularReactiveSpinnerModule {}
