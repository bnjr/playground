/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 82224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yB": () => (/* binding */ listBaseOrganisations),
/* harmony export */   "EZ": () => (/* binding */ getUserFromEmailQ),
/* harmony export */   "qM": () => (/* binding */ getUserFromPhoneQ)
/* harmony export */ });
/* unused harmony exports listSlugsOfOrganisations, getBaseOrganisationBySlug */
const listBaseOrganisations =
/* GraphQL */
`
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
`;
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

/***/ 52864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./src/components/layout/layout.tsx
var layout = __webpack_require__(8729);
// EXTERNAL MODULE: ./src/components/global/navbar/navbarIndex.tsx
var navbarIndex = __webpack_require__(72303);
// EXTERNAL MODULE: ./src/components/global/footer/footer.tsx
var footer = __webpack_require__(93078);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
;// CONCATENATED MODULE: ./public/images/singing.svg
/* harmony default export */ const singing = ({"src":"/_next/static/image/public/images/singing.40b9fa2ccc43277f0c296d003416e047.svg","height":1123,"width":794});
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/home/hero.tsx
/* This example requires Tailwind CSS v2.0+ */




function Hero() {
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: "text-blueGray-700 bg-gradient-to-r from-yellow-500 h-screen",
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: "container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0",
        children: [/*#__PURE__*/jsx_runtime.jsx("h2", {
          className: "mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font",
          children: "Try something new today!"
        }), /*#__PURE__*/jsx_runtime.jsx("h1", {
          className: "mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font",
          children: "Live passionately"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          className: "mb-8 text-base leading-relaxed text-left text-blueGray-600 ",
          children: "Try something that you wanted but never got around doing. Explore your inner child. Feed your imagination. Cultivate a hobby. Pick up a musical instrument."
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "flex flex-col justify-center lg:flex-row",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "flex items-center py-2",
            children: [/*#__PURE__*/jsx_runtime.jsx("span", {
              className: "font-bold",
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
        className: "w-full lg:w-5/6 lg:max-w-lg md:w-1/2        ",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image.default, {
          className: "object-cover object-center rounded-lg ",
          alt: "hero",
          src: singing
        })
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/lib/urlHelper.tsx
var urlHelper = __webpack_require__(74019);
// EXTERNAL MODULE: ./node_modules/react-avatar/lib/index.js
var lib = __webpack_require__(27549);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./src/lib/randomColour.tsx
var randomColour = __webpack_require__(70019);
;// CONCATENATED MODULE: ./src/components/organisations/organisations.tsx
/* This example requires Tailwind CSS v2.0+ */







const SVGBanner = ({
  propFill,
  className
}) => /*#__PURE__*/jsx_runtime.jsx("svg", {
  className: className,
  viewBox: "0 0 400 100",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/jsx_runtime.jsx("rect", {
    x: "0",
    y: "0",
    width: "400%",
    height: "100%",
    style: {
      fill: propFill
    }
  })
});

function Organisations({
  organisations = []
}) {
  return /*#__PURE__*/jsx_runtime.jsx("section", {
    className: "text-blueGray-700 bg-gradient-to-r from-blue-500",
    children: /*#__PURE__*/jsx_runtime.jsx("div", {
      className: "flex flex-row md:p-8 flex-wrap justify-center",
      children: organisations.map(organisation => {
        var _organisation$media, _organisation$media2, _organisation$media3;

        return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "bg-white dark:bg-gray-800 shadow rounded w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 xl:max-w-sm sm:m-2 m-6",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "relative",
            children: [(_organisation$media = organisation.media) !== null && _organisation$media !== void 0 && _organisation$media.banner ? /*#__PURE__*/jsx_runtime.jsx("img", {
              className: "shadow rounded-t w-full object-scale-down object-center",
              src: urlHelper/* UrlHelper.getOrganisationBannerUrl */._.getOrganisationBannerUrl((_organisation$media2 = organisation.media) === null || _organisation$media2 === void 0 ? void 0 : _organisation$media2.banner)
            }) : /*#__PURE__*/jsx_runtime.jsx(SVGBanner, {
              className: "shadow rounded-t object-scale-down object-center opacity-60 w-full",
              propFill: (0,randomColour/* GetRandomColour */.b)('giveMeColour')
            }), /*#__PURE__*/jsx_runtime.jsx("div", {
              className: "inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10",
              children: /*#__PURE__*/jsx_runtime.jsx((lib_default()), {
                color: (0,randomColour/* GetRandomColour */.b)('giveMeColour'),
                round: true,
                name: organisation.name,
                src: urlHelper/* UrlHelper.getOrganisationLogoUrl */._.getOrganisationLogoUrl((_organisation$media3 = organisation.media) === null || _organisation$media3 === void 0 ? void 0 : _organisation$media3.logo)
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "px-5 pb-10",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: "flex w-full pt-4 justify-end",
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "flex items-center",
                children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                  className: "w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/jsx_runtime.jsx("path", {
                    stroke: "none",
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime.jsx("path", {
                    fill: "currentColor",
                    d: "M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                  className: "w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/jsx_runtime.jsx("path", {
                    stroke: "none",
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime.jsx("path", {
                    fill: "currentColor",
                    d: "M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                  className: "w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/jsx_runtime.jsx("path", {
                    stroke: "none",
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime.jsx("path", {
                    fill: "currentColor",
                    d: "M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                  className: "w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/jsx_runtime.jsx("path", {
                    stroke: "none",
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime.jsx("path", {
                    fill: "currentColor",
                    d: "M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime.jsxs)("svg", {
                  className: "w-4 text-gray-200 icon icon-tabler icon-tabler-star",
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 20,
                  height: 20,
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  children: [/*#__PURE__*/jsx_runtime.jsx("path", {
                    stroke: "none",
                    fill: "none",
                    d: "M0 0h24v24H0z"
                  }), /*#__PURE__*/jsx_runtime.jsx("path", {
                    fill: "currentColor",
                    d: "M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                  })]
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "flex flex-col items-start pt-5",
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "w-full",
                children: [/*#__PURE__*/jsx_runtime.jsx("div", {
                  className: "text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start",
                  children: /*#__PURE__*/jsx_runtime.jsx("h2", {
                    className: "mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal",
                    children: organisation.name
                  })
                }), /*#__PURE__*/jsx_runtime.jsx("p", {
                  className: "xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5",
                  children: organisation.about
                })]
              }), organisation.services.items.length && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
                className: "w-full py-5 flex items-start ",
                children: [/*#__PURE__*/jsx_runtime.jsx("h3", {
                  className: "text-xl text-gray-800 dark:text-gray-100 font-medium tracking-normal mr-5",
                  children: "Services offered"
                }), organisation.services.items.map(service => {
                  return /*#__PURE__*/jsx_runtime.jsx("span", {
                    className: "inline-flex items-center justify-center px-2 py-1 mr-2 text-base font-bold  text-green-100 bg-green-600 rounded-full",
                    children: service.name
                  }, service.id);
                })]
              }), /*#__PURE__*/jsx_runtime.jsx("div", {
                className: "w-full flex-row justify-center flex",
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  href: `provider/${organisation.slug}`,
                  children: /*#__PURE__*/jsx_runtime.jsx("button", {
                    className: "focus:outline-none bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm",
                    children: "More"
                  })
                })
              })]
            })]
          })]
        }, organisation.id);
      })
    })
  });
}
// EXTERNAL MODULE: ./node_modules/aws-amplify/lib/index.js
var aws_amplify_lib = __webpack_require__(31650);
// EXTERNAL MODULE: ./src/graphql/custQueries.ts
var custQueries = __webpack_require__(82224);
;// CONCATENATED MODULE: ./src/pages/index.tsx





 // import awsconfig from '../aws-exports'
// Amplify.configure(awsconfig)
// import awsExports from '../aws-exports'
// Amplify.configure({ ...awsExports, ssr: true })
// pages/index.js

 // import { createPost } from "../graphql/mutations";





function Index({
  organisations = []
}) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(Hero, {}), /*#__PURE__*/jsx_runtime.jsx(Organisations, {
      organisations: organisations
    })]
  });
}

Index.getLayout = function getLayout(page) {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime.jsx(navbarIndex/* default */.Z, {}), page, /*#__PURE__*/jsx_runtime.jsx(footer/* default */.Z, {})]
  });
}; // export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//     },
//   };
// };


async function getServerSideProps({
  req
}) {
  const SSR = (0,aws_amplify_lib.withSSRContext)({
    req
  });
  let resOrganisations = [];

  try {
    const response = await SSR.API.graphql({
      query: custQueries/* listBaseOrganisations */.yB
    });
    resOrganisations = response.data.listOrganisations.items;
  } catch (error) {
    console.error('Error in getting Orgs: ' + JSON.stringify(error));
  }

  return {
    props: {
      organisations: resOrganisations
    }
  };
}

/***/ }),

/***/ 68702:
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

      const compMod = __webpack_require__(52864)

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
        page: "/",
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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [200,675,585,549,152,114,263,581,3], () => (__webpack_require__(68702)))
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
/******/ 			405: 1
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
/******/ 					installChunk(require("../chunks/" + __webpack_require__.u(chunkId)));
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
/******/ 			__webpack_require__.e(549);
/******/ 			__webpack_require__.e(152);
/******/ 			__webpack_require__.e(114);
/******/ 			__webpack_require__.e(263);
/******/ 			__webpack_require__.e(581);
/******/ 			__webpack_require__.e(3);
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