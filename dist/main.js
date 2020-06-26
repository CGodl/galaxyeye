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
/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_sunburstGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sunburstGraph */ "./src/scripts/sunburstGraph.js");
/* harmony import */ var _scripts_sunburstGraph__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_sunburstGraph__WEBPACK_IMPORTED_MODULE_2__);


 // rocketCollection()
// fetch('https://launchlibrary.net/1.4/launch/next/10')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const launchRender = data.launches.map(indiv => {
//       return `<p>${indiv.name}, ${indiv.location.name}</p>`
//     })
//     document
//       .getElementById('appTest')
//       .innerHTML = launchRender
//   })
// function rocketCard() {
//   const rockeyArr = []
//   fetch('https://launchlibrary.net/1.4/launch/next/5')
//     .then(response => response.json())
//     .then(array => array.launches.forEach => {
//       rocketArr.push({ rocketName: indiv.name, 
//                         launchDate: indiv.windowstart, 
//         rocketPhoto: indiv.rocket.imageURL, 
//         locName: indiv.location.name, 
//         agencyName: ((indiv.rocket.agencies[0] === undefined) ? indiv.rocket.agencies[0].name : "N/A"),
//         missionName:  ((indiv.missions) ? indiv.missions.name : "N/A"),
//         missionDesc: ((indiv.missions) ? indiv.missions[0].description : "N/A")
//       })
//     })
// const rocketCard = () => {
//   fetch('https://launchlibrary.net/1.4/launch/next/10')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const launchRender = data.launches.map(indiv => {
//       console.log({ name: rocket.name, locName: rocket.location.name })
//       return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
//     })
//     document
//       .getElementById('appTest')
//       .innerHTML = launchRender
// })
// // fetch('https://launchlibrary.net/1.4/launch/next/50')
// //   .then(response => response.json())
// //   .then(array => console.log(array.launches))
// // fetch('https://launchlibrary.net/1.4/launch/next/50')
// //   .then(response => response.json())
// //   .then(array => array.launches.map(indiv => {
// //     console.log({ rocketName: indiv.name, 
// //                     launchDate: indiv.windowstart, 
// //                     rocketPhoto: indiv.rocket.imageURL, 
// //                     locName: indiv.location.name, 
// //                     // agencyName: ((indiv.rocket.agencies[0] === undefined) ? indiv.rocket.agencies[0].name : "N/A"),
// //                     // missionName:  ((indiv.missions) ? indiv.missions.name : "N/A"),
// //                     // missionDesc: ((indiv.missions) ? indiv.missions[0].description : "N/A")
// //                   })
// //   }))
// // fetch('https://launchlibrary.net/1.4/launch/next/10')
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data);
// //     const launchRender = data.launches.map(indiv => {
// //       return `<p>${indiv.name}, ${indiv.location.name}</p>`
// //     })
// //     document
// //       .getElementById('appTest')
// //       .innerHTML = launchRender
// //   })
//   // const rocketCard = () => {
//   //   fetch('https://launchlibrary.net/1.4/launch/next/10')
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log(data);
//   //     const launchRender = data.launches.map(indiv => {
//   //       console.log({ name: rocket.name, locName: rocket.location.name })
//   //       return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
//   //     })
//   //     document
//   //       .getElementById('appTest')
//   //       .innerHTML = launchRender
//   // })
// // const collectedRockets = () => {
// //   fetch('https://launchlibrary.net/1.4/launch/next/5')
// //     .then(response => response.json())
// //     .then(data => { 
// //       const rocketArr = data.launches.map(indiv => {
// //         return {
// //         rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name
// //         }
// //       }
// //       )
// //   //     return rocketArr
// //   //   }
// //   }
//   const rocketCard = () => {
//     fetch('https://launchlibrary.net/1.4/launch/next/10')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       const launchRender = data.launches.map(indiv => {
//         console.log({ name: rocket.name, locName: rocket.location.name })
//         return{ rocketName: indiv.name, rocketFamily: indiv.rocket.familyname, rocketPhoto: indiv.rocket.imageURL, locName: indiv.location.name }
//       })
//       document
//         .getElementById('appTest')
//         .innerHTML = launchRender
//   })
//   // fetch('https://launchlibrary.net/1.4/launch/next/10')
//   //   .then(response => response.json())
//   //   .then(data => {
//   //     console.log(data);
//   //     const launchRender = data.launches.map(indiv => {
//   //       return `<p>${indiv.name}, ${indiv.location.name}</p>`
//   //     })
//   //     document
//   //       .getElementById('appTest')
//   //       .innerHTML = launchRender
//   //   })
// // function rocketCard() {
// //   const rockeyArr = []
// //   fetch('https://launchlibrary.net/1.4/launch/next/5')
// //     .then(response => response.json())
// //     .then(array => array.launches.map => {
// //       rocketArr.push({ rocketName: indiv.name, 
// //                         launchDate: indiv.windowstart, 
// //         rocketPhoto: indiv.rocket.imageURL, 
// //         locName: indiv.location.name, 
// //         // agencyName: ((indiv.rocket.agencies[0] === undefined) ? indiv.rocket.agencies[0].name : "N/A"),
// //         // missionName:  ((indiv.missions) ? indiv.missions.name : "N/A"),
// //         // missionDesc: ((indiv.missions) ? indiv.missions[0].description : "N/A")
// //       })
// //     })
// //

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var rocketCard = function rocketCard(array) {
  console.log(array);
  var cardReturn = array.map(function (indiv) {
    return "<li class='rocket-card'>\n      <h2>".concat(indiv.rocketName, "</h2>\n      <p> Launch Date: ").concat(indiv.launchDate, "</p>\n      <img src=\"").concat(indiv.rocketPhoto, "\" />\n    </li>\n    ");
  });
  document.getElementById('appTest').innerHTML = cardReturn.join('');
};

var rocketCollection = function rocketCollection() {
  var rocketArr = [];
  fetch('https://launchlibrary.net/1.4/launch/next/8').then(function (response) {
    return response.json();
  }).then(function (array) {
    return array.launches.forEach(function (indiv) {
      return rocketArr.push({
        rocketName: indiv.name,
        launchDate: indiv.windowstart,
        rocketPhoto: indiv.rocket.imageURL,
        locName: indiv.location.name
      });
    });
  }).then(function () {
    return rocketCard(rocketArr);
  });
};

rocketCollection();

/***/ }),

/***/ "./src/scripts/sunburstGraph.js":
/*!**************************************!*\
  !*** ./src/scripts/sunburstGraph.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbInJvY2tldENhcmQiLCJhcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjYXJkUmV0dXJuIiwibWFwIiwiaW5kaXYiLCJyb2NrZXROYW1lIiwibGF1bmNoRGF0ZSIsInJvY2tldFBob3RvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImpvaW4iLCJyb2NrZXRDb2xsZWN0aW9uIiwicm9ja2V0QXJyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibGF1bmNoZXMiLCJmb3JFYWNoIiwicHVzaCIsIm5hbWUiLCJ3aW5kb3dzdGFydCIsInJvY2tldCIsImltYWdlVVJMIiwibG9jTmFtZSIsImxvY2F0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQWtCQTtBQUdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBd0JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBU0Y7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsSzs7Ozs7Ozs7Ozs7QUM3TkEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE1BQU1HLFVBQVUsR0FBR0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQUMsS0FBSyxFQUFJO0FBRXBDLHlEQUNRQSxLQUFLLENBQUNDLFVBRGQsMkNBRXFCRCxLQUFLLENBQUNFLFVBRjNCLG9DQUdjRixLQUFLLENBQUNHLFdBSHBCO0FBTUQsR0FSa0IsQ0FBbkI7QUFTRUMsVUFBUSxDQUNMQyxjQURILENBQ2tCLFNBRGxCLEVBRUdDLFNBRkgsR0FFZVIsVUFBVSxDQUFDUyxJQUFYLENBQWdCLEVBQWhCLENBRmY7QUFHSCxDQWREOztBQWdCQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07QUFDN0IsTUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FDLE9BQUssQ0FBQyw2Q0FBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFBQyxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDQyxJQUFULEVBQUo7QUFBQSxHQURoQixFQUVHRixJQUZILENBRVEsVUFBQWhCLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNtQixRQUFOLENBQWVDLE9BQWYsQ0FBdUIsVUFBQWYsS0FBSztBQUFBLGFBQ3pDUyxTQUFTLENBQUNPLElBQVYsQ0FBZTtBQUFDZixrQkFBVSxFQUFFRCxLQUFLLENBQUNpQixJQUFuQjtBQUNmZixrQkFBVSxFQUFFRixLQUFLLENBQUNrQixXQURIO0FBRWZmLG1CQUFXLEVBQUVILEtBQUssQ0FBQ21CLE1BQU4sQ0FBYUMsUUFGWDtBQUdmQyxlQUFPLEVBQUVyQixLQUFLLENBQUNzQixRQUFOLENBQWVMO0FBSFQsT0FBZixDQUR5QztBQUFBLEtBQTVCLENBQUo7QUFBQSxHQUZiLEVBU0dOLElBVEgsQ0FTUTtBQUFBLFdBQU1qQixVQUFVLENBQUNlLFNBQUQsQ0FBaEI7QUFBQSxHQVRSO0FBVUQsQ0FaRDs7QUFjQUQsZ0JBQWdCLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmhCLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9jYXJkJztcbmltcG9ydCAnLi9zY3JpcHRzL3N1bmJ1cnN0R3JhcGgnO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyByb2NrZXRDb2xsZWN0aW9uKClcblxuXG4gIC8vIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC8xMCcpXG4gIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgIC50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgICBjb25zdCBsYXVuY2hSZW5kZXIgPSBkYXRhLmxhdW5jaGVzLm1hcChpbmRpdiA9PiB7XG4gIC8vICAgICAgIHJldHVybiBgPHA+JHtpbmRpdi5uYW1lfSwgJHtpbmRpdi5sb2NhdGlvbi5uYW1lfTwvcD5gXG4gIC8vICAgICB9KVxuICAgIFxuICAvLyAgICAgZG9jdW1lbnRcbiAgLy8gICAgICAgLmdldEVsZW1lbnRCeUlkKCdhcHBUZXN0JylcbiAgLy8gICAgICAgLmlubmVySFRNTCA9IGxhdW5jaFJlbmRlclxuICAvLyAgIH0pXG5cblxuXG4vLyBmdW5jdGlvbiByb2NrZXRDYXJkKCkge1xuLy8gICBjb25zdCByb2NrZXlBcnIgPSBbXVxuLy8gICBmZXRjaCgnaHR0cHM6Ly9sYXVuY2hsaWJyYXJ5Lm5ldC8xLjQvbGF1bmNoL25leHQvNScpXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gICAgIC50aGVuKGFycmF5ID0+IGFycmF5LmxhdW5jaGVzLmZvckVhY2ggPT4ge1xuLy8gICAgICAgcm9ja2V0QXJyLnB1c2goeyByb2NrZXROYW1lOiBpbmRpdi5uYW1lLCBcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxhdW5jaERhdGU6IGluZGl2LndpbmRvd3N0YXJ0LCBcbi8vICAgICAgICAgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgXG4vLyAgICAgICAgIGxvY05hbWU6IGluZGl2LmxvY2F0aW9uLm5hbWUsIFxuLy8gICAgICAgICBhZ2VuY3lOYW1lOiAoKGluZGl2LnJvY2tldC5hZ2VuY2llc1swXSA9PT0gdW5kZWZpbmVkKSA/IGluZGl2LnJvY2tldC5hZ2VuY2llc1swXS5uYW1lIDogXCJOL0FcIiksXG4vLyAgICAgICAgIG1pc3Npb25OYW1lOiAgKChpbmRpdi5taXNzaW9ucykgPyBpbmRpdi5taXNzaW9ucy5uYW1lIDogXCJOL0FcIiksXG4vLyAgICAgICAgIG1pc3Npb25EZXNjOiAoKGluZGl2Lm1pc3Npb25zKSA/IGluZGl2Lm1pc3Npb25zWzBdLmRlc2NyaXB0aW9uIDogXCJOL0FcIilcbi8vICAgICAgIH0pXG5cblxuLy8gICAgIH0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAvLyBjb25zdCByb2NrZXRDYXJkID0gKCkgPT4ge1xuICAvLyAgIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC8xMCcpXG4gIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAvLyAgIC50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gIC8vICAgICBjb25zdCBsYXVuY2hSZW5kZXIgPSBkYXRhLmxhdW5jaGVzLm1hcChpbmRpdiA9PiB7XG4gICAgICAgIFxuICAvLyAgICAgICBjb25zb2xlLmxvZyh7IG5hbWU6IHJvY2tldC5uYW1lLCBsb2NOYW1lOiByb2NrZXQubG9jYXRpb24ubmFtZSB9KVxuICAvLyAgICAgICByZXR1cm57IHJvY2tldE5hbWU6IGluZGl2Lm5hbWUsIHJvY2tldEZhbWlseTogaW5kaXYucm9ja2V0LmZhbWlseW5hbWUsIHJvY2tldFBob3RvOiBpbmRpdi5yb2NrZXQuaW1hZ2VVUkwsIGxvY05hbWU6IGluZGl2LmxvY2F0aW9uLm5hbWUgfVxuICAvLyAgICAgfSlcbiAgXG4gIC8vICAgICBkb2N1bWVudFxuICAvLyAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2FwcFRlc3QnKVxuICAvLyAgICAgICAuaW5uZXJIVE1MID0gbGF1bmNoUmVuZGVyXG4gIC8vIH0pXG5cblxuXG5cblxuXG5cblxuLy8gLy8gZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzUwJylcbi8vIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gLy8gICAudGhlbihhcnJheSA9PiBjb25zb2xlLmxvZyhhcnJheS5sYXVuY2hlcykpXG5cbi8vIC8vIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC81MCcpXG4vLyAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vIC8vICAgLnRoZW4oYXJyYXkgPT4gYXJyYXkubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbi8vIC8vICAgICBjb25zb2xlLmxvZyh7IHJvY2tldE5hbWU6IGluZGl2Lm5hbWUsIFxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBsYXVuY2hEYXRlOiBpbmRpdi53aW5kb3dzdGFydCwgXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIHJvY2tldFBob3RvOiBpbmRpdi5yb2NrZXQuaW1hZ2VVUkwsIFxuLy8gLy8gICAgICAgICAgICAgICAgICAgICBsb2NOYW1lOiBpbmRpdi5sb2NhdGlvbi5uYW1lLCBcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgLy8gYWdlbmN5TmFtZTogKChpbmRpdi5yb2NrZXQuYWdlbmNpZXNbMF0gPT09IHVuZGVmaW5lZCkgPyBpbmRpdi5yb2NrZXQuYWdlbmNpZXNbMF0ubmFtZSA6IFwiTi9BXCIpLFxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAvLyBtaXNzaW9uTmFtZTogICgoaW5kaXYubWlzc2lvbnMpID8gaW5kaXYubWlzc2lvbnMubmFtZSA6IFwiTi9BXCIpLFxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAvLyBtaXNzaW9uRGVzYzogKChpbmRpdi5taXNzaW9ucykgPyBpbmRpdi5taXNzaW9uc1swXS5kZXNjcmlwdGlvbiA6IFwiTi9BXCIpXG4vLyAvLyAgICAgICAgICAgICAgICAgICB9KVxuLy8gLy8gICB9KSlcblxuXG5cblxuXG5cbi8vIC8vIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC8xMCcpXG4vLyAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vIC8vICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAvLyAgICAgY29uc3QgbGF1bmNoUmVuZGVyID0gZGF0YS5sYXVuY2hlcy5tYXAoaW5kaXYgPT4ge1xuLy8gLy8gICAgICAgcmV0dXJuIGA8cD4ke2luZGl2Lm5hbWV9LCAke2luZGl2LmxvY2F0aW9uLm5hbWV9PC9wPmBcbi8vIC8vICAgICB9KVxuICBcbi8vIC8vICAgICBkb2N1bWVudFxuLy8gLy8gICAgICAgLmdldEVsZW1lbnRCeUlkKCdhcHBUZXN0Jylcbi8vIC8vICAgICAgIC5pbm5lckhUTUwgPSBsYXVuY2hSZW5kZXJcbi8vIC8vICAgfSlcblxuXG4vLyAgIC8vIGNvbnN0IHJvY2tldENhcmQgPSAoKSA9PiB7XG4vLyAgIC8vICAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEwJylcbi8vICAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgIC8vICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgLy8gICAgIGNvbnN0IGxhdW5jaFJlbmRlciA9IGRhdGEubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbiAgICAgICAgXG4vLyAgIC8vICAgICAgIGNvbnNvbGUubG9nKHsgbmFtZTogcm9ja2V0Lm5hbWUsIGxvY05hbWU6IHJvY2tldC5sb2NhdGlvbi5uYW1lIH0pXG4vLyAgIC8vICAgICAgIHJldHVybnsgcm9ja2V0TmFtZTogaW5kaXYubmFtZSwgcm9ja2V0RmFtaWx5OiBpbmRpdi5yb2NrZXQuZmFtaWx5bmFtZSwgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZSB9XG4vLyAgIC8vICAgICB9KVxuICBcbi8vICAgLy8gICAgIGRvY3VtZW50XG4vLyAgIC8vICAgICAgIC5nZXRFbGVtZW50QnlJZCgnYXBwVGVzdCcpXG4vLyAgIC8vICAgICAgIC5pbm5lckhUTUwgPSBsYXVuY2hSZW5kZXJcbi8vICAgLy8gfSlcblxuXG4vLyAvLyBjb25zdCBjb2xsZWN0ZWRSb2NrZXRzID0gKCkgPT4ge1xuLy8gLy8gICBmZXRjaCgnaHR0cHM6Ly9sYXVuY2hsaWJyYXJ5Lm5ldC8xLjQvbGF1bmNoL25leHQvNScpXG4vLyAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gLy8gICAgIC50aGVuKGRhdGEgPT4geyBcbi8vIC8vICAgICAgIGNvbnN0IHJvY2tldEFyciA9IGRhdGEubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbi8vIC8vICAgICAgICAgcmV0dXJuIHtcbi8vIC8vICAgICAgICAgcm9ja2V0TmFtZTogaW5kaXYubmFtZSwgcm9ja2V0RmFtaWx5OiBpbmRpdi5yb2NrZXQuZmFtaWx5bmFtZSwgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZVxuLy8gLy8gICAgICAgICB9XG4vLyAvLyAgICAgICB9XG4vLyAvLyAgICAgICApXG4vLyAvLyAgIC8vICAgICByZXR1cm4gcm9ja2V0QXJyXG4vLyAvLyAgIC8vICAgfVxuLy8gLy8gICB9XG5cblxuLy8gICBjb25zdCByb2NrZXRDYXJkID0gKCkgPT4ge1xuLy8gICAgIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC8xMCcpXG4vLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gICAgIC50aGVuKGRhdGEgPT4ge1xuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgICBjb25zdCBsYXVuY2hSZW5kZXIgPSBkYXRhLmxhdW5jaGVzLm1hcChpbmRpdiA9PiB7XG4gICAgICAgIFxuLy8gICAgICAgICBjb25zb2xlLmxvZyh7IG5hbWU6IHJvY2tldC5uYW1lLCBsb2NOYW1lOiByb2NrZXQubG9jYXRpb24ubmFtZSB9KVxuLy8gICAgICAgICByZXR1cm57IHJvY2tldE5hbWU6IGluZGl2Lm5hbWUsIHJvY2tldEZhbWlseTogaW5kaXYucm9ja2V0LmZhbWlseW5hbWUsIHJvY2tldFBob3RvOiBpbmRpdi5yb2NrZXQuaW1hZ2VVUkwsIGxvY05hbWU6IGluZGl2LmxvY2F0aW9uLm5hbWUgfVxuLy8gICAgICAgfSlcbiAgXG4vLyAgICAgICBkb2N1bWVudFxuLy8gICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2FwcFRlc3QnKVxuLy8gICAgICAgICAuaW5uZXJIVE1MID0gbGF1bmNoUmVuZGVyXG4vLyAgIH0pXG5cblxuXG5cbi8vICAgLy8gZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEwJylcbi8vICAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgIC8vICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgLy8gICAgIGNvbnN0IGxhdW5jaFJlbmRlciA9IGRhdGEubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbi8vICAgLy8gICAgICAgcmV0dXJuIGA8cD4ke2luZGl2Lm5hbWV9LCAke2luZGl2LmxvY2F0aW9uLm5hbWV9PC9wPmBcbi8vICAgLy8gICAgIH0pXG4gICAgXG4vLyAgIC8vICAgICBkb2N1bWVudFxuLy8gICAvLyAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2FwcFRlc3QnKVxuLy8gICAvLyAgICAgICAuaW5uZXJIVE1MID0gbGF1bmNoUmVuZGVyXG4vLyAgIC8vICAgfSlcblxuICBcblxuXG5cblxuLy8gLy8gZnVuY3Rpb24gcm9ja2V0Q2FyZCgpIHtcbi8vIC8vICAgY29uc3Qgcm9ja2V5QXJyID0gW11cbi8vIC8vICAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzUnKVxuLy8gLy8gICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vIC8vICAgICAudGhlbihhcnJheSA9PiBhcnJheS5sYXVuY2hlcy5tYXAgPT4ge1xuLy8gLy8gICAgICAgcm9ja2V0QXJyLnB1c2goeyByb2NrZXROYW1lOiBpbmRpdi5uYW1lLCBcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGxhdW5jaERhdGU6IGluZGl2LndpbmRvd3N0YXJ0LCBcbi8vIC8vICAgICAgICAgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgXG4vLyAvLyAgICAgICAgIGxvY05hbWU6IGluZGl2LmxvY2F0aW9uLm5hbWUsIFxuLy8gLy8gICAgICAgICAvLyBhZ2VuY3lOYW1lOiAoKGluZGl2LnJvY2tldC5hZ2VuY2llc1swXSA9PT0gdW5kZWZpbmVkKSA/IGluZGl2LnJvY2tldC5hZ2VuY2llc1swXS5uYW1lIDogXCJOL0FcIiksXG4vLyAvLyAgICAgICAgIC8vIG1pc3Npb25OYW1lOiAgKChpbmRpdi5taXNzaW9ucykgPyBpbmRpdi5taXNzaW9ucy5uYW1lIDogXCJOL0FcIiksXG4vLyAvLyAgICAgICAgIC8vIG1pc3Npb25EZXNjOiAoKGluZGl2Lm1pc3Npb25zKSA/IGluZGl2Lm1pc3Npb25zWzBdLmRlc2NyaXB0aW9uIDogXCJOL0FcIilcbi8vIC8vICAgICAgIH0pXG5cblxuLy8gLy8gICAgIH0pXG5cbi8vIC8vICIsImNvbnN0IHJvY2tldENhcmQgPSAoYXJyYXkpID0+IHtcbiAgY29uc29sZS5sb2coYXJyYXkpXG4gIGNvbnN0IGNhcmRSZXR1cm4gPSBhcnJheS5tYXAoaW5kaXYgPT4ge1xuICAgIFxuICAgIHJldHVybiBgPGxpIGNsYXNzPSdyb2NrZXQtY2FyZCc+XG4gICAgICA8aDI+JHtpbmRpdi5yb2NrZXROYW1lfTwvaDI+XG4gICAgICA8cD4gTGF1bmNoIERhdGU6ICR7aW5kaXYubGF1bmNoRGF0ZX08L3A+XG4gICAgICA8aW1nIHNyYz1cIiR7aW5kaXYucm9ja2V0UGhvdG99XCIgLz5cbiAgICA8L2xpPlxuICAgIGBcbiAgfSlcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKCdhcHBUZXN0JylcbiAgICAgIC5pbm5lckhUTUwgPSBjYXJkUmV0dXJuLmpvaW4oJycpXG59XG5cbmNvbnN0IHJvY2tldENvbGxlY3Rpb24gPSAoKSA9PiB7XG4gIGxldCByb2NrZXRBcnIgPSBbXTtcbiAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzgnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihhcnJheSA9PiBhcnJheS5sYXVuY2hlcy5mb3JFYWNoKGluZGl2ID0+IChcbiAgICAgIHJvY2tldEFyci5wdXNoKHtyb2NrZXROYW1lOiBpbmRpdi5uYW1lLCBcbiAgICAgIGxhdW5jaERhdGU6IGluZGl2LndpbmRvd3N0YXJ0LCBcbiAgICAgIHJvY2tldFBob3RvOiBpbmRpdi5yb2NrZXQuaW1hZ2VVUkwsIFxuICAgICAgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZVxuICAgICAgfSlcbiAgICApKSlcbiAgICAudGhlbigoKSA9PiByb2NrZXRDYXJkKHJvY2tldEFycikpXG59XG5cbnJvY2tldENvbGxlY3Rpb24oKSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=