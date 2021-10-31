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

/***/ "./dist/Food.js":
/*!**********************!*\
  !*** ./dist/Food.js ***!
  \**********************/
/***/ (() => {

eval("\r\nclass Food {\r\n    constructor() {\r\n        this.$searchForm = document.querySelector(\".search-form-container\");\r\n        console.log(this.$searchForm);\r\n        const $serachBtn = document.querySelector(\"#search-btn\");\r\n        console.log($serachBtn);\r\n        $serachBtn.addEventListener(\"click\", this.searchToogle);\r\n    }\r\n    searchToogle(e) {\r\n        this.$searchForm.classList.toggle('active');\r\n    }\r\n}\r\nnew Food();\r\n\n\n//# sourceURL=webpack://client/./dist/Food.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/Food.js"]();
/******/ 	
/******/ })()
;