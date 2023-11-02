import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceDisplayComponent } from './race-display/race-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { NpcGenerateComponent } from './npc/npc-generate/npc-generate.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { VerifyComponent } from './verify/verify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeContentComponent } from './home-content/home-content.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationDialogComponent } from './registration/registration-dialog/registration-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { NpcsDisplayComponent } from './npc/npcs-display/npcs-display.component';
import { NpcDetailsComponent } from './npc/npcs-display/npc-details/npc-details.component';
import { NpcListComponent } from './npc/npcs-display/npc-list/npc-list.component';
import { NpcListItemComponent } from './npc/npcs-display/npc-list/npc-list-item/npc-list-item.component';
import { EmptyComponent } from './shared/empty/empty.component';
import { NpcEditComponent } from './npc/npcs-display/npc-edit/npc-edit.component';




@NgModule({
	declarations: [
		AppComponent,
		RaceDisplayComponent,
		NpcGenerateComponent,
  		RegistrationComponent,
  		LoginComponent,
  		VerifyComponent,
    	HomeContentComponent,
    	NavigationComponent,
    	RegistrationDialogComponent,
     	ErrorDialogComponent,
      	NpcsDisplayComponent,
      	NpcDetailsComponent,
       	NpcListComponent,
        NpcListItemComponent,
        EmptyComponent,
        NpcEditComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
  		BrowserAnimationsModule,
		MatDialogModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http);
}