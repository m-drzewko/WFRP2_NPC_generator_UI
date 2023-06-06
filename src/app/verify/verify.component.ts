import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-verify',
    templateUrl: './verify.component.html',
    styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  
    constructor(private activatedRoute: ActivatedRoute,
        private authenticationService: AuthService) { }
  
    ngOnInit(): void {
        let token = this.activatedRoute.snapshot.queryParams["token"];
        this.authenticationService.verifyUser(token).subscribe(
            (data) => {
                console.log(data);
            }, (error) => {
                console.log(error);
            }
        );

        console.log(token);
    }
}
