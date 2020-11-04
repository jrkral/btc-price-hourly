module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/post-btc-data.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/env.js":
/*!***********************!*\
  !*** ./config/env.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\ndotenv.config();\nmodule.exports = {\n  CONSUMER_KEY: process.env.CONSUMER_KEY,\n  CONSUMER_SECRET: process.env.CONSUMER_SECRET,\n  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_KEY,\n  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZW52LmpzP2E3NWYiXSwibmFtZXMiOlsiZG90ZW52IiwicmVxdWlyZSIsImNvbmZpZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJDT05TVU1FUl9LRVkiLCJwcm9jZXNzIiwiZW52IiwiQ09OU1VNRVJfU0VDUkVUIiwiQUNDRVNTX1RPS0VOX0tFWSIsIkFDQ0VTU19UT0tFTl9TRUNSRVQiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFDQUQsTUFBTSxDQUFDRSxNQUFQO0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQkMsY0FBWSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFEVjtBQUVoQkcsaUJBQWUsRUFBRUYsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBRmI7QUFHaEJDLGtCQUFnQixFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsZ0JBSGQ7QUFJaEJDLHFCQUFtQixFQUFFSixPQUFPLENBQUNDLEdBQVIsQ0FBWUc7QUFKakIsQ0FBakIiLCJmaWxlIjoiLi9jb25maWcvZW52LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG90ZW52ID0gcmVxdWlyZSgnZG90ZW52JylcbmRvdGVudi5jb25maWcoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Q09OU1VNRVJfS0VZOiBwcm9jZXNzLmVudi5DT05TVU1FUl9LRVksXG5cdENPTlNVTUVSX1NFQ1JFVDogcHJvY2Vzcy5lbnYuQ09OU1VNRVJfU0VDUkVULFxuXHRBQ0NFU1NfVE9LRU5fS0VZOiBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fS0VZLFxuXHRBQ0NFU1NfVE9LRU5fU0VDUkVUOiBwcm9jZXNzLmVudi5BQ0NFU1NfVE9LRU5fU0VDUkVULFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/env.js\n");

/***/ }),

/***/ "./lib/getBTCData.js":
/*!***************************!*\
  !*** ./lib/getBTCData.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nconst cheerio = __webpack_require__(/*! cheerio */ \"cheerio\");\n\nconst BTC_URL = 'https://ca.investing.com/crypto/bitcoin'; // Builds request for fetching HTML and converting to a cheerio DOM object\n\nconst getDOM = async url => {\n  return fetch(url, {\n    mode: 'no-cors'\n  }).then(res => res.text()).then(html => cheerio.load(html));\n}; // Pulls required data from cheerio DOM object\n\n\nconst extractBTCData = async DOM => {\n  // Scrape data\n  const domData = [];\n  DOM('#last_last').parent().parent().children('span[dir=\"ltr\"]').each((i, elem) => {\n    domData[i] = DOM(elem).text();\n  }); // Check if no data returned\n\n  if (!domData.length) {\n    throw new Error(\"No data was returned from the web scrape: check the scraper as the site's DOM may have changed!\");\n  } // Check if any undefined values returned\n\n\n  domData.forEach(item => {\n    if (typeof item === undefined) {\n      throw new Error(\"Type 'undefined' found in web scrape: check the scraper as the site's DOM may have changed!\");\n    }\n  });\n  return {\n    price: domData[0],\n    dlrChange: domData[1],\n    percChange: domData[2]\n  };\n};\n\nconst formatBTCData = data => {\n  const fmtPrice = data.price.replace(/[^\\d.-]/g, '');\n  const fmtDlrChange = data.dlrChange.replace(/[^\\d.-]/g, '');\n  const fmtPercChange = data.percChange.replace(/[^\\d.-]/g, '');\n  return {\n    price: parseFloat(fmtPrice),\n    dlrChange: parseFloat(fmtDlrChange),\n    percChange: parseFloat(fmtPercChange)\n  };\n};\n\nconst getBTCData = async () => {\n  const btcDOM = await getDOM(BTC_URL);\n  const btcRaw = await extractBTCData(btcDOM);\n  const btcFormatted = formatBTCData(btcRaw);\n  return btcFormatted;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getBTCData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2V0QlRDRGF0YS5qcz8yMDljIl0sIm5hbWVzIjpbImZldGNoIiwicmVxdWlyZSIsImNoZWVyaW8iLCJCVENfVVJMIiwiZ2V0RE9NIiwidXJsIiwibW9kZSIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiaHRtbCIsImxvYWQiLCJleHRyYWN0QlRDRGF0YSIsIkRPTSIsImRvbURhdGEiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVhY2giLCJpIiwiZWxlbSIsImxlbmd0aCIsIkVycm9yIiwiZm9yRWFjaCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJwcmljZSIsImRsckNoYW5nZSIsInBlcmNDaGFuZ2UiLCJmb3JtYXRCVENEYXRhIiwiZGF0YSIsImZtdFByaWNlIiwicmVwbGFjZSIsImZtdERsckNoYW5nZSIsImZtdFBlcmNDaGFuZ2UiLCJwYXJzZUZsb2F0IiwiZ2V0QlRDRGF0YSIsImJ0Y0RPTSIsImJ0Y1JhdyIsImJ0Y0Zvcm1hdHRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBckI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLHdCQUFELENBQXZCOztBQUVBLE1BQU1FLE9BQU8sR0FBRyx5Q0FBaEIsQyxDQUVBOztBQUNBLE1BQU1DLE1BQU0sR0FBRyxNQUFNQyxHQUFOLElBQWE7QUFDM0IsU0FBT0wsS0FBSyxDQUFDSyxHQUFELEVBQU07QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBTixDQUFMLENBQ0xDLElBREssQ0FDQUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEUCxFQUVMRixJQUZLLENBRUFHLElBQUksSUFBSVIsT0FBTyxDQUFDUyxJQUFSLENBQWFELElBQWIsQ0FGUixDQUFQO0FBR0EsQ0FKRCxDLENBTUE7OztBQUNBLE1BQU1FLGNBQWMsR0FBRyxNQUFNQyxHQUFOLElBQWE7QUFDbkM7QUFDQSxRQUFNQyxPQUFPLEdBQUcsRUFBaEI7QUFDQUQsS0FBRyxDQUFDLFlBQUQsQ0FBSCxDQUNFRSxNQURGLEdBRUVBLE1BRkYsR0FHRUMsUUFIRixDQUdXLGlCQUhYLEVBSUVDLElBSkYsQ0FJTyxDQUFDQyxDQUFELEVBQUlDLElBQUosS0FBYTtBQUNsQkwsV0FBTyxDQUFDSSxDQUFELENBQVAsR0FBYUwsR0FBRyxDQUFDTSxJQUFELENBQUgsQ0FBVVYsSUFBVixFQUFiO0FBQ0EsR0FORixFQUhtQyxDQVduQzs7QUFDQSxNQUFJLENBQUNLLE9BQU8sQ0FBQ00sTUFBYixFQUFxQjtBQUNwQixVQUFNLElBQUlDLEtBQUosQ0FDTCxpR0FESyxDQUFOO0FBR0EsR0FoQmtDLENBa0JuQzs7O0FBQ0FQLFNBQU8sQ0FBQ1EsT0FBUixDQUFnQkMsSUFBSSxJQUFJO0FBQ3ZCLFFBQUksT0FBT0EsSUFBUCxLQUFnQkMsU0FBcEIsRUFBK0I7QUFDOUIsWUFBTSxJQUFJSCxLQUFKLENBQ0wsNkZBREssQ0FBTjtBQUdBO0FBQ0QsR0FORDtBQVFBLFNBQU87QUFDTkksU0FBSyxFQUFFWCxPQUFPLENBQUMsQ0FBRCxDQURSO0FBRU5ZLGFBQVMsRUFBRVosT0FBTyxDQUFDLENBQUQsQ0FGWjtBQUdOYSxjQUFVLEVBQUViLE9BQU8sQ0FBQyxDQUFEO0FBSGIsR0FBUDtBQUtBLENBaENEOztBQWtDQSxNQUFNYyxhQUFhLEdBQUdDLElBQUksSUFBSTtBQUM3QixRQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0osS0FBTCxDQUFXTSxPQUFYLENBQW1CLFVBQW5CLEVBQStCLEVBQS9CLENBQWpCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHSCxJQUFJLENBQUNILFNBQUwsQ0FBZUssT0FBZixDQUF1QixVQUF2QixFQUFtQyxFQUFuQyxDQUFyQjtBQUNBLFFBQU1FLGFBQWEsR0FBR0osSUFBSSxDQUFDRixVQUFMLENBQWdCSSxPQUFoQixDQUF3QixVQUF4QixFQUFvQyxFQUFwQyxDQUF0QjtBQUVBLFNBQU87QUFDTk4sU0FBSyxFQUFFUyxVQUFVLENBQUNKLFFBQUQsQ0FEWDtBQUVOSixhQUFTLEVBQUVRLFVBQVUsQ0FBQ0YsWUFBRCxDQUZmO0FBR05MLGNBQVUsRUFBRU8sVUFBVSxDQUFDRCxhQUFEO0FBSGhCLEdBQVA7QUFLQSxDQVZEOztBQVlBLE1BQU1FLFVBQVUsR0FBRyxZQUFZO0FBQzlCLFFBQU1DLE1BQU0sR0FBRyxNQUFNaEMsTUFBTSxDQUFDRCxPQUFELENBQTNCO0FBQ0EsUUFBTWtDLE1BQU0sR0FBRyxNQUFNekIsY0FBYyxDQUFDd0IsTUFBRCxDQUFuQztBQUNBLFFBQU1FLFlBQVksR0FBR1YsYUFBYSxDQUFDUyxNQUFELENBQWxDO0FBQ0EsU0FBT0MsWUFBUDtBQUNBLENBTEQ7O0FBT2VILHlFQUFmIiwiZmlsZSI6Ii4vbGliL2dldEJUQ0RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKVxuY29uc3QgY2hlZXJpbyA9IHJlcXVpcmUoJ2NoZWVyaW8nKVxuXG5jb25zdCBCVENfVVJMID0gJ2h0dHBzOi8vY2EuaW52ZXN0aW5nLmNvbS9jcnlwdG8vYml0Y29pbidcblxuLy8gQnVpbGRzIHJlcXVlc3QgZm9yIGZldGNoaW5nIEhUTUwgYW5kIGNvbnZlcnRpbmcgdG8gYSBjaGVlcmlvIERPTSBvYmplY3RcbmNvbnN0IGdldERPTSA9IGFzeW5jIHVybCA9PiB7XG5cdHJldHVybiBmZXRjaCh1cmwsIHsgbW9kZTogJ25vLWNvcnMnIH0pXG5cdFx0LnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXG5cdFx0LnRoZW4oaHRtbCA9PiBjaGVlcmlvLmxvYWQoaHRtbCkpXG59XG5cbi8vIFB1bGxzIHJlcXVpcmVkIGRhdGEgZnJvbSBjaGVlcmlvIERPTSBvYmplY3RcbmNvbnN0IGV4dHJhY3RCVENEYXRhID0gYXN5bmMgRE9NID0+IHtcblx0Ly8gU2NyYXBlIGRhdGFcblx0Y29uc3QgZG9tRGF0YSA9IFtdXG5cdERPTSgnI2xhc3RfbGFzdCcpXG5cdFx0LnBhcmVudCgpXG5cdFx0LnBhcmVudCgpXG5cdFx0LmNoaWxkcmVuKCdzcGFuW2Rpcj1cImx0clwiXScpXG5cdFx0LmVhY2goKGksIGVsZW0pID0+IHtcblx0XHRcdGRvbURhdGFbaV0gPSBET00oZWxlbSkudGV4dCgpXG5cdFx0fSlcblxuXHQvLyBDaGVjayBpZiBubyBkYXRhIHJldHVybmVkXG5cdGlmICghZG9tRGF0YS5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXG5cdFx0XHRcIk5vIGRhdGEgd2FzIHJldHVybmVkIGZyb20gdGhlIHdlYiBzY3JhcGU6IGNoZWNrIHRoZSBzY3JhcGVyIGFzIHRoZSBzaXRlJ3MgRE9NIG1heSBoYXZlIGNoYW5nZWQhXCJcblx0XHQpXG5cdH1cblxuXHQvLyBDaGVjayBpZiBhbnkgdW5kZWZpbmVkIHZhbHVlcyByZXR1cm5lZFxuXHRkb21EYXRhLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBpdGVtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJUeXBlICd1bmRlZmluZWQnIGZvdW5kIGluIHdlYiBzY3JhcGU6IGNoZWNrIHRoZSBzY3JhcGVyIGFzIHRoZSBzaXRlJ3MgRE9NIG1heSBoYXZlIGNoYW5nZWQhXCJcblx0XHRcdClcblx0XHR9XG5cdH0pXG5cblx0cmV0dXJuIHtcblx0XHRwcmljZTogZG9tRGF0YVswXSxcblx0XHRkbHJDaGFuZ2U6IGRvbURhdGFbMV0sXG5cdFx0cGVyY0NoYW5nZTogZG9tRGF0YVsyXSxcblx0fVxufVxuXG5jb25zdCBmb3JtYXRCVENEYXRhID0gZGF0YSA9PiB7XG5cdGNvbnN0IGZtdFByaWNlID0gZGF0YS5wcmljZS5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJylcblx0Y29uc3QgZm10RGxyQ2hhbmdlID0gZGF0YS5kbHJDaGFuZ2UucmVwbGFjZSgvW15cXGQuLV0vZywgJycpXG5cdGNvbnN0IGZtdFBlcmNDaGFuZ2UgPSBkYXRhLnBlcmNDaGFuZ2UucmVwbGFjZSgvW15cXGQuLV0vZywgJycpXG5cblx0cmV0dXJuIHtcblx0XHRwcmljZTogcGFyc2VGbG9hdChmbXRQcmljZSksXG5cdFx0ZGxyQ2hhbmdlOiBwYXJzZUZsb2F0KGZtdERsckNoYW5nZSksXG5cdFx0cGVyY0NoYW5nZTogcGFyc2VGbG9hdChmbXRQZXJjQ2hhbmdlKSxcblx0fVxufVxuXG5jb25zdCBnZXRCVENEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBidGNET00gPSBhd2FpdCBnZXRET00oQlRDX1VSTClcblx0Y29uc3QgYnRjUmF3ID0gYXdhaXQgZXh0cmFjdEJUQ0RhdGEoYnRjRE9NKVxuXHRjb25zdCBidGNGb3JtYXR0ZWQgPSBmb3JtYXRCVENEYXRhKGJ0Y1Jhdylcblx0cmV0dXJuIGJ0Y0Zvcm1hdHRlZFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCVENEYXRhXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/getBTCData.js\n");

/***/ }),

/***/ "./lib/getTwitterClient.js":
/*!*********************************!*\
  !*** ./lib/getTwitterClient.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Twitter = __webpack_require__(/*! twitter-lite */ \"twitter-lite\");\n\nconst env = __webpack_require__(/*! ../config/env */ \"./config/env.js\");\n\nconst opts = {\n  subdomain: 'api',\n  // \"api\" is the default (change for other subdomains)\n  version: '1.1',\n  // version \"1.1\" is the default (change for other subdomains)\n  consumer_key: env.CONSUMER_KEY,\n  // from Twitter.\n  consumer_secret: env.CONSUMER_SECRET,\n  // from Twitter.\n  access_token_key: env.ACCESS_TOKEN_KEY,\n  // from your User (oauth_token)\n  access_token_secret: env.ACCESS_TOKEN_SECRET // from your User (oauth_token_secret)\n\n};\nconst client = new Twitter(opts);\n\nconst getTwitterClient = () => {\n  return new Promise(async (resolve, reject) => {\n    try {\n      const results = await client.get('account/verify_credentials');\n      console.log(`\\n🐦 Twitter client connected to user @${results.screen_name}!\\n`);\n      resolve(client);\n    } catch (error) {\n      reject(error);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getTwitterClient);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ2V0VHdpdHRlckNsaWVudC5qcz9jMTNhIl0sIm5hbWVzIjpbIlR3aXR0ZXIiLCJyZXF1aXJlIiwiZW52Iiwib3B0cyIsInN1YmRvbWFpbiIsInZlcnNpb24iLCJjb25zdW1lcl9rZXkiLCJDT05TVU1FUl9LRVkiLCJjb25zdW1lcl9zZWNyZXQiLCJDT05TVU1FUl9TRUNSRVQiLCJhY2Nlc3NfdG9rZW5fa2V5IiwiQUNDRVNTX1RPS0VOX0tFWSIsImFjY2Vzc190b2tlbl9zZWNyZXQiLCJBQ0NFU1NfVE9LRU5fU0VDUkVUIiwiY2xpZW50IiwiZ2V0VHdpdHRlckNsaWVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVzdWx0cyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJzY3JlZW5fbmFtZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxrQ0FBRCxDQUF2Qjs7QUFDQSxNQUFNQyxHQUFHLEdBQUdELG1CQUFPLENBQUMsc0NBQUQsQ0FBbkI7O0FBRUEsTUFBTUUsSUFBSSxHQUFHO0FBQ1pDLFdBQVMsRUFBRSxLQURDO0FBQ007QUFDbEJDLFNBQU8sRUFBRSxLQUZHO0FBRUk7QUFDaEJDLGNBQVksRUFBRUosR0FBRyxDQUFDSyxZQUhOO0FBR29CO0FBQ2hDQyxpQkFBZSxFQUFFTixHQUFHLENBQUNPLGVBSlQ7QUFJMEI7QUFDdENDLGtCQUFnQixFQUFFUixHQUFHLENBQUNTLGdCQUxWO0FBSzRCO0FBQ3hDQyxxQkFBbUIsRUFBRVYsR0FBRyxDQUFDVyxtQkFOYixDQU1rQzs7QUFObEMsQ0FBYjtBQVNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJZCxPQUFKLENBQVlHLElBQVosQ0FBZjs7QUFFQSxNQUFNWSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzlCLFNBQU8sSUFBSUMsT0FBSixDQUFZLE9BQU9DLE9BQVAsRUFBZ0JDLE1BQWhCLEtBQTJCO0FBQzdDLFFBQUk7QUFDSCxZQUFNQyxPQUFPLEdBQUcsTUFBTUwsTUFBTSxDQUFDTSxHQUFQLENBQVcsNEJBQVgsQ0FBdEI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQ0UsMENBQXlDSCxPQUFPLENBQUNJLFdBQVksS0FEL0Q7QUFHQU4sYUFBTyxDQUFDSCxNQUFELENBQVA7QUFDQSxLQU5ELENBTUUsT0FBT1UsS0FBUCxFQUFjO0FBQ2ZOLFlBQU0sQ0FBQ00sS0FBRCxDQUFOO0FBQ0E7QUFDRCxHQVZNLENBQVA7QUFXQSxDQVpEOztBQWNlVCwrRUFBZiIsImZpbGUiOiIuL2xpYi9nZXRUd2l0dGVyQ2xpZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVHdpdHRlciA9IHJlcXVpcmUoJ3R3aXR0ZXItbGl0ZScpXG5jb25zdCBlbnYgPSByZXF1aXJlKCcuLi9jb25maWcvZW52JylcblxuY29uc3Qgb3B0cyA9IHtcblx0c3ViZG9tYWluOiAnYXBpJywgLy8gXCJhcGlcIiBpcyB0aGUgZGVmYXVsdCAoY2hhbmdlIGZvciBvdGhlciBzdWJkb21haW5zKVxuXHR2ZXJzaW9uOiAnMS4xJywgLy8gdmVyc2lvbiBcIjEuMVwiIGlzIHRoZSBkZWZhdWx0IChjaGFuZ2UgZm9yIG90aGVyIHN1YmRvbWFpbnMpXG5cdGNvbnN1bWVyX2tleTogZW52LkNPTlNVTUVSX0tFWSwgLy8gZnJvbSBUd2l0dGVyLlxuXHRjb25zdW1lcl9zZWNyZXQ6IGVudi5DT05TVU1FUl9TRUNSRVQsIC8vIGZyb20gVHdpdHRlci5cblx0YWNjZXNzX3Rva2VuX2tleTogZW52LkFDQ0VTU19UT0tFTl9LRVksIC8vIGZyb20geW91ciBVc2VyIChvYXV0aF90b2tlbilcblx0YWNjZXNzX3Rva2VuX3NlY3JldDogZW52LkFDQ0VTU19UT0tFTl9TRUNSRVQsIC8vIGZyb20geW91ciBVc2VyIChvYXV0aF90b2tlbl9zZWNyZXQpXG59XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBUd2l0dGVyKG9wdHMpXG5cbmNvbnN0IGdldFR3aXR0ZXJDbGllbnQgPSAoKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjbGllbnQuZ2V0KCdhY2NvdW50L3ZlcmlmeV9jcmVkZW50aWFscycpXG5cdFx0XHRjb25zb2xlLmxvZyhcblx0XHRcdFx0YFxcbvCfkKYgVHdpdHRlciBjbGllbnQgY29ubmVjdGVkIHRvIHVzZXIgQCR7cmVzdWx0cy5zY3JlZW5fbmFtZX0hXFxuYFxuXHRcdFx0KVxuXHRcdFx0cmVzb2x2ZShjbGllbnQpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlamVjdChlcnJvcilcblx0XHR9XG5cdH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFR3aXR0ZXJDbGllbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/getTwitterClient.js\n");

/***/ }),

/***/ "./lib/loadMiddleware.js":
/*!*******************************!*\
  !*** ./lib/loadMiddleware.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadMiddleware = async (req, res, middleware) => {\n  return new Promise((resolve, reject) => {\n    middleware(req, res, result => {\n      if (result instanceof Error) {\n        return reject(result);\n      }\n\n      return resolve(result);\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMiddleware);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbG9hZE1pZGRsZXdhcmUuanM/NDAyNiJdLCJuYW1lcyI6WyJsb2FkTWlkZGxld2FyZSIsInJlcSIsInJlcyIsIm1pZGRsZXdhcmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3VsdCIsIkVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLGNBQWMsR0FBRyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLFVBQWpCLEtBQWdDO0FBQ3RELFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUN2Q0gsY0FBVSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBV0ssTUFBTSxJQUFJO0FBQzlCLFVBQUlBLE1BQU0sWUFBWUMsS0FBdEIsRUFBNkI7QUFDNUIsZUFBT0YsTUFBTSxDQUFDQyxNQUFELENBQWI7QUFDQTs7QUFFRCxhQUFPRixPQUFPLENBQUNFLE1BQUQsQ0FBZDtBQUNBLEtBTlMsQ0FBVjtBQU9BLEdBUk0sQ0FBUDtBQVNBLENBVkQ7O0FBWWVQLDZFQUFmIiwiZmlsZSI6Ii4vbGliL2xvYWRNaWRkbGV3YXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZE1pZGRsZXdhcmUgPSBhc3luYyAocmVxLCByZXMsIG1pZGRsZXdhcmUpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRtaWRkbGV3YXJlKHJlcSwgcmVzLCByZXN1bHQgPT4ge1xuXHRcdFx0aWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRcdHJldHVybiByZWplY3QocmVzdWx0KVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gcmVzb2x2ZShyZXN1bHQpXG5cdFx0fSlcblx0fSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1pZGRsZXdhcmVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/loadMiddleware.js\n");

/***/ }),

/***/ "./pages/api/post-btc-data.js":
/*!************************************!*\
  !*** ./pages/api/post-btc-data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_loadMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/loadMiddleware */ \"./lib/loadMiddleware.js\");\n/* harmony import */ var _lib_getTwitterClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/getTwitterClient */ \"./lib/getTwitterClient.js\");\n/* harmony import */ var _lib_getBTCData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/getBTCData */ \"./lib/getBTCData.js\");\n\n\n\n\n\nconst formatUSD = number => {\n  return number.toLocaleString('en-US', {\n    style: 'currency',\n    currency: 'USD'\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  try {\n    const cors = cors__WEBPACK_IMPORTED_MODULE_0___default()({\n      methods: ['GET']\n    });\n    await Object(_lib_loadMiddleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res, cors);\n    const twitter = await Object(_lib_getTwitterClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const btc = await Object(_lib_getBTCData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n    const chartIcon = val => val > 0 ? '🟢 +' : '🔴 ';\n\n    const status = `1 $BTC = ${formatUSD(btc.price)} $USD\n\t\t\t\t\t\t${chartIcon(btc.percChange)}${btc.percChange.toFixed(2)}% chg/24h\\n\n\t\t\t\t\t\t#Bitcoin #BTC #Crypto #Cryptocurrency`;\n    console.log('🐦 Posting tweet...');\n    await twitter.post('statuses/update', {\n      status\n    });\n    console.log('🐦 Tweet posted!');\n    res.status(200).send('🐦 Tweet posted!');\n  } catch (error) {\n    res.status(500).send('Server error');\n    console.error(error);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9zdC1idGMtZGF0YS5qcz80OWI4Il0sIm5hbWVzIjpbImZvcm1hdFVTRCIsIm51bWJlciIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsInJlcSIsInJlcyIsImNvcnMiLCJDb3JzIiwibWV0aG9kcyIsImxvYWRNaWRkbGV3YXJlIiwidHdpdHRlciIsImdldFR3aXR0ZXJDbGllbnQiLCJidGMiLCJnZXRCVENEYXRhIiwiY2hhcnRJY29uIiwidmFsIiwic3RhdHVzIiwicHJpY2UiLCJwZXJjQ2hhbmdlIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJwb3N0Iiwic2VuZCIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLE1BQU0sSUFBSTtBQUMzQixTQUFPQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBRUMsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFlBQVEsRUFBRTtBQUEvQixHQUEvQixDQUFQO0FBQ0EsQ0FGRDs7QUFJZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xDLE1BQUk7QUFDSCxVQUFNQyxJQUFJLEdBQUdDLDJDQUFJLENBQUM7QUFDakJDLGFBQU8sRUFBRSxDQUFDLEtBQUQ7QUFEUSxLQUFELENBQWpCO0FBSUEsVUFBTUMsbUVBQWMsQ0FBQ0wsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsQ0FBcEI7QUFFQSxVQUFNSSxPQUFPLEdBQUcsTUFBTUMscUVBQWdCLEVBQXRDO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLCtEQUFVLEVBQTVCOztBQUVBLFVBQU1DLFNBQVMsR0FBR0MsR0FBRyxJQUFLQSxHQUFHLEdBQUcsQ0FBTixHQUFVLE1BQVYsR0FBbUIsS0FBN0M7O0FBRUEsVUFBTUMsTUFBTSxHQUFJLFlBQVdqQixTQUFTLENBQUNhLEdBQUcsQ0FBQ0ssS0FBTCxDQUFZO0FBQ2xELFFBQVFILFNBQVMsQ0FBQ0YsR0FBRyxDQUFDTSxVQUFMLENBQWlCLEdBQUVOLEdBQUcsQ0FBQ00sVUFBSixDQUFlQyxPQUFmLENBQXVCLENBQXZCLENBQTBCO0FBQzlELDRDQUZFO0FBSUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0EsVUFBTVgsT0FBTyxDQUFDWSxJQUFSLENBQWEsaUJBQWIsRUFBZ0M7QUFBRU47QUFBRixLQUFoQyxDQUFOO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBRUFoQixPQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQixrQkFBckI7QUFDQSxHQXJCRCxDQXFCRSxPQUFPQyxLQUFQLEVBQWM7QUFDZm5CLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCLGNBQXJCO0FBQ0FILFdBQU8sQ0FBQ0ksS0FBUixDQUFjQSxLQUFkO0FBQ0E7QUFDRCxDQTFCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9wb3N0LWJ0Yy1kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcnMgZnJvbSAnY29ycydcblxuaW1wb3J0IGxvYWRNaWRkbGV3YXJlIGZyb20gJy4uLy4uL2xpYi9sb2FkTWlkZGxld2FyZSdcbmltcG9ydCBnZXRUd2l0dGVyQ2xpZW50IGZyb20gJy4uLy4uL2xpYi9nZXRUd2l0dGVyQ2xpZW50J1xuaW1wb3J0IGdldEJUQ0RhdGEgZnJvbSAnLi4vLi4vbGliL2dldEJUQ0RhdGEnXG5cbmNvbnN0IGZvcm1hdFVTRCA9IG51bWJlciA9PiB7XG5cdHJldHVybiBudW1iZXIudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgeyBzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXHR0cnkge1xuXHRcdGNvbnN0IGNvcnMgPSBDb3JzKHtcblx0XHRcdG1ldGhvZHM6IFsnR0VUJ10sXG5cdFx0fSlcblxuXHRcdGF3YWl0IGxvYWRNaWRkbGV3YXJlKHJlcSwgcmVzLCBjb3JzKVxuXG5cdFx0Y29uc3QgdHdpdHRlciA9IGF3YWl0IGdldFR3aXR0ZXJDbGllbnQoKVxuXHRcdGNvbnN0IGJ0YyA9IGF3YWl0IGdldEJUQ0RhdGEoKVxuXG5cdFx0Y29uc3QgY2hhcnRJY29uID0gdmFsID0+ICh2YWwgPiAwID8gJ/Cfn6IgKycgOiAn8J+UtCAnKVxuXG5cdFx0Y29uc3Qgc3RhdHVzID0gYDEgJEJUQyA9ICR7Zm9ybWF0VVNEKGJ0Yy5wcmljZSl9ICRVU0Rcblx0XHRcdFx0XHRcdCR7Y2hhcnRJY29uKGJ0Yy5wZXJjQ2hhbmdlKX0ke2J0Yy5wZXJjQ2hhbmdlLnRvRml4ZWQoMil9JSBjaGcvMjRoXFxuXG5cdFx0XHRcdFx0XHQjQml0Y29pbiAjQlRDICNDcnlwdG8gI0NyeXB0b2N1cnJlbmN5YFxuXG5cdFx0Y29uc29sZS5sb2coJ/CfkKYgUG9zdGluZyB0d2VldC4uLicpXG5cdFx0YXdhaXQgdHdpdHRlci5wb3N0KCdzdGF0dXNlcy91cGRhdGUnLCB7IHN0YXR1cyB9KVxuXHRcdGNvbnNvbGUubG9nKCfwn5CmIFR3ZWV0IHBvc3RlZCEnKVxuXG5cdFx0cmVzLnN0YXR1cygyMDApLnNlbmQoJ/CfkKYgVHdlZXQgcG9zdGVkIScpXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmVzLnN0YXR1cyg1MDApLnNlbmQoJ1NlcnZlciBlcnJvcicpXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcilcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/post-btc-data.js\n");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cheerio\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGVlcmlvXCI/MTRiMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjaGVlcmlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hlZXJpb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cheerio\n");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCI/N2U5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cors\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ }),

/***/ "twitter-lite":
/*!*******************************!*\
  !*** external "twitter-lite" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"twitter-lite\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0d2l0dGVyLWxpdGVcIj85MTFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InR3aXR0ZXItbGl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR3aXR0ZXItbGl0ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///twitter-lite\n");

/***/ })

/******/ });