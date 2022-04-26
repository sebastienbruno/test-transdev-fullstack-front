import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import * as _moment from 'moment';
const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
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
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],})
export class StepPaiementComponent implements OnInit {

  paiementFormGroup: FormGroup;
  moyenPaiement: string;
  options: {name:string; libelle:string}[] = [
    {name:"CARTE_BANCAIRE", libelle: "Carte bancaire"},
    {name:"PAYPAL", libelle: "Paypal"}]
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paiementFormGroup = this._formBuilder.group({
      //paiementCtrl: ['', Validators.required],
      //emailFormControl: ['', Validators.required, Validators.email]
    });
  }
  
  onChangeTypeMoyenPaiement(){
    console.log('onChangeTypeMoyentPaiement');
  }
}
