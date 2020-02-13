import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daterangepicker';
  dateRangePickerPresets: Array<string> = ['Yesterday', 'Last 7 Days', 'Last 30 Days', 'Last Month'];

  /**
   * @param event
   * @param attribute
   * Updates changed value of date range picker as from and to for DateRange type Filter and add corresponding filter label.
   */
  dateRangeValueChanged(event) {
    console.log("Date changed!!!!");
  }

}
