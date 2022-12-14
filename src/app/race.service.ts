import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, tap } from "rxjs";
import { Race } from "./race";


@Injectable({
    providedIn: 'root'
})
export class RaceService {

    private getAllRacesUrl = 'http://localhost:8080/races';
    private postRaceUrl = 'http://localhost:8080/races/new';

    constructor(private httpClient: HttpClient, private translate: TranslateService) { }

    //both getRaces() and postRace() now send also a header
    //to the backend as part of the request;
    //this will be kept as an example for now,
    //but will probably only come in handy later
    //when character generation is in place

    getRaces(): Observable<Race[]> {
        let headers = new HttpHeaders()
            .set('Accept-Language', this.translate.currentLang);

        return this.httpClient.get<Race[]>(this.getAllRacesUrl, {
            headers: headers
        })
        .pipe(
            tap(data => console.log(data))
        );
    }

    postRace(formData: Race): Observable<Race> {
        let headers = new HttpHeaders()
        .set('Accept-Language', this.translate.currentLang);

        return this.httpClient.post<any>(this.postRaceUrl, formData, {
            headers: headers
        });
    }
}