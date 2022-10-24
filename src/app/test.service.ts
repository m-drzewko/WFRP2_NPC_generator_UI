import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Race } from './race';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private racesUrl = 'http://localhost:8080/races';

  constructor(private httpClient: HttpClient) { }

  getRaces(): Observable<Race[]> {
      return this.httpClient.get<Race[]>(this.racesUrl)
        .pipe(
          tap(data => console.log(data))
        );
    }

}
