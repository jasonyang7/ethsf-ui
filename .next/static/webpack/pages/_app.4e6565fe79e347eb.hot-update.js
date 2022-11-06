"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./constants/contracts.ts":
/*!********************************!*\
  !*** ./constants/contracts.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONTRACTS\": function() { return /* binding */ CONTRACTS; },\n/* harmony export */   \"VAULTS\": function() { return /* binding */ VAULTS; }\n/* harmony export */ });\n/* harmony import */ var _blockchain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockchain */ \"./constants/blockchain.ts\");\n\n/*\n* DEV: Add contract addresses below, this is chain agnostic\n/*/ var VAULTS = {\n    example: {\n        address: _blockchain__WEBPACK_IMPORTED_MODULE_0__.ZERO_ADDRESS,\n        underlyingToken: \"usdc\"\n    },\n    example2: {\n        address: _blockchain__WEBPACK_IMPORTED_MODULE_0__.ZERO_ADDRESS,\n        underlyingToken: \"dai\"\n    },\n    example3: {\n        address: \"0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e\",\n        underlyingToken: \"usdte\"\n    }\n};\nvar CONTRACTS = {\n    multicall: {\n        1: \"0xeefba1e63905ef1d7acba5a8513c70307c1ce441\",\n        137: \"0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507\",\n        43114: \"0x12097e9755aBf710166D0027c1a2ef7609833D74\",\n        80001: \"0x22b5Ec130b65EF85C83cF9e6bEa5ac8e76bea5db\"\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvY29udHJhY3RzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUMyQztBQWUzQzs7Q0FFQyxHQUNNLElBQU1DLE1BQU0sR0FBbUM7SUFDcERDLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUVILHFEQUFZO1FBQ3JCSSxlQUFlLEVBQUUsTUFBTTtLQUN4QjtJQUNEQyxRQUFRLEVBQUU7UUFDUkYsT0FBTyxFQUFFSCxxREFBWTtRQUNyQkksZUFBZSxFQUFFLEtBQUs7S0FDdkI7SUFDREUsUUFBUSxFQUFFO1FBQ1JILE9BQU8sRUFBRSw0Q0FBNEM7UUFDckRDLGVBQWUsRUFBRSxPQUFPO0tBQ3pCO0NBQ0Y7QUFFTSxJQUFNRyxTQUFTLEdBQStCO0lBQ25EQyxTQUFTLEVBQUU7QUFDVCxTQUFDLEVBQUUsNENBQTRDO0FBQy9DLFdBQUcsRUFBRSw0Q0FBNEM7QUFDakQsYUFBSyxFQUFFLDRDQUE0QztBQUNuRCxhQUFLLEVBQUUsNENBQTRDO0tBQ3BEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uc3RhbnRzL2NvbnRyYWN0cy50cz9jZWNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRva2VuSWQgfSBmcm9tICcuL3Rva2VucydcbmltcG9ydCB7IFpFUk9fQUREUkVTUyB9IGZyb20gJy4vYmxvY2tjaGFpbidcblxuZXhwb3J0IGludGVyZmFjZSBWYXVsdCB7XG4gIGFkZHJlc3M6IHN0cmluZ1xuICB1bmRlcmx5aW5nVG9rZW46IFRva2VuSWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcbiAgMTogc3RyaW5nXG4gIDEzNzogc3RyaW5nXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDb250cmFjdElkID0gJ2V4YW1wbGUnIHwgJ2V4YW1wbGUyJyB8ICdleGFtcGxlMydcblxuLypcbiogREVWOiBBZGQgY29udHJhY3QgYWRkcmVzc2VzIGJlbG93LCB0aGlzIGlzIGNoYWluIGFnbm9zdGljXG4vKi9cbmV4cG9ydCBjb25zdCBWQVVMVFM6IHsgW2tleSBpbiBDb250cmFjdElkXTogVmF1bHQgfSA9IHtcbiAgZXhhbXBsZToge1xuICAgIGFkZHJlc3M6IFpFUk9fQUREUkVTUyxcbiAgICB1bmRlcmx5aW5nVG9rZW46ICd1c2RjJyxcbiAgfSxcbiAgZXhhbXBsZTI6IHtcbiAgICBhZGRyZXNzOiBaRVJPX0FERFJFU1MsXG4gICAgdW5kZXJseWluZ1Rva2VuOiAnZGFpJyxcbiAgfSxcbiAgZXhhbXBsZTM6IHtcbiAgICBhZGRyZXNzOiAnMHhiOTdlZjllZjg3MzRjNzE5MDRkODAwMmY4YjZiYzY2ZGQ5YzQ4YTZlJyxcbiAgICB1bmRlcmx5aW5nVG9rZW46ICd1c2R0ZScsXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBDT05UUkFDVFM6IHsgW2tleTogc3RyaW5nXTogQWRkcmVzcyB9ID0ge1xuICBtdWx0aWNhbGw6IHtcbiAgICAxOiAnMHhlZWZiYTFlNjM5MDVlZjFkN2FjYmE1YTg1MTNjNzAzMDdjMWNlNDQxJyxcbiAgICAxMzc6ICcweDExY2U0QjIzYkQ4NzVEN0Y1QzZhMzEwODRmNTVmRGUxZTlBODc1MDcnLFxuICAgIDQzMTE0OiAnMHgxMjA5N2U5NzU1YUJmNzEwMTY2RDAwMjdjMWEyZWY3NjA5ODMzRDc0JyxcbiAgICA4MDAwMTogJzB4MjJiNUVjMTMwYjY1RUY4NUM4M2NGOWU2YkVhNWFjOGU3NmJlYTVkYicsXG4gIH0sXG59XG4iXSwibmFtZXMiOlsiWkVST19BRERSRVNTIiwiVkFVTFRTIiwiZXhhbXBsZSIsImFkZHJlc3MiLCJ1bmRlcmx5aW5nVG9rZW4iLCJleGFtcGxlMiIsImV4YW1wbGUzIiwiQ09OVFJBQ1RTIiwibXVsdGljYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/contracts.ts\n"));

/***/ })

});