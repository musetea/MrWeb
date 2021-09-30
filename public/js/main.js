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

/***/ "./dist/createCard.js":
/*!****************************!*\
  !*** ./dist/createCard.js ***!
  \****************************/
/***/ (() => {

eval("\r\nclass CreateCard {\r\n    constructor() {\r\n        this.$cardNumberBox = document.querySelector(\".card-number-box\");\r\n        this.$cardNumber = document.querySelector('.card-number');\r\n        this.$cardNumber.oninput = () => {\r\n            this.$cardNumberBox.innerText = this.$cardNumber.value;\r\n        };\r\n        this.$cardHolderBox = document.querySelector(\".card-holder-name\");\r\n        this.$cardHolder = document.querySelector('.card-holder');\r\n        this.$cardHolder.oninput = () => {\r\n            this.$cardHolderBox.innerText = this.$cardHolder.value;\r\n        };\r\n        this.$cardExpMonth = document.querySelector(\".expiration-mm\");\r\n        this.$cardExpYear = document.querySelector(\".expiration-year\");\r\n        this.$cardExpMonthBox = document.querySelector(\"span.exp-month\");\r\n        this.$cardExpYearBox = document.querySelector(\"span.exp-year\");\r\n        this.$cardExpMonth.onchange = () => {\r\n            this.$cardExpMonthBox.innerText = this.$cardExpMonth.value;\r\n        };\r\n        this.$cardExpYear.onchange = () => {\r\n            this.$cardExpYearBox.innerText = this.$cardExpYear.value;\r\n        };\r\n        this.$cardCvv = document.querySelector(\".card-cvv\");\r\n        const $front = document.querySelector(\".front\");\r\n        const $back = document.querySelector(\".back\");\r\n        const $cvvBox = document.querySelector(\".back .cvv-box\");\r\n        this.$cardCvv.onmouseenter = () => {\r\n            $front.style.transform = `perspective(1000px) rotateY(-180deg)`;\r\n            $back.style.transform = `perspective(1000px) rotateY(0deg)`;\r\n        };\r\n        this.$cardCvv.onmouseleave = () => {\r\n            $front.style.transform = `perspective(1000px) rotateY(0deg)`;\r\n            $back.style.transform = `perspective(1000px) rotateY(180deg)`;\r\n        };\r\n        this.$cardCvv.oninput = (e) => {\r\n            $cvvBox.innerText = this.$cardCvv.value;\r\n        };\r\n    }\r\n}\r\nnew CreateCard();\r\n\n\n//# sourceURL=webpack://client/./dist/createCard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dist/createCard.js"]();
/******/ 	
/******/ })()
;