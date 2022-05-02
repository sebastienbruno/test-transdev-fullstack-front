import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { map, Observable, of, switchMap } from 'rxjs';
import { CreateReservation, Reservation } from '../models';
import { ApiService } from './api.service';
import { PanierService } from './panier.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private _clientId = 1;

  constructor(private apiService: ApiService,
    private panierService: PanierService) { }

  public create(): Observable<Reservation> {
    let createReseravation: CreateReservation = {
      trajetsId: List<number>(),
      clientId: this._clientId
    }
    return this.panierService.itemsPanier$.pipe(
        switchMap((items) => {
          createReseravation.trajetsId = items.map((item) => item.trajet.trajetId);
          return this.apiService.post('/reservations', createReseravation);
        }))
  }
  
}
