import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, tap } from "rxjs";
import { ListResponseObject } from "../response/list-response-object";


@Injectable({
	providedIn: 'root'
})
export class RaceService {

	private getAllRacesUrl = 'http://localhost:8080/race/races';

	constructor(private httpClient: HttpClient, private translate: TranslateService) { }

	getRaces(): Observable<ListResponseObject> {
		let headers = new HttpHeaders()
			.set('Accept-Language', this.translate.currentLang);

		return this.httpClient.get<ListResponseObject>(this.getAllRacesUrl, {
			headers: headers
		})
			.pipe(
				tap(data => console.log(data))
			);
	}
}