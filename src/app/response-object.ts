import { Type } from "@angular/core";

export interface ResponseObject<Type> {
    statusCode: string;
    message: string;
    (arg: object): Type;
}
