import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum MessageType {
  warning = 'warning',
  info = 'info',
  error = 'danger'
}

@Injectable()
export class AngularReactiveMessageService {
  private messageSubject = new BehaviorSubject<{ message: string, type: string }>(null);

  message$ = this.messageSubject.asObservable();

  constructor() { }

  showMessage(message: string, type: MessageType) {
    this.messageSubject.next({ message, type });
  }
}
