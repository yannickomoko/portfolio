/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ContextProvider\": () => (/* binding */ ContextProvider),\n/* harmony export */   \"useCtx\": () => (/* binding */ useCtx)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst appContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction ContextProvider({ children  }) {\n    const context = useContextProvider();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(appContext.Provider, {\n        value: context,\n        __source: {\n            fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\context\\\\index.js\",\n            lineNumber: 6,\n            columnNumber: 10\n        },\n        __self: this,\n        children: children\n    }));\n}\nfunction useCtx() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(appContext);\n}\nfunction useContextProvider() {\n    const reducer = (prevState, action)=>({\n            ...prevState,\n            ...action\n        })\n    ;\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {\n    });\n    return {\n        state,\n        dispatch\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkQ7QUFDN0QsS0FBSyxDQUFDRyxVQUFVLGlCQUFHSCxvREFBYTtBQUV6QixTQUFTSSxlQUFlLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDN0MsS0FBSyxDQUFDQyxPQUFPLEdBQUdDLGtCQUFrQjtJQUNsQyxNQUFNLHNFQUFFSixVQUFVLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFSCxPQUFPOzs7Ozs7O2tCQUFHRCxRQUFROztBQUN2RCxDQUFDO0FBRU0sU0FBU0ssTUFBTSxHQUFHLENBQUM7SUFDeEIsTUFBTSxDQUFDVCxpREFBVSxDQUFDRSxVQUFVO0FBQzlCLENBQUM7U0FFUUksa0JBQWtCLEdBQUcsQ0FBQztJQUM3QixLQUFLLENBQUNJLE9BQU8sSUFBSUMsU0FBUyxFQUFFQyxNQUFNLElBQU0sQ0FBQztlQUFJRCxTQUFTO2VBQUtDLE1BQU07UUFBQyxDQUFDOztJQUNuRSxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJYixpREFBVSxDQUFDUyxPQUFPLEVBQUUsQ0FBQztJQUFBLENBQUM7SUFDaEQsTUFBTSxDQUFDLENBQUM7UUFDTkcsS0FBSztRQUNMQyxRQUFRO0lBQ1YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5jb25zdCBhcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENvbnRleHRQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dFByb3ZpZGVyKCk7XHJcbiAgcmV0dXJuIDxhcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0fT57Y2hpbGRyZW59PC9hcHBDb250ZXh0LlByb3ZpZGVyPjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUN0eCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChhcHBDb250ZXh0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQ29udGV4dFByb3ZpZGVyKCkge1xyXG4gIGNvbnN0IHJlZHVjZXIgPSAocHJldlN0YXRlLCBhY3Rpb24pID0+ICh7IC4uLnByZXZTdGF0ZSwgLi4uYWN0aW9uIH0pO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7fSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlLFxyXG4gICAgZGlzcGF0Y2gsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiYXBwQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiY29udGV4dCIsInVzZUNvbnRleHRQcm92aWRlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDdHgiLCJyZWR1Y2VyIiwicHJldlN0YXRlIiwiYWN0aW9uIiwic3RhdGUiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_context__WEBPACK_IMPORTED_MODULE_2__.ContextProvider, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n            ...pageProps,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            },\n            __self: this\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDVztTQUVuQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsTUFBTSxzRUFDSEgscURBQWU7Ozs7Ozs7dUZBQ2JFLFNBQVM7ZUFBS0MsU0FBUzs7Ozs7Ozs7O0FBRzlCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xyXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvQ29udGV4dFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();