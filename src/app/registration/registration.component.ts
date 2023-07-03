import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    registrationForm: FormGroup;
    showPassword = false;
    token: String = '';

    constructor(private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        public dialog: MatDialog,
        private authService: AuthService) {
        this.registrationForm = formBuilder.nonNullable.group({
            username: ['', [Validators.required, Validators.pattern('[^@]+'), Validators.minLength(6), Validators.maxLength(64)]],
            email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(64)]]
        })
    }

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    attemptRegistration() {
        console.log(this.registrationForm.value);
        
        let registrationDto = {
            username: this.registrationForm.get(["username"])?.value,
            email: this.registrationForm.get(["email"])?.value,
            password: this.registrationForm.get(["password"])?.value
        };

        this.token = this.authService.register(registrationDto, this.dialog);
    }
}
