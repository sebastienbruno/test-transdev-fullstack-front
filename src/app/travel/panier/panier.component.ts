import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { ItemPanier, Trajet } from '../../core/models';
import { PanierService } from '../../core/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

  items: List<ItemPanier>;
  items$: Observable<List<ItemPanier>>;

  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.items$ = this.panierService.itemsPanier$;
    this.items$.subscribe(
      (tickets) => {
        this.items = tickets;
        console.log(this.items);
      })
  }

  onDeleteItem(trajet: Trajet): void {
    this.panierService.deleteTrajet(trajet);
  }

  onAddItem(trajet: Trajet): void {
    this.panierService.addTrajet(trajet);
  }

}
