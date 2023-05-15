import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-verify',
    templateUrl: './verify.component.html',
    styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  
    constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
        // TODO: implement token verification
        let token = this.activatedRoute.snapshot.queryParams["token"];
        console.log(token);
    }
}
