import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    loginUrl = 'localhost:8080/auth/login';
    bearerToken = '';
    loginForm: FormGroup<any>;
    showPassword = false;

    constructor(formBuilder: FormBuilder, httpClient: HttpClient, translate: TranslateService) {
        this.loginForm = formBuilder.nonNullable.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    })
    }

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    login() {
        throw new Error('Method not implemented.');
    }
  
}
