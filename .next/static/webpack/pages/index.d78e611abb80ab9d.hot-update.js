"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Center/Center.js":
/*!*************************************!*\
  !*** ./components/Center/Center.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar colors = [\n    \"bg-gradient-to-b from-green-500 to-black\",\n    \"bg-gradient-to-b from-blue-500 to-black\", \n];\nvar Center = function() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    // console.log('session --->', session)\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(useState(\"null\"), 2), color = ref1[0], setColor = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setColor();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-grow text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Center\"\n            }, void 0, false, {\n                fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"absolute top-5 right-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center bg-green-300 space-x-3 opacity-90 hover:opacity-75 cursor-pointer p-1 pr-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"rounded-full w-10 h-10\",\n                            src: session === null || session === void 0 ? void 0 : session.user.image,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: session === null || session === void 0 ? void 0 : session.user.name\n                        }, void 0, false, {\n                            fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {\n                            className: \"h-5 w-5\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex items-end space-x-7 bg-gradient-to-b to-black from-green-500 h-80 text-white padding-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"TESTING\"\n                }, void 0, false, {\n                    fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(Center, \"p7tS5ETIFn/I8Ri8b+i+PJ/5FRQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Center;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Center);\nvar _c;\n$RefreshReg$(_c, \"Center\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NlbnRlci9DZW50ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBd0M7QUFDSTtBQUNpQjtBQUU3RCxJQUFNSSxNQUFNLEdBQUc7SUFDYiwwQ0FBMEM7SUFDMUMseUNBQXlDO0NBRTFDO0FBRUQsSUFBTUMsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQXlCSCxHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBN0JJLE9BQWEsR0FBSUosR0FBWSxDQUE3QkksSUFBSTtJQUNaLHVDQUF1QztJQUV2QyxJQUF5QkUsSUFBZ0Isb0ZBQWhCQSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQW5DQyxLQUFLLEdBQWNELElBQWdCLEdBQTlCLEVBQUVFLFFBQVEsR0FBSUYsSUFBZ0IsR0FBcEI7SUFFckJQLGdEQUFTLENBQUMsV0FBTTtRQUNkUyxRQUFRLEVBQUU7SUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHNCQUFzQjs7MEJBQ25DLDhEQUFDQyxJQUFFOzBCQUFDLFFBQU07Ozs7O3FCQUFLOzBCQUNmLDhEQUFDQyxRQUFNO2dCQUFDRixTQUFTLEVBQUMsd0JBQXdCOzBCQUN4Qyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLDhGQUE4Rjs7c0NBQzNHLDhEQUFDRyxLQUFHOzRCQUFDSCxTQUFTLEVBQUMsd0JBQXdCOzRCQUFDSSxHQUFHLEVBQUVULE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsT0FBTyxDQUFFVSxJQUFJLENBQUNDLEtBQUs7NEJBQUVDLEdBQUcsRUFBQyxFQUFFOzs7OztpQ0FBRztzQ0FDM0UsOERBQUNDLElBQUU7c0NBQUViLE9BQU8sYUFBUEEsT0FBTyxXQUFNLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsT0FBTyxDQUFFVSxJQUFJLENBQUNJLElBQUk7Ozs7O2lDQUFNO3NDQUM3Qiw4REFBQ2xCLHdFQUFlOzRCQUFDUyxTQUFTLEVBQUMsU0FBUzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbkM7Ozs7O3FCQUNDOzBCQUVULDhEQUFDVSxTQUFPO2dCQUFDVixTQUFTLEVBQUcsNkZBQTJGOzBCQUM5Ryw0RUFBQ0MsSUFBRTs4QkFBQyxTQUFPOzs7Ozt5QkFBSzs7Ozs7cUJBRVI7Ozs7OzthQUNOLENBQ1A7QUFDSCxDQUFDO0dBM0JLUixNQUFNOztRQUNlSCx1REFBVTs7O0FBRC9CRyxLQUFBQSxNQUFNO0FBNkJaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2VudGVyL0NlbnRlci5qcz9hMjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBDaGV2cm9uRG93bkljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXG5cbmNvbnN0IGNvbG9ycyA9IFtcbiAgJ2JnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmVlbi01MDAgdG8tYmxhY2snLFxuICAnYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsdWUtNTAwIHRvLWJsYWNrJyxcbiAgXG5dXG5cbmNvbnN0IENlbnRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKVxuICAvLyBjb25zb2xlLmxvZygnc2Vzc2lvbiAtLS0+Jywgc2Vzc2lvbilcbiAgXG4gIGNvbnN0W2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZSgnbnVsbCcpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRDb2xvcigpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyB0ZXh0LXdoaXRlJz5cbiAgICAgIDxoMT5DZW50ZXI8L2gxPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC01IHJpZ2h0LTYnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JlZW4tMzAwIHNwYWNlLXgtMyBvcGFjaXR5LTkwIGhvdmVyOm9wYWNpdHktNzUgY3Vyc29yLXBvaW50ZXIgcC0xIHByLTInPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdyb3VuZGVkLWZ1bGwgdy0xMCBoLTEwJyBzcmM9e3Nlc3Npb24/LnVzZXIuaW1hZ2V9IGFsdD0nJyAvPlxuICAgICAgICAgIDxoMj57c2Vzc2lvbj8udXNlci5uYW1lfTwvaDI+XG4gICAgICAgICAgPENoZXZyb25Eb3duSWNvbiBjbGFzc05hbWU9J2gtNSB3LTUnIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtZW5kIHNwYWNlLXgtNyBiZy1ncmFkaWVudC10by1iIHRvLWJsYWNrIGZyb20tZ3JlZW4tNTAwIGgtODAgdGV4dC13aGl0ZSBwYWRkaW5nLTZgfT5cbiAgICAgICAgPGgxPlRFU1RJTkc8L2gxPlxuICAgICAgICBcbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZW50ZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZXNzaW9uIiwiQ2hldnJvbkRvd25JY29uIiwiY29sb3JzIiwiQ2VudGVyIiwiZGF0YSIsInNlc3Npb24iLCJ1c2VTdGF0ZSIsImNvbG9yIiwic2V0Q29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhlYWRlciIsImltZyIsInNyYyIsInVzZXIiLCJpbWFnZSIsImFsdCIsImgyIiwibmFtZSIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Center/Center.js\n"));

/***/ })

});