import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaceDisplayComponent } from './race-display/race-display.component';
import { RaceSubmitComponent } from './race-submit/race-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceDisplayComponent,
    RaceSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
