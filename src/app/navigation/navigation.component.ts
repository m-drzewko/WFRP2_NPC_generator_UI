import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  @Output() languageSelected = new EventEmitter<string>();

  clickEnglish() {
    this.languageSelected.emit('en');
  }

  clickPolish() {
    this.languageSelected.emit('pl');
  }

}
