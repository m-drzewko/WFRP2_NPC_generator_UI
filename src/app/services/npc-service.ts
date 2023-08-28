import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { SingleResponseObject } from "../shared/response/single-response-object";
import { HOST } from "../shared/utils";
import { Npc } from "../shared/model/npc";
import { AuthService } from "./auth.service";
import { ListResponseObject } from "../shared/response/list-response-object";
import { PagedResponseObject } from "../shared/response/paged-response-object";

@Injectable({
	providedIn: 'root'
})
export class NpcService {

	private generateNpcUrl = HOST + 'npc/generate';
	private saveNpcUrl = HOST + 'user/auth/npc/save';
	private pageOfNpcsUrl = HOST + 'user/auth/npc/getall';

	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	pageOfNpcs: Npc[] = [];

	constructor(private httpClient: HttpClient,
		private authService: AuthService,
		private translate: TranslateService) { }

	generateNpc(race: string, gender: string): Observable<SingleResponseObject> {
		console.log(race + " " + gender);
		let headers = new HttpHeaders()
			.set('Accept-Language', this.translate.currentLang);
		
		const url: string = this.generateNpcUrl + "?race=" + race + "&gender=" + gender;

		//TODO: change the request type to GET

		return this.httpClient.post<SingleResponseObject>(url, headers);
	}

	saveNewNpc(npc: Npc):  void {
		console.log("Attempting to save npc: " + npc);

		let headers = this.headers;

		headers = headers.set('Authorization', this.authService.provideToken());

		this.httpClient.post<SingleResponseObject>(this.saveNpcUrl, npc, {"headers": headers}).subscribe(
			(data) => {
				console.log('Post sent: ', data);
				if(data.statusCode === "ACCEPTED") {
					console.log("Npc saved!")
				}
			}, error => {
				console.log(error);
				// TODO implement displaying error dialog
			}
		);
	}

	requestPageOfNpcs(page: number) {
		page = page - 1;	

		let headers = this.headers;
		headers = headers.set('Authorization', this.authService.provideToken());

		let url = this.pageOfNpcsUrl + "?page=" + page;

		return this.httpClient.get<PagedResponseObject>(url, {"headers": headers});
	}

	// getPageOfNpcs() {
	// 	return this.pageOfNpcs;
	// }

	// setPageOfNpcs(npcs: Npc[]) {
	// 	this.pageOfNpcs = npcs;
	// }
}
