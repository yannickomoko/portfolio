"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Portfolio; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_pagelayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/pagelayout */ \"./components/pagelayout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Portfolio() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showModal = ref[0], setShowModal = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagelayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Portfolio\",\n        prefixe: \"My\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap px-10\",\n                children: _data_data__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map(function(port) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/3 p-5\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid place-items-center cursor-pointer h-60 text-center text-2xl text-white rounded-lg uppercase hover:bg-site-theme-primary-color\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: function() {\n                                    return setShowModal(true);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: port.img,\n                                        alt: port.title,\n                                        className: \"h-full\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                        lineNumber: 15,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-bold\",\n                                        children: port.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                lineNumber: 14,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                        lineNumber: 12,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"justify-center items-center bg-black-w-o-800 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-auto h-auto my-6 mx-auto max-w-3xl\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-600 outline-none focus:outline-none\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-3xl font-bold uppercase text-site-theme-primary-color\",\n                                            children: \"test\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                            onClick: function() {\n                                                return setShowModal(false);\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                children: \"\\xd7\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 23\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative p-6 flex-auto\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"my-4 text-slate-500 text-lg leading-relaxed\",\n                                        children: \"I always felt like I could do anything. That\\u2019s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can\\u2019t do anything, you won\\u2019t do anything. I was taught I could do everything.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 21\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Yannick Omoko\\\\Documents\\\\GitHub\\\\portfolio\\\\pages\\\\portfolio.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_s(Portfolio, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Portfolio;\nvar _c;\n$RefreshReg$(_c, \"Portfolio\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3J0Zm9saW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ2hCO0FBQ21CO0FBQ3BCOztBQUVqQixTQUFTSSxTQUFTLEdBQUc7OztJQUNsQyxJQUFrQ0gsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQU5uRCxTQU1rQixHQUFrQkEsR0FBZSxHQUFqQyxFQU5sQixZQU1nQyxHQUFJQSxHQUFlLEdBQW5CO0lBQzlCLHFCQUNFLDhEQUFDRCw4REFBVTtRQUFDTyxLQUFLLEVBQUMsV0FBVztRQUFDQyxPQUFPLEVBQUMsSUFBSTs7MEJBQ3hDLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0JBQXNCOzBCQUNsQ1Asc0RBQVEsQ0FBQyxTQUFDUyxJQUFJO3lDQUNiLDhEQUFDSCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsV0FBVztrQ0FDeEIsNEVBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxvSUFBb0k7c0NBQ2pKLDRFQUFDRyxHQUFDO2dDQUFDQyxPQUFPLEVBQUU7MkNBQU1SLFlBQVksQ0FBQyxJQUFJLENBQUM7aUNBQUE7O2tEQUNsQyw4REFBQ1MsS0FBRzt3Q0FBQ0MsR0FBRyxFQUFFSixJQUFJLENBQUNHLEdBQUc7d0NBQUVFLEdBQUcsRUFBRUwsSUFBSSxDQUFDTCxLQUFLO3dDQUFFRyxTQUFTLEVBQUMsUUFBUTs7Ozs7NkNBQUc7a0RBQzFELDhEQUFDUSxNQUFJO3dDQUFDUixTQUFTLEVBQUMsV0FBVztrREFBRUUsSUFBSSxDQUFDTCxLQUFLOzs7Ozs2Q0FBUTs7Ozs7O3FDQUM3Qzs7Ozs7aUNBQ0E7Ozs7OzZCQUNGO2lCQUNQLENBQUM7Ozs7O29CQUNFO1lBQ0xGLFNBQVMsaUJBQ1I7MEJBQ0UsNEVBQUNJLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx3SUFBd0k7OEJBQ3JKLDRFQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsK0NBQStDO2tDQUU1RCw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHlHQUF5Rzs7OENBRXBILDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsdUZBQXVGOztzREFDcEcsOERBQUNTLElBQUU7NENBQUNULFNBQVMsRUFBQyw0REFBNEQ7c0RBQUMsTUFFM0U7Ozs7O2dEQUFLO3NEQUNMLDhEQUFDVSxRQUFNOzRDQUNMVixTQUFTLEVBQUMsMElBQTBJOzRDQUNwSkksT0FBTyxFQUFFO3VEQUFNUixZQUFZLENBQUMsS0FBSyxDQUFDOzZDQUFBO3NEQUVsQyw0RUFBQ1ksTUFBSTtnREFBQ1IsU0FBUyxFQUFDLDRGQUE0RjswREFBQyxNQUU3Rzs7Ozs7b0RBQU87Ozs7O2dEQUNBOzs7Ozs7d0NBQ0w7OENBRU4sOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyx3QkFBd0I7OENBQ3JDLDRFQUFDVyxHQUFDO3dDQUFDWCxTQUFTLEVBQUMsNkNBQTZDO2tEQUFDLDRTQU0zRDs7Ozs7NENBQUk7Ozs7O3dDQUNBOzs7Ozs7Z0NBQ0Y7Ozs7OzRCQUNKOzs7Ozt3QkFDRjs2QkFDTCxHQUNELElBQUk7Ozs7OztZQUNHLENBQ2I7Q0FDSDtHQXJEdUJOLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3J0Zm9saW8uanM/NTYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VsYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnNEYXNoU3F1YXJlRG90dGVkIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvcnRmb2xpbygpIHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUxheW91dCB0aXRsZT1cIlBvcnRmb2xpb1wiIHByZWZpeGU9XCJNeVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHB4LTEwXCI+XHJcbiAgICAgICAge2RhdGEubWFwKChwb3J0KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8zIHAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcGxhY2UtaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGgtNjAgdGV4dC1jZW50ZXIgdGV4dC0yeGwgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHVwcGVyY2FzZSBob3ZlcjpiZy1zaXRlLXRoZW1lLXByaW1hcnktY29sb3JcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3BvcnQuaW1nfSBhbHQ9e3BvcnQudGl0bGV9IGNsYXNzTmFtZT1cImgtZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj57cG9ydC50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dNb2RhbCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmxhY2stdy1vLTgwMCBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBoLWF1dG8gbXktNiBteC1hdXRvIG1heC13LTN4bFwiPlxyXG4gICAgICAgICAgICAgIHsvKmNvbnRlbnQqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0wIHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLWdyYXktNjAwIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgey8qaGVhZGVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4gcC01IGJvcmRlci1iIGJvcmRlci1zb2xpZCBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc2l0ZS10aGVtZS1wcmltYXJ5LWNvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgbWwtYXV0byBiZy10cmFuc3BhcmVudCBib3JkZXItMCB0ZXh0LXdoaXRlIG9wYWNpdHktNSBmbG9hdC1yaWdodCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmUgZm9udC1zZW1pYm9sZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBvcGFjaXR5LTUgaC02IHctNiB0ZXh0LTJ4bCBibG9jayBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIMOXXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7Lypib2R5Ki99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcC02IGZsZXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTQgdGV4dC1zbGF0ZS01MDAgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIEkgYWx3YXlzIGZlbHQgbGlrZSBJIGNvdWxkIGRvIGFueXRoaW5nLiBUaGF04oCZcyB0aGUgbWFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpbmcgcGVvcGxlIGFyZSBjb250cm9sbGVkIGJ5ISBUaG91Z2h0cy0gdGhlaXIgcGVyY2VwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb2YgdGhlbXNlbHZlcyEgVGhleSdyZSBzbG93ZWQgZG93biBieSB0aGVpciBwZXJjZXB0aW9uIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtc2VsdmVzLiBJZiB5b3UncmUgdGF1Z2h0IHlvdSBjYW7igJl0IGRvIGFueXRoaW5nLCB5b3VcclxuICAgICAgICAgICAgICAgICAgICAgIHdvbuKAmXQgZG8gYW55dGhpbmcuIEkgd2FzIHRhdWdodCBJIGNvdWxkIGRvIGV2ZXJ5dGhpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvUGFnZUxheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQYWdlTGF5b3V0IiwidXNlU3RhdGUiLCJCc0Rhc2hTcXVhcmVEb3R0ZWQiLCJkYXRhIiwiUG9ydGZvbGlvIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidGl0bGUiLCJwcmVmaXhlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9ydCIsImEiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0Iiwic3BhbiIsImgzIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio.js\n");

/***/ })

});