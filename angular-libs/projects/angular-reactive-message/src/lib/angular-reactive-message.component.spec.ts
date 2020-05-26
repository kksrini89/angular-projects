import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveMessageComponent } from './angular-reactive-message.component';

describe('AngularReactiveMessageComponent', () => {
  let component: AngularReactiveMessageComponent;
  let fixture: ComponentFixture<AngularReactiveMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularReactiveMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularReactiveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
