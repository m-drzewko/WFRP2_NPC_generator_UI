import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, tap } from "rxjs";
import { ListResponseObject } from "../shared/response/list-response-object";
import { HOST } from "../shared/utils";


@Injectable({
	providedIn: 'root'
})
export class RaceService {

	private getAllRacesUrl = HOST + 'race/races';

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