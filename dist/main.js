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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n\n\nconsole.log(\"WEBPACK CONNECTED\");\n\n//# sourceURL=webpack://galaxyeye/./src/index.js?");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ \"./src/scripts/timer.js\");\n/* harmony import */ var _images_no_image_available_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/no_image_available.png */ \"./images/no_image_available.png\");\n\n\nconst initializeDOM = array => {\n  const app = document.getElementById('appTest');\n  array.forEach((indiv, index) => {\n    const countdownId = `countdownId-${index}`;\n    const rocketCard = `<li class='rocket-card'>\n      <img src=\"${indiv.rocketPhoto}\" />\n      <h2>${indiv.rocketName}</h2>\n      <div class='card-body'>\n        <p class='card-subtitle'> Launch Date:</p>\n          <p>${indiv.launchDate}</p>\n        </br>\n        <p class='card-subtitle'>Launch Location: </p>\n          <p> ${indiv.location} </p>\n        </br>\n        <p class='card-subtitle'>Countdown: </p>\n          <p id=${countdownId}></p>\n        </br>\n        <p class='card-subtitle'>Upcoming Mission Description:</p>\n        <p class='card-desc'>${indiv.description}</p>\n      </div>\n    </li>\n    `;\n    app.innerHTML += rocketCard;\n    const rocketClock = (0,_timer__WEBPACK_IMPORTED_MODULE_0__.initializeClock)(countdownId, indiv.launchDate, index);\n    _timer__WEBPACK_IMPORTED_MODULE_0__.countdowns.push(rocketClock);\n  });\n};\nconst rocketCollection = () => {\n  let rocketArr = [];\n\n  // fetch('https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=12') //Live Data subject to limits\n  fetch('https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?limit=12') //Fetch stale data for development\n  .then(response => response.json()).then(response => response.results.forEach(indiv => rocketArr.push({\n    rocketName: indiv.name,\n    launchDate: indiv.window_start,\n    rocketPhoto: indiv.image ? indiv.image : _images_no_image_available_png__WEBPACK_IMPORTED_MODULE_1__,\n    location: indiv.pad.location.name,\n    description: indiv.mission ? indiv.mission.description : 'No description available'\n  }))).then(() => initializeDOM(rocketArr));\n};\nif ((window.location.pathname == '/' || window.location.pathname == '/index.html') && (window.location.pathname != '/family.html' || window.location.pathname != '/country.html')) {\n  rocketCollection();\n  _timer__WEBPACK_IMPORTED_MODULE_0__.countdowns.forEach(countdown => countdown.startInterval());\n}\nif ((window.location.pathname == '/galaxyeye/' || window.location.pathname == '/galaxyeye/index.html') && (window.location.pathname != '/galaxyeye/family.html' || window.location.pathname != '/galaxyeye/country.html')) {\n  rocketCollection();\n  _timer__WEBPACK_IMPORTED_MODULE_0__.countdowns.forEach(countdown => countdown.startInterval());\n}\n\n//# sourceURL=webpack://galaxyeye/./src/scripts/card.js?");

/***/ }),

/***/ "./src/scripts/timer.js":
/*!******************************!*\
  !*** ./src/scripts/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countdowns: () => (/* binding */ countdowns),\n/* harmony export */   initializeClock: () => (/* binding */ initializeClock)\n/* harmony export */ });\nlet countdowns = [];\nconst myTimer = deadline => {\n  let theDeadline = new Date(deadline).getTime();\n  let now = new Date().getTime();\n  let timeleft = theDeadline - now;\n  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));\n  let hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n  let minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));\n  let seconds = Math.floor(timeleft % (1000 * 60) / 1000);\n  return {\n    days,\n    hours,\n    minutes,\n    seconds,\n    timeleft\n  };\n};\nconst initializeClock = (id, endtime, index) => {\n  return {\n    startInterval: setInterval(() => {\n      const clock = document.getElementById(id);\n      const t = myTimer(endtime);\n      if (t.timeleft < 86400000) {\n        clock.innerHTML = `<div class='timer-below-24Hr'> T-  D: ${t.days} | H: ${t.hours} | M: ${t.minutes} | S: ${t.seconds} </div>`;\n      } else if (t.timeleft <= 0) {\n        clearInterval(countdowns[index].startInterval);\n        clock.innerHTML = \"<p class='timer-below-24Hr'> LIFTOFF </p>\";\n      } else {\n        clock.innerHTML = `<div> T-  D: ${t.days} | H: ${t.hours} | M: ${t.minutes} | S: ${t.seconds} </div>`;\n      }\n    }, 1000)\n  };\n};\n\n\n//# sourceURL=webpack://galaxyeye/./src/scripts/timer.js?");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://galaxyeye/./src/styles/index.scss?");

/***/ }),

/***/ "./images/no_image_available.png":
/*!***************************************!*\
  !*** ./images/no_image_available.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3dab7adab0938488dc62.png\";\n\n//# sourceURL=webpack://galaxyeye/./images/no_image_available.png?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;