webpackHotUpdate_N_E("pages/blog/[slug]",{

/***/ "./components/hero/hero.js":
/*!*********************************!*\
  !*** ./components/hero/hero.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hero_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero.styles */ \"./components/hero/hero.styles.js\");\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/global */ \"./styles/global.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\nvar _jsxFileName = \"/Volumes/Ben Drive/From The Ground Up/website/frontend/components/hero/hero.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Hero = function Hero(_ref) {\n  var message = _ref.message,\n      href = _ref.href,\n      link = _ref.link,\n      arrow = _ref.arrow,\n      background = _ref.background,\n      height = _ref.height,\n      tags = _ref.tags,\n      postAuthor = _ref.postAuthor,\n      postTag = _ref.postTag,\n      createdAt = _ref.createdAt;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"HeroBackground\"], {\n    background: background,\n    height: height,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"MaxContainer\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"Message\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          children: message\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 6\n        }, _this), href && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: href,\n          passHref: true,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"SecondaryButton\"], {\n            children: link\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 7\n        }, _this), message === 'Blog' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"Tags\"], {\n          children: tags && tags.tags.map(function (tag) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                href: \"/blog/\".concat(encodeURIComponent(tag.slug)),\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  children: tag.slug\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 26,\n                  columnNumber: 13\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 25,\n                columnNumber: 12\n              }, _this)\n            }, tag.slug, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 11\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 7\n        }, _this), postAuthor && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_hero_styles__WEBPACK_IMPORTED_MODULE_1__[\"SingleArticle\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [\"By \", postAuthor]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: createdAt\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 8\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: postTag.map(function (tag) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                children: tag.name\n              }, tag.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 17\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 8\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 5\n      }, _this), arrow && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_global__WEBPACK_IMPORTED_MODULE_2__[\"Arrow\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__[\"IoIosArrowDown\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hero\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZXJvL2hlcm8uanM/NzNjYiJdLCJuYW1lcyI6WyJIZXJvIiwibWVzc2FnZSIsImhyZWYiLCJsaW5rIiwiYXJyb3ciLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwidGFncyIsInBvc3RBdXRob3IiLCJwb3N0VGFnIiwiY3JlYXRlZEF0IiwibWFwIiwidGFnIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2x1ZyIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQThGO0FBQUEsTUFBM0ZDLE9BQTJGLFFBQTNGQSxPQUEyRjtBQUFBLE1BQWxGQyxJQUFrRixRQUFsRkEsSUFBa0Y7QUFBQSxNQUE1RUMsSUFBNEUsUUFBNUVBLElBQTRFO0FBQUEsTUFBdEVDLEtBQXNFLFFBQXRFQSxLQUFzRTtBQUFBLE1BQS9EQyxVQUErRCxRQUEvREEsVUFBK0Q7QUFBQSxNQUFuREMsTUFBbUQsUUFBbkRBLE1BQW1EO0FBQUEsTUFBM0NDLElBQTJDLFFBQTNDQSxJQUEyQztBQUFBLE1BQXJDQyxVQUFxQyxRQUFyQ0EsVUFBcUM7QUFBQSxNQUF6QkMsT0FBeUIsUUFBekJBLE9BQXlCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUMxRyxzQkFDQyxxRUFBQywyREFBRDtBQUFrQixjQUFVLEVBQUVMLFVBQTlCO0FBQTBDLFVBQU0sRUFBRUMsTUFBbEQ7QUFBQSwyQkFDQyxxRUFBQywyREFBRDtBQUFBLDhCQUNDLHFFQUFDLG9EQUFEO0FBQUEsZ0NBRUM7QUFBQSxvQkFBS0w7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZELEVBR0VDLElBQUksaUJBQ0oscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUVBLElBQVo7QUFBa0Isa0JBQVEsTUFBMUI7QUFBQSxpQ0FDQyxxRUFBQyw4REFBRDtBQUFBLHNCQUFxQkM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkYsRUFTRUYsT0FBTyxLQUFLLE1BQVosaUJBQ0EscUVBQUMsaURBQUQ7QUFBQSxvQkFDRU0sSUFBSSxJQUNKQSxJQUFJLENBQUNBLElBQUwsQ0FBVUksR0FBVixDQUFjLFVBQUNDLEdBQUQsRUFBUztBQUN0QixnQ0FDQztBQUFBLHFDQUNDLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksa0JBQVdDLGtCQUFrQixDQUFDRCxHQUFHLENBQUNFLElBQUwsQ0FBN0IsQ0FBVjtBQUFBLHVDQUNDO0FBQUEsNEJBQUlGLEdBQUcsQ0FBQ0U7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELGVBQVNGLEdBQUcsQ0FBQ0UsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBT0EsV0FSRDtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkYsRUF3QkVOLFVBQVUsaUJBQ1YscUVBQUMsMERBQUQ7QUFBQSxrQ0FDQztBQUFBLDhCQUFTQSxVQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQUVDO0FBQUEsc0JBQU1FO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRCxlQUdDO0FBQUEsc0JBQ0VELE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLEdBQUQsRUFBUztBQUNyQixrQ0FBTztBQUFBLDBCQUFvQkEsR0FBRyxDQUFDRztBQUF4QixpQkFBV0gsR0FBRyxDQUFDSSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVA7QUFDQSxhQUZBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELEVBcUNFWixLQUFLLGlCQUNMLHFFQUFDLG9EQUFEO0FBQUEsK0JBQ0MscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBK0NBLENBaEREOztLQUFNSixJO0FBa0RTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVyby9oZXJvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUyBmcm9tICcuL2hlcm8uc3R5bGVzJztcbmltcG9ydCAqIGFzIEdTIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IElvSW9zQXJyb3dEb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuXG5jb25zdCBIZXJvID0gKHsgbWVzc2FnZSwgaHJlZiwgbGluaywgYXJyb3csIGJhY2tncm91bmQsIGhlaWdodCwgdGFncywgcG9zdEF1dGhvciwgcG9zdFRhZywgY3JlYXRlZEF0IH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5IZXJvQmFja2dyb3VuZCBiYWNrZ3JvdW5kPXtiYWNrZ3JvdW5kfSBoZWlnaHQ9e2hlaWdodH0+XG5cdFx0XHQ8R1MuTWF4Q29udGFpbmVyPlxuXHRcdFx0XHQ8Uy5NZXNzYWdlPlxuXHRcdFx0XHRcdHsvKiBJZiBoZXJvIGhhcyBDVEEgYnV0dG9uICovfVxuXHRcdFx0XHRcdDxoMT57bWVzc2FnZX08L2gxPlxuXHRcdFx0XHRcdHtocmVmICYmIChcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmPlxuXHRcdFx0XHRcdFx0XHQ8R1MuU2Vjb25kYXJ5QnV0dG9uPntsaW5rfTwvR1MuU2Vjb25kYXJ5QnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0ey8qIEdlbmVyYWwgQmxvZyAqL31cblx0XHRcdFx0XHR7bWVzc2FnZSA9PT0gJ0Jsb2cnICYmIChcblx0XHRcdFx0XHRcdDxTLlRhZ3M+XG5cdFx0XHRcdFx0XHRcdHt0YWdzICYmXG5cdFx0XHRcdFx0XHRcdFx0dGFncy50YWdzLm1hcCgodGFnKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXt0YWcuc2x1Z30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj17YC9ibG9nLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHRhZy5zbHVnKX1gfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPnt0YWcuc2x1Z308L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvUy5UYWdzPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0ey8qIEludGVybmFsIEFydGljbGUgUGFnZSAqL31cblx0XHRcdFx0XHR7cG9zdEF1dGhvciAmJiAoXG5cdFx0XHRcdFx0XHQ8Uy5TaW5nbGVBcnRpY2xlPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PkJ5IHtwb3N0QXV0aG9yfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PntjcmVhdGVkQXR9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0e3Bvc3RUYWcubWFwKCh0YWcpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e3RhZy5pZH0+e3RhZy5uYW1lfTwvc3Bhbj47XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9TLlNpbmdsZUFydGljbGU+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9TLk1lc3NhZ2U+XG5cdFx0XHRcdHthcnJvdyAmJiAoXG5cdFx0XHRcdFx0PEdTLkFycm93PlxuXHRcdFx0XHRcdFx0PElvSW9zQXJyb3dEb3duIC8+XG5cdFx0XHRcdFx0PC9HUy5BcnJvdz5cblx0XHRcdFx0KX1cblx0XHRcdDwvR1MuTWF4Q29udGFpbmVyPlxuXHRcdDwvUy5IZXJvQmFja2dyb3VuZD5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hero/hero.js\n");

/***/ })

})