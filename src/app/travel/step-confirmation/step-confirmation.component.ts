import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-confirmation',
  templateUrl: './step-confirmation.component.html',
  styleUrls: ['./step-confirmation.component.scss']
})
export class StepConfirmationComponent implements OnInit {

  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onResetStepper() {
    this.reset.emit();
  }
}
