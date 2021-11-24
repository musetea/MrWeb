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

/***/ "./dist/Coffee.js":
/*!************************!*\
  !*** ./dist/Coffee.js ***!
  \************************/
/***/ (() => {

eval("\r\nclass Coffee {\r\n    constructor() {\r\n        this.$navBar = document.querySelector(\".header .navbar\");\r\n        this.$cartContainer = document.querySelector(\".cart-items-container\");\r\n        this.$searchForm = document.querySelector(\".search-form\");\r\n        const $menuBtn = document.querySelector(\"#menu-btn\");\r\n        $menuBtn.addEventListener(\"click\", (e) => {\r\n            this.$navBar.classList.toggle(\"active\");\r\n            this.$cartContainer.classList.remove(\"active\");\r\n            this.$searchForm.classList.remove(\"active\");\r\n        });\r\n        const $cartBtn = document.querySelector(\"#cart-btn\");\r\n        $cartBtn.addEventListener(\"click\", (e) => {\r\n            this.$cartContainer.classList.toggle(\"active\");\r\n            this.$navBar.classList.remove(\"active\");\r\n            this.$searchForm.classList.remove(\"active\");\r\n        });\r\n        const $searchBtn = document.querySelector(\"#search-btn\");\r\n        $searchBtn.addEventListener(\"click\", (e) => {\r\n            this.$searchForm.classList.toggle(\"active\");\r\n            this.$navBar.classList.remove(\"active\");\r\n            this.$cartContainer.classList.remove(\"active\");\r\n        });\r\n        window.addEventListener(\"scroll\", (e) => {\r\n            this.$navBar.classList.remove(\"active\");\r\n            this.$cartContainer.classList.remove(\"active\");\r\n            this.$searchForm.classList.remove(\"active\");\r\n        });\r\n    }\r\n}\r\nnew Coffee();\r\n\n\n//# sourceURL=webpack://client/./dist/Coffee.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/Coffee.js"]();
/******/ 	
/******/ })()
;