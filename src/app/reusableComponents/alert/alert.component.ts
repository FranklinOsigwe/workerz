import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
@Input() alertType: string = '';
@Input() alertMessage: string = '';

// @Output() onBtnClicked = new EventEmitter<any>();

// onClick() {
//   this.onBtnClicked.emit();
// }
}