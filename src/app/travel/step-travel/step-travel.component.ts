import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-step-travel',
  templateUrl: './step-travel.component.html',
  styleUrls: ['./step-travel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepTravelComponent implements OnInit {

  busList: {id:number; numero:number}[] = [
    {id: 1, numero:1},
    {id: 2, numero:2},
    {id: 3, numero:3},
    {id: 4, numero:4},
  ];

  //A mettre dans modele
  trajets: {trajetId: number; dateDepart: number; nbrPlace: number; nbrPlaceRestante: number; prix:number; estRemise: boolean; prixRemise?: number}[] = [
    {trajetId: 1, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 8, prix:16, estRemise: false},
    {trajetId: 2, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 8, prix:16, estRemise: false},
    {trajetId: 3, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 8, prix:200, estRemise: true, prixRemise: 190 },
    {trajetId: 5, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 8, prix:16, estRemise: false},
    {trajetId: 6, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 8, prix:150, estRemise: true, prixRemise:142.5},
  ]
  
  travelFormGroup: FormGroup;
  panierVide$: Observable<boolean>;
  _panierVideSubject:Subject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.travelFormGroup = this._formBuilder.group({
      travelCtrl: ['', ]
    })
    this.panierVide$ = this._panierVideSubject.asObservable();
  }

  public onAddTrajet(trajetId: number) {
    console.log("Ajout du trajet", trajetId);
    this._panierVideSubject.next(false);
  }

}
