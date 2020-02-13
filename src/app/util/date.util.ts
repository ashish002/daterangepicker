declare var moment: any;

export class DateUtil {

  public static dateTimeString: string = '_d';

  private static monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public static milisInSecond: number = 1000;
  public static milisInMinute: number = 60 * 1000;
  public static milisInHour: number = 3600 * 1000;
  public static milisInDay: number = 24 * 3600 * 1000;
  public static milisInMonth: number = 30 * 24 * 3600 * 1000;

  public static DATE_FORMAT_DD_MMM_YYYY: string = 'DD MMM YYYY';
  public static DATE_FORMAT_dd_MMM_yyyy: string = 'dd MMM yyyy';
  public static DATE_FORMAT_EEE_dd_MMM_yyyy: string = 'EEE, dd MMM yyyy';
  public static DATE_FORMAT_dd_MMM: string = 'dd MMM';
  public static DATE_FORMAT_DD_MMM: string = 'DD MMM';
  public static DATE_FORMAT_hh_mm_A: string = 'hh:mm A';
  public static DATE_FORMAT_hh_mm_a: string = 'hh:mm a';
  public static DATE_FORMAT_MMM: string = 'MMM';

  public static DATE_RANGE: any = {
    WEEK: 'Week',
    MONTH: 'Month',
    QUARTER: 'Quarter'
  };

  static getStartTime(duration: string) {
    let startTime: number = moment.utc().startOf(duration)[this.dateTimeString].getTime();
    let timeRange = localStorage.getItem('timeRange');
    if (timeRange && parseInt(timeRange) > 0) {
      startTime = DateUtil.getStartTimeFromTimeRange(timeRange, duration);
    }
    return startTime;
  }

  static getEndTime(duration: string) {
    let endTime: number = moment.utc().endOf(duration)[this.dateTimeString].getTime();
    let timeRange = localStorage.getItem('timeRange');
    if (timeRange && parseInt(timeRange) > 0) {
      endTime = DateUtil.getEndTimeFromTimeRange(timeRange, duration);
    }
    return endTime;
  }

  static getEpochTimeInSeconds(time) {
    return Math.floor(time / 1000);
  }

  static getStartTimeFromTimeRange(timeRange, duration) {
    return moment.utc(moment.unix(timeRange)).startOf(duration)[this.dateTimeString].getTime();
  }

  static getEndTimeFromTimeRange(timeRange, duration) {
    return moment.utc(moment.unix(timeRange)).endOf(duration)[this.dateTimeString].getTime();
  }

  /**
   This method calculate the startTime and EndTime from the dateRangeString
   i.e if dateRangeString is Week then startTime will be startOfWeek And
   EndTime will be endOfWeek.

   @param:dateRangeString:String
   @return:Object
   **/
  static getDateRangeFromSelectedRange(dateRangeString: string) {
    let startTime: number;
    let endTime: number;
    let currentTime = moment.utc();
    let timeRange = localStorage.getItem('timeRange');
    if (timeRange && parseInt(timeRange) > 0) {
      currentTime = moment.utc(moment.unix(timeRange));
    }

    if (dateRangeString === 'Today') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).startOf('day')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('day')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'Week') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).startOf('week')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('week')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'This Week') {
      if (moment(currentTime).startOf('week').day() == 0) {
        // check if start day of week is sunday then change it monday as per iso week
        startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).startOf('week').add(1, 'day')[this.dateTimeString].getTime());
        endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('week').add(1, 'day')[this.dateTimeString].getTime());
      }
      else {
        startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).startOf('week')[this.dateTimeString].getTime());
        endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('week')[this.dateTimeString].getTime());
      }
    }
    else if (dateRangeString === 'This Month') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).startOf('month')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('month')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'Last Six Months') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(5, 'month').startOf('month')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('month')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'Last Month') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'month').startOf('month')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'month').endOf('month')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'Last Quarter') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'quarter').startOf('quarter')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'quarter').endOf('quarter')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'Last Year') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'year').startOf('year')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'year').endOf('year')[this.dateTimeString].getTime());
    }

    // This v/s Last
    else if (dateRangeString === 'day') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'day').startOf('day')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('day')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'week') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'week').startOf('week')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('week')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'month') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'month').startOf('month')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('month')[this.dateTimeString].getTime());
    }
    else if (dateRangeString === 'quarter') {
      startTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(1, 'quarter').startOf('quarter')[this.dateTimeString].getTime());
      endTime = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('quarter')[this.dateTimeString].getTime());
    }
    return {
      startTime: startTime,
      endTime: endTime
    };
  }

  static getDateRangeInString(startTime: number, endTime: number) {
    let dateRangeString;
    let startTimeMoment = moment.utc(startTime * 1000);
    let endTimeMoment = moment.utc(endTime * 1000);

    dateRangeString = startTimeMoment.date() + ' ' + this.monthList[startTimeMoment.month()] + ' ' + startTimeMoment.year() + ' - ' +
                      endTimeMoment.date() + ' ' + this.monthList[endTimeMoment.month()] + ' ' + endTimeMoment.year();

    return dateRangeString;
  }

  static getStartEndTimeByNumberOfDays(currentTime: any, numberOfDays: number) {
    let startEndTime: any = {'startTime': null, 'endTime': null};
    startEndTime['startTime'] = DateUtil.getEpochTimeInSeconds(moment(currentTime).subtract(numberOfDays, 'day').startOf('day')[this.dateTimeString].getTime());
    startEndTime['endTime'] = DateUtil.getEpochTimeInSeconds(moment(currentTime).endOf('day')[DateUtil.dateTimeString].getTime());
    return startEndTime;
  }

}
