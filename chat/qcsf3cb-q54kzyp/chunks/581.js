"use strict";
exports.id = 581;
exports.ids = [581];
exports.modules = {

/***/ 62581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Col": () => (/* reexport */ layout/* Col */.JX),
  "Icon": () => (/* reexport */ icon_component/* Icon */.J),
  "Login": () => (/* reexport */ login_component/* Login */.m),
  "Row": () => (/* reexport */ layout/* Row */.X2),
  "Text": () => (/* reexport */ text_component/* Text */.x),
  "TextPresets": () => (/* reexport */ text_component_props/* TextPresets */.c)
});

// UNUSED EXPORTS: AvatarComponent, BannerComponent, Button, Card, Chip, ContentHeader, DateComponent, DropdownComponent, FontSizes, Grid, InputComponent, Link, ModalInputComponent, PackageComponent, ParagraphComponent, RadioButton, RatingComponent, ReviewComponent, SegmentComponent, SkeletonBanner, SkeletonText, SkillComponent, Team

// EXTERNAL MODULE: ./node_modules/@ionic/react/dist/index.js
var dist = __webpack_require__(867);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/components/providerProfile/avatar/avatar.component.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const avatar_component_AvatarComponent = (0,styled_components_cjs.withTheme)(props => {
  const {
    size,
    url,
    slot
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(dist/* IonAvatar */.BJ, _objectSpread(_objectSpread({
    style: {
      height: `${size}rem`,
      width: `${size}rem`
    }
  }, slot), {}, {
    children: /*#__PURE__*/jsx_runtime.jsx(dist/* IonImg */.Xz, {
      src: url
    })
  }));
});
// EXTERNAL MODULE: ./src/lib/urlHelper.tsx
var urlHelper = __webpack_require__(74019);
;// CONCATENATED MODULE: ./src/components/providerProfile/banner/banner.tsx









const SVGBanner = ({
  propFill,
  className
}) => /*#__PURE__*/_jsx("svg", {
  className: className,
  viewBox: "0 0 400 100",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/_jsx("rect", {
    x: "0",
    y: "0",
    width: "400%",
    height: "100%",
    style: {
      fill: propFill
    }
  })
});

const BannerComponent = props => {
  const {
    orgName,
    location,
    banner,
    logo
  } = props;
  const {
    0: ratingValue,
    1: setRatingValue
  } = useState(3.5);
  return /*#__PURE__*/_jsx(_Fragment, {
    children: /*#__PURE__*/_jsxs("div", {
      className: "w-full",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "relative",
        children: [banner ? /*#__PURE__*/_jsx("img", {
          className: "shadow rounded-t w-full object-scale-down object-center",
          src: UrlHelper.getOrganisationBannerUrl(banner)
        }) : /*#__PURE__*/_jsx(SVGBanner, {
          className: "shadow rounded-t object-scale-down object-center opacity-60 w-full",
          propFill: GetRandomColour('giveMeColour')
        }), /*#__PURE__*/_jsx("div", {
          className: "inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10",
          children: /*#__PURE__*/_jsx(Avatar, {
            color: GetRandomColour('giveMeColour'),
            round: true,
            name: orgName,
            src: UrlHelper.getOrganisationLogoUrl(logo)
          })
        })]
      }), /*#__PURE__*/_jsx("div", {
        className: "relative",
        children: /*#__PURE__*/_jsx("div", {
          className: "flex flex-col mt-14",
          children: /*#__PURE__*/_jsx("div", {
            className: "w-full",
            children: /*#__PURE__*/_jsx("div", {
              className: "text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-start justify-between xl:justify-start",
              children: /*#__PURE__*/_jsx("h2", {
                className: "mb-0 xl:mb-0 xl:mr-4 text-4xl text-gray-500 dark:text-gray-100 font-medium tracking-normal",
                children: orgName
              })
            })
          })
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/components/providerProfile/banner/banner.props.ts
var banner_props = __webpack_require__(87018);
// EXTERNAL MODULE: ./src/components/providerProfile/button/button.component.tsx
var button_component = __webpack_require__(32458);
// EXTERNAL MODULE: ./src/components/providerProfile/layout/index.ts
var layout = __webpack_require__(75378);
;// CONCATENATED MODULE: ./src/components/providerProfile/card/card.component.tsx
function card_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function card_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { card_component_ownKeys(Object(source), true).forEach(function (key) { card_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { card_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function card_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CardStyled = (0,styled_components_cjs.default)(layout/* Col */.JX)`
  color: ${props => props.theme.colors.white};
  border: 1px solid
    ${props => props.theme.colors.primaryTransparent};
  box-shadow: 3px 3px 10px ${props => props.theme.colors.shadow};
`;
const card_component_Card = props => {
  // const {
  //   theme: {colors},
  // } = props
  return /*#__PURE__*/_jsx(Row, {
    children: /*#__PURE__*/_jsx(CardStyled, card_component_objectSpread({
      padding: 1,
      borderRadius: 6 // color={colors.white}

    }, props))
  });
};
// EXTERNAL MODULE: ./src/components/providerProfile/chip/chip.component.tsx
var chip_component = __webpack_require__(81869);
// EXTERNAL MODULE: ./src/components/providerProfile/text/text.component.tsx
var text_component = __webpack_require__(27455);
// EXTERNAL MODULE: ./src/components/providerProfile/text/text.component.props.ts
var text_component_props = __webpack_require__(36378);
;// CONCATENATED MODULE: ./src/components/providerProfile/content-header/content-header.component.tsx
const _excluded = (/* unused pure expression or super */ null && (["text"]));

function content_header_component_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function content_header_component_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { content_header_component_ownKeys(Object(source), true).forEach(function (key) { content_header_component_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { content_header_component_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function content_header_component_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const ContentHeader = props => {
  const {
    text
  } = props,
        rest = _objectWithoutProperties(props, _excluded);

  const {
    colors
  } = useContext(ThemeContext);
  return /*#__PURE__*/_jsxs(Row, content_header_component_objectSpread(content_header_component_objectSpread({}, rest), {}, {
    children: [/*#__PURE__*/_jsx(Col, {
      width: "0.3",
      maxWidth: "0.25",
      color: colors.primary
    }), /*#__PURE__*/_jsx(Col, {
      paddingVertical: "tiny",
      paddingLeft: 1.58,
      children: /*#__PURE__*/_jsx(Text, content_header_component_objectSpread({
        id: text["tx"],
        preset: TextPresets.CONTENT_HEADER
      }, text))
    })]
  }));
};
// EXTERNAL MODULE: ./src/components/providerProfile/dropdown/dropdown.component.tsx
var dropdown_component = __webpack_require__(83272);
// EXTERNAL MODULE: ./src/components/providerProfile/icon/icon.component.tsx
var icon_component = __webpack_require__(83345);
// EXTERNAL MODULE: ./src/components/providerProfile/link/link.component.tsx
var link_component = __webpack_require__(69081);
// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var mobx_react_lite_dist = __webpack_require__(62974);
// EXTERNAL MODULE: ./src/stores/stores/index.ts
var stores = __webpack_require__(347);
;// CONCATENATED MODULE: ./src/components/providerProfile/package/package.component.tsx












const PackageTitle = (0,styled_components_cjs.default)(text_component/* Text */.x)`
  margin-right: auto;
`;
const PackageComponent = (0,styled_components_cjs.withTheme)((0,mobx_react_lite_dist.observer)(props => {
  const {
    package: _package
  } = props;
  const {
    theme: {
      colors
    },
    package: servicePackage
  } = props;
  const isLoggedIn = !!stores/* SingletonStore.getInstance */.h.getInstance().accountStore.user;
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,react.useState)(false);

  const closeLoginModal = () => {
    setIsOpen(false);
  };

  const loginModalHandler = () => {
    setIsOpen(true);
  };

  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setIsBrowser(true);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Row */.X2, {
      paddingTop: 1,
      children: [/*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
        xs: "8",
        size: "10",
        className: "ion-float-left",
        children: /*#__PURE__*/jsx_runtime.jsx(PackageTitle, {
          bold500: true,
          lineHeight: 2.5,
          letterSpacing: 0.1,
          color: "primary",
          preset: text_component_props/* TextPresets.CONTENT_HEADER */.c.CONTENT_HEADER,
          children: servicePackage.getName()
        })
      }), /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
        size: "1",
        className: "ion-float-right",
        children: /*#__PURE__*/jsx_runtime.jsx(button_component/* Button */.z, {
          onPress: isLoggedIn ? () => {
            alert('Enrolled');
          } : loginModalHandler,
          title: {
            tx: 'common.enroll'
          }
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
      children: /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(text_component/* Text */.x, {
          bold400: true,
          lineHeight: 1.5,
          letterSpacing: 0.1,
          preset: text_component_props/* TextPresets.DESCRIPTION */.c.DESCRIPTION,
          children: ["\u20B9 ", servicePackage.getPrice(), "/ ", servicePackage.getDuration()]
        })
      })
    }), /*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
      padding: "small",
      margin: "medium",
      children: /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
        color: colors.greyLighter,
        height: "0.1"
      })
    }), isBrowser ? /*#__PURE__*/jsx_runtime.jsx(dist/* IonModal */.ki, {
      isOpen: isOpen,
      onDidDismiss: () => closeLoginModal(),
      cssClass: "modal-class",
      children: /*#__PURE__*/jsx_runtime.jsx(login_component/* Login */.m, {
        closeLoginModal: closeLoginModal
      })
    }) : null]
  });
}));
// EXTERNAL MODULE: ./src/components/providerProfile/radio-button/radio-button.component.tsx
var radio_button_component = __webpack_require__(50930);
// EXTERNAL MODULE: ./src/components/providerProfile/rating/rating.component.tsx
var rating_component = __webpack_require__(10270);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(96486);
var lodash_default = /*#__PURE__*/__webpack_require__.n(lodash);
// EXTERNAL MODULE: ./src/theme/images.ts
var theme_images = __webpack_require__(6434);
;// CONCATENATED MODULE: ./src/components/providerProfile/review/review.component.tsx











const ReviewComponent = (0,styled_components_cjs.withTheme)(props => {
  const {
    review
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(react.Fragment, {
    children: /*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
      padding: 2,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Col */.JX, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Row */.X2, {
          children: [/*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
            size: "auto",
            children: /*#__PURE__*/jsx_runtime.jsx(dist/* IonAvatar */.BJ, {
              children: /*#__PURE__*/jsx_runtime.jsx("img", {
                src: theme_images/* images.profile */.W.profile,
                alt: "profile"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Col */.JX, {
            paddingLeft: "large",
            children: [/*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
              children: /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
                children: /*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
                  bold500: true,
                  size: "large",
                  color: "primary",
                  text: review.getReviewerName()
                })
              })
            }), /*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
              paddingTop: "small",
              children: lodash_default().map([1, 2, 3, 4, 5], (rating, index) => /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
                size: "auto",
                children: /*#__PURE__*/jsx_runtime.jsx(icon_component/* Icon */.J, {
                  name: "starSharp",
                  color: rating <= review.getRatings() ? 'warning' : 'greyLight',
                  size: "large"
                })
              }, index))
            })]
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
          paddingTop: "xLarge",
          children: /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
            size: "12",
            children: /*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
              bold400: true,
              preset: text_component_props/* TextPresets.REG_TEXT */.c.REG_TEXT,
              text: review.getReview()
            })
          })
        })]
      })
    })
  });
});
;// CONCATENATED MODULE: ./src/components/providerProfile/skill/skill.component.tsx









const skill_component_SkillComponent = (0,styled_components_cjs.withTheme)(props => {
  const {
    theme: {
      colors
    },
    skill
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(dist/* IonList */.q_, {
    style: {
      backgroundColor: colors.white
    },
    lines: "none",
    children: [/*#__PURE__*/jsx_runtime.jsx(layout/* Row */.X2, {
      paddingTop: "small",
      children: /*#__PURE__*/jsx_runtime.jsx(layout/* Col */.JX, {
        className: "place-items-start",
        size: "3",
        children: /*#__PURE__*/jsx_runtime.jsx(chip_component/* Chip */.A, {
          label: {
            text: skill.getName(),
            preset: text_component_props/* TextPresets.SMALL */.c.SMALL
          }
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Row */.X2, {
      paddingTop: "small",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Col */.JX, {
        "size-md": "6",
        "size-xs": "12",
        className: "place-items-start",
        children: [/*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
          tx: "skillComponent.level",
          fontMontserrat: true,
          preset: text_component_props/* TextPresets.SMALL */.c.SMALL
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          children: /*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
            preset: text_component_props/* TextPresets.SMALL */.c.SMALL,
            fontMontserrat: true,
            color: "primary",
            text: skill.getLevel()
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(layout/* Col */.JX, {
        "size-md": "6",
        "size-xm": "12",
        className: "place-items-start",
        children: [/*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
          preset: text_component_props/* TextPresets.SMALL */.c.SMALL,
          fontMontserrat: true,
          tx: "skillComponent.experience"
        }), /*#__PURE__*/jsx_runtime.jsx("p", {
          children: /*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
            preset: text_component_props/* TextPresets.SMALL */.c.SMALL,
            color: "primary",
            fontMontserrat: true,
            text: skill.getExperience()
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(dist/* IonItem */.Ie, {
      color: "white",
      lines: "none",
      children: /*#__PURE__*/jsx_runtime.jsx(dist/* IonLabel */.Q$, {
        className: "ion-text-wrap",
        children: /*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
          preset: text_component_props/* TextPresets.REG_TEXT */.c.REG_TEXT,
          text: skill.getDetails()
        })
      })
    })]
  });
});
// EXTERNAL MODULE: ./src/components/providerProfile/date/date.component.tsx
var date_component = __webpack_require__(46583);
// EXTERNAL MODULE: ./src/components/providerProfile/layout/col/col.tsx
var col = __webpack_require__(59296);
;// CONCATENATED MODULE: ./src/components/providerProfile/paragraph/paragraph.component.tsx






const ParagraphComponent = (0,styled_components_cjs.withTheme)(props => {
  const {
    text
  } = props;
  return /*#__PURE__*/jsx_runtime.jsx(col/* Col */.J, {
    children: /*#__PURE__*/jsx_runtime.jsx(text_component/* Text */.x, {
      preset: text_component_props/* TextPresets.REG_TEXT */.c.REG_TEXT,
      children: /*#__PURE__*/jsx_runtime.jsx("p", {
        className: "newLine",
        children: text
      })
    })
  });
});
// EXTERNAL MODULE: ./src/components/providerProfile/paragraph/paragraph.component.prop.ts
var paragraph_component_prop = __webpack_require__(35180);
// EXTERNAL MODULE: ./src/components/providerProfile/input/input.component.tsx
var input_component = __webpack_require__(33885);
// EXTERNAL MODULE: ./src/components/providerProfile/input/input.component.props.ts
var input_component_props = __webpack_require__(52897);
;// CONCATENATED MODULE: ./src/components/providerProfile/skeleton/skeleton.component.tsx






const SkeletonBanner = () => {
  return (
    /*#__PURE__*/
    // <Card className="ion-padding custom-skeleton">
    //   {/* <IonSkeletonText animated style={{width: '60%'}} /> */}
    //   <IonSkeletonText animated />
    //   {/* <IonSkeletonText animated style={{width: '88%'}} />
    //   <IonSkeletonText animated style={{width: '70%'}} />
    //   <IonSkeletonText animated style={{width: '60%'}} /> */}
    // </Card>
    _jsx(Card, {
      children: /*#__PURE__*/_jsx(IonList, {
        className: "ion-padding custom-skeleton",
        children: /*#__PURE__*/_jsxs(IonItem, {
          lines: "none",
          children: [/*#__PURE__*/_jsx(IonAvatar, {
            style: {
              height: '9rem',
              width: '9rem'
            },
            slot: "start",
            children: /*#__PURE__*/_jsx(IonSkeletonText, {
              animated: true
            })
          }), /*#__PURE__*/_jsx(IonLabel, {
            children: /*#__PURE__*/_jsx(IonSkeletonText, {
              animated: true
            })
          })]
        })
      })
    })
  );
};
const SkeletonText = () => {
  return (
    /*#__PURE__*/
    // <Card className="ion-padding custom-skeleton">
    //   {/* <IonSkeletonText animated style={{width: '60%'}} /> */}
    //   <IonSkeletonText animated />
    //   {/* <IonSkeletonText animated style={{width: '88%'}} />
    //   <IonSkeletonText animated style={{width: '70%'}} />
    //   <IonSkeletonText animated style={{width: '60%'}} /> */}
    // </Card>
    _jsx(Card, {
      padding: 2,
      children: /*#__PURE__*/_jsx(IonList, {
        className: "ion-padding",
        children: /*#__PURE__*/_jsx(IonItem, {
          lines: "none",
          children: /*#__PURE__*/_jsxs(IonLabel, {
            children: [/*#__PURE__*/_jsx("h3", {
              children: /*#__PURE__*/_jsx(IonSkeletonText, {
                animated: true,
                style: {
                  width: '50%'
                }
              })
            }), /*#__PURE__*/_jsx("p", {
              children: /*#__PURE__*/_jsx(IonSkeletonText, {
                animated: true,
                style: {
                  width: '80%'
                }
              })
            }), /*#__PURE__*/_jsx("p", {
              children: /*#__PURE__*/_jsx(IonSkeletonText, {
                animated: true,
                style: {
                  width: '60%'
                }
              })
            })]
          })
        })
      })
    })
  );
};
// EXTERNAL MODULE: ./src/components/providerProfile/modalInput/modalInput.component.tsx
var modalInput_component = __webpack_require__(40899);
// EXTERNAL MODULE: ./src/components/providerProfile/modalInput/modalInput.component.props.ts
var modalInput_component_props = __webpack_require__(31505);
// EXTERNAL MODULE: ./node_modules/ionicons/icons/index.js
var icons = __webpack_require__(711);
;// CONCATENATED MODULE: ./src/components/providerProfile/team/team.component.tsx













const Team = props => {
  const {
    // theme: { colors },
    user,
    marginBottom
  } = props;
  const {
    colors
  } = useContext(ThemeContext);
  const {
    0: isOpen,
    1: setIsOpen
  } = useState(true);
  return /*#__PURE__*/_jsxs(Card, {
    padding: 2,
    marginBottom: marginBottom !== null && marginBottom !== void 0 ? marginBottom : 0,
    children: [/*#__PURE__*/_jsxs(Row, {
      children: [/*#__PURE__*/_jsx(Col, {
        size: "3",
        children: /*#__PURE__*/_jsx(AvatarComponent, {
          size: "6",
          url: UrlHelper.getProviderProfileImageUrl(user.avatar) // slot="start"

        })
      }), /*#__PURE__*/_jsx(Col, {
        size: "auto",
        children: /*#__PURE__*/_jsxs(IonLabel, {
          className: "ion-text-wrap",
          children: [/*#__PURE__*/_jsxs("p", {
            children: [/*#__PURE__*/_jsx(Text, {
              bold600: true,
              text: user.firstName + ' ' + user.lastName,
              color: "textLight",
              preset: TextPresets.CONTENT_HEADER
            }), ' ']
          }), /*#__PURE__*/_jsx("p", {
            children: /*#__PURE__*/_jsx(Text, {
              bold400: true,
              fontMontserrat: true,
              size: 1.2,
              text: user.position,
              color: "primary",
              preset: TextPresets.DESCRIPTION
            })
          }), /*#__PURE__*/_jsx("p", {
            children: /*#__PURE__*/_jsx(Text, {
              color: "textLight",
              lineHeight: 1.875,
              text: `"${user.about.trim()}"`,
              preset: TextPresets.DESCRIPTION
            })
          })]
        })
      }), /*#__PURE__*/_jsx(Col, {
        children: /*#__PURE__*/_jsxs(IonButton, {
          fill: "clear",
          size: "large",
          slot: "end",
          onClick: () => setIsOpen(!isOpen),
          children: [isOpen && /*#__PURE__*/_jsx(IonIcon, {
            icon: caretUp
          }), !isOpen && /*#__PURE__*/_jsx(IonIcon, {
            icon: caretDown
          })]
        })
      })]
    }), /*#__PURE__*/_jsx(Row, {
      children: /*#__PURE__*/_jsxs(Col, {
        "offset-md": "2",
        children: [!isOpen && /*#__PURE__*/_jsx(Row, {
          children: user.skills.items.map(skill => /*#__PURE__*/_jsx(Col, {
            marginRight: "small",
            size: "auto",
            children: /*#__PURE__*/_jsx(Chip, {
              label: {
                text: skill.getName(),
                preset: TextPresets.SMALL
              }
            })
          }, skill.getId()))
        }), isOpen && /*#__PURE__*/_jsx(Row, {
          children: /*#__PURE__*/_jsx(Col, {
            size: "auto",
            children: user.skills.items.map(skill => /*#__PURE__*/_jsxs(_Fragment, {
              children: [/*#__PURE__*/_jsx(SkillComponent, {
                skill: skill
              }, skill.getId()), /*#__PURE__*/_jsx(Row, {
                padding: "small",
                margin: "medium",
                children: /*#__PURE__*/_jsx(Col, {
                  color: colors.greyLighter,
                  height: "0.1"
                })
              })]
            }))
          })
        })]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/providerProfile/segment/segment.component.tsx






const SegmentComponent = props => {
  const {
    navList
  } = props;

  const scrollTo = e => {
    var _document$getElementB;

    (_document$getElementB = document.getElementById(e)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.scrollIntoView();
  };

  return /*#__PURE__*/_jsx(Row, {
    children: /*#__PURE__*/_jsx(Col, {
      xl: "8",
      lg: "9",
      md: "10",
      sm: "11",
      xs: "12",
      children: /*#__PURE__*/_jsx(IonSegment, {
        scrollable: true,
        children: navList.map((element, index) => {
          return /*#__PURE__*/_jsx(IonSegmentButton, {
            className: "segmentButton",
            value: element['segment'],
            onClick: () => scrollTo(element['segment']),
            children: /*#__PURE__*/_jsx(Text, {
              size: 1.4,
              lineHeight: 6,
              bold: true,
              capitalize: true,
              preset: TextPresets.GREY_DEFAULT,
              tx: element['segment']
            })
          }, index);
        })
      })
    })
  });
};
// EXTERNAL MODULE: ./src/components/global/login/login.component.tsx + 1 modules
var login_component = __webpack_require__(28143);
;// CONCATENATED MODULE: ./src/components/providerProfile/index.ts
/**
 * Group related items and maintain all the future
 * exports in an aplhabatical order
 */
















































/***/ }),

/***/ 75378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rj": () => (/* reexport safe */ _grid_grid__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   "JX": () => (/* reexport safe */ _col_col__WEBPACK_IMPORTED_MODULE_1__.J),
/* harmony export */   "X2": () => (/* reexport safe */ _row_row__WEBPACK_IMPORTED_MODULE_2__.X)
/* harmony export */ });
/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94287);
/* harmony import */ var _col_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59296);
/* harmony import */ var _row_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58480);







/***/ })

};
;