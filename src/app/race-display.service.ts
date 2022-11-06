import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Race } from "./race";


@Injectable({
    providedIn: 'root'
})
export class RaceDisplayService {

    private getAllRacesUrl = 'http://localhost:8080/races';
    private postRaceUrl = 'http://localhost:8080/races/new';

    constructor(private httpClient: HttpClient) { }

    getRaces(): Observable<Race[]> {
        return this.httpClient.get<Race[]>(this.getAllRacesUrl)
        .pipe(
            tap(data => console.log(data))
        );
    }

    // postRace(formData: Object): Observable<Race> {
    //     let jsonData = JSON.stringify(formData);
    //     console.log(jsonData);
    //     return this.httpClient.post(this.postRaceUrl, jsonData);
    // }
}