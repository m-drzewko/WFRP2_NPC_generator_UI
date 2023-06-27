import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { RegistrationDialogComponent } from '../registration/registration-dialog/registration-dialog.component';
import { LoginDto } from '../shared/model/login-dto';
import { RegistrationDto } from '../shared/model/registration-dto';
import { SingleResponseObject } from '../shared/response/single-response-object';
import { HOST, SERVER_DOWN } from '../shared/utils';
import { ErrorDialogComponent } from '../shared/error-dialog/error-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private verifyUrl = HOST + 'user/verify';
    private registrationUrl = HOST + 'user/register';
    private loginUrl = HOST + 'auth/login';
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    public isLoggedIn = false;

    constructor(private httpClient: HttpClient, private translate: TranslateService, private router: Router) { }

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
                    this.router.navigate([""]);
                }
            }
            console.log('BEARER ' + sessionStorage.getItem('Access_Token'));
        });
    }

    logOut(): void {
        sessionStorage.removeItem('Access_Token');
        this.isLoggedIn = false;
        this.router.navigate([""]);
    }

    //TODO implement check if JWT is expired

    isUserLoggedIn(): boolean {
        let bearerToken = sessionStorage.getItem('Access_Token') || '';

        if (bearerToken.length > 0) {
            return this.isLoggedIn = true;
        } else {
            return this.isLoggedIn = false;
        }
    }

    register(registrationDto: RegistrationDto, dialog: MatDialog): string {
        let returnString = '';

        let headers = this.headers;

        headers = headers.set('Accept-Language', this.translate.currentLang);


        this.httpClient.post<SingleResponseObject>(this.registrationUrl, registrationDto, {"headers": headers}).subscribe(
            (data) => {
            console.log('Post sent: ', data);
            let token = data.object.token;
            console.log(token);
            returnString = token;
            dialog.open(RegistrationDialogComponent, {data: {token: token}})
        }, error => {
            console.log(error);
            if (error.status === 0) {
                dialog.open(ErrorDialogComponent, {data: {errorMessage: SERVER_DOWN}});
            } else {
                dialog.open(ErrorDialogComponent, {data: {errorMessage: error.error.message}});
                returnString = error.message;
            }
        });
        return returnString;
    }
}
