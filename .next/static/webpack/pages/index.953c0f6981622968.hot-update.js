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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar Center = function() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    console.log(\"session --->\", session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-grow text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Center\"\n            }, void 0, false, {\n                fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"rounded-full w-10 h-10\",\n                        src: session === null || session === void 0 ? void 0 : session.user.image,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/components/Center/Center.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(Center, \"lDxflWXANEml6jMwEZO+PAGMNmQ=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Center;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Center);\nvar _c;\n$RefreshReg$(_c, \"Center\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NlbnRlci9DZW50ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBeUI7QUFDbUI7QUFFNUMsSUFBTUUsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQXlCRCxHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBN0JFLE9BQWEsR0FBSUYsR0FBWSxDQUE3QkUsSUFBSTtJQUNaRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUVGLE9BQU8sQ0FBQztJQUVwQyxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzswQkFDeEMsOERBQUNDLElBQUU7MEJBQUMsUUFBTTs7Ozs7cUJBQUs7MEJBQ2YsOERBQUNDLFFBQU07MEJBQ0wsNEVBQUNILEtBQUc7OEJBQ0YsNEVBQUNJLEtBQUc7d0JBQUNILFNBQVMsRUFBQyx3QkFBd0I7d0JBQUNJLEdBQUcsRUFBRVIsT0FBTyxhQUFQQSxPQUFPLFdBQU0sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxPQUFPLENBQUVTLElBQUksQ0FBQ0MsS0FBSzt3QkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7OzZCQUFHOzs7Ozt5QkFFdkU7Ozs7O3FCQUNDOzs7Ozs7YUFDTCxDQUNQO0FBQ0gsQ0FBQztHQWZLYixNQUFNOztRQUNlRCx1REFBVTs7O0FBRC9CQyxLQUFBQSxNQUFNO0FBaUJaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2VudGVyL0NlbnRlci5qcz9hMjBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5cbmNvbnN0IENlbnRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKVxuICBjb25zb2xlLmxvZygnc2Vzc2lvbiAtLS0+Jywgc2Vzc2lvbilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtZ3JvdyB0ZXh0LXdoaXRlJz5cbiAgICAgIDxoMT5DZW50ZXI8L2gxPlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ncm91bmRlZC1mdWxsIHctMTAgaC0xMCcgc3JjPXtzZXNzaW9uPy51c2VyLmltYWdlfSBhbHQ9JycgLz5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDZW50ZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwiQ2VudGVyIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoZWFkZXIiLCJpbWciLCJzcmMiLCJ1c2VyIiwiaW1hZ2UiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Center/Center.js\n"));

/***/ })

});