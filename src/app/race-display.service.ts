import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Race } from "./race";


@Injectable({
    providedIn: 'root'
})
export class RaceDisplayService {

    private getAllRacesUrl = 'http://localhost:8080/races';

    constructor(private httpClient: HttpClient) { }

    getRaces(): Observable<Race[]> {
        return this.httpClient.get<Race[]>(this.getAllRacesUrl)
        .pipe(
            tap(data => console.log(data))
        )
    }
}