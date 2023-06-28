import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [TranslateService]
})
export class AppComponent {
	title = 'wfrp_npc_generator';

	constructor(public translate: TranslateService) {
		translate.setDefaultLang('en');
		let currentLang = localStorage.getItem('currentLang');
		if (!currentLang?.match('en') && !currentLang?.match('pl')) {
			translate.use('en');
		} else if (currentLang === 'en') {
			translate.use('en');
		} else {
			translate.use('pl');
		}
	}

	languageToggle(language: string) {
		localStorage.setItem('currentLang', language);
		this.translate.use(language);
	}
}
