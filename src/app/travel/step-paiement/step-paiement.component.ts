
import { PAIEMENT_PAYPAL, PAIEMENT_CARTE_BANCAIRE, PATTERN_CARTE_BANCAIRE } from '../../core/constants';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
import { Subscription } from 'rxjs';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-step-paiement',
  templateUrl: './step-paiement.component.html',
  styleUrls: ['./step-paiement.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],})
export class StepPaiementComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();

  PAYPAL = PAIEMENT_PAYPAL;
  CARTE_BANCAIRE = 'CARTE_BANCAIRE';
  paiementFormGroup: FormGroup;
  moyenPaiement: string;
  options: {name:string; libelle:string}[] = [
    {name:this.CARTE_BANCAIRE, libelle: "Carte bancaire"},
    {name:this.PAYPAL, libelle: "Paypal"}]

  errors: string[];
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paiementFormGroup = this._formBuilder.group({
      typeMoyenPaiement: ['', Validators.required],
      numeroCarte: [''],
      dateExpiration: [''],
      email: ['']
    });

    this.subscriptions.add(this.paiementFormGroup.get('typeMoyenPaiement')?.valueChanges.subscribe(value => {
      console.log('On change', value);
      if (value === PAIEMENT_CARTE_BANCAIRE) {
        this.paiementFormGroup.get('numeroCarte')?.setValidators([
          Validators.pattern(PATTERN_CARTE_BANCAIRE),
          Validators.required]);
        this.paiementFormGroup.get('dateExpiration')?.setValidators(Validators.required);
        this.paiementFormGroup.get('email')?.clearValidators();
      } else if (value === PAIEMENT_PAYPAL) {
        this.paiementFormGroup.get('numeroCarte')?.clearValidators();
        this.paiementFormGroup.get('dateExpiration')?.clearValidators();
        this.paiementFormGroup.get('email')?.setValidators([Validators.email, Validators.required]);
      }
      this.paiementFormGroup.get('numeroCarte')?.updateValueAndValidity();
      this.paiementFormGroup.get('dateExpiration')?.updateValueAndValidity();
      this.paiementFormGroup.get('email')?.updateValueAndValidity();
      this.errors = [];
    }));
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

  onSubmit(){
    console.log(this.paiementFormGroup.status);
    console.log(this.paiementFormGroup);
    if (this.paiementFormGroup?.controls['typeMoyenPaiement'].status === 'INVALID') {
      console.log('error');
      this.errors = ["La sélection d'un moyen de paiement est obligatoire"]
    }
    else {
      console.log("Paiement en cours");
      console.log(this.paiementFormGroup.value);
      console.log("Paiement accepté");
    }
  }


}
