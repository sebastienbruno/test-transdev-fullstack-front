import { Component, ViewChild } from '@angular/core';
import { StepTravelComponent } from './step-travel/step-travel.component';
import { StepPaiementComponent } from './step-paiement/step-paiement.component';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent {

  @ViewChild(StepTravelComponent) stepTravelComponent: StepTravelComponent;
  @ViewChild(StepPaiementComponent) stepPaiementComponent: StepPaiementComponent;

  
  constructor() { } 

  get frmStepOne() {
    return this.stepTravelComponent ? this.stepTravelComponent.travelFormGroup : null;
 }

}
