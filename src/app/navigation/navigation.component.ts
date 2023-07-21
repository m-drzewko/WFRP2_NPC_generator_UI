import { Component, DoCheck, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ENGLISH, POLISH } from '../shared/utils';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements DoCheck {

    @Output() languageSelected = new EventEmitter<string>();

    constructor(protected authService: AuthService) { }

    ngDoCheck(): void {
        this.authService.isUserLoggedIn();
    }

    clickEnglish() {
        this.languageSelected.emit(ENGLISH);
    }

    clickPolish() {
        this.languageSelected.emit(POLISH);
    }

    doLogout() {
        this.authService.logOut();
    }

}
