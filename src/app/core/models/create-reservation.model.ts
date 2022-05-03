import { List } from "immutable";

export interface CreateReservation {
    trajetsId: List<number>;
    clientId: number;
}
