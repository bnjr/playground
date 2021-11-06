"use strict";
exports.id = 992;
exports.ids = [992];
exports.modules = {

/***/ 64526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export AlertsHelper */
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53522);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92662);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var AlertTypes;

(function (AlertTypes) {
  AlertTypes["ERROR"] = "danger";
  AlertTypes["SUCCESS"] = "success";
  AlertTypes["INFO"] = "light";
})(AlertTypes || (AlertTypes = {}));

class AlertsHelper {
  /**
   * Renders a success flash message
   * @param tx I18n string must be passed
   */
  static success({
    text,
    tx,
    txOptions,
    duration
  }) {
    // const message = options?.plainText
    //   ? tx
    //   : translate(tx || 'error_unknown', _.get(options, 'txOptions', {}))
    const {
      toast
    } = new _stores__WEBPACK_IMPORTED_MODULE_0__/* .ToastStoreImpl */ .Ls();
    toast.open = true;
    const successMessage = text || (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)(tx);
    toast.message = successMessage;
    toast.duration = duration || AlertsHelper.DURATION, toast.color = AlertTypes.SUCCESS, toast.buttons = [{
      text: 'Done',
      role: 'cancel'
    }];
    const {
      toastStore
    } = _stores__WEBPACK_IMPORTED_MODULE_0__/* .SingletonStore.getInstance */ .hC.getInstance();
    toastStore.setToast(toast);
  }
  /**
   * Renders a info flash message
   * @param tx I18n string must be passed
   */


  static info({
    text,
    tx,
    txOptions,
    duration
  }) {
    const {
      toast
    } = new _stores__WEBPACK_IMPORTED_MODULE_0__/* .ToastStoreImpl */ .Ls();
    toast.open = true;
    const successMessage = text || (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)(tx);
    toast.message = successMessage;
    toast.duration = duration || AlertsHelper.DURATION, toast.color = AlertTypes.INFO, toast.buttons = [{
      text: 'Done',
      role: 'cancel'
    }];
    const {
      toastStore
    } = _stores__WEBPACK_IMPORTED_MODULE_0__/* .SingletonStore.getInstance */ .hC.getInstance();
    toastStore.setToast(toast);
  }
  /**
   * Renders a error flash message
   * @param tx I18n string must be passed
   */


  static error({
    text,
    tx,
    txOptions,
    duration
  }) {
    // const message = options?.plainText
    //   ? tx
    //   : translate(tx || 'error_unknown', _.get(options, 'txOptions', {}))
    const {
      toast
    } = new _stores__WEBPACK_IMPORTED_MODULE_0__/* .ToastStoreImpl */ .Ls();
    toast.open = true;
    const errorMessage = text || (0,_i18n__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .I)(tx);
    toast.message = errorMessage;
    toast.duration = duration || AlertsHelper.DURATION, toast.color = AlertTypes.ERROR, toast.buttons = [{
      text: 'Done',
      role: 'cancel'
    }];
    const {
      toastStore
    } = _stores__WEBPACK_IMPORTED_MODULE_0__/* .SingletonStore.getInstance */ .hC.getInstance();
    toastStore.setToast(toast);
  }

}

_defineProperty(AlertsHelper, "DURATION", 2000);

/***/ }),

/***/ 69854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OH": () => (/* reexport */ RequestHelper)
});

// UNUSED EXPORTS: AlertsHelper, FormHelper, Initials

// EXTERNAL MODULE: ./src/lib/alerts.helper.ts
var alerts_helper = __webpack_require__(64526);
// EXTERNAL MODULE: ./src/lib/form.helper.ts + 1 modules
var form_helper = __webpack_require__(24436);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
;// CONCATENATED MODULE: ./src/lib/request.helper.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class RequestHelper {
  constructor(url) {
    _defineProperty(this, "resourceUrl", void 0);

    this.resourceUrl = url;
  }

  addQueries(queryObj) {
    if (!queryObj) {
      return this.resourceUrl;
    }

    const keys = [];
    let queryString = this.resourceUrl; // Store the keys that have values

    lodash_default().each(queryObj, (value, key) => {
      if (!lodash_default().isNil(value)) {
        keys.push(key);
      }
    });

    if (keys.length) {
      keys.forEach((key, index) => {
        const symbol = !!index ? '&' : '?'; // @ts-ignore

        queryString = `${queryString}${symbol}${lodash_default().snakeCase(key)}=${encodeURIComponent(queryObj[key].toString())}`;
      });
    }

    return queryString;
  }

}
;// CONCATENATED MODULE: ./src/lib/index.ts
 // export * from './device.helper'



 // export * from './format-date.helper'

/***/ }),

/***/ 33840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n5": () => (/* binding */ User),
/* harmony export */   "nL": () => (/* binding */ Duration),
/* harmony export */   "Y0": () => (/* binding */ Gender),
/* harmony export */   "$d": () => (/* binding */ Amount)
/* harmony export */ });
/* unused harmony exports CustomerOrganisation, AssociateOrganisation, ServiceDefinition, Review, Service, Organisation, Profile, Language, SkillNames, SkillExperience, SkillLevel, Package, Location, Address, Skill, Image, Media */
/* harmony import */ var _aws_amplify_datastore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74956);
/* harmony import */ var _aws_amplify_datastore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_datastore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67993);
// @ts-check


const Profile = {
  "CUSTOMER": "CUSTOMER",
  "PROVIDER": "PROVIDER",
  "ASSOCIATE": "ASSOCIATE"
};
const Language = {
  "EN": "EN",
  "HI": "HI",
  "BN": "BN"
};
const SkillNames = {
  "SKATING": "SKATING",
  "DANCING": "DANCING",
  "SINGING": "SINGING",
  "DRAWING": "DRAWING",
  "RECITATION": "RECITATION",
  "SWIMMING": "SWIMMING",
  "TENNIS": "TENNIS",
  "MUSIC": "MUSIC",
  "CHESS": "CHESS"
};
const Duration = {
  "ONETIME": "ONETIME",
  "MONTHLY": "MONTHLY"
};
const SkillExperience = {
  "BELOWONE": "BELOWONE",
  "ONETOTHREE": "ONETOTHREE",
  "THREETOFIVE": "THREETOFIVE",
  "MORETHANFIVE": "MORETHANFIVE"
};
const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE",
  "OTHER": "OTHER"
};
const SkillLevel = {
  "BEGINNER": "BEGINNER",
  "INTERMEDIATE": "INTERMEDIATE",
  "EXPERT": "EXPERT"
};
const {
  CustomerOrganisation,
  AssociateOrganisation,
  ServiceDefinition,
  Review,
  Service,
  User,
  Organisation,
  Package,
  Amount,
  Location,
  Address,
  Skill,
  Image,
  Media
} = (0,_aws_amplify_datastore__WEBPACK_IMPORTED_MODULE_1__.initSchema)(_schema__WEBPACK_IMPORTED_MODULE_0__/* .schema */ .f);


/***/ }),

/***/ 6434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ images)
/* harmony export */ });
// All the images must be imported here and used with withTheme HOC
const images = {
  logo: __webpack_require__(392),
  banner: __webpack_require__(84926),
  profile: __webpack_require__(9484),
  login: '/images/app/login/Rectangle97.png'
};

/***/ }),

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ palette)
/* harmony export */ });
const palette = {
  black: '#000000',
  white: '#FFFFFF',
  offWhite: '#FAFAFA',
  blue: '#2F80ED',
  blueLight: '#2D9CDB',
  blueLighter: '#56CCF2',
  red: '#EB5757',
  greyTransparent2: 'rgba(0, 0, 0, 0.2)',
  grey2: '#6e6e6e',
  greyLight2: '#d1d1d1',
  greyLighter2: '#F0F0F0',
  greyLightest2: '#F9F9F9',
  greyDark2: '#4A4A4A',
  greenDark: '#219653',
  green: '#27AE60',
  greenLight: '#6FCF97',
  greyDarker: '#333333',
  greyDark: '#4F4F4F',
  grey: '#828282',
  greyLight: '#BDBDBD',
  greyLighter: '#E0E0E0',
  greyLightest: '#F2F2F2',
  greyTransparent: 'rgba(0, 0, 0, 0.4)',
  transparent: 'rgba(0, 0, 0, 0)',
  deepCyanBlue: '#0C4B77',
  primary: '#4DBEB6',
  primaryTransparent: 'rgba(0, 198, 184, 0.2)',
  primaryLight: 'rgba(164, 205, 202, 0.7)',
  secondary: '#BFDCDA',
  tertiary: '#828282',
  shadow: 'rgba(139, 139, 139, 0.25)',
  warning: '#FFD553',
  darkOrange: '#FF8A00'
};

/***/ })

};
;