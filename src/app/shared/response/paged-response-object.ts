import { ListResponseObject } from "./list-response-object";

export interface PagedResponseObject extends ListResponseObject {
    pages: number;
}