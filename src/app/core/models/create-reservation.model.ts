import { List } from "immutable";
import { BilletDto } from "./billet-dto.model";
import { ItemPanier } from "./item-panier.model";

export interface CreateReservation {
    billets: List<BilletDto>;
    clientId: number;
}
