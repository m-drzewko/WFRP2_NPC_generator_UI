import { Race } from "./race";

export interface RacesResponseObject {
    statusCode: string;
    message: string;
    object: Race[];
}
