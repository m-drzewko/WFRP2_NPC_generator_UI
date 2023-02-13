import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaceDisplayComponent } from './race-display/race-display.component';
import { NpcGenerateComponent } from './npc-generate/npc-generate.component';

const routes: Routes = [
  {
    path: "race-display",
    component: RaceDisplayComponent
  },
  {
    path: "npc-generate",
    component: NpcGenerateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
