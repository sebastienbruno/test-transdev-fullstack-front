import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'immutable';
import { ItemPanier } from 'src/app/core/models';

@Pipe({
  name: 'prixTotalPanier'
})
export class PrixTotalPanierPipe implements PipeTransform {

  transform(items: List<ItemPanier>, ...args: unknown[]): unknown {
    return items.reduce((total:number, item) => total + item.prixTotal, 0);
  }

}
