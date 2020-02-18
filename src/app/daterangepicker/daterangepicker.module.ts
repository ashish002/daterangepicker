import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DaterangepickerComponent} from "./daterangepicker.component";

@NgModule({
  declarations: [
    DaterangepickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    DaterangepickerComponent
  ]
})
export class DaterangepickerModule { }
