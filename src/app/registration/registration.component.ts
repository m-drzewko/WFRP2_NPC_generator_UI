import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SingleResponseObject } from '../response/single-response-object';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    registrationForm: FormGroup;
    showPassword = false;
    private registrationLink = 'localhost:8080/user/register';
    token: String = '';

    constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private translate: TranslateService) {
        this.registrationForm = formBuilder.nonNullable.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        })
    }

    toggleShowPassword() {
        this.showPassword = !this.showPassword;
    }

    register() {
        console.log(this.registrationForm.value);
        let registrationDto = {
            username: this.registrationForm.get(["username"])?.value,
            email: this.registrationForm.get(["email"])?.value,
            password: this.registrationForm.get(["password"])?.value
        }

        let headers = new HttpHeaders();
    
        this.httpClient.post<SingleResponseObject>(this.registrationLink, registrationDto).subscribe((data) => {
            console.log('Post sent: ', data);
            this.token = data.object.token;
        }, error => {console.log(error)});
    }
}
