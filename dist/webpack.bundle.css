/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Contain overflow in all browsers.\r\n */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\r\n\r\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"utf-8\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n@media (orientation: landscape) {\r\n    /* landscape */\r\n}\r\n@media (orientation: portrait) {\r\n    /* portrait */\r\n}\r\n\r\n\r\n\r\n/* media queries */\r\n@media screen and (min-width: 800px) {}\r\n\r\n\r\n/* and logic in media queries */\r\n@media screen and (min-width: 400px) and (orientation: landscape) {\r\n    /* min-width and orientation */\r\n}\r\n/* or logic in media queries */\r\n@media screen and (min-width: 400px), screen and (orientation: landscape) {\r\n /* min-width and orientation */\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* ||grid and fallback */\r\n@media screen and (min-width: 40em) {\r\n    /* mix-width: 40em, 640px  640/40=16 */\r\n    /* html 10px, body 1em */\r\n    article {\r\n        display: grid;\r\n        grid-template-columns: 3fr 1fr;\r\n        column-gap: 20px;\r\n    }\r\n    div.content {\r\n        /* for browser support */\r\n        float: left;\r\n        width: 75%;\r\n    }\r\n    aside.extra {\r\n        /* for browser support */\r\n        float: left;\r\n        width: 25%;\r\n    }\r\n    /* feature queries */\r\n    @supports (display: grid) {\r\n        div.content {\r\n            width: auto;\r\n        }\r\n        aside.extra {\r\n            width: auto;\r\n        }\r\n    }\r\n\r\n    nav {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    nav > ul {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-content: space-around;\r\n        align-items: center;\r\n        justify-content: center;\r\n        justify-items: center;\r\n    }\r\n    nav > ul > li{\r\n        /* flex: 1; */\r\n        flex: 1 1 auto;\r\n        /* grow, shrink basis */\r\n        padding: 0 1em;\r\n    }\r\n\r\n\r\n    /* ||header */\r\n\r\n}\r\n\r\n\r\n/* doc */\r\n\r\n/* ||grid and fallback */\r\n@media screen and (min-width: 40em) {\r\n    /* mix-width: 40em, 640px  640/40=16 */\r\n    /* html 10px, body 1em */\r\n    div.wrapper {\r\n        /* height: 100vh; ??? */\r\n    }\r\n    article.doc {\r\n        display: grid;\r\n        grid-template-areas: \r\n        \"extra content\"\r\n        \"extra content\";\r\n        grid-template-columns:  2fr 10fr;\r\n        column-gap: 20px;\r\n    }\r\n    aside.sidebar.doc {\r\n    }\r\n    /* maybe i should try clear floats!!! */\r\n    div.content.doc {\r\n        grid-area: content;\r\n        /* for browser support */\r\n        float: left;\r\n        /* width: 75%; */\r\n        /* width: calc(100% * 10 / 12); */\r\n        height: 100vh;\r\n        overflow-y: auto;\r\n    }\r\n    aside.extra.doc {\r\n        grid-area: extra;\r\n        /* for browser support */\r\n        float: left;\r\n        /* width: 25%; */\r\n        width: calc(10/0% * 2 / 12);\r\n        /* overflow-x: visible; */\r\n    }\r\n    /* feature queries */\r\n    @supports (display: grid) {\r\n        div.content {\r\n            width: auto;\r\n        }\r\n        aside.extra {\r\n            width: auto;\r\n        }\r\n    }\r\n\r\n    nav {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    nav > ul {\r\n        display: flex;\r\n        flex-direction: row;\r\n        flex-wrap: wrap;\r\n        align-content: space-around;\r\n        align-items: center;\r\n        justify-content: center;\r\n        justify-items: center;\r\n    }\r\n    nav > ul > li{\r\n        /* flex: 1; */\r\n        flex: 1 1 auto;\r\n        /* grow, shrink basis */\r\n        padding: 0 1em;\r\n    }\r\n\r\n\r\n\r\n\r\n    /* ||header */\r\n\r\n}\r\n\r\n\r\n/* ||grid */\r\n@media screen and (min-width: 70em) {\r\n    /* 70*16=1120 */\r\n    main .wrapper-grid {\r\n        display: grid;\r\n        grid-template-columns: 3fr 1fr;\r\n        column-gap: 20px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    article {\r\n        margin-bottom: 0;\r\n    }\r\n\r\n    footer {\r\n        border-top: 1px solid #ccc;\r\n        margin-top: 2em;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* ||hover */\r\n/* use of pointing devices */\r\n@media (hover: hover) {\r\n    /* hover: hover */\r\n}\r\n\r\n/* ||pointer */\r\n@media (pointer: none) {\r\n    /* does not support pointer? */\r\n}\r\n@media (pointer: fine) {\r\n    /* supports pointer? */\r\n}\r\n@media (pointer: coarse) {\r\n    /* coarse poiner? */\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "li {\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(http://xutai.site:8083/fonts/font-awesome-4.7.0/css/font-awesome.css);", "screen"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* \r\n@font-face\r\n@media min-width font-size\r\n@media orientation\r\n@media min-width and orientation\r\n@media hover\r\n@media pointer\r\n*/\r\n@font-face {\r\n    font-family: 'vollkornbold';\r\n    src: url('http://xutai.site:8083/fonts/vollkorn-bold-webfont.woff2') format('woff2'),\r\n         url('http://xutai.site:8083/fonts/vollkorn-bold-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n@font-face {\r\n    font-family: 'montserratregular';\r\n    src: url('http://xutai.site:8083/fonts/montserrat-regular-webfont.woff2') format('woff2'),\r\n         url('http://xutai.site:8083/fonts/montserrat-regular-webfont.woff') format('woff');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n\r\n}\r\n\r\n/* font-size */\r\n\r\n\r\n\r\n\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n    font-family: 'vollkornbold', serif;\r\n}\r\n\r\n\r\n/* general text styling */\r\nhtml {\r\n    font-size: 10px;\r\n}\r\n\r\n\r\n\r\n/* Using viewport units for responsive typography */\r\nh1 {\r\n    font-size: calc(1.5rem + 3vw);\r\n}\r\nh2 {\r\n    font-size: calc(1.4rem + 2.6vw);\r\n}\r\nh3 {\r\n    font-size: calc(1.3rem + 2.2vw);\r\n}\r\nh4 {\r\n    font-size: calc(1.2rem + 1.8vw);\r\n}\r\nh5 {\r\n    font-size: calc(1.1rem + 1.4vw);\r\n}\r\nh6 {\r\n    font-size: calc(1rem + 1vw);\r\n}\r\n\r\n/* ||font-size */\r\n/* responsive typography */\r\n@media (min-width: 1200px) {\r\n    h1 {\r\n        font-size: 6rem;\r\n    }\r\n    h2 {\r\n        font-size: 3.8em;\r\n    }\r\n    h3 {\r\n        font-size: 3.2em;\r\n    }\r\n    h4 {\r\n        font-size: 2.8em;\r\n    }\r\n    h5 {\r\n        font-size: 2.4em;\r\n    }\r\n    h6 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n\r\n\r\ndiv,\r\nheader,\r\nfooter,\r\nmain,\r\narticle,\r\naside,\r\nul {\r\n    font-size: 1em;\r\n}\r\n\r\nli {\r\n    font-size: 1.6rem;\r\n}\r\n\r\npre,\r\ncode {\r\n    font-size: 1.4rem;\r\n}\r\ndl,\r\ndt,\r\ndd {\r\n    font-size: 1.4rem;\r\n}\r\np, \r\nspan, \r\ntextarea, \r\ninput,\r\nlabel\r\n {\r\n    font-size: 1.6rem;\r\n}\r\na {\r\n    font-size: 1.6rem;\r\n}\r\n\r\nbutton {\r\n    font-size: 1.6rem;\r\n}\r\n\r\nselect,\r\noption {\r\n    /* appearance: none; */\r\n    font-size: 1.6rem;\r\n}\r\n\r\ntable,\r\ntr,\r\nth,\r\ntd {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n\r\ni,\r\nb {\r\n    font-size: 1.6rem;\r\n}\r\nmark {\r\n    font-size: 1.6rem;\r\n}\r\n\r\n\r\nsummary,\r\ndetails {\r\n    font-size: 1.6rem;\r\n}\r\n\r\nq,\r\ncite,\r\nblockquote {\r\n    font-size: 1.6rem;\r\n}\r\n\r\ndata,\r\nsamp {\r\n    font-size: 1.6rem;\r\n}\r\n\r\nwbr,\r\nsmall {\r\n    font-size: 1.6rem;\r\n}\r\n\r\ndfn {\r\n    font-size: 1.6rem;\r\n\r\n}\r\nfigure,\r\nfigcaption {\r\n    font-size: 1.6rem;\r\n\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* \r\na\r\nul\r\ndt, dt, dd\r\n\r\n*/\r\n\r\n\r\n\r\n\r\nnav ul,\r\naside ul,\r\nnav ol,\r\naside ol\r\n {\r\n    /* ul default browser styles left-padding 40px */\r\n    padding: 0;\r\n}\r\n\r\nnav ul,\r\naside ul {\r\n    /* ul default browser styles list-style:circle  */\r\n    /* list-style: none; */\r\n}\r\n\r\n\r\n\r\n/* =links */\r\nli { \r\n    /* display: inline-block */\r\n    margin: .3em 0;\r\n}\r\nnav li,\r\nol li {\r\n    /* display: block; */\r\n}\r\nnav ul li,\r\nnav ol li {\r\n    /* list-style-type: none; */\r\n     /* margin: 1em 0; */\r\n     margin: 0 0;\r\n}\r\nul ul,\r\nul ol,\r\nol ul,\r\nol ol {\r\n    padding: 0 0 0 10px;\r\n}\r\nfooter li {\r\n    margin: 0 10px 0 0 ;\r\n}\r\nul.vue li::before,\r\nol.vue li::before {\r\n    content: url('htttp://xutai.site:8083/resources/images/vuejs/vue_15x15.png')\r\n}\r\nul.react li::before,\r\nol.react li::before {\r\n    content: url('htttp://xutai.site:8083/resources/images/reactjs/react.svg');\r\n    display: inline-block;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n\r\na {\r\n    outline: none;\r\n    text-decoration: none;\r\n    /* padding:2px 1px 0; */\r\n\r\n    /* display: inline-block; */\r\n    /* padding: 10px 10px; */\r\n    /* padding: 10px 20px 10px 0; */\r\n    /* color: black; */\r\n    border: none;\r\n}\r\n\r\na:link,\r\nnav a:link{\r\n    color: #3388ee;\r\n    /* 123456789abcdef */\r\n    /* ff-33 === dd, 88-88, ee-22 */\r\n    /* red, green, blue */\r\n    /* red + green = yellow */\r\n    /* blue + more (red+green===yellow) = lighter */\r\n\r\n    /* background-color: rgba(207, 232, 220, 0.2); */\r\n}\r\na:visited,\r\nnav a:visited  {\r\n    /* color: black; */\r\n    color: #333;\r\n}\r\n\r\nnav a:link,\r\nnav a:visited {\r\n    font-weight: bold;\r\n}\r\n\r\n\r\na:focus {\r\n    border-bottom: 1px solid;\r\n}\r\na:hover,\r\nnav a:hover {\r\n    /* border-bottom: 1px solid; */\r\n    /* color: #ffffff; */\r\n    /* background-color: #3388ee; */\r\n}\r\n\r\n\r\n\r\na:active {\r\n    border-bottom-color: red;\r\n}\r\nnav a::after{\r\n    /* content: '|';\r\n    padding: 0 0 0 10px;\r\n    color: #00a0df; */\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* ||dl, dt, dd */\r\ndl {\r\n\r\n}\r\ndt {\r\n}\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "em {\r\n    /* background-color: #ccddee; */\r\n    padding:0.2em;\r\n}\r\n\r\ncode{\r\n    padding:0.2em;\r\n}\r\npre {\r\n    padding: 0.5em 0.5em;\r\n}\r\n/* ||pre ||code */\r\npre,  code{\r\n    /* color palette v1 dark */\r\n    background-color: #1b2426;\r\n    color: #ddd;\r\n\r\n    /* color palette v2 light */\r\n    /* background-color: #f6f6f6; */\r\n    /* color: #333; */\r\n\r\n    overflow: auto;\r\n    /* color: #96bdb6; */\r\n    /* min-width: 40em; */\r\n    /* max-width: 40em; */\r\n    max-width: 100%;\r\n    font-size: 1.4rem;\r\n}\r\n\r\nvar {\r\n\r\n}\r\n\r\ndt {\r\n    /* background-color: unset; */\r\n    /* initial:  \r\n    restore all CSS properties to their initial state. \r\n    On inherited properties, the initial value may be unexpected. \r\n\r\n    unset\r\n    resets a property to its inherited value \r\n    if the property naturally inherits from its parent, \r\n    and to its initial value if not\r\n\r\n    revert\r\n    ...\r\n    */\r\n\r\n}\r\n\r\n\r\n\r\n/* remark */\r\n.question {\r\n    border-left: 5px solid yellow;\r\n    padding: 15px 25px;\r\n    background-color: lightgoldenrodyellow;\r\n}\r\n.question::before {\r\n    content: \"Question: \";\r\n    /* color: green; */\r\n    /* border-color: black; */\r\n    /* border-style: dotted; */\r\n}\r\n.important {\r\n    border-left: 5px solid red;\r\n    padding: 15px 25px;\r\n    background-color: pink;\r\n}\r\n.important::before {\r\n    content: \"Important: \";\r\n    /* color: green; */\r\n    /* border-color: black; */\r\n    /* border-style: dotted; */\r\n}\r\n.warning {\r\n    border-left: 5px solid darksalmon;\r\n    /* padding-left: 10px; */\r\n    padding: 15px 25px;\r\n    background-color: blanchedalmond;\r\n}\r\n.warning::before {\r\n    content: \"Warning: \";\r\n    /* color: green; */\r\n    /* border-color: black; */\r\n    /* border-style: dotted; */\r\n}\r\n.note {\r\n    border-left: 5px solid lightblue;\r\n    padding: 15px 25px;\r\n    background-color: lightcyan;\r\n}\r\n.note::before {\r\n    content: \"Note: \";\r\n    /* color: green; */\r\n    /* border-color: black; */\r\n    /* border-style: dotted; */\r\n}\r\n.info {\r\n    border-left: 5px solid #42b983;\r\n    padding: 15px 25px;\r\n    background-color: #f8f8f8;\r\n}\r\n.info::before {\r\n    content: \"info: \";\r\n    /* color: green; */\r\n    /* border-color: black; */\r\n    /* border-style: dotted; */\r\n}\r\n.tip {\r\n    border-left: 5px solid #50a2ff;\r\n    padding: 15px 25px;\r\n    background-color: #f8f8f8;\r\n    /* background-color: lightsteelblue; */\r\n}\r\n.tip::before {\r\n    content: \"Tip: \";\r\n    /* color: green; */\r\n    /* border-color: black; */\r\n    /* border-style: dotted; */\r\n}\r\n\r\n.key {\r\n    background-color: rgb(75, 178, 226);\r\n    padding: 4px 8px;\r\n}\r\n.keyword {\r\n    background-color: mediumaquamarine;\r\n    padding: 4px 8px;\r\n}\r\n.unfamiliar {\r\n    /* background-color: plum; */\r\n    background-color: palevioletred;\r\n    padding: 4px 8px;\r\n}\r\n/* .difficult {} */\r\n.confusing {\r\n    background-color: peachpuff;\r\n    padding: 4px 8px;\r\n}\r\n\r\n\r\n.reference {\r\n    border-left: 5px solid rgb(204, 21, 189);\r\n    padding: 15px 25px;\r\n    background-color: rgb(126, 80, 122);\r\n}\r\n\r\n.optional {\r\n    border-left: 4px solid #696969;\r\n    padding: 4px 8px;\r\n    margin: 0 0 0 10px;\r\n    background-color: #eeeeee;\r\n}\r\n\r\n/* grasped or not */\r\n.grasped::after {\r\n    content: \"  grasped\";\r\n    color:green;\r\n}\r\n\r\n\r\n\r\n\r\n.experimental::after {\r\n    content: url('htttp://xutai.site:8083/resources/images/mdn/experimental.svg');\r\n    display: inline-block;\r\n    margin: 0 0 0 1em;\r\n    vertical-align: middle;\r\n    /* padding: .2em .4em; */\r\n    /* background-color: deepskyblue; */\r\n    /* color: white; */\r\n    /* z-index: 1; */\r\n}\r\n\r\n\r\n.not-standardized {\r\n\r\n}\r\n\r\n.legacy {\r\n    text-decoration: line-through;\r\n}\r\n.legacy::after {\r\n    content: url('htttp://xutai.site:8083/resources/images/svg/trash-bin.svg');\r\n    display: inline-block;\r\n    margin: 0 0 0 1em;\r\n    vertical-align: middle;\r\n    width: 15px;\r\n    /* height: 15px; */\r\n}\r\n\r\n\r\n\r\n*::selection {\r\n    /* background-color: lightskyblue; */\r\n    /* background-color: lightsalmon; */\r\n    background-color: lightgreen;\r\n}\r\npre::selection,\r\ncode::selection {\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.mastery-level-1::after {\r\n    content: \"*\";\r\n    display: inline-block;\r\n    margin: 0 1em;\r\n}\r\n.mastery-level-2::after {\r\n    content: \"**\";\r\n    display: inline-block;\r\n    margin: 0 1em;\r\n}\r\n.mastery-level-3::after {\r\n    content: \"***\";\r\n    display: inline-block;\r\n    margin: 0 1em;\r\n}\r\n.mastery-level-4::after {\r\n    content: \"****\";\r\n    display: inline-block;\r\n    margin: 0 1em;\r\n}\r\n.mastery-level-5::after {\r\n    content: \"*****\";\r\n    display: inline-block;\r\n    margin: 0 1em;\r\n}\r\n\r\n\r\n.code-highlight {\r\n    background-color: #f3edd1;\r\n    color: #333;\r\n    display: block;\r\n    padding: 0 0 2rem 0\r\n}\r\n\r\nblockquote {\r\n    border-left: .3rem solid #dfe2e5;\r\n    margin: 0;\r\n    color: #999;\r\n    padding: 0 1rem;\r\n}\r\n\r\n\r\n\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\n\r\n/* /pages/web-development/js/framework-and-library/vuejs-vs-reactjs.html */\r\n\r\n.table-wrapper {\r\n    /* display: table; */\r\n    /* display: grid; */\r\n    \r\n    /* grid-template */\r\n    /* grid-template-rows: 3; */\r\n    /* grid-template-columns: 3; */\r\n    /* grid-template-areas: ; */\r\n\r\n    /* grid-auto-flow: ; */\r\n    /* grid-auto-rows: 1fr 1fr 1fr; */\r\n    /* grid-auto-columns: ; */\r\n\r\n    /* grid-row-gap: 10px; */\r\n    /* column-gap: normal; */\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n\r\n}\r\n.table-row {\r\n    \r\n    /* grid children */\r\n    /* align-content: center; */\r\n    /* align-items: center; */\r\n    \r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    /* flex-direction: row; */\r\n    /* flex-wrap: wrap; */\r\n\r\n    align-content: center;\r\n    align-items: center;\r\n    \r\n    justify-items: center;\r\n    justify-content:  space-evenly;\r\n\r\n    /* border-bottom: 1px solid black; */\r\n}\r\n.table-row > span{\r\n    /* flex children */\r\n    /* flex: 1 1 100px; */\r\n    /* flex-shrink */\r\n    /* flex-grow */\r\n    /* flex-basis: 1; */\r\n\r\n    /* order: */\r\n    \r\n\r\n    justify-self: stretch;\r\n    align-self: stretch;\r\n\r\n    text-align: center;\r\n    /* vertical-align: middle; */\r\n    /* margin: auto auto; */\r\n\r\n    border-right: 1px solid black;\r\n    border-bottom: 1px solid black;\r\n    /* border: 1px solid black; */\r\n    padding: 10px;\r\n\r\n    /* width: auto; */\r\n    /* width: 200px; */\r\n    /* width: min-content; */\r\n    /* width: max-content; */\r\n    /* min-height: 80px; */\r\n\r\n    /* word-break: break-all; */\r\n    overflow-wrap: anywhere;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-items: center;\r\n    justify-items: center;\r\n    justify-content:  space-evenly;\r\n    \r\n    \r\n}\r\n/* .table-row > span:nth-child(1) {flex: 1 1 100px;}\r\n.table-row > span:nth-child(2) {flex: 1 1 100px;}\r\n.table-row > span:nth-child(3) {flex: 1 1 100px;} */\r\n.table-row > span {flex: 1 1 100px;}\r\n.table-row > span:first-child {\r\n    border-left: 1px solid black;\r\n}\r\n.table-row:first-child > span {\r\n    border-top: 1px solid black; \r\n}\r\n\r\n.table-row > span > span {\r\n    padding: 10px 0;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-logo {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n.react-logo {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n\r\n\r\n/* ||header */\r\n\r\n     \r\n\r\n/* \r\nheader\r\n.wrapper\r\n.header-sub \r\n.header-sub-sub1 .header-sub-sub2\r\n                        span, a, a, a, a  .menu\r\n                             .menu-wrapper\r\n                                a  .menu-nav\r\n                                    menu-nav-ul\r\n                                        li  li\r\n*/\r\n    header {\r\n        background-color: #24292e;\r\n        padding: 8px 0\r\n    }\r\n\r\n\r\n    .header-sub > * > a{\r\n        color: whitesmoke;\r\n        margin-right: 10px;\r\n        padding: 3px 6px;\r\n    }\r\n    .header-sub a.register {\r\n        border: 1px solid white;\r\n        border-radius: 5px;\r\n    }\r\n    .header-sub a.logout\r\n     {\r\n        display: none;\r\n    }\r\n    .header-sub a.logout {\r\n        color: grey;\r\n        border: 1px solid grey;\r\n    }\r\n    \r\n    .header-sub a.login {\r\n        /* display: none; */\r\n    }\r\n    .header-sub .username {\r\n        display: none;\r\n    }\r\n    .username {\r\n        color: white;\r\n        padding: 0 10px 0 0 ;\r\n    }\r\n\r\n    .header-sub  canvas {\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .header-sub {\r\n        display: flex;\r\n        /* color: white; */\r\n        flex-flow: row nowrap;\r\n\r\n\r\n        /* cross axis */\r\n        align-items: center;\r\n        align-content: center;\r\n\r\n        /* main axis */\r\n        justify-content: space-between;\r\n        justify-items: auto;\r\n\r\n    }\r\n\r\n    .header-sub-sub1 {\r\n        /* align-self: flex-start; */\r\n        /* justify-self: start; */\r\n        display: flex;\r\n       /* cross axis */\r\n       align-items: center;\r\n       align-content: center;\r\n\r\n       /* main axis */\r\n       justify-content: space-between;\r\n       justify-items: auto;\r\n    }\r\n    .header-sub-sub2 {\r\n        /* align-self: flex-end; */\r\n        /* justify-self: end; */\r\n        display: flex;\r\n        /* cross axis */\r\n        align-items: center;\r\n        align-content: center;\r\n \r\n        /* main axis */\r\n        justify-content: space-between;\r\n        justify-items: auto;\r\n    }\r\n\r\n    .menu-close {\r\n       padding-right: 20px;\r\n    }\r\n\r\n    .menu {\r\n        display: none;\r\n        position: fixed;\r\n        top: 0;\r\n        right: 0;\r\n        background-color: whitesmoke;\r\n        /* color: black; */\r\n        z-index: 2;\r\n        flex: 1 1 auto;\r\n        \r\n    }\r\n    .menu-wrapper {\r\n        display: flex;\r\n        flex-flow: column nowrap;\r\n        height: 100vh;\r\n        width: 300px;\r\n    }\r\n    .menu-wrapper > a {\r\n        /* main axis */\r\n        /* justify-self: flex-end; */\r\n        /* cross axis */\r\n        align-self: flex-end;\r\n    }\r\n    .menu-wrapper nav ul{\r\n        display: flex;\r\n        flex-flow: column nowrap;\r\n    }\r\n    .menu-wrapper nav ul summary {\r\n        padding: 0 0 0 10px;\r\n        border-top: 1px solid black;\r\n    }\r\n\r\n    .flex-auto {\r\n        display: flex;\r\n        flex-flow: column nowrap;\r\n      \r\n    }\r\n\r\n    .flex-auto a {\r\n        padding: 10px 20px;\r\n    }\r\n\r\n    /* \r\nheader\r\n.wrapper\r\n.header-sub \r\n.header-sub-sub1 .header-sub-sub2\r\n                        span, a, a, a, a  .menu\r\n                             .menu-wrapper\r\n                                a  .menu-nav\r\n                                    menu-nav-ul\r\n                                        li  li\r\n*/\r\n    \r\n    @media screen and (min-width: 40em) { \r\n        .header-sub {\r\n            display: flex;\r\n            /* color: white; */\r\n            flex-flow: row nowrap;\r\n    \r\n    \r\n            /* cross axis */\r\n            align-items: center;\r\n            align-content: center;\r\n    \r\n            /* main axis */\r\n            justify-content: space-between;\r\n            /* justify-items: auto;  */\r\n            /* justify-items, not for flex! */\r\n    \r\n        }\r\n    \r\n        .header-sub-sub1 {\r\n            /* align-self: flex-start; */\r\n            /* justify-self: start; */\r\n            display: flex;\r\n           /* cross axis */\r\n           align-items: center;\r\n           align-content: center;\r\n    \r\n           /* main axis */\r\n           justify-content: space-between;\r\n           justify-items: auto;\r\n           flex: 0 1 auto;\r\n        }\r\n        .header-sub-sub2 {\r\n            /* align-self: flex-end; */\r\n            /* justify-self: end; */\r\n            display: flex;\r\n            /* cross axis */\r\n            align-items: center;\r\n            align-content: center;\r\n            \r\n            /* main axis */\r\n            justify-content: space-around;\r\n            /* justify-items: auto; */\r\n            flex: 1 1 auto;\r\n        }\r\n    \r\n\r\n        .canvas-menu {\r\n            display: none;\r\n        }\r\n        .menu-close {\r\n            display: none;\r\n        }\r\n    \r\n        .menu {\r\n            /* display: none; */\r\n            display: flex;\r\n            /* position: fixed; */\r\n            position: static;\r\n            /* top: 0; */\r\n            /* right: 0; */\r\n            /* background-color: whitesmoke; */\r\n            background-color: initial;\r\n            /* color: black; */\r\n            /* z-index: 2; */\r\n            z-index: 1;\r\n            order: -1;\r\n            flex: 1 1 auto;\r\n            color: white;\r\n            \r\n        }\r\n\r\n        .menu-wrapper {\r\n            display: flex;\r\n            /* flex-flow: column nowrap; */\r\n            flex-flow: row nowrap;\r\n            /* height: 100vh; */\r\n            height: auto;\r\n            /* width: 300px; */\r\n            width: auto;\r\n        }\r\n        .menu-wrapper > a {\r\n            /* main axis */\r\n            /* justify-self: flex-end; */\r\n            /* cross axis */\r\n            align-self: flex-end;\r\n        }\r\n        .menu-wrapper nav ul{\r\n            display: flex;\r\n            /* flex-flow: column nowrap; */\r\n            flex-flow: row nowrap;\r\n        }\r\n        .menu-wrapper nav ul summary {\r\n            padding: 0 5px 0 0;\r\n        }\r\n    \r\n    \r\n        .flex-auto {\r\n            display: flex;\r\n            flex-flow: column nowrap;\r\n            /* new */\r\n            position: fixed;\r\n            z-index: 2;\r\n            background-color: white;\r\n            margin: 20px 0 0 0;\r\n        }\r\n        .flex-auto a {\r\n            padding: 10px;\r\n        }\r\n    \r\n    }\r\n\r\n\r\n ", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\r\nfooter  {\r\n    background-color: #fafbfc;\r\n    \r\n  }footer {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    flex-shrink: 1;\r\n    flex-direction: column;\r\n    flex-basis: initial;\r\n    flex-wrap: initial;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.footer-ul {\r\n  display: flex;\r\n  flex-flow: row nowrap;\r\n   \r\n  /* main axis */\r\n  justify-content: center;\r\n  /* justify-items: auto; */\r\n\r\n  /* cross axis */\r\n  align-items: center;\r\n  align-content: center;\r\n  \r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* external link */\r\na.external {\r\n    padding-right: 20px;\r\n    /* background-image: url('../images/external-link-52.png'); */\r\n    background-size: 16px 16px;\r\n    background-repeat: no-repeat;\r\n    background-position: 100% 0;\r\n    /* background-attachment: local; */\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* clearfix */\r\n.clearfix:after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: block;\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* flexbox */\r\nsection.flexbox {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\nsection.flexbox > article {\r\n    padding: 10px;\r\n    margin: 10px;\r\n    border-left: 1px solid black;\r\n}\r\nsection.flexbox > article:nth-child(1) {\r\n    flex: 1 100px\r\n}\r\nsection.flexbox > article:nth-child(2) {\r\n    flex: 1 200px\r\n}\r\nsection.flexbox > article:nth-child(3) {\r\n    flex: 2;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["a"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(14);
            var content = __webpack_require__(15);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_at_rule_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_responsive_design_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_remark_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_table_display_table_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_common_links_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_layout_float_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_layout_flex_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(12);
// Imports













var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_4_3_0_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_at_rule_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_responsive_design_css__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_font_css__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_list_css__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_remark_css__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_table_display_table_css__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_common_links_css__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_layout_float_css__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], "screen");
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_4_3_0_css_loader_dist_cjs_js_layout_flex_css__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], "screen");
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* written by xutai */\r\n/* last edit: Thursday, June 18, 2020 */\r\n\r\n/*! Generated by Font Squirrel (https://www.fontsquirrel.com) on June 16, 2020 */\r\n\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: whitesmoke;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6 {\r\n    line-height: 1;\r\n}\r\n\r\n/* fonts */\r\nhtml {\r\n    /* font-family: 'montserratregular', sans-serif; */\r\n}\r\nbody {\r\n    /* width: 90%; */\r\n    \r\n    /* 照顾浏览器的屏幕把 */\r\n    margin: 0 auto;\r\n    /* font: 1em/1.3 Arial Helvetica, sans-serif; */\r\n    font: 1em/1.6 'montserratregular', sans-serif;\r\n}\r\n/* body {\r\n    line-height: 1.6;\r\n} */\r\n\r\n.container {\r\n    width: 100%;\r\n    /* max-width: 900px; */\r\n    margin: 0 auto;\r\n}\r\n.wrapper {\r\n    /* width: 90%; */\r\n    width: 95%;\r\n    max-width: 900px;\r\n    margin: 0 auto;\r\n}\r\nheader,\r\nmain,\r\nfooter {\r\n    margin: 0 auto;\r\n}\r\n\r\nbody {\r\n    letter-spacing: 1px;\r\n    word-spacing: 2px;\r\n}\r\nh1,h2,h3,h4,h5,h6 {\r\n    letter-spacing: 0.2em;\r\n}\r\n\r\nh1 {\r\n    margin: 0;\r\n    padding: 2vw 0;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\nsection>p:first-child {\r\n    text-indent: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.related {\r\n    border: 1px solid rgb(79, 185, 227);\r\n    padding: 10px;\r\n}\r\n\r\n.sidebar {\r\n    /* padding: 10px; */\r\n}\r\n\r\narticle {\r\n    margin-bottom: 1em;\r\n}\r\n\r\n\r\ndiv.meme {\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 5px;\r\n    background-color: rgb(207, 232, 220);\r\n    /* padding: 1em; */\r\n    /* background-image: url('../images/image.jpg');\r\n    background-repeat: no-repeat; */\r\n    /* background: url('../images/image.jpg') no-repeat; */\r\n    background-attachment: cover; \r\n\r\n    float: left;\r\n    margin-right: 15px;\r\n\r\n}\r\n\r\n\r\n/* features */\r\n/* why setting bottom:0, and right:0 */\r\nimg.image-positioned {\r\n    position: absolute;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0;\r\n    margin: 0;\r\n}\r\nimg.image-fixed-positioned {\r\n    width: 30px;\r\n    height: 30px;\r\n    position: fixed;\r\n    bottom: 10px;\r\n    left: 0;\r\n}\r\ndiv.block-positioned {\r\n    background-color: rgb(0,0,0);\r\n    opacity: 0.1;\r\n    /* z-index: 10; */\r\n    /* position: absolute;\r\n    top:0;\r\n    bottom:0;\r\n    left:0;\r\n    right:0; */\r\n    /* margin: 50px; */\r\n    /* margin: 0; */\r\n}\r\n\r\n/* experimental - position: sticky */\r\n/* h2,h3 {\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin: 1em 0;\r\n    left: 0;\r\n} */\r\nh2 {\r\n    /* padding: 20px;\r\n    margin: 1em 0; */\r\n}\r\nh3 {\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin: 1em 0;\r\n    left: 0;\r\n} \r\n/* h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    position: sticky;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n */\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* ||images */\r\n.image_cover {\r\n    display: block;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 900px;\r\n}\r\n\r\n\r\n\r\np.count {\r\n    text-align: center;\r\n}\r\np.count span {\r\n    padding: 0 10px;\r\n\r\n}\r\n\r\n\r\n\r\n.a1 {\r\n    padding:  30px 0;\r\n}\r\n.b6 {\r\n    padding: 0 10px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* images, pictures */\r\npicture {\r\n    /* width: 100% */\r\n    max-width: 100%;\r\n}\r\npicture source {\r\n    max-width: inherit;\r\n}\r\npicture img {\r\n    max-width: inherit;\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* table */\r\ntable {}\r\n/* tr {\r\n    border: 1px solid #ccc;\r\n} */\r\nth,\r\ntd {\r\n    border: 1px solid #ccc;\r\n    padding: .5rem 1rem;\r\n}\r\n\r\n\r\n\r\n/* video */\r\nvideo {\r\n    max-width: 100%;\r\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ]);