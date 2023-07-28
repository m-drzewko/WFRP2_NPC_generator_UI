import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { SingleResponseObject } from "../shared/response/single-response-object";
import { HOST } from "../shared/utils";
import { Npc } from "../shared/model/npc";
import { AuthService } from "./auth.service";

@Injectable({
	providedIn: 'root'
})
export class NpcService {

	private getAllRacesUrl = HOST + 'npc/generate';
	private saveNpcUrl = HOST + 'user/auth/npc/save';

	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private httpClient: HttpClient,
		private authService: AuthService,
		private translate: TranslateService) { }

	generateNpc(race: string, gender: string): Observable<SingleResponseObject> {
		console.log(race + " " + gender);
		let headers = new HttpHeaders()
			.set('Accept-Language', this.translate.currentLang);
		
		const url: string = this.getAllRacesUrl + "?race=" + race + "&gender=" + gender;

		//TODO: change the request type to GET

		return this.httpClient.post<SingleResponseObject>(url, headers);
	}

	saveNewNpc(npc: Npc):  void {
		console.log("Attempting to save npc: " + npc);

		let headers = this.headers;

		headers = headers.set('Authorization', this.authService.provideToken());

		console.log(headers);

		this.httpClient.post<SingleResponseObject>(this.saveNpcUrl, npc, {"headers": headers}).subscribe(
			(data) => {
				console.log('Post sent: ', data);
				if(data.statusCode === "ACCEPTED") {
					console.log("Npc saved!")
				}
			}, error => {
				console.log(error);
			}
		);
	}
}
