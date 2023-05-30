import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../shared/utils';
import { SingleResponseObject } from '../response/single-response-object';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private verifyUrl = HOST + 'user/verify';
    private loginUrl = HOST + 'user/register';
    private registrationUrl = HOST + 'auth/login';
    private headers = new HttpHeaders().set('Content-Type', 'application/json')

    constructor(private httpClient: HttpClient) { }

    verifyUser(token: string): Observable<SingleResponseObject> {

        let params = new HttpParams().set("token", token);
        console.log(this.headers);
        return this.httpClient.patch<SingleResponseObject>(this.verifyUrl, null, 
            {"headers": this.headers, "params": params});
    }

    login() {
        //TODO implement login in this service
    }

    register() {
        //TODO implement registration in this service
    }
}
