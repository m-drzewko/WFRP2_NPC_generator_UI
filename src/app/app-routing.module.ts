import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceDisplayComponent } from './race-display/race-display.component';
import { NpcGenerateComponent } from './npc/npc-generate/npc-generate.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NpcsDisplayComponent } from './npc/npcs-display/npcs-display.component';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const routes: Routes = [
	{
		path: "race-display",
		component: RaceDisplayComponent
	},
	{
		path: "npc-generate",
		component: NpcGenerateComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "registration",
		component: RegistrationComponent
	},
	{
		path: "verify",
		component: VerifyComponent
	},
	{
		path: "npcs-display",
		component: NpcsDisplayComponent,
		canActivate: [AuthenticationGuard]
	},
	{
		path: "",
		component: HomeContentComponent
	},
	{
		path: "**",
		component: HomeContentComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
