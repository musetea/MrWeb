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

eval("\r\nclass Food {\r\n    constructor() {\r\n        // SECTION\r\n        this.$searchForm = document.querySelector(\".search-form-container\");\r\n        const $serachBtn = document.querySelector(\"#search-btn\");\r\n        $serachBtn.addEventListener(\"click\", (e) => {\r\n            this.$searchForm.classList.toggle('active');\r\n            this.$cartContainer.classList.remove(\"active\");\r\n            this.$loginContainer.classList.remove(\"active\");\r\n            this.$menuBar.classList.remove('active');\r\n        });\r\n        // 카트 \r\n        this.$cartContainer = document.querySelector(\".shopping-cart-container\");\r\n        const $cartBtn = document.querySelector(\"#cart-btn\");\r\n        $cartBtn.addEventListener(\"click\", (e) => {\r\n            this.cartContainerToogle(e);\r\n        });\r\n        // 로그인\r\n        this.$loginContainer = document.querySelector(\".login-form-container\");\r\n        const $logintBtn = document.querySelector(\"#login-btn\");\r\n        $logintBtn.addEventListener(\"click\", (e) => {\r\n            this.loginContainerToogle(e);\r\n        });\r\n        // 메뉴바 \r\n        this.$menuBar = document.querySelector(\"nav.navbar\");\r\n        const $menuBtn = document.querySelector(\"#menu-btn\");\r\n        $menuBtn.addEventListener(\"click\", (e) => {\r\n            this.menuBarToogle(e);\r\n        });\r\n        window.addEventListener(\"scroll\", (e) => {\r\n            this.$cartContainer.classList.remove('active');\r\n            this.$searchForm.classList.remove(\"active\");\r\n            this.$loginContainer.classList.remove(\"active\");\r\n            this.$menuBar.classList.remove('active');\r\n        });\r\n        // HOME\r\n        this.$home = document.querySelector(\".home\");\r\n        const $parallaHome = document.querySelector(\".home .home-parallax-img\");\r\n        this.$home.addEventListener(\"mouseover\", (e) => {\r\n            let x = (window.innerWidth - e.pageX * 2) / 90;\r\n            let y = (window.innerHeight - e.pageY * 2) / 90;\r\n            const style = `translateX(${y}px) translateY(${x}px)`;\r\n            $parallaHome.style.transform = style;\r\n        });\r\n        this.$home.addEventListener(\"mouseleave\", (e) => {\r\n            const style = `translateX(${0}px) translateY(${0}px)`;\r\n            $parallaHome.style.transform = style;\r\n        });\r\n    }\r\n    // 카트\r\n    cartContainerToogle(e) {\r\n        this.$cartContainer.classList.toggle('active');\r\n        this.$searchForm.classList.remove(\"active\");\r\n        this.$loginContainer.classList.remove(\"active\");\r\n        this.$menuBar.classList.remove('active');\r\n    }\r\n    // 로그인\r\n    loginContainerToogle(e) {\r\n        this.$loginContainer.classList.toggle('active');\r\n        this.$cartContainer.classList.remove('active');\r\n        this.$searchForm.classList.remove(\"active\");\r\n        this.$menuBar.classList.remove('active');\r\n    }\r\n    // 메뉴바 \r\n    menuBarToogle(e) {\r\n        this.$menuBar.classList.toggle('active');\r\n        this.$loginContainer.classList.remove('active');\r\n        this.$cartContainer.classList.remove('active');\r\n        this.$searchForm.classList.remove(\"active\");\r\n    }\r\n}\r\nnew Food();\r\n\n\n//# sourceURL=webpack://client/./dist/Food.js?");

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