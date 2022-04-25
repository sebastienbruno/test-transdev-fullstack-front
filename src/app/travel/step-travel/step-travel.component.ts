import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-travel',
  templateUrl: './step-travel.component.html',
  styleUrls: ['./step-travel.component.scss']
})
export class StepTravelComponent implements OnInit {

  busList: {id:number; numero:number}[] = [
    {id: 1, numero:1},
    {id: 2, numero:2},
    {id: 3, numero:3},
    {id: 4, numero:4},
  ];
  
  travelFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.travelFormGroup = this._formBuilder.group({
      travelCtrl: ['', Validators.required]
    })
  }

}
