webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/bloggy/bloggy.js":
/*!*************************************!*\
  !*** ./components/bloggy/bloggy.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bloggy_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloggy.styles */ \"./components/bloggy/bloggy.styles.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/components/bloggy/bloggy.js\",\n    _this = undefined;\n\n\n\n\n\nvar Bloggy = function Bloggy(_ref) {\n  var posts = _ref.posts;\n  console.log(posts);\n\n  var timeConvert = function timeConvert(time) {\n    time = 'Hello';\n    return time;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"BlogContainer\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"Blog\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: post.feature_image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: post.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: post.excerpt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 8\n          }, _this)]\n        }, post.excerpt, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 7\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: posts.map(function (post) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_bloggy_styles__WEBPACK_IMPORTED_MODULE_1__[\"TopBlogs\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: post.feature_image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: post.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              className: \"tag\",\n              children: post.tags.map(function (tag) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                    href: tag.slug,\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                      children: tag.name\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 45,\n                      columnNumber: 14\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 44,\n                    columnNumber: 13\n                  }, _this)\n                }, tag.id, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 43,\n                  columnNumber: 12\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 9\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"updated\",\n              children: timeConvert(post.updated_at)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 9\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 8\n          }, _this)]\n        }, post.feature_image, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Bloggy;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bloggy);\n\nvar _c;\n\n$RefreshReg$(_c, \"Bloggy\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nZ3kvYmxvZ2d5LmpzPzhiNTgiXSwibmFtZXMiOlsiQmxvZ2d5IiwicG9zdHMiLCJjb25zb2xlIiwibG9nIiwidGltZUNvbnZlcnQiLCJ0aW1lIiwibWFwIiwicG9zdCIsImZlYXR1cmVfaW1hZ2UiLCJ0aXRsZSIsImV4Y2VycHQiLCJ0YWdzIiwidGFnIiwic2x1ZyIsIm5hbWUiLCJpZCIsInVwZGF0ZWRfYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFlO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFFQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDN0JBLFFBQUksR0FBRyxPQUFQO0FBQ0EsV0FBT0EsSUFBUDtBQUNBLEdBSEQ7O0FBS0Esc0JBQ0MscUVBQUMsNERBQUQ7QUFBQSw0QkFFQztBQUFBLGdCQUNFSixLQUFLLENBQUNLLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDcEIsNEJBQ0MscUVBQUMsbURBQUQ7QUFBQSxrQ0FDQztBQUFBLG1DQUNDO0FBQUssaUJBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBSUM7QUFBQSxzQkFBS0QsSUFBSSxDQUFDRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQsZUFLQztBQUFBLHNCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRDtBQUFBLFdBQWFILElBQUksQ0FBQ0csT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQVNBLE9BVkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQsZUFpQkM7QUFBQSxnQkFDRVQsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3BCLDRCQUNDLHFFQUFDLHVEQUFEO0FBQUEsa0NBQ0M7QUFBQSxtQ0FDQztBQUFLLGlCQUFHLEVBQUVBLElBQUksQ0FBQ0M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUlDO0FBQUEsb0NBQ0M7QUFBQSx3QkFBTUQsSUFBSSxDQUFDRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFJLHVCQUFTLEVBQUMsS0FBZDtBQUFBLHdCQUNFRixJQUFJLENBQUNJLElBQUwsQ0FBVUwsR0FBVixDQUFjLFVBQUNNLEdBQUQsRUFBUztBQUN2QixvQ0FDQztBQUFBLHlDQUNDLHFFQUFDLGdEQUFEO0FBQU0sd0JBQUksRUFBRUEsR0FBRyxDQUFDQyxJQUFoQjtBQUFBLDJDQUNDO0FBQUEsZ0NBQUlELEdBQUcsQ0FBQ0U7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELG1CQUFTRixHQUFHLENBQUNHLEVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERDtBQU9BLGVBUkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZELGVBYUM7QUFBSyx1QkFBUyxFQUFDLFNBQWY7QUFBQSx3QkFBMEJYLFdBQVcsQ0FBQ0csSUFBSSxDQUFDUyxVQUFOO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpEO0FBQUEsV0FBaUJULElBQUksQ0FBQ0MsYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQXNCQSxPQXZCQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE4Q0EsQ0F0REQ7O0tBQU1SLE07QUF3RFNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ibG9nZ3kvYmxvZ2d5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUyBmcm9tICcuL2Jsb2dneS5zdHlsZXMnO1xuaW1wb3J0ICogYXMgR1MgZnJvbSAnLi4vLi4vc3R5bGVzL2dsb2JhbCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBCbG9nZ3kgPSAoeyBwb3N0cyB9KSA9PiB7XG5cdGNvbnNvbGUubG9nKHBvc3RzKTtcblxuXHRjb25zdCB0aW1lQ29udmVydCA9ICh0aW1lKSA9PiB7XG5cdFx0dGltZSA9ICdIZWxsbyc7XG5cdFx0cmV0dXJuIHRpbWU7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8Uy5CbG9nQ29udGFpbmVyPlxuXHRcdFx0ey8qIExlZnQgU2lkZSAqL31cblx0XHRcdDxkaXY+XG5cdFx0XHRcdHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PFMuQmxvZyBrZXk9e3Bvc3QuZXhjZXJwdH0+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz17cG9zdC5mZWF0dXJlX2ltYWdlfSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+e3Bvc3QudGl0bGV9PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPntwb3N0LmV4Y2VycHR9PC9saT5cblx0XHRcdFx0XHRcdDwvUy5CbG9nPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdHsvKiBSaWdodCBTaWRlICovfVxuXHRcdFx0PGRpdj5cblx0XHRcdFx0e3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8Uy5Ub3BCbG9ncyBrZXk9e3Bvc3QuZmVhdHVyZV9pbWFnZX0+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e3Bvc3QuZmVhdHVyZV9pbWFnZX0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj57cG9zdC50aXRsZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwidGFnXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7cG9zdC50YWdzLm1hcCgodGFnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17dGFnLmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e3RhZy5zbHVnfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e3RhZy5uYW1lfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVwZGF0ZWRcIj57dGltZUNvbnZlcnQocG9zdC51cGRhdGVkX2F0KX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1MuVG9wQmxvZ3M+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1MuQmxvZ0NvbnRhaW5lcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dneTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/bloggy/bloggy.js\n");

/***/ })

})