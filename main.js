/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: yellow;\n}\n\n/* homepage.js */\n\nnav {\n    display: grid;\n    width: 600px;\n    height: 60px;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    justify-content: center;\n    place-content: space-around;\n    place-self: center;\n}\n\nbutton#home {\n    color: #FFFFFF;\n    font-size: 24px;\n    height: 40px;\n    width: 150px;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    justify-self: end;\n    align-self: center;\n    background-color: #FF6600;\n    border-color: orange;\n    border-radius: 25px;\n    margin: 10px;\n}\n\nbutton#menu {\n    color: #FFFFFF;\n    font-size: 24px;\n    height: 40px;\n    width: 150px;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    justify-self: center;\n    align-self: center;\n    background-color: #FF6600;\n    border-color: orange;\n    border-radius: 25px;\n    margin: 10px;\n}\n\nbutton#about {\n    color: #FFFFFF;\n    font-size: 24px;\n    height: 40px;\n    width: 150px;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    justify-self: start;\n    align-self: center;\n    background-color: #FF6600;\n    border-color: orange;\n    border-radius: 25px;\n    margin: 10px;\n}\n\n#content > h1 {\n    font-family: Tahoma, Geneva, sans-serif;;\n    font-weight: 700;\n    font-style: bold;\n    text-transform: uppercase;\n    text-shadow: rgb(122, 122, 122) 4px 3px 0px;\n    color: #1D5E33;\n    justify-self: center;\n}\n\n#content > p {\n    font-size: 20px;\n    font-style: italic;\n    color: #FF9900;\n    justify-self: center;\n}\n\nimg {\n    display: grid;\n    place-self: center;\n}\n\n/*menu.js*/\n\n#content * {\n    display: grid;\n    justify-self: center;\n}\n\n.meals {\n    display: grid;\n}\n\n.header {\n    font-style: bold;\n    text-decoration: underline;\n    margin: 0;\n}\n\ndiv > img {\n    display: flex;\n    flex: 2;\n}\n\n.entries > #text {\n    justify-self: center;\n}\n\n.desc {\n    font-style: italic;\n}\n\n.pd2 {\n    font-size: small;\n    font-style: italic;\n}\n\n.ed {\n    font-size: small;\n    font-style: italic;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-project-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/chili.jpg"
/*!***********************!*\
  !*** ./src/chili.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4e3438654b86567bf12f.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/chili.jpg?\n}");

/***/ },

/***/ "./src/chips.jpg"
/*!***********************!*\
  !*** ./src/chips.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ff5baaf262657f48349d.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/chips.jpg?\n}");

/***/ },

/***/ "./src/cola1.jpg"
/*!***********************!*\
  !*** ./src/cola1.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7a0ce74635079b22f721.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/cola1.jpg?\n}");

/***/ },

/***/ "./src/cola2.jpg"
/*!***********************!*\
  !*** ./src/cola2.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0ed3f1b8d075fc998292.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/cola2.jpg?\n}");

/***/ },

/***/ "./src/deepfried.jpg"
/*!***************************!*\
  !*** ./src/deepfried.jpg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8cb395e6713cab7e76ed.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/deepfried.jpg?\n}");

/***/ },

/***/ "./src/donut.jpg"
/*!***********************!*\
  !*** ./src/donut.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e811c79cebecccd81d68.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/donut.jpg?\n}");

/***/ },

/***/ "./src/duff.jpg"
/*!**********************!*\
  !*** ./src/duff.jpg ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"16927a82e520b6f5ab3d.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/duff.jpg?\n}");

/***/ },

/***/ "./src/dufffancy.jpg"
/*!***************************!*\
  !*** ./src/dufffancy.jpg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"47111c5ce59b2582f341.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/dufffancy.jpg?\n}");

/***/ },

/***/ "./src/dufflite.jpg"
/*!**************************!*\
  !*** ./src/dufflite.jpg ***!
  \**************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c7b8f764e2d10fd2bfaa.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/dufflite.jpg?\n}");

/***/ },

/***/ "./src/email.jpg"
/*!***********************!*\
  !*** ./src/email.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8ecd912173ec70875801.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/email.jpg?\n}");

/***/ },

/***/ "./src/fries.jpg"
/*!***********************!*\
  !*** ./src/fries.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8b6be2f771c244ec9c4c.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/fries.jpg?\n}");

/***/ },

/***/ "./src/hotdog.jpg"
/*!************************!*\
  !*** ./src/hotdog.jpg ***!
  \************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3da6d59386f5039bbe60.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/hotdog.jpg?\n}");

/***/ },

/***/ "./src/mff2.jpg"
/*!**********************!*\
  !*** ./src/mff2.jpg ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ae6a5cc24e1526c3050a.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/mff2.jpg?\n}");

/***/ },

/***/ "./src/phone.jpg"
/*!***********************!*\
  !*** ./src/phone.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"98a9589391e3e338a4d3.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/phone.jpg?\n}");

/***/ },

/***/ "./src/pizza.jpg"
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5f4b3695ac80a48c79ba.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/pizza.jpg?\n}");

/***/ },

/***/ "./src/spaghetti.jpg"
/*!***************************!*\
  !*** ./src/spaghetti.jpg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"87ed1406eeb0e28f85fe.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/spaghetti.jpg?\n}");

/***/ },

/***/ "./src/steakfish.jpg"
/*!***************************!*\
  !*** ./src/steakfish.jpg ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3cd5a7c88882e8fa6f02.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/steakfish.jpg?\n}");

/***/ },

/***/ "./src/sundae.jpg"
/*!************************!*\
  !*** ./src/sundae.jpg ***!
  \************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4dcb26f916c089c68840.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/sundae.jpg?\n}");

/***/ },

/***/ "./src/wine1.jpg"
/*!***********************!*\
  !*** ./src/wine1.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0d7c630a5727c19be95b.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/wine1.jpg?\n}");

/***/ },

/***/ "./src/wine2.jpg"
/*!***********************!*\
  !*** ./src/wine2.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3e2dea4e23a208246c12.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/wine2.jpg?\n}");

/***/ },

/***/ "./src/wings.jpg"
/*!***********************!*\
  !*** ./src/wings.jpg ***!
  \***********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bae28ca973c2577d7cee.jpg\";\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/wings.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\n/* harmony import */ var _phone_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone.jpg */ \"./src/phone.jpg\");\n/* harmony import */ var _email_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.jpg */ \"./src/email.jpg\");\n// Creates primary page div and imports pics.\nconst about = document.createElement(\"div\");\n\n\n\n// About page headline.\nconst aboutPage = document.createElement(\"h2\");\naboutPage.textContent = \"Contact Us\";\n\n// About page phone contact contents.\nconst phoneNumber = document.createElement(\"h4\");\nconst phoneDisclaimer1 = document.createElement(\"p\");\nconst phoneDisclaimer2 = document.createElement(\"p\");\nphoneDisclaimer2.classList = \"pd2\";\nphoneNumber.textContent = \"By phone at: (636) KL5-1239*\";\nphoneDisclaimer1.textContent = \"Note: Prank Phone Calls Will NOT Be Tolerated\";\nphoneDisclaimer2.textContent = \"*Any threats and/or opinions issued by the restaurant owner are neither condoned or shared by Moe's Family Feedbag LLC.\";\nconst phonePic = document.createElement(\"img\");\nphonePic.src = _phone_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n// About page email contact contents.\nconst emailTitle = document.createElement(\"h4\");\nconst emailDisclaimer = document.createElement(\"p\");\nemailDisclaimer.classList = \"ed\";\nemailTitle.textContent = \"MoeFamilyFeedbag@yahoo.com*\";\nemailDisclaimer.textContent = \"*Please allow 12-15 business days for replies. Replies are not guaranteed. For legal concerns, please contact Lionel Hutz Attorney at Law (As Seen On TV) ICan'tBelieveIt'sALawFirm@GeoCities.biz\";\nconst emailPic = document.createElement(\"img\");\nemailPic.src = _email_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n// Appends contents in proper order.\nabout.appendChild(aboutPage);\nabout.appendChild(phoneNumber);\nabout.appendChild(phonePic);\nabout.appendChild(phoneDisclaimer1);\nabout.appendChild(phoneDisclaimer2);\nabout.appendChild(emailTitle);\nabout.appendChild(emailPic);\nabout.appendChild(emailDisclaimer);\n\n\n\n\n\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/homepage.js"
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   desc: () => (/* binding */ desc),\n/* harmony export */   headline: () => (/* binding */ headline),\n/* harmony export */   image: () => (/* binding */ image)\n/* harmony export */ });\n/* harmony import */ var _mff2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mff2.jpg */ \"./src/mff2.jpg\");\n// Exports homepage contents and pic.\nconst headline = document.createElement(\"h1\");\nconst desc = document.createElement(\"p\");\nconst content = document.querySelector(\"#content\");\n\n\nconst image = document.createElement(\"img\");\nimage.src = _mff2_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n// Supplies text content for headline and description.\nheadline.textContent = \"Uncle Moe's Family Feedbag\";\ndesc.textContent = \"Come to Uncle Moe's for family fun, it's good good good good, good good good!\";\n\n// Initializes homepage for first visit.\ncontent.appendChild(headline);\ncontent.appendChild(image);\ncontent.appendChild(desc);\n\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/homepage.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n// Imports modules.\n\n\n\n\n\n// Initializes tab buttons.\nconst homeBtn = document.querySelector(\"#home\");\nconst menuBtn = document.querySelector(\"#menu\");\nconst aboutBtn = document.querySelector(\"#about\");\n\n// Removes homepage elements from page and switches to menu tab.\nfunction removeTab() {\n    const rmContent = document.querySelector(\"#content\");\n        while (rmContent.firstChild) {\n            rmContent.removeChild(rmContent.lastChild);\n        };\n};\n\n// Returns homepage when clicked.\nhomeBtn.addEventListener(\"click\", homePage);\n    function homePage() {\n        removeTab();\n        _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_homepage_js__WEBPACK_IMPORTED_MODULE_1__.headline);\n        _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_homepage_js__WEBPACK_IMPORTED_MODULE_1__.image);\n        _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_homepage_js__WEBPACK_IMPORTED_MODULE_1__.desc);\n    };\n\n// Switches to Menu tab when clicked.\nmenuBtn.addEventListener(\"click\", menuPage);\n    function menuPage() {\n        removeTab();\n        menuContents();\n    };\n\n// Switches to About tab when clicked.\naboutBtn.addEventListener(\"click\", aboutPage);\n    function aboutPage() {\n        removeTab();\n        aboutContents();\n    };\n\n// Fills menu tab with menu content.\nfunction menuContents() {\n    // Appends sides to DOM.\n    _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.sides);\n    _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.meals)\n    _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.drinks);\n    _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_2__.desserts);\n};\n\n// Fills about tab with content.\nfunction aboutContents() {\n    _homepage_js__WEBPACK_IMPORTED_MODULE_1__.content.appendChild(_about_js__WEBPACK_IMPORTED_MODULE_3__.about);\n};\n\n// Leftover from beginning of project.\nconsole.log(\"Is this working yet?\");\n\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   desserts: () => (/* binding */ desserts),\n/* harmony export */   drinks: () => (/* binding */ drinks),\n/* harmony export */   meals: () => (/* binding */ meals),\n/* harmony export */   sides: () => (/* binding */ sides)\n/* harmony export */ });\n/* harmony import */ var _chips_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chips.jpg */ \"./src/chips.jpg\");\n/* harmony import */ var _fries_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fries.jpg */ \"./src/fries.jpg\");\n/* harmony import */ var _chili_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chili.jpg */ \"./src/chili.jpg\");\n/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizza.jpg */ \"./src/pizza.jpg\");\n/* harmony import */ var _wings_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wings.jpg */ \"./src/wings.jpg\");\n/* harmony import */ var _hotdog_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hotdog.jpg */ \"./src/hotdog.jpg\");\n/* harmony import */ var _deepfried_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deepfried.jpg */ \"./src/deepfried.jpg\");\n/* harmony import */ var _steakfish_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./steakfish.jpg */ \"./src/steakfish.jpg\");\n/* harmony import */ var _spaghetti_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spaghetti.jpg */ \"./src/spaghetti.jpg\");\n/* harmony import */ var _duff_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./duff.jpg */ \"./src/duff.jpg\");\n/* harmony import */ var _dufffancy_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dufffancy.jpg */ \"./src/dufffancy.jpg\");\n/* harmony import */ var _dufflite_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dufflite.jpg */ \"./src/dufflite.jpg\");\n/* harmony import */ var _wine1_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wine1.jpg */ \"./src/wine1.jpg\");\n/* harmony import */ var _wine2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wine2.jpg */ \"./src/wine2.jpg\");\n/* harmony import */ var _cola1_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cola1.jpg */ \"./src/cola1.jpg\");\n/* harmony import */ var _cola2_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cola2.jpg */ \"./src/cola2.jpg\");\n/* harmony import */ var _donut_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./donut.jpg */ \"./src/donut.jpg\");\n/* harmony import */ var _sundae_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sundae.jpg */ \"./src/sundae.jpg\");\n// Massive list of pictures imported of totally copyrighted content.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Sides title, list of h3 elements for each entry, adds p descriptions.\nconst sides = document.createElement(\"div\");\nsides.classList = \"sides\";\n    const sidesHeader = document.createElement(\"h2\");\n        sidesHeader.classList = \"header\";\n        sidesHeader.textContent = \"Sides\";\n        \n    const chipsDiv = document.createElement(\"div\");\n    const chipsPic = document.createElement(\"img\");\n    chipsPic.src = _chips_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    chipsDiv.classList = \"sides\";\n        const chipsTitle = document.createElement(\"h3\");\n        const chipsDesc = document.createElement(\"p\");\n        chipsDiv.classList = \"sides\";\n        chipsDesc.classList = \"desc\";\n        chipsTitle.classList = \"entries\";\n            chipsTitle.textContent = \"Fiestaritos - $8.99\";\n            chipsDesc.textContent = \"Start your fiesta right with Moe's house-made tortilla chips and your choice of salsa (Don't even think about asking for guac).\"\n                chipsDiv.appendChild(chipsTitle);\n                chipsDiv.appendChild(chipsPic);\n                chipsDiv.appendChild(chipsDesc);\n        \n    const friesDiv = document.createElement(\"div\");\n    const friesPic = document.createElement(\"img\");\n    friesPic.src = _fries_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    friesDiv.classList = \"sides\";\n        const friesTitle = document.createElement(\"h3\");\n        const friesDesc = document.createElement(\"p\");\n        friesTitle.classList = \"entries\";\n        friesDesc.classList = \"desc\";\n            friesTitle.textContent = \"Million Dollar Birthday Fries - $8.99 (a 99.9991% discount!)\";\n            friesDesc.textContent = \"Please remember to remove the basket from Moe's head (it gets really hot).\"\n                friesDiv.appendChild(friesTitle);\n                friesDiv.appendChild(friesPic);\n                friesDiv.appendChild(friesDesc);        \n                \n    const chiliDiv = document.createElement(\"div\");\n    const chiliPic = document.createElement(\"img\");\n    chiliPic.src = _chili_jpg__WEBPACK_IMPORTED_MODULE_2__;\n    chiliDiv.classList = \"sides\";\n        const chiliTitle = document.createElement(\"h3\");\n        const chiliDesc = document.createElement(\"p\");\n        chiliTitle.classList = \"entries\";\n        chiliDesc.classList = \"desc\";\n            chiliTitle.textContent = \"Moe's Chicken Chili\";\n            chiliDesc.textContent = \"Now with less offensive language! $8.99 per bowl\";\n                chiliDiv.appendChild(chiliTitle);\n                chiliDiv.appendChild(chiliPic);\n                chiliDiv.appendChild(chiliDesc);\n    \n    const wingsDiv = document.createElement(\"div\");\n    const wingsPic = document.createElement(\"img\");\n    wingsPic.src = _wings_jpg__WEBPACK_IMPORTED_MODULE_4__;\n    wingsDiv.classList = \"sides\";\n        const wingsTitle = document.createElement(\"h3\");\n        const wingsDesc = document.createElement(\"p\");\n        wingsTitle.classList = \"entries\";\n        wingsDesc.classList = \"desc\";\n            wingsTitle.textContent = \"Ranchy Wingy Thingys\";\n            wingsDesc.textContent = \"Made with up to 30% genuine* buffalo meat! - $11.99 for 6, $16.99 for 12\"\n                wingsDiv.appendChild(wingsTitle);\n                wingsDiv.appendChild(wingsPic);\n                wingsDiv.appendChild(wingsDesc);\n                            \n    const pizzaDiv = document.createElement(\"div\");\n    const pizzaPic = document.createElement(\"img\");\n    pizzaPic.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_3__;\n    pizzaDiv.classList = \"sides\";\n        const pizzaTitle = document.createElement(\"h3\");\n        const pizzaDesc = document.createElement(\"p\");\n            pizzaTitle.classList = \"entries\";\n            pizzaDesc.classList = \"desc\";\n                pizzaTitle.textContent = \"Southwestern Pizza Fingers - $9.99\";\n                pizzaDesc.textContent = \"Who needs triangles when you can have rectangles? *Note: geometry may vary.\"\n                    pizzaDiv.appendChild(pizzaTitle);\n                    pizzaDiv.appendChild(pizzaPic);\n                    pizzaDiv.appendChild(pizzaDesc);\n\n// Appends side content in order.\nsides.appendChild(sidesHeader);\nsides.appendChild(chipsDiv);\nsides.appendChild(friesDiv);\nsides.appendChild(chiliDiv);\nsides.appendChild(wingsDiv);\nsides.appendChild(pizzaDiv);\n\n// Meals title, list of h3 elements for each entry, adds p descriptions.\nconst meals = document.createElement(\"div\");\nmeals.classList = \"meals\";\n    const mealsHeader = document.createElement(\"h2\");\n        mealsHeader.classList = \"header\";\n        mealsHeader.textContent = \"Main Courses\";\n\n            const hotDogDiv = document.createElement(\"div\");\n            const hotDogPic = document.createElement(\"img\");\n            hotDogPic.src = _hotdog_jpg__WEBPACK_IMPORTED_MODULE_5__\n            hotDogDiv.classList = \"meals\";\n                const hotDogTitle = document.createElement(\"h3\");\n                const hotDogDesc = document.createElement(\"p\");\n                hotDogTitle.classList = \"entries\";\n                hotDogDesc.classList = \"desc\";\n                    hotDogTitle.textContent = \"Amtrak-style Hot Dog\";\n                    hotDogDesc.textContent = \"Moe's world famous Amtrak-style Hot Dog - $15.99 for two\";\n                        hotDogDiv.appendChild(hotDogTitle);\n                        hotDogDiv.appendChild(hotDogPic);\n                        hotDogDiv.appendChild(hotDogDesc);\n            \n            const deepFriedDiv = document.createElement(\"div\");\n            const deepFriedPic = document.createElement(\"img\");\n            deepFriedPic.src = _deepfried_jpg__WEBPACK_IMPORTED_MODULE_6__;\n            deepFriedDiv.classList = \"meals\";\n                const deepFriedTitle = document.createElement(\"h3\");\n                const deepFriedDesc = document.createElement(\"p\");\n                deepFriedTitle.classList = \"entries\";\n                deepFriedDesc.classList = \"desc\";\n                    deepFriedTitle.textContent = \"Deep-fried home-style meals $20.99\";\n                    deepFriedDesc.textContent = \"Enjoy your food/drinks/objects the American way (MFF LLC is not responsible for cardiovascular infarctions, always consult your doctor before consuming).\"\n                        deepFriedDiv.appendChild(deepFriedTitle);\n                        deepFriedDiv.appendChild(deepFriedPic);\n                        deepFriedDiv.appendChild(deepFriedDesc);\n\n            const fishDiv = document.createElement(\"div\");\n            const fishPic = document.createElement(\"img\");\n            fishPic.src = _steakfish_jpg__WEBPACK_IMPORTED_MODULE_7__;\n            fishDiv.classList = \"meals\";\n                const fishTitle = document.createElement(\"h3\");\n                const fishDesc = document.createElement(\"p\");\n                fishTitle.classList = \"entries\";\n                fishDesc.classList = \"desc\";\n                    fishTitle.textContent = \"Guilt-Free Steakfish Filets - $22.99\";\n                    fishDesc.textContent = \"Packed with protein and artificial colors, this dish is so delicious, it feels like cheating on your diet! *Note: `Diet` in this context refers only to general consumption and is NOT meant to imply any nutritional value.\"\n                        fishDiv.appendChild(fishTitle);\n                        fishDiv.appendChild(fishPic);\n                        fishDiv.appendChild(fishDesc);\n\n            const spaghettiDiv = document.createElement(\"div\");\n            const spaghettiPic = document.createElement(\"img\");\n            spaghettiPic.src = _spaghetti_jpg__WEBPACK_IMPORTED_MODULE_8__;\n            spaghettiDiv.classList = \"meals\";\n                const spaghettiTitle = document.createElement(\"h3\");\n                const spaghettiDesc = document.createElement(\"p\");\n                    spaghettiTitle.classList = \"entries\";\n                    spaghettiDesc.classList = \"desc\";\n                        spaghettiTitle.textContent = \"Spaghetti and Moe Balls - $18.99\";\n                        spaghettiDesc.textContent = \"Authentic Italian-style, home-style, noodles in tomato sauce with Moe's world famous mostly meat balls.\";\n                            spaghettiDiv.appendChild(spaghettiTitle);\n                            spaghettiDiv.appendChild(spaghettiPic);\n                            spaghettiDiv.appendChild(spaghettiDesc);\n// Appends meals content in order.\nmeals.appendChild(mealsHeader);\nmeals.appendChild(hotDogDiv);\nmeals.appendChild(deepFriedDiv);\nmeals.appendChild(fishDiv);\nmeals.appendChild(spaghettiDiv);\n\n// Drinks title, list of h3 elements for each entry, adds p descriptions.\nconst drinks = document.createElement(\"div\");\ndrinks.classList = \"drinks\";\n    const drinksHeader = document.createElement(\"h2\");\n    drinksHeader.classList = \"header\";\n    drinksHeader.textContent = \"Drinks\";\n\n        const beer1Div = document.createElement(\"div\");\n        const beer1Pic = document.createElement(\"img\");\n        beer1Pic.src = _duff_jpg__WEBPACK_IMPORTED_MODULE_9__;        \n        beer1Div.classList = \"drinks\";\n            const beer1Title = document.createElement(\"h4\");\n            const beer1Desc = document.createElement(\"p\");\n                beer1Title.classList = \"entries\";\n                beer1Desc.classList = \"desc\";\n                    beer1Title.textContent = \"Duff - $6.99\";\n                    beer1Desc.textContent = \"The one and only Duff, served ice-cold.\";\n                        beer1Div.appendChild(beer1Title);\n                        beer1Div.appendChild(beer1Pic);\n                        beer1Div.appendChild(beer1Desc);\n\n        const beer2Div = document.createElement(\"div\");\n        const beer2Pic = document.createElement(\"img\");\n        beer2Pic.src = _dufflite_jpg__WEBPACK_IMPORTED_MODULE_11__;\n        beer2Div.classList = \"drinks\";\n            const beer2Title = document.createElement(\"h4\");\n            const beer2Desc = document.createElement(\"p\");\n                beer2Title.classList = \"entries\";\n                beer2Desc.classList = \"desc\";\n                    beer2Title.textContent = \"Duff Lite - $6.99\";\n                    beer2Desc.textContent = \"The one and only Duff Lite, served ice-cold.\";\n                        beer2Div.appendChild(beer2Title);\n                        beer2Div.appendChild(beer2Pic);\n                        beer2Div.appendChild(beer2Desc);\n\n        const beer3Div = document.createElement(\"div\");\n        const beer3Pic = document.createElement(\"img\");\n        beer3Pic.src = _dufffancy_jpg__WEBPACK_IMPORTED_MODULE_10__;\n        beer3Div.classList = \"drinks\";\n            const beer3Title = document.createElement(\"h4\");\n            const beer3Desc = document.createElement(\"p\");\n                beer3Title.classList = \"entries\";\n                beer3Desc.classList = \"desc\";\n                    beer3Title.textContent = \"Düff - $14.99\";\n                    beer3Desc.textContent = \"The one and only Düff, served ice-cold (with less freedom).\";\n                        beer3Div.appendChild(beer3Title);\n                        beer3Div.appendChild(beer3Pic);\n                        beer3Div.appendChild(beer3Desc);\n\n        const wine1Div = document.createElement(\"div\");\n        const wine1Pic = document.createElement(\"img\");\n        wine1Pic.src = _wine1_jpg__WEBPACK_IMPORTED_MODULE_12__  \n        wine1Div.classList = \"drinks\";\n            const wine1Title = document.createElement(\"h4\");\n            const wine1Desc = document.createElement(\"p\");\n                wine1Title.classList = \"entries\";\n                wine1Desc.classList = \"desc\";\n                    wine1Title.textContent = \"Lambuggini Wine - $12.99\";\n                    wine1Desc.textContent = `The finest in Italian boxed wine served in repurposed bottles to make any occasion appear fancy. (Including a generous \"tip,\" wait staff may update your receipt with a higher price tag!*`;\n                        wine1Div.appendChild(wine1Title);\n                        wine1Div.appendChild(wine1Pic);\n                        wine1Div.appendChild(wine1Desc);\n\n        const wine2Div = document.createElement(\"div\");\n        const wine2Pic = document.createElement(\"img\");\n        wine2Pic.src = _wine2_jpg__WEBPACK_IMPORTED_MODULE_13__\n        wine2Div.classList = \"drinks\";\n            const wine2Title = document.createElement(\"h4\");\n            const wine2Desc = document.createElement(\"p\");\n                wine2Title.classList = \"entries\";\n                wine2Desc.classList = \"desc\";\n                    wine2Title.textContent = \"White or Red Wine - $10.99\";\n                    wine2Desc.textContent = \"That's right! Two colors to choose from.\";\n                        wine2Div.appendChild(wine2Title);\n                        wine2Div.appendChild(wine2Pic);\n                        wine2Div.appendChild(wine2Desc);\n            \n        const cola1Div = document.createElement(\"div\");\n        const cola1Pic = document.createElement(\"img\");\n        cola1Pic.src = _cola1_jpg__WEBPACK_IMPORTED_MODULE_14__       \n        cola1Div.classList = \"drinks\";\n            const cola1Title = document.createElement(\"h4\");\n            const cola1Desc = document.createElement(\"p\");\n                cola1Title.classList = \"entries\";\n                cola1Desc.classList = \"desc\";\n                    cola1Title.textContent = \"Buzz Cola - $3.99\";\n                    cola1Desc.textContent = \"Because the only thing that makes caffeine better is high-fructose corn syrup.\";\n                        cola1Div.appendChild(cola1Title);\n                        cola1Div.appendChild(cola1Pic);\n                        cola1Div.appendChild(cola1Desc);\n\n        const cola2Div = document.createElement(\"div\");\n        const cola2Pic = document.createElement(\"img\");\n        cola2Pic.src = _cola2_jpg__WEBPACK_IMPORTED_MODULE_15__;      \n        cola2Div.classList = \"drinks\";\n            const cola2Title = document.createElement(\"h4\");\n            const cola2Desc = document.createElement(\"p\");\n                cola2Title.classList = \"entries\";\n                cola2Desc.classList = \"desc\";\n                    cola2Title.textContent = \"Diet Buzz - $3.99\";\n                    cola2Desc.textContent = \"...unless you're not interested in sugar. Then caffeine goes great with free refills. *Note: refills are NOT free.\";\n                        cola2Div.appendChild(cola2Title);\n                        cola2Div.appendChild(cola2Pic);\n                        cola2Div.appendChild(cola2Desc);\n\n// Appends drinks content in order.\ndrinks.appendChild(drinksHeader);\ndrinks.appendChild(beer1Div);\ndrinks.appendChild(beer2Div);\ndrinks.appendChild(beer3Div);\ndrinks.appendChild(wine1Div);\ndrinks.appendChild(wine2Div);\ndrinks.appendChild(cola1Div);\ndrinks.appendChild(cola2Div);\n\n// Desserts title, list of h3 elements for each entry, adds p descriptions.\nconst desserts = document.createElement(\"div#desserts\");\ndesserts.classList = \"desserts\";\n        const dessertsHeader = document.createElement(\"h3\");\n        dessertsHeader.classList = \"header\";\n        dessertsHeader.textContent = \"Desserts\";\n\n            const donutDiv = document.createElement(\"div\");\n            const donutPic = document.createElement(\"img\");\n                donutPic.src = _donut_jpg__WEBPACK_IMPORTED_MODULE_16__;\n                donutDiv.classList = \"desserts\";\n                    const donutTitle = document.createElement(\"h4\");\n                    const donutDesc = document.createElement(\"p\");\n                        donutTitle.classList = \"entries\";\n                        donutDesc.classList = \"desc\";\n                            donutTitle.textContent = \"Moe's Perfect Donut - $5.99 each\";\n                            donutDesc.textContent = \"The Cadillac of donuts. Practically glows. Note: Ingredients may come damned.\";\n                                donutDiv.appendChild(donutTitle);\n                                donutDiv.appendChild(donutPic);\n                                donutDiv.appendChild(donutDesc);\n            \n            const sundaeDiv = document.createElement(\"div\");\n            const sundaePic = document.createElement(\"img\");\n                sundaePic.src = _sundae_jpg__WEBPACK_IMPORTED_MODULE_17__;\n                sundaeDiv.classList = \"desserts\";\n                    const sundaeTitle = document.createElement(\"h4\");\n                    const sundaeDesc = document.createElement(\"p\");\n                        sundaeTitle.classList = \"entries\";\n                        sundaeDesc.classList = \"desc\";\n                            sundaeTitle.textContent = \"Moe's Sunday Sundae - $13.99\"\n                            sundaeDesc.textContent = \"A BOATload of ice cream, fudge, and whipped cream. Fruit available on request (depending on seasonal availability, add $10.00). Don't let the name fool you, available all week.\"\n                                sundaeDiv.appendChild(sundaeTitle);\n                                sundaeDiv.appendChild(sundaePic);\n                                sundaeDiv.appendChild(sundaeDesc);\n\n// Appends desserts content in order.\ndesserts.appendChild(dessertsHeader);\ndesserts.appendChild(donutDiv);\ndesserts.appendChild(sundaeDiv);\n                \n// Special fine print for fun.\nconst wineDisclaimer = document.createElement(\"p\");\nwineDisclaimer.classList = \"wd\";\nwineDisclaimer.textContent = \"*This is a joke, legally speaking. &#128521\"\ndesserts.appendChild(wineDisclaimer);\n\n\n\n\n\n\n\n//# sourceURL=webpack://top-project-restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;