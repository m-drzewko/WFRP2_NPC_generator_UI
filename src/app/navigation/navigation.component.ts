import { Component, EventEmitter, Output } from '@angular/core';
import { ENGLISH, POLISH } from '../shared/utils';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Output() languageSelected = new EventEmitter<string>();

  constructor(protected authService: AuthService) { }

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
