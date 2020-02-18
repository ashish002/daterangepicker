import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DaterangepickerComponent} from "./daterangepicker/daterangepicker.component";

@NgModule({
  declarations: [
    AppComponent,
    DaterangepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    DaterangepickerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
