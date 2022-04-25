import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-paiement',
  templateUrl: './step-paiement.component.html',
  styleUrls: ['./step-paiement.component.scss']
})
export class StepPaiementComponent implements OnInit {

  paiementFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.paiementFormGroup = this._formBuilder.group({
      paiementCtrl: ['', Validators.required]
    })
  }

}
