import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from '../shared/utils';
import { SingleResponseObject } from '../shared/response/single-response-object';
import { Observable } from 'rxjs';
import { LoginDto } from '../shared/model/login-dto';
import { RegistrationDto } from '../shared/model/registration-dto';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private verifyUrl = HOST + 'user/verify';
    private registrationUrl = HOST + 'user/register';
    private loginUrl = HOST + 'auth/login';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    public isLoggedIn = false;

    constructor(private httpClient: HttpClient) { }

    verifyUser(token: string): Observable<SingleResponseObject> {

        let params = new HttpParams().set("token", token);
        console.log(this.headers);
        return this.httpClient.patch<SingleResponseObject>(this.verifyUrl, null, 
            {"headers": this.headers, "params": params});
    }

    logIn(loginDto: LoginDto) {
        let bearerToken;
        this.httpClient.post<any>(this.loginUrl, loginDto, {"headers": this.headers, observe: "response"}).subscribe((data) => {
            console.log('Attempting to log in', data);
            console.log(data.headers.get('Access_Token'));
            if (data.status === 200) {
                bearerToken = data.headers.get('Access_Token')||'';
                if (bearerToken.length > 0) {
                    sessionStorage.setItem('Access_Token', bearerToken);
                    this.isLoggedIn = true;
                }
            }
            console.log('BEARER ' + sessionStorage.getItem('Access_Token'));
        });
    }

    logOut(): void {
        sessionStorage.removeItem('Access_Token');
        this.isLoggedIn = false;
    }

    isUserLoggedIn(): boolean {
        let bearerToken = sessionStorage.getItem('Access_Token') || '';
        if (bearerToken.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    register(registrationDto: RegistrationDto): string {
        let returnString = '';

        this.httpClient.post<SingleResponseObject>(this.registrationUrl, registrationDto, {"headers": this.headers}).subscribe((data) => {
            console.log('Post sent: ', data);
            let token = data.object.token;
            console.log(token);
            returnString = token;
        }, error => {
            console.log(error);
            //TODO implement passing error messages to registration component
            //to show in the dialog
            ///????
            returnString = error.message;
        });
        return returnString;
    }
}
