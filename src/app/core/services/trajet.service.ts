import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Observable, of } from 'rxjs';
import { Trajet } from '../models';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  busList: List<Bus> = List([
    {busId: 1, numero: 17},
    {busId: 2, numero: 52},
    {busId: 3, numero: 34},
    {busId: 4, numero: 14},
    {busId: 5, numero: 127},
    {busId: 6, numero: 398}
  ]);


  trajets: List<Trajet> = List([
    {bus: {busId: 1, numero:17}, trajetId: 1, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 1, prix:16, estRemise: false},
    {bus: {busId: 1, numero:17}, trajetId: 2, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 2, prix:16, estRemise: false},
    {bus: {busId: 1, numero:17}, trajetId: 3, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 3, prix:200, estRemise: true, prixRemise: 190 },
    {bus: {busId: 1, numero:17}, trajetId: 5, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 4, prix:16, estRemise: false},
    {bus: {busId: 1, numero:17}, trajetId: 6, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 5, prix:150, estRemise: true, prixRemise:142.5},
    {bus: {busId: 2, numero:52}, trajetId: 1, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 6, prix:16, estRemise: false},
    {bus: {busId: 2, numero:52}, trajetId: 2, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 7, prix:16, estRemise: false},
    {bus: {busId: 2, numero:52}, trajetId: 3, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 8, prix:200, estRemise: true, prixRemise: 190 },
    {bus: {busId: 2, numero:52}, trajetId: 5, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 9, prix:16, estRemise: false},
    {bus: {busId: 3, numero:34}, trajetId: 6, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 10, prix:150, estRemise: true, prixRemise:142.5},
    {bus: {busId: 3, numero:34}, trajetId: 1, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 11, prix:16, estRemise: false},
    {bus: {busId: 3, numero:34}, trajetId: 2, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 12, prix:16, estRemise: false},
    {bus: {busId: 3, numero:34}, trajetId: 3, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 13, prix:200, estRemise: true, prixRemise: 190 },
    {bus: {busId: 3, numero:34}, trajetId: 5, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 14, prix:16, estRemise: false},
    {bus: {busId: 4, numero:14}, trajetId: 6, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 15, prix:150, estRemise: true, prixRemise:142.5},
    {bus: {busId: 4, numero:14}, trajetId: 1, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 16, prix:16, estRemise: false},
    {bus: {busId: 4, numero:14}, trajetId: 2, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 17, prix:16, estRemise: false},
    {bus: {busId: 4, numero:14}, trajetId: 3, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 18, prix:200, estRemise: true, prixRemise: 190 },
    {bus: {busId: 4, numero:14}, trajetId: 5, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 19, prix:16, estRemise: false},
    {bus: {busId: 5, numero:127}, trajetId: 6, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 20, prix:150, estRemise: true, prixRemise:142.5},
    {bus: {busId: 5, numero:127}, trajetId: 1, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 21, prix:16, estRemise: false},
    {bus: {busId: 5, numero:127}, trajetId: 2, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 22, prix:16, estRemise: false},
    {bus: {busId: 5, numero:127}, trajetId: 3, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 23, prix:200, estRemise: true, prixRemise: 190 },
    {bus: {busId: 5, numero:127}, trajetId: 5, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 24, prix:16, estRemise: false},
    {bus: {busId: 6, numero:398}, trajetId: 6, dateDepart: Date.now(), nbrPlace: 10, nbrPlaceRestante: 25, prix:150, estRemise: true, prixRemise:142.5},
  ]);


  constructor() { }

  getAllByBusId(busId: number): Observable<List<Trajet>> {
    return of(this.trajets.filter((trajet: Trajet) => trajet.bus.busId === busId));
  }

  getAllBusFail() {
    return of(this.trajets
      .map(trajet => trajet.bus)
      .toOrderedSet()
      .toList());
  }
  getAllBus() {
    return of(this.busList);
  }

}
