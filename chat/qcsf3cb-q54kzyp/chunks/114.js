"use strict";
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 50547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73458);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Model {
  constructor(data) {
    _defineProperty(this, "id", void 0);

    (0,mobx__WEBPACK_IMPORTED_MODULE_1__.makeObservable)(this, {
      id: mobx__WEBPACK_IMPORTED_MODULE_1__.observable
    });
    this.id = lodash__WEBPACK_IMPORTED_MODULE_0___default().get(data, 'id');
  }

  getId() {
    var _this$id;

    return (_this$id = this.id) !== null && _this$id !== void 0 ? _this$id : '';
  }

}

/***/ }),

/***/ 59453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I5": () => (/* reexport */ Experience),
  "T7": () => (/* reexport */ Level)
});

// UNUSED EXPORTS: Gender, PackageDuration, Roles, SkillName

// EXTERNAL MODULE: ./src/types/package.ts
var types_package = __webpack_require__(80294);
;// CONCATENATED MODULE: ./src/types/skill.ts
let Name;

(function (Name) {
  Name["SKATING"] = "Skating";
  Name["DANCING"] = "Dancing";
  Name["SINGING"] = "Singing";
  Name["RECITATION"] = "Recitation";
  Name["SWIMMING"] = "Swimming";
})(Name || (Name = {}));

let Level;

(function (Level) {
  Level["BEGINNER"] = "Beginner";
  Level["INTERMEDIATE"] = "Intermediate";
  Level["EXPERT"] = "Expert";
})(Level || (Level = {}));

let Experience;

(function (Experience) {
  Experience["ZERO_TO_ONE"] = "0-1 Year";
  Experience["ONE_TO_TWO"] = "1-2 Years";
  Experience["TWO_TO_FIVE"] = "2-5 Years";
  Experience["FIVE_TO_TEN"] = "5-10 Years";
})(Experience || (Experience = {}));
// EXTERNAL MODULE: ./src/types/user.ts
var user = __webpack_require__(86731);
// EXTERNAL MODULE: ./src/types/roles.ts
var roles = __webpack_require__(53897);
;// CONCATENATED MODULE: ./src/types/index.ts








/***/ })

};
;