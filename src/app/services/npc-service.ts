import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { SingleResponseObject } from "../shared/response/single-response-object";
import { HOST } from "../shared/utils";

@Injectable({
	providedIn: 'root'
})
export class NpcService {

	private getAllRacesUrl = HOST + 'npc/generate';

	constructor(private httpClient: HttpClient, private translate: TranslateService) { }

	generateNpc(race: string, gender: string): Observable<SingleResponseObject> {
		console.log(race + " " + gender);
		let headers = new HttpHeaders()
			.set('Accept-Language', this.translate.currentLang);
		
		const url: string = this.getAllRacesUrl + "?race=" + race + "&gender=" + gender;

		//TODO: change the request type to GET

		return this.httpClient.post<SingleResponseObject>(url, headers);
	}
}
