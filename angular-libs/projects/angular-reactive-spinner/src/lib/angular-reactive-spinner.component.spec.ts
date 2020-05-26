import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveSpinnerComponent } from './angular-reactive-spinner.component';

describe('AngularReactiveSpinnerComponent', () => {
  let component: AngularReactiveSpinnerComponent;
  let fixture: ComponentFixture<AngularReactiveSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularReactiveSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactiveSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
