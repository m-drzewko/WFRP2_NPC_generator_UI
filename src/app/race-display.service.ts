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
        )
    }

    postRace() {
        return this.httpClient.post(this.postRaceUrl,
            {
                "name": "Dwarf",
                "statsDto": {
                    "basicWeaponSkill": 30,
                    "basicBallisticSkill": 20,
                    "basicStrength": 20,
                    "basicToughness": 30,
                    "basicAgility": 10,
                    "basicIntelligence": 20,
                    "basicWillPower": 20,
                    "basicFellowship": 10,
                    "maxWounds": 12,
                    "movement": 3
                }
            }
        )
    }
}