export class Constants {

  public static readonly BASE_URI = '/cfa/api/';

  public static readonly STATUS_CODE = {
    OK: 200
  };

  public static readonly REQUEST_URLS = {
    LOGOUT: Constants.BASE_URI + 'v1/auth/logout',
  };

  public static readonly OPEN_URLS = {
    LOGIN: Constants.BASE_URI + 'v1/auth/login',
    REFRESH_TOKEN: Constants.BASE_URI + 'v1/auth/refresh/token',
    FORGOT_PASSWORD: Constants.BASE_URI + 'v1/forgot-password',
    FORGOT_PASSWORD_VALIDATE: Constants.BASE_URI + 'v1/forgot-password/validate',
    FORGOT_PASSWORD_RESET: Constants.BASE_URI + 'v1/forgot-password/reset'
  };

  public static readonly ATTRIBUTES: any = {
    mou: 'MOU',
    calls: 'Number of Calls',
    shortCalls: 'Short Calls'
  };

  public static readonly COLORS: any = {
    BLUE: 'blue',
    GREEN: 'green',
    PURPLE: 'purple',
    YELLOW: 'yellow',
    ORANGE: 'orange'
  };

  public static readonly CUSTOM_CHECK: any = {
    BLUE: 'customcheck_blue',
    GREEN: 'customcheck_green',
    PURPLE: 'customcheck_purple'
  };

  public static readonly EMPTY_FUNCTION = function () {
  };

  public static readonly FRAUD_TYPE: any = {
    IRSF: 'IRSF',
    SIMBOX: 'SIMBOX',
    CLI: 'CLI'
  };

  public static readonly SELECTED_VIEW: any = {
    SIM_VIEW: 'simview',
    SIMBOX_VIEW: 'simboxview',
    CASE_VIEW: 'caseView',
    CLUSTER_VIEW: 'clusterView'
  };

  public static readonly TRAFFIC_DIRECTION: any = {
    INCOMING: 'Incoming',
    OUTGOING: 'Outgoing'
  };

  public static readonly HIGHCHART_TYPE: any = {
    BAR: 'bar',
    VENN: 'venn'
  };

  public static readonly COLOR: any = {
    BLUE: 'blue',
    YELLOW: 'yellow',
    ORANGE: 'orange'
  };

  public static readonly tasksPerPage: number = 7;
  public static readonly rulesPerPage: number = 7;
  public static readonly PRN_COLOR_HEXCODE = '#F6C192';
  public static readonly ACTIVE = 'active';
  public static readonly PRN_COLOR = 'orange';
  public static readonly ORDER_BY_ASC = 'ASC';
  public static readonly ORDER_BY_DESC = 'DESC';
  public static readonly ARROW_UP = 'up';
  public static readonly ARROW_DOWN = 'down';
  public static readonly SELECT_STRING = 'select';
  public static readonly EMPTY_STRING = '';
  public static readonly AND_STRING = 'and';
  public static readonly OR_STRING = 'or';
  public static readonly SPACE_STRING = ' ';
  public static readonly BORDER_BOTTOM = 'border-bottom';
  public static readonly FORM_ELEMENT_BORDER_CSS = 'solid 1px red';
  public static readonly FORM_VALIDATION_ERROR_STRING = 'All (*) marked fields are mandatory !';
  public static readonly MOMENT_DATE_OBJECT_KEY = '_d';
  public static readonly CURRENT_USER = 'currentUser';
  public static readonly YES = 'Yes';
  public static readonly CANCEL = 'Cancel';
  public static readonly OK = 'Ok';
  public static readonly SUCCESS = 'Success';
  public static readonly ERROR = 'Error';
  public static readonly NO_CASES_FOUND = 'No Cases Found';
  public static readonly NO_DATA_FOUND = 'No Data Found';
  public static readonly DISMISS = 'dismiss';
  public static readonly PROP_CHECKED = 'checked';

  public static isAuthUrl(url: string): boolean {
    let REQUEST_URL_VALUES = [];
    Object.keys(Constants.REQUEST_URLS).forEach((key: string) => {
      REQUEST_URL_VALUES.push(Constants.REQUEST_URLS[key]);
    });
    return REQUEST_URL_VALUES.includes(url);
  }

}
