import { Bus } from "./bus.model";

export interface Trajet {
    trajetId: number;
    bus: Bus;
    dateDepart: number;
    nbrPlace: number;
    nbrPlaceRestante: number;
    prix: number;
    estRemise: boolean;
    prixRemise?: number; 
}
