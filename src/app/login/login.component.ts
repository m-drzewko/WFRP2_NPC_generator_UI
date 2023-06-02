import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginUrl = 'http://localhost:8080/auth/login';
    bearerToken = '';
    loginForm: FormGroup<any>;
    showPassword = false;

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
        this.loginForm = formBuilder.nonNullable.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
    }

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    login() {
        let loginDto = {
            usernameOrEmail: this.loginForm.get("username")?.value,
            password: this.loginForm.get("password")?.value
        };

        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');

        
        this.httpClient.post<any>(this.loginUrl, loginDto, {"headers": headers, observe: "response"}).subscribe((data) => {
            console.log('Attempting to log in', data);
            console.log(data.headers.get('Access_Token'));
            if (data.status === 200) {
                this.bearerToken = data.headers.get('Access_Token')||'';
                if (this.bearerToken.length > 0) {
                    sessionStorage.setItem('Access_Token', this.bearerToken);
                }
            }
            console.log(sessionStorage.getItem('Access_Token'));
        });
    }
}
