import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from '../shared';
import { StepTravelComponent } from './step-travel/step-travel.component';
import { StepPaiementComponent } from './step-paiement/step-paiement.component';
import { StepConfirmationComponent } from './step-confirmation/step-confirmation.component';
import { RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


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
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatMomentDateModule,
    NgbPaginationModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    TravelComponent
  ]
})
export class TravelModule { }
