import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../shared/model/login-dto';
import { HOST } from '../shared/utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginUrl = HOST + 'auth/login';
    loginForm: FormGroup<any>;
    showPassword = false;

    constructor(private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        private authService: AuthService,
        private router: Router) {
        if(authService.isLoggedIn) {
            this.router.navigate([""]);
        }
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
