import { List } from "immutable";
import { Trajet } from "./trajet.model";

export interface CreateReservation {
    trajetsId: List<number>;
    clientId: number;
}
