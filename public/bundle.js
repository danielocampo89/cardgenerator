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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.generateCard =function () { // webpack willnot allow function -- HTML - onClick="generateCard()" JS- function generateCard(){ instead use window.generateCard =function () {
    
     var numbers = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K",];
    var suites = [
     { name: 'heart', image: 'images/heart.jpg' }, 
     { name: 'diamond', image: 'images/diamond.jpg' }, 
     { name: 'club', image: 'images/club.jpg' },
     { name: 'spade', image: 'images/spade.jpg'}
];
    
    var numbers1 = numbers[Math.floor(Math.random()*numbers.length)];
   var suites1 = suites[Math.floor(Math.random()*suites.length)];
    
     if (suites1.name === 'heart' || suites1.name === 'diamond') {
         document.getElementById("cardArea").classList.add("red");
        document.getElementById("cardArea").classList.remove("black");
    
}
  else {
         document.getElementById("cardArea").classList.add("black");
        document.getElementById("cardArea").classList.remove("red");
    
}
     if (suites1.name === 'heart' || suites1.name === 'diamond') {
         document.getElementById("cardArea3").classList.add("red");
        document.getElementById("cardArea3").classList.remove("black");
    
}
  else {
         document.getElementById("cardArea3").classList.add("black");
        document.getElementById("cardArea3").classList.remove("red");
    
}
    
    document.getElementById("cardArea").innerHTML = numbers1;
     document.getElementById("cardArea3").innerHTML = numbers1;
    document.getElementById("cardArea2").innerHTML = '<img src="'+suites1.image+'">';
}



/***/ })
/******/ ]);