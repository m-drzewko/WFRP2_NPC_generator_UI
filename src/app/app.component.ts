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
		//TODO save chosen language in a cookie and read from there
		//so that after reloading the language doesn't change back
		//to English
		translate.use('en');
	}

	languageToggle(language: string) {
		this.translate.use(language);
	}
}
