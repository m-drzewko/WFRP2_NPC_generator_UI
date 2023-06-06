import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../shared/model/login-dto';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginUrl = 'http://localhost:8080/auth/login';
    loginForm: FormGroup<any>;
    showPassword = false;
    isUserLoggedIn = false;

    constructor(private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        private authService: AuthService) {
        this.loginForm = formBuilder.nonNullable.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
    })
    }

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    attemptLogin() {
        let loginDto: LoginDto = {
            usernameOrEmail: this.loginForm.get("username")?.value,
            password: this.loginForm.get("password")?.value
        };

        this.authService.logIn(loginDto);
    }
}
