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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card */ "./src/scripts/card.js");



/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./src/scripts/timer.js");


var rocketCard = function rocketCard(array) {
  var cardReturn = array.map(function (indiv) {
    return "<li class='rocket-card'>\n      <img src=\"".concat(indiv.rocketPhoto, "\" />\n      <h2>").concat(indiv.rocketName, "</h2>\n      <div class='card-body'>\n        <p class='card-subtitle'> Launch Date:</p>\n          <p>").concat(indiv.launchDate, "</p>\n        </br>\n        <p class='card-subtitle'>Launch Location: </p>\n          <p> ").concat(indiv.location, " </p>\n        </br>\n        <p class='card-subtitle'>Upcoming Mission Description:</p>\n        <p class='card-desc'>").concat(indiv.description, "</p>\n      </div>\n    </li>\n    ");
  });
  document.getElementById('appTest').innerHTML = cardReturn.join('');
};

var rocketCollection = function rocketCollection() {
  var rocketArr = [];
  fetch('https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=12').then(function (response) {
    return response.json();
  }).then(function (response) {
    return response.results.forEach(function (indiv) {
      return rocketArr.push({
        rocketName: indiv.name,
        launchDate: indiv.window_start,
        rocketPhoto: indiv.image,
        location: indiv.pad.location.name,
        description: indiv.mission ? indiv.mission.description : 'No description available'
      });
    });
  }).then(function () {
    return rocketCard(rocketArr);
  });
};

if ((window.location.pathname == '/' || window.location.pathname == '/index.html') && (window.location.pathname != '/family.html' || window.location.pathname != '/country.html')) {
  rocketCollection();
}

if ((window.location.pathname == '/galaxyeye/' || window.location.pathname == '/galaxyeye/index.html') && (window.location.pathname != '/galaxyeye/family.html' || window.location.pathname != '/galaxyeye/country.html')) {
  rocketCollection();
}

/***/ }),

/***/ "./src/scripts/timer.js":
/*!******************************!*\
  !*** ./src/scripts/timer.js ***!
  \******************************/
/*! exports provided: myTimer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myTimer", function() { return myTimer; });
var myTimer = function myTimer(deadline) {
  var theDeadline = new Date(deadline).getTime();
  var now = new Date().getTime();
  var timeleft = theDeadline - now;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor(timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(timeleft % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(timeleft % (1000 * 60) / 1000);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbInJvY2tldENhcmQiLCJhcnJheSIsImNhcmRSZXR1cm4iLCJtYXAiLCJpbmRpdiIsInJvY2tldFBob3RvIiwicm9ja2V0TmFtZSIsImxhdW5jaERhdGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImpvaW4iLCJyb2NrZXRDb2xsZWN0aW9uIiwicm9ja2V0QXJyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0cyIsImZvckVhY2giLCJwdXNoIiwibmFtZSIsIndpbmRvd19zdGFydCIsImltYWdlIiwicGFkIiwibWlzc2lvbiIsIndpbmRvdyIsInBhdGhuYW1lIiwibXlUaW1lciIsImRlYWRsaW5lIiwidGhlRGVhZGxpbmUiLCJEYXRlIiwiZ2V0VGltZSIsIm5vdyIsInRpbWVsZWZ0IiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7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O0FBQU8sSUFBTWdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLFFBQUQsRUFBYztBQUNqQyxNQUFJQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixDQUFTRixRQUFULEVBQW1CRyxPQUFuQixFQUFsQjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJRixJQUFKLEdBQVdDLE9BQVgsRUFBVjtBQUNBLE1BQUlFLFFBQVEsR0FBR0osV0FBVyxHQUFHRyxHQUE3QjtBQUNBLE1BQUlFLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQXJCLENBQW5CLENBQVg7QUFDQSxNQUFJSSxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxRQUFRLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFULElBQXNDLE9BQU8sRUFBUCxHQUFZLEVBQWxELENBQVgsQ0FBWjtBQUNBLE1BQUlLLE9BQU8sR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlILFFBQVEsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFULElBQWlDLE9BQU8sRUFBeEMsQ0FBWCxDQUFkO0FBQ0EsTUFBSU0sT0FBTyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsUUFBUSxJQUFJLE9BQU8sRUFBWCxDQUFULEdBQTJCLElBQXRDLENBQWQ7QUFFQSxTQUFPO0FBQUNDLFFBQUksRUFBSkEsSUFBRDtBQUFPRyxTQUFLLEVBQUxBLEtBQVA7QUFBY0MsV0FBTyxFQUFQQSxPQUFkO0FBQXVCQyxXQUFPLEVBQVBBO0FBQXZCLEdBQVA7QUFDRCxDQVZJLEM7Ozs7Ozs7Ozs7O0FDRFAsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2NhcmQnOyIsImltcG9ydCB7IG15VGltZXIgfSBmcm9tICcuL3RpbWVyJztcblxuXG5jb25zdCByb2NrZXRDYXJkID0gKGFycmF5KSA9PiB7XG5cbiAgY29uc3QgY2FyZFJldHVybiA9IGFycmF5Lm1hcChpbmRpdiA9PiB7XG4gIFxuXG4gICAgcmV0dXJuIGA8bGkgY2xhc3M9J3JvY2tldC1jYXJkJz5cbiAgICAgIDxpbWcgc3JjPVwiJHtpbmRpdi5yb2NrZXRQaG90b31cIiAvPlxuICAgICAgPGgyPiR7aW5kaXYucm9ja2V0TmFtZX08L2gyPlxuICAgICAgPGRpdiBjbGFzcz0nY2FyZC1ib2R5Jz5cbiAgICAgICAgPHAgY2xhc3M9J2NhcmQtc3VidGl0bGUnPiBMYXVuY2ggRGF0ZTo8L3A+XG4gICAgICAgICAgPHA+JHtpbmRpdi5sYXVuY2hEYXRlfTwvcD5cbiAgICAgICAgPC9icj5cbiAgICAgICAgPHAgY2xhc3M9J2NhcmQtc3VidGl0bGUnPkxhdW5jaCBMb2NhdGlvbjogPC9wPlxuICAgICAgICAgIDxwPiAke2luZGl2LmxvY2F0aW9ufSA8L3A+XG4gICAgICAgIDwvYnI+XG4gICAgICAgIDxwIGNsYXNzPSdjYXJkLXN1YnRpdGxlJz5VcGNvbWluZyBNaXNzaW9uIERlc2NyaXB0aW9uOjwvcD5cbiAgICAgICAgPHAgY2xhc3M9J2NhcmQtZGVzYyc+JHtpbmRpdi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2xpPlxuICAgIGBcbiAgfSlcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdhcHBUZXN0JylcbiAgICAgIC5pbm5lckhUTUwgPSBjYXJkUmV0dXJuLmpvaW4oJycpXG59XG5cbmNvbnN0IHJvY2tldENvbGxlY3Rpb24gPSAoKSA9PiB7XG4gIFxuICBsZXQgcm9ja2V0QXJyID0gW107XG4gXG4gIGZldGNoKCdodHRwczovL2xsLnRoZXNwYWNlZGV2cy5jb20vMi4wLjAvbGF1bmNoL3VwY29taW5nLz9saW1pdD0xMicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnJlc3VsdHMuZm9yRWFjaChpbmRpdiA9PiAoXG4gICAgICByb2NrZXRBcnIucHVzaCh7XG4gICAgICAgIHJvY2tldE5hbWU6IGluZGl2Lm5hbWUsXG4gICAgICAgIGxhdW5jaERhdGU6IGluZGl2LndpbmRvd19zdGFydCxcbiAgICAgICAgcm9ja2V0UGhvdG86IGluZGl2LmltYWdlLCBcbiAgICAgICAgbG9jYXRpb246IGluZGl2LnBhZC5sb2NhdGlvbi5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogaW5kaXYubWlzc2lvbiA/IGluZGl2Lm1pc3Npb24uZGVzY3JpcHRpb24gOiAnTm8gZGVzY3JpcHRpb24gYXZhaWxhYmxlJ1xuICAgICAgfSkpKSlcbiAgICAgIC50aGVuKCgpID0+IHJvY2tldENhcmQocm9ja2V0QXJyKSlcbn07XG5cblxuaWYgKCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU9PScvJyB8fCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU9PScvaW5kZXguaHRtbCcpICYmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUhPScvZmFtaWx5Lmh0bWwnIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSE9Jy9jb3VudHJ5Lmh0bWwnKSkge1xuICByb2NrZXRDb2xsZWN0aW9uKClcbn1cblxuaWYgKCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU9PScvZ2FsYXh5ZXllLycgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lPT0nL2dhbGF4eWV5ZS9pbmRleC5odG1sJykgJiYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSE9Jy9nYWxheHlleWUvZmFtaWx5Lmh0bWwnIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSE9Jy9nYWxheHlleWUvY291bnRyeS5odG1sJykpIHtcbiAgcm9ja2V0Q29sbGVjdGlvbigpXG59XG5cbiIsIlxuZXhwb3J0IGNvbnN0IG15VGltZXIgPSAoZGVhZGxpbmUpID0+IHtcbiAgICBsZXQgdGhlRGVhZGxpbmUgPSBuZXcgRGF0ZShkZWFkbGluZSkuZ2V0VGltZSgpO1xuICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBsZXQgdGltZWxlZnQgPSB0aGVEZWFkbGluZSAtIG5vdztcbiAgICBsZXQgZGF5cyA9IE1hdGguZmxvb3IodGltZWxlZnQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGxldCBob3VycyA9IE1hdGguZmxvb3IoKHRpbWVsZWZ0ICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgIGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZWxlZnQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWVsZWZ0ICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICBcbiAgICByZXR1cm4ge2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzfTtcbiAgfTtcblxuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9