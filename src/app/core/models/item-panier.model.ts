import { Trajet } from "./trajet.model";

export interface ItemPanier {
    quantite: number;
    trajet: Trajet;
    prixTotal: number;
}
