/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 82224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EZ": () => (/* binding */ getUserFromEmailQ),
/* harmony export */   "qM": () => (/* binding */ getUserFromPhoneQ)
/* harmony export */ });
/* unused harmony exports listBaseOrganisations, listSlugsOfOrganisations, getBaseOrganisationBySlug */
const listBaseOrganisations =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query ListOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        about
        slug
        media {
          banner
          logo
        }
        services {
          items {
            id
            name
          }
        }
      }
    }
  }
`));
const listSlugsOfOrganisations =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query ListOrganisations(
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganisations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        slug
      }
    }
  }
`));
const getBaseOrganisationBySlug =
/* GraphQL */
(/* unused pure expression or super */ null && (`
  query OrgBySlug(
    $slug: String
    $sortDirection: ModelSortDirection
    $filter: ModelOrganisationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    orgBySlug(
      slug: $slug
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        about
        slug
        media {
          banner
          images {
            filename
            height
            width
          }
          logo
          video
        }
        address {
          city
          state
        }
        owner {
          firstName
          lastName
          avatar
          about
          skills {
            details
            experience
            level
            name
          }
        }
        associates {
          items {
            organisationID
            userID
          }
        }
        services {
          items {
            name
            description
            packages {
              duration
              name
              noOfSessions
              price {
                amount
                currency
              }
            }
          }
        }
        reviews {
          items {
            by
            createdAt
            date
            review
          }
        }
      }
    }
  }
`));
const getUserFromEmailQ =
/* GraphQL */
`
  query UserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        profile
        isEmailVerified
        isPhoneVerified
      }
      nextToken
      startedAt
    }
  }
`;
const getUserFromPhoneQ =
/* GraphQL */
`
  query UserByPhone(
    $phone: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByPhone(
      phone: $phone
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        phone
        email
        profile
        isEmailVerified
        isPhoneVerified
      }
      nextToken
      startedAt
    }
  }
`;

/***/ }),

/***/ 74019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export UrlHelper */
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

/***/ }),

/***/ 35520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: ./src/components/layout/layout.tsx
var layout = __webpack_require__(8729);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/i18n-js/app/assets/javascripts/i18n.js
var i18n = __webpack_require__(86013);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/Navbar.js
var Navbar = __webpack_require__(58473);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/NavbarContainer.js
var NavbarContainer = __webpack_require__(93917);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/NavbarWrapper.js
var NavbarWrapper = __webpack_require__(59587);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/NavbarToggler.js
var NavbarToggler = __webpack_require__(4122);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/NavbarCollapse.js
var NavbarCollapse = __webpack_require__(40201);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/Nav.js
var Nav = __webpack_require__(9027);
// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/NavLink.js
var NavLink = __webpack_require__(16214);
// EXTERNAL MODULE: ./src/components/providerProfile/index.ts + 11 modules
var providerProfile = __webpack_require__(62581);
// EXTERNAL MODULE: ./node_modules/@ionic/react/dist/index.js
var dist = __webpack_require__(867);
// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var mobx_react_lite_dist = __webpack_require__(62974);
// EXTERNAL MODULE: ./src/stores/index.ts + 4 modules
var stores = __webpack_require__(53522);
// EXTERNAL MODULE: ./node_modules/aws-amplify/lib/index.js
var lib = __webpack_require__(31650);
// EXTERNAL MODULE: ./src/theme/styled-components.ts
var styled_components = __webpack_require__(49630);
// EXTERNAL MODULE: ./src/lib/index.ts + 1 modules
var src_lib = __webpack_require__(69854);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/providerHome/navbarProviderHome.tsx



















const UserChip = (0,styled_components/* default */.ZP)(dist/* IonChip */.hM)`
  --background: white;
`;
const navbarProviderHome = (0,mobx_react_lite_dist.observer)(() => {
  const {
    0: openNavbar,
    1: setOpenNavbar
  } = (0,react.useState)(false);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react.useState)(false);
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,react.useState)(false);
  const user = stores/* SingletonStore.getInstance */.hC.getInstance().accountStore.user;

  const closeLoginModal = () => {
    setIsOpen(false);
  };

  const loginModalHandler = () => {
    setIsOpen(true);
  };

  const logout = async () => {
    src_lib/* AlertsHelper.error */.pg.error({
      text: 'Logout Successfully..!',
      duration: 4000
    });
    await lib.Auth.signOut();
    stores/* SingletonStore.getInstance */.hC.getInstance().accountStore.user = null;
    stores/* SingletonStore.getInstance */.hC.getInstance().resetStore();
    await lib.DataStore.clear();
  };

  (0,react.useEffect)(() => {
    setIsBrowser(true);
  }, []);
  const isLoggedIn = !!stores/* SingletonStore.getInstance */.hC.getInstance().accountStore.user;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Navbar/* default */.Z, {
      className: "bg-gray-800",
      color: "xxx",
      navbar: true,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(NavbarContainer/* default */.Z, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(NavbarWrapper/* default */.Z, {
          children: [/*#__PURE__*/jsx_runtime.jsx("a", {
            className: "font-bebas-neue text-white font-bold text-2xl lg:text-4xl",
            href: "/",
            children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Col, {
              marginTop: "small",
              children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Text, {
                center: true,
                fontBebasNueue: true,
                color: "white",
                size: "xxLarge",
                tx: "cko_app"
              })
            })
          }), /*#__PURE__*/jsx_runtime.jsx(NavbarToggler/* default */.Z, {
            color: "white",
            onClick: () => setOpenNavbar(!openNavbar),
            ripple: "light"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(NavbarCollapse/* default */.Z, {
          open: openNavbar,
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Nav/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime.jsx(NavLink/* default */.Z, {
              href: "#navbar",
              ripple: "light",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(providerProfile.Row, {
                children: [/*#__PURE__*/jsx_runtime.jsx(providerProfile.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Icon, {
                    name: "searchSharp",
                    size: 1.1
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(providerProfile.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Discover",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/jsx_runtime.jsx(NavLink/* default */.Z, {
              href: "#navbar",
              ripple: "light",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(providerProfile.Row, {
                children: [/*#__PURE__*/jsx_runtime.jsx(providerProfile.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Icon, {
                    name: "personSharp",
                    size: 1
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(providerProfile.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Profile",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/jsx_runtime.jsx(NavLink/* default */.Z, {
              href: "#navbar",
              ripple: "light",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(providerProfile.Row, {
                children: [/*#__PURE__*/jsx_runtime.jsx(providerProfile.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Icon, {
                    name: "settingsSharp",
                    size: 1
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(providerProfile.Text, {
                  bold: true,
                  size: 0.85,
                  text: "Settings",
                  color: "white"
                })]
              })
            }), /*#__PURE__*/jsx_runtime.jsx(providerProfile.Col, {
              vCenter: true,
              hCenter: true,
              paddingHorizontal: "small",
              hidden: !isLoggedIn,
              children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Text, {
                bold: true,
                color: "white",
                size: 0.87,
                text: isLoggedIn ? `Hi, ${user.firstName} !` : ''
              })
            }), /*#__PURE__*/jsx_runtime.jsx(providerProfile.Row, {
              marginLeft: "small",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(UserChip, {
                children: [/*#__PURE__*/jsx_runtime.jsx(providerProfile.Icon, {
                  name: "menu",
                  size: 1.5
                }), /*#__PURE__*/jsx_runtime.jsx(dist/* IonAvatar */.BJ, {
                  children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Icon, {
                    name: "personCircle",
                    size: 1.4
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime.jsx(NavLink/* default */.Z, {
              href: "#navbar",
              ripple: "light",
              onClick: isLoggedIn ? logout : loginModalHandler,
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(providerProfile.Row, {
                children: [/*#__PURE__*/jsx_runtime.jsx(providerProfile.Col, {
                  paddingRight: "small",
                  children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Icon, {
                    name: isLoggedIn ? 'powerSharp' : 'logInSharp',
                    size: 1.1
                  })
                }), /*#__PURE__*/jsx_runtime.jsx(providerProfile.Text, {
                  bold: true,
                  color: "white",
                  size: 0.85,
                  text: isLoggedIn ? (0,i18n.t)('common.logout') : (0,i18n.t)('common.login')
                })]
              })
            })]
          })
        })]
      })
    }), isBrowser ? /*#__PURE__*/jsx_runtime.jsx(dist/* IonModal */.ki, {
      isOpen: isOpen,
      onDidDismiss: () => closeLoginModal(),
      cssClass: "modal-class",
      children: /*#__PURE__*/jsx_runtime.jsx(providerProfile.Login, {
        closeLoginModal: closeLoginModal
      })
    }) : null]
  });
});
/* harmony default export */ const providerHome_navbarProviderHome = (navbarProviderHome);
// EXTERNAL MODULE: ./src/components/global/footer/footer.tsx
var footer = __webpack_require__(93078);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./public/images/hero.png
/* harmony default export */ const hero = ({"src":"/_next/static/image/public/images/hero.54be8b1bd8dbaef506a3a6af06bfd03d.png","height":615,"width":808,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxUlEQVR42g3BP2oCQRQH4N+bnWFc3CJRNqlMFSySA4QUQtqQMlfwGrbewit4AUtt7ESQBS1sxEJUlPUPzpuZp99Hi9U1WGtUViHRmuBYYnkJCTOPmo1qS7+9GEA8jLFgdgQ45FXApJnDgwZEYgxCJMLey/l0QECC9aR4b6P1raOohJSFC0R8LLHeODyZG17jOC8w7GgfZAtASQhkn+suOVVqvcFSfmp69/EL1vszfaYGdMmUz6ez+rzg/65p9L/KFf8109sdHjhXR7Y9a2EAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/providerHome/hero.tsx
/* This example requires Tailwind CSS v2.0+ */




function Hero() {
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: "text-blueGray-700 flex flex-col place-content-center bg-gradient-to-r from-red-500 h-screen ",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container flex flex-col lg:flex-row flex-wrap",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex-1 flex flex-col m-4 border-4 border-green-900",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          className: "mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font",
          children: "Your win is our win!"
        }), /*#__PURE__*/jsx_runtime.jsx("h1", {
          className: "mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font",
          children: "Make a living out of your passion with us"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "mb-8 text-lg leading-relaxed text-left text-blueGray-600 ",
          children: "Share your passions and expertise. We help you reach out to your customers build your brand, and grow a community"
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex flex-col lg:flex-row items-center",
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: "inline-block align-baseline font-bold",
              children: "Join us now, install the app!"
            }), /*#__PURE__*/jsx_runtime.jsx("a", {
              href: "https://play.google.com/store/apps/details?id=in.aysea.cko.provider&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
              children: /*#__PURE__*/jsx_runtime.jsx("img", {
                className: "w-32",
                alt: "Get it on Google Play",
                src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              })
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "flex-1 m-4 border-4 border-green-900",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          className: "object-cover object-center rounded-lg ",
          alt: "hero",
          src: hero
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./public/images/app/personalProfile500.png
/* harmony default export */ const personalProfile500 = ({"src":"/_next/static/image/public/images/app/personalProfile500.694e9b8f471325314a615eccea3d04a2.png","height":800,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAcUlEQVR4nD2NvRECYQhEl78rxsDA/jswMLCKEwy8AsD9xvFIYN68XeRzHD3duD+euF0vEhGQrGo3Q0MRJgKOvKpm3WaK7uE2wqwmw7LXqOqKvxlXuDtmhphxwtnCQRk/RLgnO1Ww8etp7pk0A8auP/wCBIAyoAt9WswAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/app/orgProfile500.png
/* harmony default export */ const orgProfile500 = ({"src":"/_next/static/image/public/images/app/orgProfile500.264261ffa5231822d8d96d4409eee3f1.png","height":800,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAhklEQVR42jWKsRHCMBAE9/WS5cgUQQ80QiF0QEf0QEhASsSQ4JwBIpCQnk98M5fsrpz22z4dD4wr+OyQ84Yut+ulD/eZVN60dZJ5cvh4vkxTwm9UE230WEuxVr5oCCAQohJ/tWBmAIgIOWfikEcx60RVU1VceNk6YGgwaq248CCIAyWlyLI/4wg0Eanyyk0AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/images/app/skillProfile500.png
/* harmony default export */ const skillProfile500 = ({"src":"/_next/static/image/public/images/app/skillProfile500.a1af71693b8fce77bf8a24603fc5b9f3.png","height":800,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAW0lEQVR4nE2MSQ7AMAgDMeT/v+2CokDtqJXqGzM2yMxydwNgEYHuNpzHUfhBxjAz2yOM1NRaVYbrvssJ9GKMYTSEnH9NCQVrzsYL1dpz/mlK3pxJMKiqDQUklAfApTWwZvUzRAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/providerHome/feature.tsx
/* This example requires Tailwind CSS v2.0+ */






function Feature() {
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    id: "get-started",
    className: "text-gray-600",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container px-5 py-24 mx-auto",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-row flex-wrap w-full mb-20 xl:mx-16 lg:mx-12",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "",
          children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
            className: "text-2xl sm:text-3xlfont-medium title-font mb-2 text-gray-900",
            children: "Get Started"
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "h-1 w-20 bg-indigo-500 rounded mb-4"
          })]
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "leading-relaxed text-xl text-gray-700",
          children: "Create your profile on CKO. Start by adding your you personal and skill information. Finish by creating the organisation (how your services are to be known as)."
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap xl:mx-16 lg:mx-12",
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "xl:w-1/3 md:w-1/2 xs:m-2 p-8 md:m-12 lg:m-auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "border-gray-500 shadow-md  rounded-lg bg-indigo-100",
            children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              src: personalProfile500,
              alt: "content",
              className: "rounded-t-lg"
            }), /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "text-lg pt-7 pb-7 text-gray-900 font-medium title-font mb-1 text-center",
              children: "Add your personal profile"
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "xl:w-1/3 md:w-1/2 xs:m-2 p-8 md:m-12 lg:m-auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "border-gray-500 shadow-md  rounded-lg bg-indigo-100",
            children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              src: skillProfile500,
              alt: "content",
              className: "rounded-t-lg"
            }), /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "text-lg pt-7 pb-7 text-gray-900 font-medium title-font mb-1 text-center",
              children: "Add your personal skill"
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "xl:w-1/3 md:w-1/2 xs:m-2 p-8 md:m-12 lg:m-auto",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "border-gray-500 shadow-md rounded-lg bg-indigo-100",
            children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
              src: orgProfile500,
              alt: "content",
              className: "rounded-t-lg"
            }), /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "text-lg pt-7 pb-7 text-gray-900 font-medium title-font mb-1 text-center",
              children: "Create your organisation details"
            })]
          })
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./public/images/app/service500.png
/* harmony default export */ const service500 = ({"src":"/_next/static/image/public/images/app/service500.f871f0a46197a037e8759260d450e56c.png","height":350,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAfElEQVR4nDVOCQ7DMAizc7X7/1vXDZrgkUpDQghfQHPXXAutVvTW8C9JiGyaebyvN1rrOEZ/CJIYY2BFgO63zE2v82Qat2AXk1Qmkvecuj5f1UKcx8FaqyLiwfMs6ebCmmLvKKVkOpVBj2DPFJgilzYGwZJYPpGE31Pb8ANuPVapyOnh9wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./public/images/app/photos500.png
/* harmony default export */ const photos500 = ({"src":"/_next/static/image/public/images/app/photos500.eb4318deff75ce3cf5257f09a369ed15.png","height":350,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAApUlEQVR42k2OsQqCYBhF72cukYllS2vR4ANU79njNARB0JAERc0N1aAOilqp9f83A4fucA9nO/L+KD5eBQjCardhtgz8T8pKaaUBGAKtic16haLIUJYK89kUZp4nEgYRB25fgjjF7uwzvl3kej9yPFmIGcUZlv4Bjm0xTFLxPAeGPcRz1EXP7UA0Sa1BAmgZtStFAYQANSnCGo1Lk8XfFWXF7f4kX0fAWAvlnB2DAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./public/images/app/videos500.png
/* harmony default export */ const videos500 = ({"src":"/_next/static/image/public/images/app/videos500.d038ddbddcfa4269ac4979dd744ae5fc.png","height":350,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnElEQVR4nB1Nuw3CQBSzjwRIAClpKNiJOWiZiY4FWIAOKiqKiIYRouRCEHfmXSy9v59NGX4hwAryLEMU4D/jNBeLOdh1PkoRcA7jMCBYC3IilGUJns4XXW+Njoc9q1WBEIKcc7RQXVdk83qrbb122wqzPJ8sDTRovVmRMcY0KZj5t+8JU8+WhWXZLpBJ0uzkjGXHhPTA3g+6P578A7EiXdJJ85GKAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/components/providerHome/gallery.tsx
/* This example requires Tailwind CSS v2.0+ */






function Gallery() {
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: "text-gray-600 body-font bg-blue-50",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container px-5 py-24 mx-auto",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col text-center w-full mb-20",
        children: [/*#__PURE__*/jsx_runtime.jsx("h1", {
          className: "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900",
          children: "Create your services and add media to your profile"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "lg:w-2/3 mx-auto leading-relaxed text-base",
          children: "Add services that you want to sell. You can add as many as you want. Assign a package to the service. Finally add photos and YouTube/Vimeo videos to give a good impact to your profile and impress on your customers."
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-wrap",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white m-12 lg:m-auto border-8 border-blue-200 rounded-lg shadow-2xl lg:w-1/4 md:w-1/3",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            className: "",
            alt: "gallery",
            src: service500
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: "bg-blue-200 p-8 border-t-2",
            children: /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "text-center align-middle text-blue-900",
              children: "Add services to that you wish to sell"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white m-12 lg:m-auto  border-8 border-blue-200 rounded-lg shadow-2xl lg:w-1/4 md:w-1/3",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            className: "",
            alt: "gallery",
            src: photos500
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: " bg-blue-200 p-8 border-t-2",
            children: /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "text-center align-middle text-blue-900",
              children: "Share photos of your services"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white m-12 lg:m-auto border-8 border-blue-200 rounded-lg shadow-2xl lg:w-1/4 md:w-1/3",
          children: [/*#__PURE__*/jsx_runtime.jsx(next_image.default, {
            className: "",
            alt: "gallery",
            src: videos500
          }), /*#__PURE__*/jsx_runtime.jsx("div", {
            className: " bg-blue-200 p-8 border-t-2",
            children: /*#__PURE__*/jsx_runtime.jsx("h2", {
              className: "text-center align-middle text-blue-900",
              children: "Video will add insight into your service"
            })
          })]
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/theme/light/index.ts
var light = __webpack_require__(38);
;// CONCATENATED MODULE: ./src/pages/provider/home.tsx












function Index() {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Hero, {}), /*#__PURE__*/jsx_runtime.jsx(Feature, {}), /*#__PURE__*/jsx_runtime.jsx(Gallery, {})]
  });
}

Index.getLayout = function getLayout(page) {
  return /*#__PURE__*/jsx_runtime.jsx(layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styled_components/* ThemeProvider */.f6, {
      theme: light/* default */.Z,
      children: [/*#__PURE__*/jsx_runtime.jsx(providerHome_navbarProviderHome, {}), page, /*#__PURE__*/jsx_runtime.jsx(footer/* default */.Z, {})]
    })
  });
};

const getStaticProps = async () => {
  return {
    props: {}
  };
};

/***/ }),

/***/ 85775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(88881)

      const appMod = __webpack_require__(83009)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(35520)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(3359),
        notFoundModule: __webpack_require__(19164),
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/provider/home",
        buildId: "Tavug2AZLVX95t61kjrj-",
        escapedBuildId: "Tavug2AZLVX95t61kjrj\-",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"e0bcc2f82ec2f30adbe5d79477782942",previewModeSigningKey:"4a884ed83460bba00e11c0abe474fdbab7a979c399c05180f04d7f4557a391fd",previewModeEncryptionKey:"39f8d307a35d8e8de873cde44927ab3a901f6a952776a71f22efcba281d849b8"}
      })
      
    

/***/ }),

/***/ 42357:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 64293:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 63129:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 45532:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 76417:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 28614:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 35747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 98605:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 97565:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 57211:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 33700:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 12087:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 61765:
/***/ ((module) => {

module.exports = require("process");

/***/ }),

/***/ 71191:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 92413:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24304:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 33867:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 78835:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 31669:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 78761:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [200,675,585,959,152,114,263,581], () => (__webpack_require__(85775)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	                // Font manifest declaration
/******/ 	                __webpack_require__.__NEXT_FONT_MANIFEST__ = [];
/******/ 	            // Enable feature:
/******/ 	            process.env.__NEXT_OPTIMIZE_FONTS = JSON.stringify(true);
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			904: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../../chunks/" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(200);
/******/ 			__webpack_require__.e(675);
/******/ 			__webpack_require__.e(585);
/******/ 			__webpack_require__.e(959);
/******/ 			__webpack_require__.e(152);
/******/ 			__webpack_require__.e(114);
/******/ 			__webpack_require__.e(263);
/******/ 			__webpack_require__.e(581);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;