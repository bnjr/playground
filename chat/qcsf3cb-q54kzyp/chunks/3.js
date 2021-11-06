"use strict";
exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 72303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31650);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _stores_stores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(347);
/* harmony import */ var _providerProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62581);
/* harmony import */ var _ionic_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(867);
/* harmony import */ var _material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16214);
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86013);
/* harmony import */ var i18n_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(i18n_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62974);
/* harmony import */ var _theme_styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49630);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69854);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85893);













const UserChip = (0,_theme_styled_components__WEBPACK_IMPORTED_MODULE_9__/* .default */ .ZP)(_ionic_react__WEBPACK_IMPORTED_MODULE_3__/* .IonChip */ .hM)`
  --background: white;
`;
const NavBar = (0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_6__.observer)(() => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsBrowser(true);
  }, []);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const closeLoginModal = () => {
    setIsOpen(false);
  };

  const loginModalHandler = () => {
    setIsOpen(true);
  };

  const isLoggedIn = !!_stores_stores__WEBPACK_IMPORTED_MODULE_1__/* .SingletonStore.getInstance */ .h.getInstance().accountStore.user;
  const user = _stores_stores__WEBPACK_IMPORTED_MODULE_1__/* .SingletonStore.getInstance */ .h.getInstance().accountStore.user;

  const logout = async () => {
    _lib__WEBPACK_IMPORTED_MODULE_7__/* .AlertsHelper.error */ .pg.error({
      text: 'Logout Successfully..!',
      duration: 4000
    });
    await aws_amplify__WEBPACK_IMPORTED_MODULE_10__.Auth.signOut();
    _stores_stores__WEBPACK_IMPORTED_MODULE_1__/* .SingletonStore.getInstance */ .h.getInstance().accountStore.user = null;
    _stores_stores__WEBPACK_IMPORTED_MODULE_1__/* .SingletonStore.getInstance */ .h.getInstance().resetStore();
    await aws_amplify__WEBPACK_IMPORTED_MODULE_10__.DataStore.clear();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("nav", {
      className: "bg-gray-800",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
          className: "font-bebas-neue text-white font-bold text-2xl lg:text-4xl",
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
            marginTop: "small",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
              center: true,
              fontBebasNueue: true,
              color: "white",
              size: "xxLarge",
              tx: "cko_app"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "block lg:hidden",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
            className: "flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("svg", {
              className: "fill-current h-3 w-3",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("title", {
                children: "Menu"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("path", {
                d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
              })]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "hidden lg:block",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex space-x-4",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              href: "/provider/home",
              ripple: "light",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: "businessSharp",
                    size: 1
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Become a provider",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              href: "#navbar",
              ripple: "light",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: "statsChartOutline",
                    size: 1
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Projects",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              href: "#navbar",
              ripple: "light",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: "chatboxEllipsesSharp",
                    size: 1
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Chat",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              href: "#navbar",
              ripple: "light",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: "calendar",
                    size: 1
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Calendar",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
              vCenter: true,
              hCenter: true,
              paddingRight: "medium",
              hidden: !isLoggedIn,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
                bold: true,
                color: "white",
                size: 0.87,
                text: isLoggedIn ? `Hi, ${user.firstName} !` : ''
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Row, {
              marginLeft: "small",
              marginTop: "tiny",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(UserChip, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                  name: "menu",
                  size: 1.5
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ionic_react__WEBPACK_IMPORTED_MODULE_3__/* .IonAvatar */ .BJ, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: "personCircle",
                    size: 1.4
                  })
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_material_tailwind_react_NavLink__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              href: "#navbar",
              ripple: "light",
              onClick: isLoggedIn ? logout : loginModalHandler,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Row, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Icon, {
                    name: isLoggedIn ? 'powerSharp' : 'logInSharp',
                    size: 1.1
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Text, {
                  bold: true,
                  color: "white",
                  size: 0.85,
                  text: isLoggedIn ? (0,i18n_js__WEBPACK_IMPORTED_MODULE_5__.t)('common.logout') : (0,i18n_js__WEBPACK_IMPORTED_MODULE_5__.t)('common.login')
                })]
              })
            })]
          })
        })]
      })
    }), isBrowser ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ionic_react__WEBPACK_IMPORTED_MODULE_3__/* .IonModal */ .ki, {
      isOpen: isOpen,
      onDidDismiss: () => closeLoginModal(),
      cssClass: "modal-class",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_providerProfile__WEBPACK_IMPORTED_MODULE_2__.Login, {
        closeLoginModal: closeLoginModal
      })
    }) : null]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ 70019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ GetRandomColour)
/* harmony export */ });
/* unused harmony export DefaultColors */
const DefaultColors = (/* unused pure expression or super */ null && (['#d73d32', '#7e3794', '#4285f4', '#67ae3f', '#d61a7f', '#ff4080']));

function _randomColours() {
  let colours = [];

  for (let i = 0; i < 10; i++) {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = '#' + hex.toString(16);
    colours.push(color);
  }

  return colours;
} // https://en.wikipedia.org/wiki/Linear_congruential_generator


function _stringAsciiPRNG(value, m) {
  const charCodes = [...value].map(letter => letter.charCodeAt(0));
  const len = charCodes.length;
  const a = len % (m - 1) + 1;
  const c = charCodes.reduce((current, next) => current + next) % m;
  let random = charCodes[0] % m;

  for (let i = 0; i < len; i++) random = (a * random + c) % m;

  return random;
}

function GetRandomColour(value, colors = _randomColours()) {
  // if no value is passed, always return transparent color otherwise
  // a rerender would show a new color which would will
  // give strange effects when an interface is loading
  // and gets rerendered a few consequent times
  if (!value) return 'transparent'; // value based random color index
  // the reason we don't just use a random number is to make sure that
  // a certain value will always get the same color assigned given
  // a fixed set of colors

  const colorIndex = _stringAsciiPRNG(value, colors.length);

  return colors[colorIndex];
}

/***/ }),

/***/ 74019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ UrlHelper)
/* harmony export */ });
/* harmony import */ var _aws_exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82181);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class UrlHelper {
  static getProviderProfileImageUrl(avatar) {
    return UrlHelper.BASE_URL + 'public/images/provider/profile/' + avatar;
  }

  static getOrganisationLogoUrl(logo) {
    return UrlHelper.BASE_URL + 'public/images/organisation/profile/' + logo;
  }

  static getOrganisationBannerUrl(banner) {
    return UrlHelper.BASE_URL + 'public/images/organisation/profile/' + banner;
  }

  static getOrganisationMediaUrl(media) {
    return UrlHelper.BASE_URL + 'public/images/organisation/media/' + media;
  }

  static getOrganisationMediaTNUrl(media) {
    const fileName = media.split('.').shift() + '_tn' + '.' + media.split('.').pop();
    return UrlHelper.BASE_URL + 'public/images/organisation/media/' + fileName;
  }

}

_defineProperty(UrlHelper, "BUCKET_NAME", _aws_exports__WEBPACK_IMPORTED_MODULE_0__/* .default.aws_user_files_s3_bucket */ .Z.aws_user_files_s3_bucket);

_defineProperty(UrlHelper, "REGION", _aws_exports__WEBPACK_IMPORTED_MODULE_0__/* .default.aws_user_files_s3_bucket_region */ .Z.aws_user_files_s3_bucket_region);

_defineProperty(UrlHelper, "RESOURCE_NAME", 's3');

_defineProperty(UrlHelper, "BASE_URL", `https://${UrlHelper.BUCKET_NAME}.${UrlHelper.RESOURCE_NAME}.${UrlHelper.REGION}.amazonaws.com/`);

/***/ })

};
;