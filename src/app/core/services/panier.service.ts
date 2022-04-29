import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemPanier, Trajet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _itemsPanierSubject: BehaviorSubject<List<ItemPanier>> = new BehaviorSubject<List<ItemPanier>>(List.of());
  itemsPanier$: Observable<List<ItemPanier>> = this._itemsPanierSubject.asObservable();

  constructor() { }

  addTrajet(trajet: Trajet){
    const items = this._itemsPanierSubject.getValue();
    let itemPanierIndex = items.findIndex((item: ItemPanier) => item.trajet.trajetId === trajet.trajetId);
    if (itemPanierIndex === -1) {
      this._itemsPanierSubject.next(items.push({trajet: trajet, quantite: 1, prixTotal: (trajet.estRemise? trajet.prixRemise : trajet.prix) || 0}));
    }
    else {
      this._itemsPanierSubject.next(items.map((item) => {
        if (item.trajet.trajetId === trajet.trajetId) {
          return {trajet: trajet, 
            quantite: item.quantite+1,
            prixTotal: item.prixTotal + ((trajet.estRemise? trajet.prixRemise : trajet.prix) || 0)};
        }
        return item;
      }));
    }
  }

  deleteTrajet(trajet: Trajet){
    let items: List<ItemPanier> = this._itemsPanierSubject.getValue();
    let index = items.findIndex((item) => item.trajet.trajetId === trajet.trajetId);
    if (index != -1) {
      this._itemsPanierSubject.next(items.delete(index));
    }
  }
}
