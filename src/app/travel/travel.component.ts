import { Component, ViewChild } from '@angular/core';
import { StepTravelComponent } from './step-travel/step-travel.component';
import { StepPaiementComponent } from './step-paiement/step-paiement.component';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {

  @ViewChild("stepper", { static: false }) stepper: MatStepper;

  @ViewChild(StepTravelComponent) stepTravelComponent: StepTravelComponent;
  @ViewChild(StepPaiementComponent) stepPaiementComponent: StepPaiementComponent;

  
  constructor() { } 

  goToStepPaiement(){
    this.stepper.next();
  }

}
