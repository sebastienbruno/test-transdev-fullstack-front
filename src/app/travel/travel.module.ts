import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from '../shared';
import { StepTravelComponent } from './step-travel/step-travel.component';
import { StepPaiementComponent } from './step-paiement/step-paiement.component';
import { StepConfirmationComponent } from './step-confirmation/step-confirmation.component';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    TravelComponent,
    StepTravelComponent,
    StepPaiementComponent,
    StepConfirmationComponent,
    BasketComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    TravelComponent
  ]
})
export class TravelModule { }
