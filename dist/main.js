/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg-img.jpg */ "./src/assets/bg-img.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n}\r\n\r\nheader {\r\n    width: 100%;\r\n    background-color: #F5F5F5;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 15px 0;\r\n}\r\n\r\n.logo {\r\n    padding: 10px;\r\n    margin-left: 30px;\r\n\r\n    color: #2EB086;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n}\r\n\r\n.links {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n\r\n    padding: 15px;\r\n    margin-right: 60px;\r\n    color: #2EB086;\r\n}\r\n\r\n.btn-nav {\r\n    background-color: #F5F5F5;\r\n    color: #2EB086;\r\n    outline: none;\r\n    border: none;\r\n\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n}\r\n\r\n.btn-nav:hover {\r\n    border-bottom: 3px solid #2EB086;\r\n    cursor: pointer;\r\n}\r\n\r\n.first-section {\r\n    background:  no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-size: contain;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.center-fit {\r\n    width: 100%;\r\n}\r\n\r\n.first-section .card {\r\n    position: absolute;\r\n    left: 10%;\r\n    top: 20%;\r\n\r\n    max-width: 40%;\r\n    height: auto;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n\r\n    padding: 15px;\r\n}\r\n\r\n.first-section .card .title {\r\n    font-weight: 600;\r\n    font-size: 38px;\r\n}\r\n\r\n.card button {\r\n    height: 50px;\r\n\r\n    background-color: #2EB086; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 25px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.first-section h2.title {\r\n    margin: 0;\r\n    font-size: 28px;\r\n    font-weight: 800;\r\n}\r\n\r\n.second-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n    background-color: #F5F5F5;\r\n    padding: 25px;\r\n}\r\n\r\n.second-section .card-section {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(300px, 0.8fr));\r\n    gap: 30px;\r\n}\r\n\r\n.second-section-title {\r\n    font-weight: 800;\r\n    font-size: 32px;\r\n}\r\n\r\n.card-section .info-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.info-card .card-title {\r\n    text-align: center;\r\n    color: #2EB086;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n}\r\n\r\n.info-card .card-text {\r\n    text-align: center;\r\n}\r\n\r\n.card-section .info-card .card-img {\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\nfooter .about-div,\r\nfooter .contact-links {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nfooter .contact-links .contact-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\nfooter .contact-links .contact-div img {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\nfooter .about-div {\r\n    width: 300px;\r\n}\r\n\r\nfooter .about-div p {\r\n    margin: 0;\r\n}\r\n\r\nfooter h3 {\r\n    color: #2EB086;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.follow-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.follow-div img {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.follow-div div  {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n}\r\n\r\n/* MENU Page */\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n}\r\n\r\n.menu .card-carousel {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\r\n    gap: 5px;\r\n}\r\n\r\n/* Product Cards */\r\n.product-card {\r\n    position: relative;\r\n    width: 320px;\r\n    height: 420px;\r\n    background: #DAB88B;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n}\r\n\r\n.product-card::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -50%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #F3E9DD;\r\n    transform: skewY(345deg);\r\n    transition: 0.5s;\r\n}\r\n\r\n.product-card:hover::before {\r\n    top: -70%;\r\n    transform: skewY(390deg);\r\n}\r\n\r\n.product-card::after{\r\n    content: 'Coffee';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-weight: 600;\r\n    font-size: 8em;\r\n    color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.product-card .imgBox {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n\r\n.product-card .imgBox img {\r\n    max-width: 100%;\r\n    transition: 0.5%;\r\n}\r\n\r\n.product-card:hover .imgBox img {\r\n    max-width: 50%;\r\n    height: 200px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.product-card .contentBx {\r\n    position: relative;\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    z-index: 1;\r\n}\r\n\r\n.product-card .contentBx h3 {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.product-card .contentBx .price {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.product-card .contentBx .buy {\r\n    position: relative;\r\n    top: 200px;\r\n    opacity: 0;\r\n    padding: 10px 30px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background: #2EB086;\r\n    border-radius: 30px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    transition: 0.5%;\r\n}\r\n\r\n.product-card:hover .contentBx .buy {\r\n    top: 0;\r\n    opacity: 1;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#content {\r\n    width: 100%;\r\n}\r\n\r\nheader {\r\n    width: 100%;\r\n    background-color: #F5F5F5;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    padding: 15px 0;\r\n}\r\n\r\n.logo {\r\n    padding: 10px;\r\n    margin-left: 30px;\r\n\r\n    color: #2EB086;\r\n    font-size: 28px;\r\n    font-weight: 700;\r\n}\r\n\r\n.links {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n\r\n    padding: 15px;\r\n    margin-right: 60px;\r\n    color: #2EB086;\r\n}\r\n\r\n.btn-nav {\r\n    background-color: #F5F5F5;\r\n    color: #2EB086;\r\n    outline: none;\r\n    border: none;\r\n\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n}\r\n\r\n.btn-nav:hover {\r\n    border-bottom: 3px solid #2EB086;\r\n    cursor: pointer;\r\n}\r\n\r\n.first-section {\r\n    background:  no-repeat url('./assets/bg-img.jpg');\r\n    background-size: contain;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.center-fit {\r\n    width: 100%;\r\n}\r\n\r\n.first-section .card {\r\n    position: absolute;\r\n    left: 10%;\r\n    top: 20%;\r\n\r\n    max-width: 40%;\r\n    height: auto;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n\r\n    padding: 15px;\r\n}\r\n\r\n.first-section .card .title {\r\n    font-weight: 600;\r\n    font-size: 38px;\r\n}\r\n\r\n.card button {\r\n    height: 50px;\r\n\r\n    background-color: #2EB086; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 25px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n\r\n.first-section h2.title {\r\n    margin: 0;\r\n    font-size: 28px;\r\n    font-weight: 800;\r\n}\r\n\r\n.second-section {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    \r\n    background-color: #F5F5F5;\r\n    padding: 25px;\r\n}\r\n\r\n.second-section .card-section {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(300px, 0.8fr));\r\n    gap: 30px;\r\n}\r\n\r\n.second-section-title {\r\n    font-weight: 800;\r\n    font-size: 32px;\r\n}\r\n\r\n.card-section .info-card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    width: 100%;\r\n}\r\n\r\n.info-card .card-title {\r\n    text-align: center;\r\n    color: #2EB086;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n}\r\n\r\n.info-card .card-text {\r\n    text-align: center;\r\n}\r\n\r\n.card-section .info-card .card-img {\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\nfooter {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\nfooter .about-div,\r\nfooter .contact-links {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\nfooter .contact-links .contact-div {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n\r\nfooter .contact-links .contact-div img {\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n\r\nfooter .about-div {\r\n    width: 300px;\r\n}\r\n\r\nfooter .about-div p {\r\n    margin: 0;\r\n}\r\n\r\nfooter h3 {\r\n    color: #2EB086;\r\n    font-size: 24px;\r\n    font-weight: 600;\r\n}\r\n\r\n.follow-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.follow-div img {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.follow-div div  {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 5px;\r\n}\r\n\r\n/* MENU Page */\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px;\r\n}\r\n\r\n.menu .card-carousel {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\r\n    gap: 5px;\r\n}\r\n\r\n/* Product Cards */\r\n.product-card {\r\n    position: relative;\r\n    width: 320px;\r\n    height: 420px;\r\n    background: #DAB88B;\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n}\r\n\r\n.product-card::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -50%;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #F3E9DD;\r\n    transform: skewY(345deg);\r\n    transition: 0.5s;\r\n}\r\n\r\n.product-card:hover::before {\r\n    top: -70%;\r\n    transform: skewY(390deg);\r\n}\r\n\r\n.product-card::after{\r\n    content: 'Coffee';\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    font-weight: 600;\r\n    font-size: 8em;\r\n    color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.product-card .imgBox {\r\n    position: relative;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n\r\n.product-card .imgBox img {\r\n    max-width: 100%;\r\n    transition: 0.5%;\r\n}\r\n\r\n.product-card:hover .imgBox img {\r\n    max-width: 50%;\r\n    height: 200px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.product-card .contentBx {\r\n    position: relative;\r\n    padding: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    z-index: 1;\r\n}\r\n\r\n.product-card .contentBx h3 {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.product-card .contentBx .price {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.product-card .contentBx .buy {\r\n    position: relative;\r\n    top: 200px;\r\n    opacity: 0;\r\n    padding: 10px 30px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background: #2EB086;\r\n    border-radius: 30px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    transition: 0.5%;\r\n}\r\n\r\n.product-card:hover .contentBx .buy {\r\n    top: 0;\r\n    opacity: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContactTitle() {
    const contactHeading = document.createElement("div");
    contactHeading.classList.add("contact-heading");
    const contactTitle = document.createElement("p");
    contactTitle.textContent = "Contact Us";

    contactHeading.appendChild(contactTitle);
    return contactHeading;
};


function createContactPage() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    contact.appendChild(createContactTitle());

    return contact;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_bg_img_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/bg-img.jpg */ "./src/assets/bg-img.jpg");
/* harmony import */ var _assets_card_img_one_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/card-img-one.jpg */ "./src/assets/card-img-one.jpg");
/* harmony import */ var _assets_card_img_two_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/card-img-two.jpg */ "./src/assets/card-img-two.jpg");
/* harmony import */ var _assets_card_img_three_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/card-img-three.jpg */ "./src/assets/card-img-three.jpg");






function createFirstSection() {
    const firstSection = document.createElement("section");
    firstSection.classList.add("first-section");

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const heading = document.createElement("h2");
    heading.textContent = "Coffee Shop";
    heading.classList.add("title");

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a felis vitae dolor egestas fermentum. Cras tempor diam nunc, id consectetur nulla fringilla euismod. Integer gravida lobortis felis eu pharetra. Phasellus nec eros ac lorem tempor varius in quis tellus. Ut tempor placerat arcu scelerisque interdum. In hac habitasse platea dictumst. Maecenas commodo non arcu a placerat. Nullam in fringilla libero.";

    const learnMoreBtn = document.createElement("button");
    learnMoreBtn.textContent = "Learn More";

    cardDiv.appendChild(heading);
    cardDiv.appendChild(paragraph);
    cardDiv.appendChild(learnMoreBtn);

    const img = new Image();
    img.src = _assets_bg_img_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img.classList.add("center-fit");
   
    firstSection.appendChild(cardDiv);
    firstSection.appendChild(img);

    return firstSection;
};

function createSecondSection() {
    const secondSection = document.createElement("section");
    secondSection.classList.add("second-section");

    const title = document.createElement("h2");
    title.textContent = "Coffee Build Your Base";
    title.classList.add("second-section-title");

    secondSection.appendChild(title);

    let cardSection = document.createElement("div");
    cardSection.classList.add("card-section");

    let headerList = ["01 FRIENDLY PLACE", "02 FEEL THE COFFEE", "03 FULL TASTE"];
    for (let i=0; i < headerList.length; i++) {
        let card = createCard(headerList[i], i);
        cardSection.appendChild(card);
    }

    secondSection.appendChild(title);
    secondSection.appendChild(cardSection);

    return secondSection;
};

function createCard(title, i) {
    let images = [_assets_card_img_one_jpg__WEBPACK_IMPORTED_MODULE_1__,_assets_card_img_two_jpg__WEBPACK_IMPORTED_MODULE_2__,_assets_card_img_three_jpg__WEBPACK_IMPORTED_MODULE_3__];
    const card = document.createElement("div");
    card.classList.add("info-card");
    let cardImage = document.createElement("img");
    let cardImageDiv = document.createElement("div");
    cardImageDiv.appendChild(cardImage);
    cardImage.classList.add("card-img");
    let cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title")
    let cardText = document.createElement("div");
    cardText.classList.add("card-text");
    
    cardTitle.textContent = title;
    cardImage.src = images[i];
    cardText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a felis vitae dolor egestas fermentum. Cras tempor diam nunc, id consectetur nulla fringilla euismod."

    card.appendChild(cardImageDiv);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    return card;
};

function createHomePage() {
    const home = document.createElement("div");

    home.appendChild(createFirstSection());
    home.appendChild(createSecondSection());

    return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_americano_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/americano.jpg */ "./src/assets/americano.jpg");
/* harmony import */ var _assets_caffe_latte_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/caffe-latte.jpg */ "./src/assets/caffe-latte.jpg");
/* harmony import */ var _assets_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/cappuccino.jpg */ "./src/assets/cappuccino.jpg");
/* harmony import */ var _assets_caramel_latte_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/caramel-latte.jpg */ "./src/assets/caramel-latte.jpg");
/* harmony import */ var _assets_espresso_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/espresso.jpg */ "./src/assets/espresso.jpg");
/* harmony import */ var _assets_machiato_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/machiato.jpg */ "./src/assets/machiato.jpg");
/* harmony import */ var _assets_mocha_latte_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/mocha-latte.jpg */ "./src/assets/mocha-latte.jpg");









function createMenuHeader() {
    const menuHeader = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Our Menu";
    menuHeader.classList.add("menu-title");

    menuHeader.appendChild(menuTitle);

    return menuHeader;
};

function createMenuList() {
    const menuList = document.createElement("div");
    menuList.classList.add("card-carousel");

    let productImages = [_assets_americano_jpg__WEBPACK_IMPORTED_MODULE_0__, _assets_caffe_latte_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_cappuccino_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_caramel_latte_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_espresso_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_machiato_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_mocha_latte_jpg__WEBPACK_IMPORTED_MODULE_6__];
    let productName = ['Americano', 'Caffe Latte', 'Cappuccino', 'Caramel Latte', 'Espresso', 'Machiato', 'Mocha Latte'];
    let productPrice = ['$2.9','$3.0','$3.0','$3.0','$2.9','$2.9','$3.0'];

    for (let i = 0; i < productImages.length; i++) {
        menuList.appendChild(createCoffeeCard(productImages[i], productName[i], productPrice[i]));
    }
    
    return menuList;
};

function createCoffeeCard(img, name, price) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    const imgBox = document.createElement("div");
    const productImg = document.createElement("img");
    productImg.src = img;
    imgBox.classList.add("imgBox");

    imgBox.appendChild(productImg);
    productCard.appendChild(imgBox);

    const contentBox = document.createElement("div");
    contentBox.classList.add("contentBx");
    const contentBoxHeading = document.createElement("h3");
    contentBoxHeading.textContent = name;
    const productPrice = document.createElement("h2");
    productPrice.classList.add("price");
    productPrice.textContent = price;
    const buyNowLink = document.createElement("a")
    buyNowLink.textContent = "Order Now";
    buyNowLink.href = "#";
    buyNowLink.classList.add("buy");

    contentBox.appendChild(contentBoxHeading);
    contentBox.appendChild(productPrice);
    contentBox.appendChild(buyNowLink);

    productCard.appendChild(contentBox);
    return productCard;
};

function createMenuPage() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(createMenuHeader());
    menu.appendChild(createMenuList());
    return menu;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _assets_telephone_call_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/telephone-call.png */ "./src/assets/telephone-call.png");
/* harmony import */ var _assets_mail_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/mail.png */ "./src/assets/mail.png");
/* harmony import */ var _assets_whatsapp_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/whatsapp.png */ "./src/assets/whatsapp.png");
/* harmony import */ var _assets_facebook_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/facebook.png */ "./src/assets/facebook.png");
/* harmony import */ var _assets_twitter_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/twitter.png */ "./src/assets/twitter.png");
/* harmony import */ var _assets_youtube_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/youtube.png */ "./src/assets/youtube.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./src/style.css");












function createHeader() {
    const header = document.createElement("header");

    const logoDiv = document.createElement("div");
    logoDiv.textContent = "GOODCOFFEE";
    logoDiv.classList.add("logo");

    const links = document.createElement("div");
    links.classList.add("links");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("btn-nav");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", ()=> {
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("btn-nav");
    menuBtn.textContent = "Menu";
    menuBtn.addEventListener("click", () => {
        loadMenu();
    });

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("btn-nav");
    contactBtn.textContent = "Contact Us";
    contactBtn.addEventListener("click", () => {
        loadContact();
    });

    links.appendChild(homeBtn);
    links.appendChild(menuBtn);
    links.appendChild(contactBtn);

    header.appendChild(logoDiv);
    header.appendChild(links);

    return header;
};

function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    content.appendChild(createFooter());
};

function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
    content.appendChild(createFooter());
};

function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createHeader());
    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
    content.appendChild(createFooter());
};

function createFooter() {
    const footer = document.createElement("footer");
    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer-links");

    const contactLinks = document.createElement("div");
    const contactHeading = document.createElement("h3");
    contactHeading.textContent = "Contact";
    contactLinks.appendChild(contactHeading);
    contactLinks.classList.add("contact-links");

    const telDiv = document.createElement("div");
    telDiv.classList.add("contact-div");
    const phoneImg = document.createElement("img");
    const telParagraph = document.createElement("p");
    telParagraph.textContent = "09000000000";
    phoneImg.src = _assets_telephone_call_png__WEBPACK_IMPORTED_MODULE_3__;
    telDiv.appendChild(phoneImg);
    telDiv.appendChild(telParagraph);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("contact-div");
    const emailImg = document.createElement("img");
    const emailParagraph = document.createElement("p");
    emailParagraph.textContent = "customercare@goodcoffee.com";
    emailImg.src = _assets_mail_png__WEBPACK_IMPORTED_MODULE_4__;
    emailDiv.appendChild(emailImg);
    emailDiv.appendChild(emailParagraph);

    const whatsappDiv = document.createElement("div");
    whatsappDiv.classList.add("contact-div");
    const whatsappImg = document.createElement("img");
    const whatsappParagraph = document.createElement("p");
    whatsappParagraph.textContent = "09000000000";
    whatsappImg.src = _assets_whatsapp_png__WEBPACK_IMPORTED_MODULE_5__;
    whatsappDiv.appendChild(whatsappImg);
    whatsappDiv.appendChild(whatsappParagraph);
    

    contactLinks.appendChild(telDiv);
    contactLinks.appendChild(emailDiv);
    contactLinks.appendChild(whatsappDiv);

    const aboutUsLinks = document.createElement("div");
    aboutUsLinks.classList.add("about-div");
    const aboutUsHeading = document.createElement("h3");
    const aboutUsText = document.createElement("p");
    aboutUsHeading.textContent = "About us";
    aboutUsText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a felis vitae dolor egestas fermentum. Cras tempor diam nunc, id consectetur nulla fringilla euismod."
    aboutUsLinks.appendChild(aboutUsHeading);
    aboutUsLinks.appendChild(aboutUsText);

    const followUsLinks = document.createElement("div");
    followUsLinks.classList.add("follow-div");
    const followUsHeading = document.createElement("h3");
    followUsHeading.textContent = "Follow Us";
    followUsLinks.appendChild(followUsHeading);
    const followImgDiv = document.createElement("div");
    const faceImg = document.createElement("img");
    faceImg.src = _assets_facebook_png__WEBPACK_IMPORTED_MODULE_6__;
    followImgDiv.appendChild(faceImg);
    const tweetImg = document.createElement("img");
    tweetImg.src = _assets_twitter_png__WEBPACK_IMPORTED_MODULE_7__;
    followImgDiv.appendChild(tweetImg);
    const youTubeImg = document.createElement("img");
    youTubeImg.src = _assets_youtube_png__WEBPACK_IMPORTED_MODULE_8__;
    followImgDiv.appendChild(youTubeImg);
    followUsLinks.appendChild(followImgDiv);

    footer.appendChild(contactLinks);
    footer.appendChild(aboutUsLinks);
    footer.appendChild(followUsLinks);

    return footer;
};

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    content.appendChild(createFooter());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/assets/americano.jpg":
/*!**********************************!*\
  !*** ./src/assets/americano.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea3dcef496544934cd9c.jpg";

/***/ }),

/***/ "./src/assets/bg-img.jpg":
/*!*******************************!*\
  !*** ./src/assets/bg-img.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed40749d8b40954c2085.jpg";

/***/ }),

/***/ "./src/assets/caffe-latte.jpg":
/*!************************************!*\
  !*** ./src/assets/caffe-latte.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ef6f66c61382afa6ad1.jpg";

/***/ }),

/***/ "./src/assets/cappuccino.jpg":
/*!***********************************!*\
  !*** ./src/assets/cappuccino.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "040f47f41d734982fed6.jpg";

/***/ }),

/***/ "./src/assets/caramel-latte.jpg":
/*!**************************************!*\
  !*** ./src/assets/caramel-latte.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8eea32f5f631d4b2350a.jpg";

/***/ }),

/***/ "./src/assets/card-img-one.jpg":
/*!*************************************!*\
  !*** ./src/assets/card-img-one.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e5f05348e9bf5b36bb3.jpg";

/***/ }),

/***/ "./src/assets/card-img-three.jpg":
/*!***************************************!*\
  !*** ./src/assets/card-img-three.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48b22b01b5786455945f.jpg";

/***/ }),

/***/ "./src/assets/card-img-two.jpg":
/*!*************************************!*\
  !*** ./src/assets/card-img-two.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "522a32c358dc94e537d4.jpg";

/***/ }),

/***/ "./src/assets/espresso.jpg":
/*!*********************************!*\
  !*** ./src/assets/espresso.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b48058e7fa62d6d8599.jpg";

/***/ }),

/***/ "./src/assets/facebook.png":
/*!*********************************!*\
  !*** ./src/assets/facebook.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "795fce8e464693d7346d.png";

/***/ }),

/***/ "./src/assets/machiato.jpg":
/*!*********************************!*\
  !*** ./src/assets/machiato.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f401e7b465e6d77918ef.jpg";

/***/ }),

/***/ "./src/assets/mail.png":
/*!*****************************!*\
  !*** ./src/assets/mail.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "806a6e91c3eeeaaa28e5.png";

/***/ }),

/***/ "./src/assets/mocha-latte.jpg":
/*!************************************!*\
  !*** ./src/assets/mocha-latte.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d9427e77e8e45df9d453.jpg";

/***/ }),

/***/ "./src/assets/telephone-call.png":
/*!***************************************!*\
  !*** ./src/assets/telephone-call.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cd89af713013cbc3e210.png";

/***/ }),

/***/ "./src/assets/twitter.png":
/*!********************************!*\
  !*** ./src/assets/twitter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "112d93100806a70e5d28.png";

/***/ }),

/***/ "./src/assets/whatsapp.png":
/*!*********************************!*\
  !*** ./src/assets/whatsapp.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a613ef702342989f18bd.png";

/***/ }),

/***/ "./src/assets/youtube.png":
/*!********************************!*\
  !*** ./src/assets/youtube.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d252c6ec7a3c06ecc004.png";

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");


(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEtoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7O0FDckIwQztBQUMxQztBQUNBLG9EQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iZy1pbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcblxcclxcbiAgICBjb2xvcjogIzJFQjA4NjtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNjBweDtcXHJcXG4gICAgY29sb3I6ICMyRUIwODY7XFxyXFxufVxcclxcblxcclxcbi5idG4tbmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXHJcXG4gICAgY29sb3I6ICMyRUIwODY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW5hdjpob3ZlciB7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMkVCMDg2O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIG5vLXJlcGVhdCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jZW50ZXItZml0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1zZWN0aW9uIC5jYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICAgIHRvcDogMjAlO1xcclxcblxcclxcbiAgICBtYXgtd2lkdGg6IDQwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1zZWN0aW9uIC5jYXJkIC50aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzhweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVCMDg2OyAvKiBHcmVlbiAqL1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1zZWN0aW9uIGgyLnRpdGxlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcclxcbiAgICBwYWRkaW5nOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kLXNlY3Rpb24gLmNhcmQtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgzMDBweCwgMC44ZnIpKTtcXHJcXG4gICAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2Vjb25kLXNlY3Rpb24tdGl0bGUge1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmluZm8tY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jYXJkIC5jYXJkLXRpdGxlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogIzJFQjA4NjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jYXJkIC5jYXJkLXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLXNlY3Rpb24gLmluZm8tY2FyZCAuY2FyZC1pbWcge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuYWJvdXQtZGl2LFxcclxcbmZvb3RlciAuY29udGFjdC1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29udGFjdC1saW5rcyAuY29udGFjdC1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb250YWN0LWxpbmtzIC5jb250YWN0LWRpdiBpbWcge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmFib3V0LWRpdiB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5hYm91dC1kaXYgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGgzIHtcXHJcXG4gICAgY29sb3I6ICMyRUIwODY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbGxvdy1kaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9sbG93LWRpdiBpbWcge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5mb2xsb3ctZGl2IGRpdiAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSBQYWdlICovXFxyXFxuLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuY2FyZC1jYXJvdXNlbCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIFByb2R1Y3QgQ2FyZHMgKi9cXHJcXG4ucHJvZHVjdC1jYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMzIwcHg7XFxyXFxuICAgIGhlaWdodDogNDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNEQUI4OEI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQ6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogLTUwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZDogI0YzRTlERDtcXHJcXG4gICAgdHJhbnNmb3JtOiBza2V3WSgzNDVkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkOmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICB0b3A6IC03MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2tld1koMzkwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY2FyZDo6YWZ0ZXJ7XFxyXFxuICAgIGNvbnRlbnQ6ICdDb2ZmZWUnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiA4ZW07XFxyXFxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQgLmltZ0JveCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIC5pbWdCb3ggaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkOmhvdmVyIC5pbWdCb3ggaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIC5jb250ZW50Qngge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIC5jb250ZW50QnggaDMge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIC5jb250ZW50QnggLnByaWNlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY2FyZCAuY29udGVudEJ4IC5idXkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogMjAwcHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzJFQjA4NjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41JTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY2FyZDpob3ZlciAuY29udGVudEJ4IC5idXkge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjs7SUFFakIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTs7SUFFWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdD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YixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxNQUFNO0lBQ04sVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6ICMyRUIwODY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XFxyXFxuICAgIGNvbG9yOiAjMkVCMDg2O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW5hdiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxyXFxuICAgIGNvbG9yOiAjMkVCMDg2O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1uYXY6aG92ZXIge1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzJFQjA4NjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3Qtc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICBuby1yZXBlYXQgdXJsKCcuL2Fzc2V0cy9iZy1pbWcuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlci1maXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0LXNlY3Rpb24gLmNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgdG9wOiAyMCU7XFxyXFxuXFxyXFxuICAgIG1heC13aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0LXNlY3Rpb24gLmNhcmQgLnRpdGxlIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgZm9udC1zaXplOiAzOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUIwODY7IC8qIEdyZWVuICovXFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpcnN0LXNlY3Rpb24gaDIudGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY29uZC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtc2VjdGlvbiAuY2FyZC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDMwMHB4LCAwLjhmcikpO1xcclxcbiAgICBnYXA6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWNvbmQtc2VjdGlvbi10aXRsZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuaW5mby1jYXJkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWNhcmQgLmNhcmQtdGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMkVCMDg2O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWNhcmQgLmNhcmQtdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtc2VjdGlvbiAuaW5mby1jYXJkIC5jYXJkLWltZyB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5hYm91dC1kaXYsXFxyXFxuZm9vdGVyIC5jb250YWN0LWxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb250YWN0LWxpbmtzIC5jb250YWN0LWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvbnRhY3QtbGlua3MgLmNvbnRhY3QtZGl2IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuYWJvdXQtZGl2IHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmFib3V0LWRpdiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgaDMge1xcclxcbiAgICBjb2xvcjogIzJFQjA4NjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9sbG93LWRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb2xsb3ctZGl2IGltZyB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbGxvdy1kaXYgZGl2ICB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VIFBhZ2UgKi9cXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5jYXJkLWNhcm91c2VsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvZHVjdCBDYXJkcyAqL1xcclxcbi5wcm9kdWN0LWNhcmQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAzMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogI0RBQjg4QjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY2FyZDo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAtNTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRjNFOUREO1xcclxcbiAgICB0cmFuc2Zvcm06IHNrZXdZKDM0NWRlZyk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQ6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogLTcwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiBza2V3WSgzOTBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkOjphZnRlcntcXHJcXG4gICAgY29udGVudDogJ0NvZmZlZSc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBmb250LXNpemU6IDhlbTtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2R1Y3QtY2FyZCAuaW1nQm94IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQgLmltZ0JveCBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNSU7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQ6aG92ZXIgLmltZ0JveCBpbWcge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQgLmNvbnRlbnRCeCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQgLmNvbnRlbnRCeCBoMyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9kdWN0LWNhcmQgLmNvbnRlbnRCeCAucHJpY2Uge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkIC5jb250ZW50QnggLmJ1eSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAyMDBweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMkVCMDg2O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZHVjdC1jYXJkOmhvdmVyIC5jb250ZW50QnggLmJ1eSB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUaXRsZSgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWhlYWRpbmdcIik7XHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xyXG5cclxuICAgIGNvbnRhY3RIZWFkaW5nLmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XHJcbiAgICByZXR1cm4gY29udGFjdEhlYWRpbmc7XHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XHJcblxyXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0VGl0bGUoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3Q7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJpbXBvcnQgYmdJbWcgZnJvbSAnLi9hc3NldHMvYmctaW1nLmpwZyc7XHJcbmltcG9ydCBjYXJkSW1nT25lIGZyb20gJy4vYXNzZXRzL2NhcmQtaW1nLW9uZS5qcGcnO1xyXG5pbXBvcnQgY2FyZEltZ1R3byBmcm9tICcuL2Fzc2V0cy9jYXJkLWltZy10d28uanBnJztcclxuaW1wb3J0IGNhcmRJbWdUaHJlZSBmcm9tICcuL2Fzc2V0cy9jYXJkLWltZy10aHJlZS5qcGcnO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpcnN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgZmlyc3RTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJmaXJzdC1zZWN0aW9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcclxuXHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29mZmVlIFNob3BcIjtcclxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBhIGZlbGlzIHZpdGFlIGRvbG9yIGVnZXN0YXMgZmVybWVudHVtLiBDcmFzIHRlbXBvciBkaWFtIG51bmMsIGlkIGNvbnNlY3RldHVyIG51bGxhIGZyaW5naWxsYSBldWlzbW9kLiBJbnRlZ2VyIGdyYXZpZGEgbG9ib3J0aXMgZmVsaXMgZXUgcGhhcmV0cmEuIFBoYXNlbGx1cyBuZWMgZXJvcyBhYyBsb3JlbSB0ZW1wb3IgdmFyaXVzIGluIHF1aXMgdGVsbHVzLiBVdCB0ZW1wb3IgcGxhY2VyYXQgYXJjdSBzY2VsZXJpc3F1ZSBpbnRlcmR1bS4gSW4gaGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QuIE1hZWNlbmFzIGNvbW1vZG8gbm9uIGFyY3UgYSBwbGFjZXJhdC4gTnVsbGFtIGluIGZyaW5naWxsYSBsaWJlcm8uXCI7XHJcblxyXG4gICAgY29uc3QgbGVhcm5Nb3JlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGxlYXJuTW9yZUJ0bi50ZXh0Q29udGVudCA9IFwiTGVhcm4gTW9yZVwiO1xyXG5cclxuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGxlYXJuTW9yZUJ0bik7XHJcblxyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gYmdJbWc7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNlbnRlci1maXRcIik7XHJcbiAgIFxyXG4gICAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKGNhcmREaXYpO1xyXG4gICAgZmlyc3RTZWN0aW9uLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgcmV0dXJuIGZpcnN0U2VjdGlvbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlY29uZFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICBzZWNvbmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtc2VjdGlvblwiKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb2ZmZWUgQnVpbGQgWW91ciBCYXNlXCI7XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwic2Vjb25kLXNlY3Rpb24tdGl0bGVcIik7XHJcblxyXG4gICAgc2Vjb25kU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgbGV0IGNhcmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkLXNlY3Rpb25cIik7XHJcblxyXG4gICAgbGV0IGhlYWRlckxpc3QgPSBbXCIwMSBGUklFTkRMWSBQTEFDRVwiLCBcIjAyIEZFRUwgVEhFIENPRkZFRVwiLCBcIjAzIEZVTEwgVEFTVEVcIl07XHJcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBoZWFkZXJMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkKGhlYWRlckxpc3RbaV0sIGkpO1xyXG4gICAgICAgIGNhcmRTZWN0aW9uLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlY29uZFNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgc2Vjb25kU2VjdGlvbi5hcHBlbmRDaGlsZChjYXJkU2VjdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIHNlY29uZFNlY3Rpb247XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkKHRpdGxlLCBpKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0gW2NhcmRJbWdPbmUsY2FyZEltZ1R3byxjYXJkSW1nVGhyZWVdO1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNhcmRcIik7XHJcbiAgICBsZXQgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGxldCBjYXJkSW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZEltYWdlRGl2LmFwcGVuZENoaWxkKGNhcmRJbWFnZSk7XHJcbiAgICBjYXJkSW1hZ2UuY2xhc3NMaXN0LmFkZChcImNhcmQtaW1nXCIpO1xyXG4gICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKFwiY2FyZC10aXRsZVwiKVxyXG4gICAgbGV0IGNhcmRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRUZXh0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLXRleHRcIik7XHJcbiAgICBcclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgY2FyZEltYWdlLnNyYyA9IGltYWdlc1tpXTtcclxuICAgIGNhcmRUZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBhIGZlbGlzIHZpdGFlIGRvbG9yIGVnZXN0YXMgZmVybWVudHVtLiBDcmFzIHRlbXBvciBkaWFtIG51bmMsIGlkIGNvbnNlY3RldHVyIG51bGxhIGZyaW5naWxsYSBldWlzbW9kLlwiXHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1hZ2VEaXYpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRmlyc3RTZWN0aW9uKCkpO1xyXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVTZWNvbmRTZWN0aW9uKCkpO1xyXG5cclxuICAgIHJldHVybiBob21lO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTsiLCJpbXBvcnQgYW1lcmljYW5vSW1nIGZyb20gJy4vYXNzZXRzL2FtZXJpY2Fuby5qcGcnO1xyXG5pbXBvcnQgY2FmZmVMYXR0ZUltZyBmcm9tICcuL2Fzc2V0cy9jYWZmZS1sYXR0ZS5qcGcnO1xyXG5pbXBvcnQgY2FwcHVjY2lub0ltZyBmcm9tICcuL2Fzc2V0cy9jYXBwdWNjaW5vLmpwZyc7XHJcbmltcG9ydCBjYXJhbWVsTGF0dGVJbWcgZnJvbSAnLi9hc3NldHMvY2FyYW1lbC1sYXR0ZS5qcGcnO1xyXG5pbXBvcnQgZXNwcmVzc29JbWcgZnJvbSAnLi9hc3NldHMvZXNwcmVzc28uanBnJztcclxuaW1wb3J0IG1hY2hpYXRvSW1nIGZyb20gJy4vYXNzZXRzL21hY2hpYXRvLmpwZyc7XHJcbmltcG9ydCBtb2NoYUxhdHRlSW1nIGZyb20gJy4vYXNzZXRzL21vY2hhLWxhdHRlLmpwZyc7XHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudUhlYWRlcigpIHtcclxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgbWVudVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgTWVudVwiO1xyXG4gICAgbWVudUhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWVudS10aXRsZVwiKTtcclxuXHJcbiAgICBtZW51SGVhZGVyLmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVIZWFkZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51TGlzdCgpIHtcclxuICAgIGNvbnN0IG1lbnVMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoXCJjYXJkLWNhcm91c2VsXCIpO1xyXG5cclxuICAgIGxldCBwcm9kdWN0SW1hZ2VzID0gW2FtZXJpY2Fub0ltZywgY2FmZmVMYXR0ZUltZywgY2FwcHVjY2lub0ltZywgY2FyYW1lbExhdHRlSW1nLCBlc3ByZXNzb0ltZywgbWFjaGlhdG9JbWcsIG1vY2hhTGF0dGVJbWddO1xyXG4gICAgbGV0IHByb2R1Y3ROYW1lID0gWydBbWVyaWNhbm8nLCAnQ2FmZmUgTGF0dGUnLCAnQ2FwcHVjY2lubycsICdDYXJhbWVsIExhdHRlJywgJ0VzcHJlc3NvJywgJ01hY2hpYXRvJywgJ01vY2hhIExhdHRlJ107XHJcbiAgICBsZXQgcHJvZHVjdFByaWNlID0gWyckMi45JywnJDMuMCcsJyQzLjAnLCckMy4wJywnJDIuOScsJyQyLjknLCckMy4wJ107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0SW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlQ29mZmVlQ2FyZChwcm9kdWN0SW1hZ2VzW2ldLCBwcm9kdWN0TmFtZVtpXSwgcHJvZHVjdFByaWNlW2ldKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBtZW51TGlzdDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvZmZlZUNhcmQoaW1nLCBuYW1lLCBwcmljZSkge1xyXG4gICAgY29uc3QgcHJvZHVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvZHVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2R1Y3QtY2FyZFwiKTtcclxuICAgIGNvbnN0IGltZ0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBwcm9kdWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHByb2R1Y3RJbWcuc3JjID0gaW1nO1xyXG4gICAgaW1nQm94LmNsYXNzTGlzdC5hZGQoXCJpbWdCb3hcIik7XHJcblxyXG4gICAgaW1nQm94LmFwcGVuZENoaWxkKHByb2R1Y3RJbWcpO1xyXG4gICAgcHJvZHVjdENhcmQuYXBwZW5kQ2hpbGQoaW1nQm94KTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRCb3guY2xhc3NMaXN0LmFkZChcImNvbnRlbnRCeFwiKTtcclxuICAgIGNvbnN0IGNvbnRlbnRCb3hIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gICAgY29udGVudEJveEhlYWRpbmcudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgY29uc3QgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgcHJvZHVjdFByaWNlLmNsYXNzTGlzdC5hZGQoXCJwcmljZVwiKTtcclxuICAgIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xyXG4gICAgY29uc3QgYnV5Tm93TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXHJcbiAgICBidXlOb3dMaW5rLnRleHRDb250ZW50ID0gXCJPcmRlciBOb3dcIjtcclxuICAgIGJ1eU5vd0xpbmsuaHJlZiA9IFwiI1wiO1xyXG4gICAgYnV5Tm93TGluay5jbGFzc0xpc3QuYWRkKFwiYnV5XCIpO1xyXG5cclxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQoY29udGVudEJveEhlYWRpbmcpO1xyXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xyXG4gICAgY29udGVudEJveC5hcHBlbmRDaGlsZChidXlOb3dMaW5rKTtcclxuXHJcbiAgICBwcm9kdWN0Q2FyZC5hcHBlbmRDaGlsZChjb250ZW50Qm94KTtcclxuICAgIHJldHVybiBwcm9kdWN0Q2FyZDtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlKCkge1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SGVhZGVyKCkpO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51TGlzdCgpKTtcclxuICAgIHJldHVybiBtZW51O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7IiwiaW1wb3J0IGNyZWF0ZUhvbWVQYWdlIGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCBjcmVhdGVNZW51UGFnZSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmltcG9ydCB0ZWxJbWcgZnJvbSAnLi9hc3NldHMvdGVsZXBob25lLWNhbGwucG5nJztcclxuaW1wb3J0IG1haWxJbWcgZnJvbSAnLi9hc3NldHMvbWFpbC5wbmcnO1xyXG5pbXBvcnQgd3BJbWcgZnJvbSAnLi9hc3NldHMvd2hhdHNhcHAucG5nJztcclxuaW1wb3J0IGZiSW1nIGZyb20gJy4vYXNzZXRzL2ZhY2Vib29rLnBuZyc7XHJcbmltcG9ydCB0d2l0dGVySW1nIGZyb20gJy4vYXNzZXRzL3R3aXR0ZXIucG5nJztcclxuaW1wb3J0IHlvdXR1YmVJbWcgZnJvbSAnLi9hc3NldHMveW91dHViZS5wbmcnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcblxyXG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsb2dvRGl2LnRleHRDb250ZW50ID0gXCJHT09EQ09GRkVFXCI7XHJcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxpbmtzLmNsYXNzTGlzdC5hZGQoXCJsaW5rc1wiKTtcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1uYXZcIik7XHJcbiAgICBob21lQnRuLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcclxuICAgICAgICBsb2FkSG9tZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJidG4tbmF2XCIpO1xyXG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvYWRNZW51KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImJ0bi1uYXZcIik7XHJcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgbGlua3MuYXBwZW5kQ2hpbGQobWVudUJ0bik7XHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobGlua3MpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVQYWdlKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVQYWdlKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RQYWdlKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gICAgY29uc3QgZm9vdGVyTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyTGlua3MuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1saW5rc1wiKTtcclxuXHJcbiAgICBjb25zdCBjb250YWN0TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xyXG4gICAgY29udGFjdExpbmtzLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcclxuICAgIGNvbnRhY3RMaW5rcy5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1saW5rc1wiKTtcclxuXHJcbiAgICBjb25zdCB0ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGVsRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRpdlwiKTtcclxuICAgIGNvbnN0IHBob25lSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNvbnN0IHRlbFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGVsUGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCIwOTAwMDAwMDAwMFwiO1xyXG4gICAgcGhvbmVJbWcuc3JjID0gdGVsSW1nO1xyXG4gICAgdGVsRGl2LmFwcGVuZENoaWxkKHBob25lSW1nKTtcclxuICAgIHRlbERpdi5hcHBlbmRDaGlsZCh0ZWxQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRpdlwiKTtcclxuICAgIGNvbnN0IGVtYWlsSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNvbnN0IGVtYWlsUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBlbWFpbFBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiY3VzdG9tZXJjYXJlQGdvb2Rjb2ZmZWUuY29tXCI7XHJcbiAgICBlbWFpbEltZy5zcmMgPSBtYWlsSW1nO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbWcpO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnN0IHdoYXRzYXBwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdoYXRzYXBwRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWRpdlwiKTtcclxuICAgIGNvbnN0IHdoYXRzYXBwSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGNvbnN0IHdoYXRzYXBwUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB3aGF0c2FwcFBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiMDkwMDAwMDAwMDBcIjtcclxuICAgIHdoYXRzYXBwSW1nLnNyYyA9IHdwSW1nO1xyXG4gICAgd2hhdHNhcHBEaXYuYXBwZW5kQ2hpbGQod2hhdHNhcHBJbWcpO1xyXG4gICAgd2hhdHNhcHBEaXYuYXBwZW5kQ2hpbGQod2hhdHNhcHBQYXJhZ3JhcGgpO1xyXG4gICAgXHJcblxyXG4gICAgY29udGFjdExpbmtzLmFwcGVuZENoaWxkKHRlbERpdik7XHJcbiAgICBjb250YWN0TGlua3MuYXBwZW5kQ2hpbGQoZW1haWxEaXYpO1xyXG4gICAgY29udGFjdExpbmtzLmFwcGVuZENoaWxkKHdoYXRzYXBwRGl2KTtcclxuXHJcbiAgICBjb25zdCBhYm91dFVzTGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWJvdXRVc0xpbmtzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1kaXZcIik7XHJcbiAgICBjb25zdCBhYm91dFVzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IGFib3V0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBhYm91dFVzSGVhZGluZy50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIjtcclxuICAgIGFib3V0VXNUZXh0LnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBNb3JiaSBhIGZlbGlzIHZpdGFlIGRvbG9yIGVnZXN0YXMgZmVybWVudHVtLiBDcmFzIHRlbXBvciBkaWFtIG51bmMsIGlkIGNvbnNlY3RldHVyIG51bGxhIGZyaW5naWxsYSBldWlzbW9kLlwiXHJcbiAgICBhYm91dFVzTGlua3MuYXBwZW5kQ2hpbGQoYWJvdXRVc0hlYWRpbmcpO1xyXG4gICAgYWJvdXRVc0xpbmtzLmFwcGVuZENoaWxkKGFib3V0VXNUZXh0KTtcclxuXHJcbiAgICBjb25zdCBmb2xsb3dVc0xpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZvbGxvd1VzTGlua3MuY2xhc3NMaXN0LmFkZChcImZvbGxvdy1kaXZcIik7XHJcbiAgICBjb25zdCBmb2xsb3dVc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBmb2xsb3dVc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZvbGxvdyBVc1wiO1xyXG4gICAgZm9sbG93VXNMaW5rcy5hcHBlbmRDaGlsZChmb2xsb3dVc0hlYWRpbmcpO1xyXG4gICAgY29uc3QgZm9sbG93SW1nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZhY2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgZmFjZUltZy5zcmMgPSBmYkltZztcclxuICAgIGZvbGxvd0ltZ0Rpdi5hcHBlbmRDaGlsZChmYWNlSW1nKTtcclxuICAgIGNvbnN0IHR3ZWV0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHR3ZWV0SW1nLnNyYyA9IHR3aXR0ZXJJbWc7XHJcbiAgICBmb2xsb3dJbWdEaXYuYXBwZW5kQ2hpbGQodHdlZXRJbWcpO1xyXG4gICAgY29uc3QgeW91VHViZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICB5b3VUdWJlSW1nLnNyYyA9IHlvdXR1YmVJbWc7XHJcbiAgICBmb2xsb3dJbWdEaXYuYXBwZW5kQ2hpbGQoeW91VHViZUltZyk7XHJcbiAgICBmb2xsb3dVc0xpbmtzLmFwcGVuZENoaWxkKGZvbGxvd0ltZ0Rpdik7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvbnRhY3RMaW5rcyk7XHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYWJvdXRVc0xpbmtzKTtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb2xsb3dVc0xpbmtzKTtcclxuXHJcbiAgICByZXR1cm4gZm9vdGVyO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIb21lUGFnZSgpKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==