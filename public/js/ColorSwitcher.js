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

/***/ "./dist/ColorSwitcher.js":
/*!*******************************!*\
  !*** ./dist/ColorSwitcher.js ***!
  \*******************************/
/***/ (() => {

eval("\r\nclass ColorSwitcher {\r\n    constructor() {\r\n        const $themeToggler = document.querySelector(\".theme-toggler\");\r\n        $themeToggler.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            $themeToggler.classList.toggle(\"active\");\r\n            if ($themeToggler.classList.contains(\"active\")) {\r\n                document.body.classList.add(\"active\");\r\n            }\r\n            else {\r\n                document.body.classList.remove(\"active\");\r\n            }\r\n        });\r\n    }\r\n}\r\n;\r\nnew ColorSwitcher();\r\n\n\n//# sourceURL=webpack://client/./dist/ColorSwitcher.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/ColorSwitcher.js"]();
/******/ 	
/******/ })()
;