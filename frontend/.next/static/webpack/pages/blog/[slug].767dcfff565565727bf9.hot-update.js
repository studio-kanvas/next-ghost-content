webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./pages/blog/[slug]/index.js":
/*!************************************!*\
  !*** ./pages/blog/[slug]/index.js ***!
  \************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slug; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _lib_ghost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/ghost */ \"./lib/ghost.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/hero */ \"./components/hero/index.js\");\n/* harmony import */ var _components_bloggy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/bloggy */ \"./components/bloggy/index.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/global */ \"./styles/global.js\");\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/pages/blog/[slug]/index.js\";\n\n\n\n\n\nvar __N_SSG = true;\nfunction Slug(_ref) {\n  var post = _ref.post;\n  console.log(post);\n\n  var timeConvert = function timeConvert(time) {\n    time = time.slice(0, 10);\n    return time;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      message: post.title,\n      background: \"url('/ftgu-academy-header.jpg')\",\n      postTag: post.tags,\n      postAuthor: post.authors[0].name,\n      createdAt: timeConvert(post.created_at)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_bloggy__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      post: post\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 3\n  }, this);\n}\n_c = Slug;\n\nvar _c;\n\n$RefreshReg$(_c, \"Slug\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bc2x1Z10vaW5kZXguanM/ODNjNyJdLCJuYW1lcyI6WyJTbHVnIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lQ29udmVydCIsInRpbWUiLCJzbGljZSIsInRpdGxlIiwidGFncyIsImF1dGhvcnMiLCJuYW1lIiwiY3JlYXRlZF9hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQXdCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3RDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFFQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDN0JBLFFBQUksR0FBR0EsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBWCxFQUFjLEVBQWQsQ0FBUDtBQUNBLFdBQU9ELElBQVA7QUFDQSxHQUhEOztBQUtBLHNCQUNDLHFFQUFDLGlFQUFEO0FBQUEsNEJBQ0MscUVBQUMsd0RBQUQ7QUFDQyxhQUFPLEVBQUVKLElBQUksQ0FBQ00sS0FEZjtBQUVDLGdCQUFVLG1DQUZYO0FBR0MsYUFBTyxFQUFFTixJQUFJLENBQUNPLElBSGY7QUFJQyxnQkFBVSxFQUFFUCxJQUFJLENBQUNRLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxJQUo3QjtBQUtDLGVBQVMsRUFBRU4sV0FBVyxDQUFDSCxJQUFJLENBQUNVLFVBQU47QUFMdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBUUMscUVBQUMsMERBQUQ7QUFBUSxVQUFJLEVBQUVWO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBWUE7S0FwQnVCRCxJIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9bc2x1Z10vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XG5pbXBvcnQgeyBnZXRBdXRob3IsIGdldFNpbmdsZVBvc3QgfSBmcm9tICcuLi8uLi8uLi9saWIvZ2hvc3QnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZXJvJztcbmltcG9ydCBCbG9nZ3kgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9ibG9nZ3knO1xuaW1wb3J0ICogYXMgR1MgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL2dsb2JhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsdWcoeyBwb3N0IH0pIHtcblx0Y29uc29sZS5sb2cocG9zdCk7XG5cblx0Y29uc3QgdGltZUNvbnZlcnQgPSAodGltZSkgPT4ge1xuXHRcdHRpbWUgPSB0aW1lLnNsaWNlKDAsIDEwKTtcblx0XHRyZXR1cm4gdGltZTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8SGVyb1xuXHRcdFx0XHRtZXNzYWdlPXtwb3N0LnRpdGxlfVxuXHRcdFx0XHRiYWNrZ3JvdW5kPXtgdXJsKCcvZnRndS1hY2FkZW15LWhlYWRlci5qcGcnKWB9XG5cdFx0XHRcdHBvc3RUYWc9e3Bvc3QudGFnc31cblx0XHRcdFx0cG9zdEF1dGhvcj17cG9zdC5hdXRob3JzWzBdLm5hbWV9XG5cdFx0XHRcdGNyZWF0ZWRBdD17dGltZUNvbnZlcnQocG9zdC5jcmVhdGVkX2F0KX1cblx0XHRcdC8+XG5cdFx0XHQ8QmxvZ2d5IHBvc3Q9e3Bvc3R9IC8+XG5cdFx0PC9MYXlvdXQ+XG5cdCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcblx0cmV0dXJuIHtcblx0XHRwYXRoczogW10sXG5cdFx0ZmFsbGJhY2s6ICdibG9ja2luZycsXG5cdH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG5cdGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRTaW5nbGVQb3N0KGNvbnRleHQucGFyYW1zLnNsdWcpO1xuXHRpZiAoIXBvc3QpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bm90Rm91bmQ6IHRydWUsXG5cdFx0fTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0cHJvcHM6IHsgcG9zdCB9LFxuXHR9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug]/index.js\n");

/***/ })

})