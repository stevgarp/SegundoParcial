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

/***/ "./src/modules/Agregator.js":
/*!**********************************!*\
  !*** ./src/modules/Agregator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleCalculo: () => (/* reexport module object */ _ModuleCalculo_js__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   ModulePasswordGen: () => (/* reexport module object */ _ModulePasswordGen_js__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   ModuleTaskList: () => (/* reexport module object */ _ModuleTaskList_js__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   ModuleUnitConvert: () => (/* reexport module object */ _ModuleUnitConvert_js__WEBPACK_IMPORTED_MODULE_2__)\n/* harmony export */ });\n/* harmony import */ var _ModuleCalculo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModuleCalculo.js */ \"./src/modules/ModuleCalculo.js\");\n/* harmony import */ var _ModuleTaskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModuleTaskList.js */ \"./src/modules/ModuleTaskList.js\");\n/* harmony import */ var _ModuleUnitConvert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModuleUnitConvert.js */ \"./src/modules/ModuleUnitConvert.js\");\n/* harmony import */ var _ModulePasswordGen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModulePasswordGen.js */ \"./src/modules/ModulePasswordGen.js\");\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/Agregator.js?");

/***/ }),

/***/ "./src/modules/ModuleCalculo.js":
/*!**************************************!*\
  !*** ./src/modules/ModuleCalculo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dividir: () => (/* binding */ dividir),\n/* harmony export */   multiplicar: () => (/* binding */ multiplicar),\n/* harmony export */   restar: () => (/* binding */ restar),\n/* harmony export */   sumar: () => (/* binding */ sumar)\n/* harmony export */ });\nfunction sumar(a, b) {\r\n    return a + b;\r\n  }\r\n  \r\nfunction restar(a, b) {\r\n    return a - b;\r\n  }\r\n  \r\nfunction multiplicar(a, b) {\r\n    return a * b;\r\n  }\r\n  \r\nfunction dividir(a, b) {\r\n    if (b === 0) {\r\n      throw new Error(\"No se puede dividir por cero\");\r\n    }\r\n    return a / b;\r\n  }\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/ModuleCalculo.js?");

/***/ }),

/***/ "./src/modules/ModulePasswordGen.js":
/*!******************************************!*\
  !*** ./src/modules/ModulePasswordGen.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generatePassword: () => (/* binding */ generatePassword)\n/* harmony export */ });\nfunction generatePassword(userData) {\r\n    // Obtener los primeros 2 caracteres de cada dato proporcionado por el usuario\r\n    const { animal, name, color, symbols, birthDay, favoriteNumber } = userData;\r\n    const passwordData = [animal, name, color, symbols, birthDay, favoriteNumber].map(str => str.slice(0, 2));\r\n  \r\n    // Combinar los datos y generar la contraseña\r\n    const password = passwordData.join('');\r\n    return password;\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://segundo-parcial/./src/modules/ModulePasswordGen.js?");

/***/ }),

/***/ "./src/modules/ModuleTaskList.js":
/*!***************************************!*\
  !*** ./src/modules/ModuleTaskList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: () => (/* binding */ addTask),\n/* harmony export */   completeTask: () => (/* binding */ completeTask),\n/* harmony export */   getTasks: () => (/* binding */ getTasks)\n/* harmony export */ });\nconst tasks = [];\r\n\r\nfunction addTask(taskText) {\r\n  const task = {\r\n    id: Date.now(),\r\n    text: taskText,\r\n    completed: false,\r\n  };\r\n  tasks.push(task);\r\n}\r\n\r\nfunction completeTask(taskId) {\r\n  const task = tasks.find((t) => t.id === taskId);\r\n  if (task) {\r\n    task.completed = true;\r\n  }\r\n}\r\n\r\nfunction getTasks() {\r\n  return tasks;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/ModuleTaskList.js?");

/***/ }),

/***/ "./src/modules/ModuleUnitConvert.js":
/*!******************************************!*\
  !*** ./src/modules/ModuleUnitConvert.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\nfunction celsiusToFahrenheit(celsius) {\r\n    return (celsius * 9/5) + 32;\r\n  }\r\n  \r\n  function fahrenheitToCelsius(fahrenheit) {\r\n    return (fahrenheit - 32) * 5/9;\r\n  }\r\n  \r\n  \n\n//# sourceURL=webpack://segundo-parcial/./src/modules/ModuleUnitConvert.js?");

/***/ }),

/***/ "./src/pages/Gen_Password/GenPassword.js":
/*!***********************************************!*\
  !*** ./src/pages/Gen_Password/GenPassword.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Agregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/Agregator.js */ \"./src/modules/Agregator.js\");\n\r\n\r\nconst { generatePassword } = _modules_Agregator_js__WEBPACK_IMPORTED_MODULE_0__.ModulePasswordGen;\r\n\r\nfunction generateCustomPassword() {\r\n  // Obtener los datos ingresados por el usuario\r\n  const animal = document.getElementById('animal').value;\r\n  const name = document.getElementById('name').value;\r\n  const color = document.getElementById('color').value;\r\n  const symbols = document.getElementById('symbols').value;\r\n  const birthDay = document.getElementById('birthDay').value;\r\n  const favoriteNumber = document.getElementById('favoriteNumber').value;\r\n\r\n  // Crear el objeto con los datos del usuario\r\n  const userData = {\r\n    animal,\r\n    name,\r\n    color,\r\n    symbols,\r\n    birthDay,\r\n    favoriteNumber\r\n  };\r\n\r\n  // Generar la contraseña personalizada\r\n  const password = generatePassword(userData);\r\n\r\n  // Mostrar la contraseña en un elemento de texto\r\n  document.getElementById('generated-password').textContent = password;\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const generateButton = document.getElementById('generate-button');\r\n  generateButton.addEventListener('click', generateCustomPassword);\r\n});\n\n//# sourceURL=webpack://segundo-parcial/./src/pages/Gen_Password/GenPassword.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/Gen_Password/GenPassword.js");
/******/ 	
/******/ })()
;