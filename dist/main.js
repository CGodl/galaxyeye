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
/* harmony import */ var _scripts_piechart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/piechart */ "./src/scripts/piechart.js");
/* harmony import */ var _scripts_piechart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_piechart__WEBPACK_IMPORTED_MODULE_2__);


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

var countDown = function countDown(dateTime) {
  var workingdateTime = Date.parse(dateTime);
  var total = workingdateTime - Date.parse(new Date());
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}; // function timer(endTime) {
//   let clock;
//   const timeinterval = setInterval(() => {
//     const t = countDown(endtime);
//     clock.innerHTML = 'days: ' + t.days + '<br>' +
//                       'hours: '+ t.hours + '<br>' +
//                       'minutes: ' + t.minutes + '<br>' +
//                       'seconds: ' + t.seconds;
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   },1000);
//   return clock;
// }


var rocketCard = function rocketCard(array) {
  var cardReturn = array.map(function (indiv) {
    return "<li class='rocket-card'>\n      <img src=\"".concat(indiv.rocketPhoto, "\" />\n      <h2>").concat(indiv.rocketName, "</h2>\n      <p>Time to launch: ").concat(countDown(indiv.launchDate).minutes, " <p>\n      <p> Launch Date: ").concat(indiv.launchDate, "</p>\n      <p>Launch Location: ").concat(indiv.location, " </p>\n      <p>Upcoming Mission Description:</p>\n      <p class='card-desc'>").concat(indiv.description, "</p>\n    </li>\n    ");
  });
  document.getElementById('appTest').innerHTML = cardReturn.join('');
};

var rocketCollection = function rocketCollection() {
  var rocketArr = [];
  fetch('https://launchlibrary.net/1.4/launch/next/12').then(function (response) {
    return response.json();
  }).then(function (array) {
    return array.launches.forEach(function (indiv) {
      return rocketArr.push({
        rocketName: indiv.name,
        launchDate: indiv.windowstart,
        rocketPhoto: indiv.rocket.imageURL,
        locName: indiv.location.name,
        description: indiv.missions[0] ? indiv.missions[0].description : 'No description available',
        location: indiv.location.name
      });
    });
  }).then(function () {
    return rocketCard(rocketArr);
  });
};

rocketCollection();

/***/ }),

/***/ "./src/scripts/piechart.js":
/*!*********************************!*\
  !*** ./src/scripts/piechart.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// const breakLoc = (array) => {
//   let i = 0;
//   let rocketCollec = [];
//   while (i < array.length) {
//     let country = array[i].lsp.countryCode
//     let lsp = array[i].lsp.name 
//     let rocketName = array[i].rocket.name
//     let time = array[i].isostart
//     rocketCollec.push([country, lsp, rocketName, time])
//     i++
//   }
//   let result = rocketCollec.reduce( (acc, [country, lsp, rocketName, time]) => {
//     let curr = acc[country] = acc[country] || {};
//     curr = curr[lsp] = curr[lsp] || {};
//     curr = curr[rocketName] = curr[rocketName] || [];
//     curr.push(time);
//     return acc;
// }, {});
//   return result;
// }
// const launchLocation = () => {
//   let launchLoc = [];
//   let answer = [];
//   fetch('https://launchlibrary.net/1.4/launch/next/50')
//     .then(response => response.json())
//     .then(array => array.launches.forEach(indiv => (
//       launchLoc.push(indiv)
//     )))
//     .then(() => {
//       // console.log(breakLoc(launchLoc))
//       return breakLoc(launchLoc)
//     })      
//   }
//   let varData = launchLocation()
//   // console.log(varData)
document.addEventListener("DOMContentLoaded", function () {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGllY2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImNvdW50RG93biIsImRhdGVUaW1lIiwid29ya2luZ2RhdGVUaW1lIiwiRGF0ZSIsInBhcnNlIiwidG90YWwiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsImhvdXJzIiwiZGF5cyIsInJvY2tldENhcmQiLCJhcnJheSIsImNhcmRSZXR1cm4iLCJtYXAiLCJpbmRpdiIsInJvY2tldFBob3RvIiwicm9ja2V0TmFtZSIsImxhdW5jaERhdGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsImpvaW4iLCJyb2NrZXRDb2xsZWN0aW9uIiwicm9ja2V0QXJyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibGF1bmNoZXMiLCJmb3JFYWNoIiwicHVzaCIsIm5hbWUiLCJ3aW5kb3dzdGFydCIsInJvY2tldCIsImltYWdlVVJMIiwibG9jTmFtZSIsIm1pc3Npb25zIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FB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Q0ksUUFBTixDQUFlZTtBQUxWLE9BQWYsQ0FEeUM7QUFBQSxLQUE1QixDQUFKO0FBQUEsR0FGYixFQVlHTixJQVpILENBWVE7QUFBQSxXQUFNakIsVUFBVSxDQUFDZSxTQUFELENBQWhCO0FBQUEsR0FaUjtBQWFELENBZkQ7O0FBaUJBRCxnQkFBZ0IsRzs7Ozs7Ozs7Ozs7QUNyRWhCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJRUosUUFBUSxDQUFDbUIsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU0sQ0FNL0MsQ0FOTCxFOzs7Ozs7Ozs7OztBQ3hDRix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2FyZCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9waWVjaGFydCc7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIHJvY2tldENvbGxlY3Rpb24oKVxuXG5cbiAgLy8gZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEwJylcbiAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgLnRoZW4oZGF0YSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgIGNvbnN0IGxhdW5jaFJlbmRlciA9IGRhdGEubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbiAgLy8gICAgICAgcmV0dXJuIGA8cD4ke2luZGl2Lm5hbWV9LCAke2luZGl2LmxvY2F0aW9uLm5hbWV9PC9wPmBcbiAgLy8gICAgIH0pXG4gICAgXG4gIC8vICAgICBkb2N1bWVudFxuICAvLyAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2FwcFRlc3QnKVxuICAvLyAgICAgICAuaW5uZXJIVE1MID0gbGF1bmNoUmVuZGVyXG4gIC8vICAgfSlcblxuXG5cbi8vIGZ1bmN0aW9uIHJvY2tldENhcmQoKSB7XG4vLyAgIGNvbnN0IHJvY2tleUFyciA9IFtdXG4vLyAgIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC81Jylcbi8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgICAgLnRoZW4oYXJyYXkgPT4gYXJyYXkubGF1bmNoZXMuZm9yRWFjaCA9PiB7XG4vLyAgICAgICByb2NrZXRBcnIucHVzaCh7IHJvY2tldE5hbWU6IGluZGl2Lm5hbWUsIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGF1bmNoRGF0ZTogaW5kaXYud2luZG93c3RhcnQsIFxuLy8gICAgICAgICByb2NrZXRQaG90bzogaW5kaXYucm9ja2V0LmltYWdlVVJMLCBcbi8vICAgICAgICAgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZSwgXG4vLyAgICAgICAgIGFnZW5jeU5hbWU6ICgoaW5kaXYucm9ja2V0LmFnZW5jaWVzWzBdID09PSB1bmRlZmluZWQpID8gaW5kaXYucm9ja2V0LmFnZW5jaWVzWzBdLm5hbWUgOiBcIk4vQVwiKSxcbi8vICAgICAgICAgbWlzc2lvbk5hbWU6ICAoKGluZGl2Lm1pc3Npb25zKSA/IGluZGl2Lm1pc3Npb25zLm5hbWUgOiBcIk4vQVwiKSxcbi8vICAgICAgICAgbWlzc2lvbkRlc2M6ICgoaW5kaXYubWlzc2lvbnMpID8gaW5kaXYubWlzc2lvbnNbMF0uZGVzY3JpcHRpb24gOiBcIk4vQVwiKVxuLy8gICAgICAgfSlcblxuXG4vLyAgICAgfSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIC8vIGNvbnN0IHJvY2tldENhcmQgPSAoKSA9PiB7XG4gIC8vICAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEwJylcbiAgLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgLnRoZW4oZGF0YSA9PiB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgLy8gICAgIGNvbnN0IGxhdW5jaFJlbmRlciA9IGRhdGEubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbiAgICAgICAgXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHsgbmFtZTogcm9ja2V0Lm5hbWUsIGxvY05hbWU6IHJvY2tldC5sb2NhdGlvbi5uYW1lIH0pXG4gIC8vICAgICAgIHJldHVybnsgcm9ja2V0TmFtZTogaW5kaXYubmFtZSwgcm9ja2V0RmFtaWx5OiBpbmRpdi5yb2NrZXQuZmFtaWx5bmFtZSwgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZSB9XG4gIC8vICAgICB9KVxuICBcbiAgLy8gICAgIGRvY3VtZW50XG4gIC8vICAgICAgIC5nZXRFbGVtZW50QnlJZCgnYXBwVGVzdCcpXG4gIC8vICAgICAgIC5pbm5lckhUTUwgPSBsYXVuY2hSZW5kZXJcbiAgLy8gfSlcblxuXG5cblxuXG5cblxuXG4vLyAvLyBmZXRjaCgnaHR0cHM6Ly9sYXVuY2hsaWJyYXJ5Lm5ldC8xLjQvbGF1bmNoL25leHQvNTAnKVxuLy8gLy8gICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAvLyAgIC50aGVuKGFycmF5ID0+IGNvbnNvbGUubG9nKGFycmF5LmxhdW5jaGVzKSlcblxuLy8gLy8gZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzUwJylcbi8vIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gLy8gICAudGhlbihhcnJheSA9PiBhcnJheS5sYXVuY2hlcy5tYXAoaW5kaXYgPT4ge1xuLy8gLy8gICAgIGNvbnNvbGUubG9nKHsgcm9ja2V0TmFtZTogaW5kaXYubmFtZSwgXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIGxhdW5jaERhdGU6IGluZGl2LndpbmRvd3N0YXJ0LCBcbi8vIC8vICAgICAgICAgICAgICAgICAgICAgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIGxvY05hbWU6IGluZGl2LmxvY2F0aW9uLm5hbWUsIFxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAvLyBhZ2VuY3lOYW1lOiAoKGluZGl2LnJvY2tldC5hZ2VuY2llc1swXSA9PT0gdW5kZWZpbmVkKSA/IGluZGl2LnJvY2tldC5hZ2VuY2llc1swXS5uYW1lIDogXCJOL0FcIiksXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIC8vIG1pc3Npb25OYW1lOiAgKChpbmRpdi5taXNzaW9ucykgPyBpbmRpdi5taXNzaW9ucy5uYW1lIDogXCJOL0FcIiksXG4vLyAvLyAgICAgICAgICAgICAgICAgICAgIC8vIG1pc3Npb25EZXNjOiAoKGluZGl2Lm1pc3Npb25zKSA/IGluZGl2Lm1pc3Npb25zWzBdLmRlc2NyaXB0aW9uIDogXCJOL0FcIilcbi8vIC8vICAgICAgICAgICAgICAgICAgIH0pXG4vLyAvLyAgIH0pKVxuXG5cblxuXG5cblxuLy8gLy8gZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEwJylcbi8vIC8vICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gLy8gICAudGhlbihkYXRhID0+IHtcbi8vIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vIC8vICAgICBjb25zdCBsYXVuY2hSZW5kZXIgPSBkYXRhLmxhdW5jaGVzLm1hcChpbmRpdiA9PiB7XG4vLyAvLyAgICAgICByZXR1cm4gYDxwPiR7aW5kaXYubmFtZX0sICR7aW5kaXYubG9jYXRpb24ubmFtZX08L3A+YFxuLy8gLy8gICAgIH0pXG4gIFxuLy8gLy8gICAgIGRvY3VtZW50XG4vLyAvLyAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2FwcFRlc3QnKVxuLy8gLy8gICAgICAgLmlubmVySFRNTCA9IGxhdW5jaFJlbmRlclxuLy8gLy8gICB9KVxuXG5cbi8vICAgLy8gY29uc3Qgcm9ja2V0Q2FyZCA9ICgpID0+IHtcbi8vICAgLy8gICBmZXRjaCgnaHR0cHM6Ly9sYXVuY2hsaWJyYXJ5Lm5ldC8xLjQvbGF1bmNoL25leHQvMTAnKVxuLy8gICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLy8gICAudGhlbihkYXRhID0+IHtcbi8vICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAvLyAgICAgY29uc3QgbGF1bmNoUmVuZGVyID0gZGF0YS5sYXVuY2hlcy5tYXAoaW5kaXYgPT4ge1xuICAgICAgICBcbi8vICAgLy8gICAgICAgY29uc29sZS5sb2coeyBuYW1lOiByb2NrZXQubmFtZSwgbG9jTmFtZTogcm9ja2V0LmxvY2F0aW9uLm5hbWUgfSlcbi8vICAgLy8gICAgICAgcmV0dXJueyByb2NrZXROYW1lOiBpbmRpdi5uYW1lLCByb2NrZXRGYW1pbHk6IGluZGl2LnJvY2tldC5mYW1pbHluYW1lLCByb2NrZXRQaG90bzogaW5kaXYucm9ja2V0LmltYWdlVVJMLCBsb2NOYW1lOiBpbmRpdi5sb2NhdGlvbi5uYW1lIH1cbi8vICAgLy8gICAgIH0pXG4gIFxuLy8gICAvLyAgICAgZG9jdW1lbnRcbi8vICAgLy8gICAgICAgLmdldEVsZW1lbnRCeUlkKCdhcHBUZXN0Jylcbi8vICAgLy8gICAgICAgLmlubmVySFRNTCA9IGxhdW5jaFJlbmRlclxuLy8gICAvLyB9KVxuXG5cbi8vIC8vIGNvbnN0IGNvbGxlY3RlZFJvY2tldHMgPSAoKSA9PiB7XG4vLyAvLyAgIGZldGNoKCdodHRwczovL2xhdW5jaGxpYnJhcnkubmV0LzEuNC9sYXVuY2gvbmV4dC81Jylcbi8vIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAvLyAgICAgLnRoZW4oZGF0YSA9PiB7IFxuLy8gLy8gICAgICAgY29uc3Qgcm9ja2V0QXJyID0gZGF0YS5sYXVuY2hlcy5tYXAoaW5kaXYgPT4ge1xuLy8gLy8gICAgICAgICByZXR1cm4ge1xuLy8gLy8gICAgICAgICByb2NrZXROYW1lOiBpbmRpdi5uYW1lLCByb2NrZXRGYW1pbHk6IGluZGl2LnJvY2tldC5mYW1pbHluYW1lLCByb2NrZXRQaG90bzogaW5kaXYucm9ja2V0LmltYWdlVVJMLCBsb2NOYW1lOiBpbmRpdi5sb2NhdGlvbi5uYW1lXG4vLyAvLyAgICAgICAgIH1cbi8vIC8vICAgICAgIH1cbi8vIC8vICAgICAgIClcbi8vIC8vICAgLy8gICAgIHJldHVybiByb2NrZXRBcnJcbi8vIC8vICAgLy8gICB9XG4vLyAvLyAgIH1cblxuXG4vLyAgIGNvbnN0IHJvY2tldENhcmQgPSAoKSA9PiB7XG4vLyAgICAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEwJylcbi8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgICAgLnRoZW4oZGF0YSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgIGNvbnN0IGxhdW5jaFJlbmRlciA9IGRhdGEubGF1bmNoZXMubWFwKGluZGl2ID0+IHtcbiAgICAgICAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHsgbmFtZTogcm9ja2V0Lm5hbWUsIGxvY05hbWU6IHJvY2tldC5sb2NhdGlvbi5uYW1lIH0pXG4vLyAgICAgICAgIHJldHVybnsgcm9ja2V0TmFtZTogaW5kaXYubmFtZSwgcm9ja2V0RmFtaWx5OiBpbmRpdi5yb2NrZXQuZmFtaWx5bmFtZSwgcm9ja2V0UGhvdG86IGluZGl2LnJvY2tldC5pbWFnZVVSTCwgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZSB9XG4vLyAgICAgICB9KVxuICBcbi8vICAgICAgIGRvY3VtZW50XG4vLyAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnYXBwVGVzdCcpXG4vLyAgICAgICAgIC5pbm5lckhUTUwgPSBsYXVuY2hSZW5kZXJcbi8vICAgfSlcblxuXG5cblxuLy8gICAvLyBmZXRjaCgnaHR0cHM6Ly9sYXVuY2hsaWJyYXJ5Lm5ldC8xLjQvbGF1bmNoL25leHQvMTAnKVxuLy8gICAvLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgLy8gICAudGhlbihkYXRhID0+IHtcbi8vICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAvLyAgICAgY29uc3QgbGF1bmNoUmVuZGVyID0gZGF0YS5sYXVuY2hlcy5tYXAoaW5kaXYgPT4ge1xuLy8gICAvLyAgICAgICByZXR1cm4gYDxwPiR7aW5kaXYubmFtZX0sICR7aW5kaXYubG9jYXRpb24ubmFtZX08L3A+YFxuLy8gICAvLyAgICAgfSlcbiAgICBcbi8vICAgLy8gICAgIGRvY3VtZW50XG4vLyAgIC8vICAgICAgIC5nZXRFbGVtZW50QnlJZCgnYXBwVGVzdCcpXG4vLyAgIC8vICAgICAgIC5pbm5lckhUTUwgPSBsYXVuY2hSZW5kZXJcbi8vICAgLy8gICB9KVxuXG4gIFxuXG5cblxuXG4vLyAvLyBmdW5jdGlvbiByb2NrZXRDYXJkKCkge1xuLy8gLy8gICBjb25zdCByb2NrZXlBcnIgPSBbXVxuLy8gLy8gICBmZXRjaCgnaHR0cHM6Ly9sYXVuY2hsaWJyYXJ5Lm5ldC8xLjQvbGF1bmNoL25leHQvNScpXG4vLyAvLyAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuLy8gLy8gICAgIC50aGVuKGFycmF5ID0+IGFycmF5LmxhdW5jaGVzLm1hcCA9PiB7XG4vLyAvLyAgICAgICByb2NrZXRBcnIucHVzaCh7IHJvY2tldE5hbWU6IGluZGl2Lm5hbWUsIFxuLy8gLy8gICAgICAgICAgICAgICAgICAgICAgICAgbGF1bmNoRGF0ZTogaW5kaXYud2luZG93c3RhcnQsIFxuLy8gLy8gICAgICAgICByb2NrZXRQaG90bzogaW5kaXYucm9ja2V0LmltYWdlVVJMLCBcbi8vIC8vICAgICAgICAgbG9jTmFtZTogaW5kaXYubG9jYXRpb24ubmFtZSwgXG4vLyAvLyAgICAgICAgIC8vIGFnZW5jeU5hbWU6ICgoaW5kaXYucm9ja2V0LmFnZW5jaWVzWzBdID09PSB1bmRlZmluZWQpID8gaW5kaXYucm9ja2V0LmFnZW5jaWVzWzBdLm5hbWUgOiBcIk4vQVwiKSxcbi8vIC8vICAgICAgICAgLy8gbWlzc2lvbk5hbWU6ICAoKGluZGl2Lm1pc3Npb25zKSA/IGluZGl2Lm1pc3Npb25zLm5hbWUgOiBcIk4vQVwiKSxcbi8vIC8vICAgICAgICAgLy8gbWlzc2lvbkRlc2M6ICgoaW5kaXYubWlzc2lvbnMpID8gaW5kaXYubWlzc2lvbnNbMF0uZGVzY3JpcHRpb24gOiBcIk4vQVwiKVxuLy8gLy8gICAgICAgfSlcblxuXG4vLyAvLyAgICAgfSlcblxuLy8gLy8gIiwiY29uc3QgY291bnREb3duID0gKGRhdGVUaW1lKSA9PiB7XG4gIGxldCB3b3JraW5nZGF0ZVRpbWUgPSBEYXRlLnBhcnNlKGRhdGVUaW1lKTtcblxuICBsZXQgdG90YWwgPSB3b3JraW5nZGF0ZVRpbWUgLSBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vciggKHRvdGFsLzEwMDApICUgNjAgKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoICh0b3RhbC8xMDAwLzYwKSAlIDYwICk7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vciggKHRvdGFsLygxMDAwKjYwKjYwKSkgJSAyNCApO1xuICBjb25zdCBkYXlzID0gTWF0aC5mbG9vciggdG90YWwvKDEwMDAqNjAqNjAqMjQpICk7XG5cbiAgcmV0dXJuIHt0b3RhbCwgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHN9O1xufVxuXG4vLyBmdW5jdGlvbiB0aW1lcihlbmRUaW1lKSB7XG4vLyAgIGxldCBjbG9jaztcbi8vICAgY29uc3QgdGltZWludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgIGNvbnN0IHQgPSBjb3VudERvd24oZW5kdGltZSk7XG4vLyAgICAgY2xvY2suaW5uZXJIVE1MID0gJ2RheXM6ICcgKyB0LmRheXMgKyAnPGJyPicgK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICdob3VyczogJysgdC5ob3VycyArICc8YnI+JyArXG4vLyAgICAgICAgICAgICAgICAgICAgICAgJ21pbnV0ZXM6ICcgKyB0Lm1pbnV0ZXMgKyAnPGJyPicgK1xuLy8gICAgICAgICAgICAgICAgICAgICAgICdzZWNvbmRzOiAnICsgdC5zZWNvbmRzO1xuLy8gICAgIGlmICh0LnRvdGFsIDw9IDApIHtcbi8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZWludGVydmFsKTtcbi8vICAgICB9XG4vLyAgIH0sMTAwMCk7XG4vLyAgIHJldHVybiBjbG9jaztcbi8vIH1cblxuXG5cblxuY29uc3Qgcm9ja2V0Q2FyZCA9IChhcnJheSkgPT4ge1xuXG4gIGNvbnN0IGNhcmRSZXR1cm4gPSBhcnJheS5tYXAoaW5kaXYgPT4ge1xuICAgIFxuICAgIHJldHVybiBgPGxpIGNsYXNzPSdyb2NrZXQtY2FyZCc+XG4gICAgICA8aW1nIHNyYz1cIiR7aW5kaXYucm9ja2V0UGhvdG99XCIgLz5cbiAgICAgIDxoMj4ke2luZGl2LnJvY2tldE5hbWV9PC9oMj5cbiAgICAgIDxwPlRpbWUgdG8gbGF1bmNoOiAkeyhjb3VudERvd24oaW5kaXYubGF1bmNoRGF0ZSkubWludXRlcyl9IDxwPlxuICAgICAgPHA+IExhdW5jaCBEYXRlOiAke2luZGl2LmxhdW5jaERhdGV9PC9wPlxuICAgICAgPHA+TGF1bmNoIExvY2F0aW9uOiAke2luZGl2LmxvY2F0aW9ufSA8L3A+XG4gICAgICA8cD5VcGNvbWluZyBNaXNzaW9uIERlc2NyaXB0aW9uOjwvcD5cbiAgICAgIDxwIGNsYXNzPSdjYXJkLWRlc2MnPiR7aW5kaXYuZGVzY3JpcHRpb259PC9wPlxuICAgIDwvbGk+XG4gICAgYFxuICB9KVxuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2FwcFRlc3QnKVxuICAgICAgLmlubmVySFRNTCA9IGNhcmRSZXR1cm4uam9pbignJylcbn1cblxuXG5cbmNvbnN0IHJvY2tldENvbGxlY3Rpb24gPSAoKSA9PiB7XG4gIGxldCByb2NrZXRBcnIgPSBbXTtcbiAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzEyJylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oYXJyYXkgPT4gYXJyYXkubGF1bmNoZXMuZm9yRWFjaChpbmRpdiA9PiAoXG4gICAgICByb2NrZXRBcnIucHVzaCh7cm9ja2V0TmFtZTogaW5kaXYubmFtZSwgXG4gICAgICBsYXVuY2hEYXRlOiBpbmRpdi53aW5kb3dzdGFydCwgXG4gICAgICByb2NrZXRQaG90bzogaW5kaXYucm9ja2V0LmltYWdlVVJMLCBcbiAgICAgIGxvY05hbWU6IGluZGl2LmxvY2F0aW9uLm5hbWUsXG4gICAgICBkZXNjcmlwdGlvbjogaW5kaXYubWlzc2lvbnNbMF0gPyBpbmRpdi5taXNzaW9uc1swXS5kZXNjcmlwdGlvbiA6ICdObyBkZXNjcmlwdGlvbiBhdmFpbGFibGUnICxcbiAgICAgIGxvY2F0aW9uOiBpbmRpdi5sb2NhdGlvbi5uYW1lXG5cbiAgICAgIH0pXG4gICAgKSkpXG4gICAgLnRoZW4oKCkgPT4gcm9ja2V0Q2FyZChyb2NrZXRBcnIpKVxufVxuXG5yb2NrZXRDb2xsZWN0aW9uKCkiLCIvLyBjb25zdCBicmVha0xvYyA9IChhcnJheSkgPT4ge1xuXG4vLyAgIGxldCBpID0gMDtcbi8vICAgbGV0IHJvY2tldENvbGxlYyA9IFtdO1xuLy8gICB3aGlsZSAoaSA8IGFycmF5Lmxlbmd0aCkge1xuLy8gICAgIGxldCBjb3VudHJ5ID0gYXJyYXlbaV0ubHNwLmNvdW50cnlDb2RlXG4vLyAgICAgbGV0IGxzcCA9IGFycmF5W2ldLmxzcC5uYW1lIFxuLy8gICAgIGxldCByb2NrZXROYW1lID0gYXJyYXlbaV0ucm9ja2V0Lm5hbWVcbi8vICAgICBsZXQgdGltZSA9IGFycmF5W2ldLmlzb3N0YXJ0XG4vLyAgICAgcm9ja2V0Q29sbGVjLnB1c2goW2NvdW50cnksIGxzcCwgcm9ja2V0TmFtZSwgdGltZV0pXG4vLyAgICAgaSsrXG4vLyAgIH1cbi8vICAgbGV0IHJlc3VsdCA9IHJvY2tldENvbGxlYy5yZWR1Y2UoIChhY2MsIFtjb3VudHJ5LCBsc3AsIHJvY2tldE5hbWUsIHRpbWVdKSA9PiB7XG4vLyAgICAgbGV0IGN1cnIgPSBhY2NbY291bnRyeV0gPSBhY2NbY291bnRyeV0gfHwge307XG4vLyAgICAgY3VyciA9IGN1cnJbbHNwXSA9IGN1cnJbbHNwXSB8fCB7fTtcbi8vICAgICBjdXJyID0gY3Vycltyb2NrZXROYW1lXSA9IGN1cnJbcm9ja2V0TmFtZV0gfHwgW107XG4vLyAgICAgY3Vyci5wdXNoKHRpbWUpO1xuLy8gICAgIHJldHVybiBhY2M7XG4vLyB9LCB7fSk7XG4vLyAgIHJldHVybiByZXN1bHQ7XG4vLyB9XG5cbi8vIGNvbnN0IGxhdW5jaExvY2F0aW9uID0gKCkgPT4ge1xuLy8gICBsZXQgbGF1bmNoTG9jID0gW107XG4vLyAgIGxldCBhbnN3ZXIgPSBbXTtcbi8vICAgZmV0Y2goJ2h0dHBzOi8vbGF1bmNobGlicmFyeS5uZXQvMS40L2xhdW5jaC9uZXh0LzUwJylcbi8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4vLyAgICAgLnRoZW4oYXJyYXkgPT4gYXJyYXkubGF1bmNoZXMuZm9yRWFjaChpbmRpdiA9PiAoXG4vLyAgICAgICBsYXVuY2hMb2MucHVzaChpbmRpdilcbi8vICAgICApKSlcbi8vICAgICAudGhlbigoKSA9PiB7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyhicmVha0xvYyhsYXVuY2hMb2MpKVxuLy8gICAgICAgcmV0dXJuIGJyZWFrTG9jKGxhdW5jaExvYylcbi8vICAgICB9KSAgICAgIFxuLy8gICB9XG4vLyAgIGxldCB2YXJEYXRhID0gbGF1bmNoTG9jYXRpb24oKVxuLy8gICAvLyBjb25zb2xlLmxvZyh2YXJEYXRhKVxuXG4gIFxuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuXG4gICAgXG5cbiAgICBcbiAgICAgICAgICAgIFxuICAgICAgfSk7XG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==