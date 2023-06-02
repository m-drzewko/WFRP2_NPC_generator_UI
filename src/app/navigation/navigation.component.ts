import { Component, EventEmitter, Output } from '@angular/core';
import { ENGLISH, POLISH } from '../shared/utils';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Output() languageSelected = new EventEmitter<string>();

  clickEnglish() {
    this.languageSelected.emit(ENGLISH);
  }

  clickPolish() {
    this.languageSelected.emit(POLISH);
  }

}
