"use strict";
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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Login = ({ providers  })=>{\n    // console.log('providers --->', providers)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center bg-black min-h-screen w-full justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-52 mb-4 \",\n                src: \"https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png\"\n            }, void 0, false, {\n                fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/pages/login.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-[#18d860] text-white p-4 rounded-full\",\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                                    callbackUrl: \"http://localhost:3000/\"\n                                }),\n                            children: [\n                                \"Login with \",\n                                provider.name\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/pages/login.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, undefined),\n                        \" //! These are the scopes in spotify.js\"\n                    ]\n                }, provider.name, true, {\n                    fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/pages/login.js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tien/Desktop/Senior_Phase/spotify-clone/pages/login.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//* Server side rendering\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF1RDtBQUV2RCxNQUFNRSxLQUFLLEdBQUcsQ0FBQyxFQUFDQyxTQUFTLEdBQUMsR0FBSztJQUMzQiwyQ0FBMkM7SUFDN0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdFQUF3RTs7MEJBQ3JGLDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsWUFBWTtnQkFBQ0UsR0FBRyxFQUFDLGdIQUFnSDs7Ozs7eUJBQU87WUFDdEpDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDTixTQUFTLENBQUMsQ0FBQ08sR0FBRyxDQUFDLENBQUNDLFFBQVEsaUJBQ25DLDhEQUFDUCxLQUFHOztzQ0FDRiw4REFBQ1EsUUFBTTs0QkFBQ1AsU0FBUyxFQUFDLDBDQUEwQzs0QkFDNURRLE9BQU8sRUFBRSxJQUFNWix1REFBTSxDQUFDVSxRQUFRLENBQUNHLEVBQUUsRUFBRTtvQ0FBQ0MsV0FBVyxFQUFFLHdCQUF3QjtpQ0FBQyxDQUFDOztnQ0FDMUUsYUFBVztnQ0FBQ0osUUFBUSxDQUFDSyxJQUFJOzs7Ozs7cUNBQVU7d0JBQUEseUNBQzVDOzttQkFKZ0JMLFFBQVEsQ0FBQ0ssSUFBSTs7Ozs2QkFJdkIsQ0FDRjs7Ozs7O2lCQUNJLENBQ1I7QUFDSixDQUFDO0FBRUQsaUVBQWVkLEtBQUssRUFBQztBQUNyQix5QkFBeUI7QUFDbEIsZUFBZWUsa0JBQWtCLEdBQUc7SUFDekMsTUFBTWQsU0FBUyxHQUFHLE1BQU1ILDZEQUFZLEVBQUU7SUFFdEMsT0FBTztRQUNMa0IsS0FBSyxFQUFFO1lBQUVmLFNBQVM7U0FBRTtLQUNyQixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5jb25zdCBMb2dpbiA9ICh7cHJvdmlkZXJzfSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdwcm92aWRlcnMgLS0tPicsIHByb3ZpZGVycylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgYmctYmxhY2sgbWluLWgtc2NyZWVuIHctZnVsbCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICA8aW1nIGNsYXNzTmFtZT0ndy01MiBtYi00ICcgc3JjPSdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzcvNzQvU3BvdGlmeV9BcHBfTG9nby5zdmcvMjA0OHB4LVNwb3RpZnlfQXBwX0xvZ28uc3ZnLnBuZyc+PC9pbWc+XG4gICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17cHJvdmlkZXIubmFtZX0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctWyMxOGQ4NjBdIHRleHQtd2hpdGUgcC00IHJvdW5kZWQtZnVsbCcgXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4ocHJvdmlkZXIuaWQsIHtjYWxsYmFja1VybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8nfSl9IFxuICAgICAgICAgICAgPkxvZ2luIHdpdGgge3Byb3ZpZGVyLm5hbWV9PC9idXR0b24+IC8vISBUaGVzZSBhcmUgdGhlIHNjb3BlcyBpbiBzcG90aWZ5LmpzXG4gICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4vLyogU2VydmVyIHNpZGUgcmVuZGVyaW5nXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHByb3ZpZGVycyB9LCAvLyogd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59XG4iXSwibmFtZXMiOlsiZ2V0UHJvdmlkZXJzIiwic2lnbkluIiwiTG9naW4iLCJwcm92aWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsImNhbGxiYWNrVXJsIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();