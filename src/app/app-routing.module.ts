import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceDisplayComponent } from './race-display/race-display.component';

const routes: Routes = [
  {
    path: "race-display",
    component: RaceDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
